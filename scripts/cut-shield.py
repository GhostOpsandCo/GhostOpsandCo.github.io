"""Cut ShieldBot out of a frame of the launch video, matching scripts/cut-bots.py.

  python cut-shield.py <frame.png> <public/bots dir> <components/bots.json>
"""
import json
import sys

import numpy as np
from PIL import Image
from scipy import ndimage as ni

SRC, OUT, EYES = sys.argv[1:4]
SCALE = 2
CANVAS = 480
BODY = 0.72


def main():
    im = Image.open(SRC).convert("RGB")
    im = im.resize((im.width * SCALE, im.height * SCALE), Image.LANCZOS)
    rgb = np.asarray(im).astype(float) / 255
    V = rgb.max(axis=2)

    # The rim is the only bright ring, so filling it gives the whole shield.
    labels, n = ni.label(V > 0.5)
    sizes = ni.sum_labels(np.ones_like(V), labels, range(1, n + 1))
    rim = labels == (np.argmax(sizes) + 1)
    shield = ni.binary_fill_holes(ni.binary_closing(rim, iterations=3))
    shield = ni.binary_opening(shield, iterations=4)

    # Eyes are the dark holes in the bright drop at the centre.
    cy, cx = np.array(shield.shape) // 2
    drops, _ = ni.label(ni.binary_erosion(shield, iterations=30) & (V > 0.45))
    i = drops[cy, cx] or np.bincount(drops[drops > 0]).argmax()
    drop = drops == i
    holes = ni.binary_fill_holes(drop) & ~drop
    eye_labels, count = ni.label(ni.binary_opening(holes, iterations=2))
    areas = ni.sum_labels(np.ones_like(V), eye_labels, range(1, count + 1))
    picks = sorted(np.argsort(areas)[-2:] + 1, key=lambda e: np.nonzero(eye_labels == e)[1].mean())

    ys, xs = np.nonzero(shield)
    side = int(max(np.ptp(xs), np.ptp(ys)) / BODY)
    mx, my = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2
    x0, y0 = int(mx - side / 2), int(my - side / 2)
    k = CANVAS / side

    eyes = []
    hole = np.zeros_like(shield)
    for e in picks:
        mask = eye_labels == e
        hole |= mask
        py, px = np.nonzero(mask)
        eyes.append({
            "x": round(float((px.mean() - x0) * k), 1),
            "y": round(float((py.mean() - y0) * k), 1),
            "w": round(float((np.ptp(px) + 1) * k), 1),
            "h": round(float((np.ptp(py) + 1) * k), 1),
            "r": 0,
        })

    # Paint the eyes out from the drop around them.
    fill = ni.binary_dilation(hole, iterations=5)
    _, (iy, ix) = ni.distance_transform_edt(fill, return_indices=True)
    art = rgb.copy()
    art[fill] = art[iy[fill], ix[fill]]
    kernel = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]]) / 4
    for _ in range(800):
        for c in range(3):
            art[..., c][fill] = ni.convolve(art[..., c], kernel, mode="nearest")[fill]

    soft = ni.gaussian_filter(shield.astype(float), 1.4)
    soft = np.clip((soft - 0.35) / 0.4, 0, 1)
    halo = ni.gaussian_filter(shield.astype(float), 26) * 0.5 * (1 - soft)
    tint = np.array([0.22, 0.92, 0.52])
    premult = art * soft[..., None] + tint * halo[..., None]
    alpha = np.maximum(soft, halo)

    canvas = np.zeros((side, side, 4))
    rgba = np.dstack([premult, alpha])
    sx0, sy0 = max(x0, 0), max(y0, 0)
    sx1, sy1 = min(x0 + side, rgba.shape[1]), min(y0 + side, rgba.shape[0])
    canvas[sy0 - y0 : sy1 - y0, sx0 - x0 : sx1 - x0] = rgba[sy0:sy1, sx0:sx1]
    small = np.dstack([
        np.asarray(Image.fromarray(canvas[..., c].astype("float32"), mode="F").resize((CANVAS, CANVAS), Image.LANCZOS))
        for c in range(4)
    ])
    small = np.clip(small, 0, 1)
    a = small[..., 3:]
    final = np.dstack([np.clip(small[..., :3] / np.maximum(a, 1e-4), 0, 1), a])
    Image.fromarray((final * 255).round().astype("uint8"), "RGBA").save(f"{OUT}/shield.webp", quality=90, alpha_quality=92, method=6)

    geometry = json.load(open(EYES))
    geometry["shield"] = eyes
    json.dump(geometry, open(EYES, "w"), indent=2)
    print("side", side, eyes)


main()
