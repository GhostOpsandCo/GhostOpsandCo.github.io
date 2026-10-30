"""Cut the Hot Bot cast out of the banner art.

Each character becomes a transparent WebP with its eyes painted out, plus eye
geometry for lib/bots.ts, so the real art can still blink and watch the cursor.

  python cut_bots.py <banner.png> <output dir>
"""
import json
import sys

import numpy as np
from PIL import Image
from scipy import ndimage as ni

SRC, OUT = sys.argv[1], sys.argv[2]
SCALE = 2  # work above source size so the cut edges stay smooth
CANVAS = 480  # every sprite ships square at this size
BODY = 0.72  # share of the canvas the body fills; the rest is glow

# Rough centres in the 1500x500 banner, used to name the blobs.
SEEDS = {
    "purple": (1089, 117),
    "flame": (942, 252),
    "cloud": (1284, 207),
    "red": (700, 217),
    "blue": (1186, 342),
    "green": (716, 362),
}
GLOW = {"flame": 52}  # glow reach in source px
DEFAULT_GLOW = 26


def smooth(edge0, edge1, x):
    t = np.clip((x - edge0) / (edge1 - edge0), 0, 1)
    return t * t * (3 - 2 * t)


def find_bodies(V):
    labels, _ = ni.label(ni.binary_fill_holes(V > 0.43))
    bodies = {}
    for name, (x, y) in SEEDS.items():
        i = labels[y * SCALE, x * SCALE]
        if not i:
            raise SystemExit(f"no blob under seed for {name}")
        bodies[name] = labels == i
    # The flame's loose ember sits apart from the body.
    ey, ex = 129 * SCALE, 849 * SCALE
    box = labels[ey - 40 : ey + 40, ex - 30 : ex + 30]
    for i in np.unique(box[box > 0]):
        if not any(m[labels == i].any() for m in bodies.values()):
            bodies["flame"] |= labels == i
    return bodies


def find_eyes(V, body):
    labels, n = ni.label(body & (V < 0.3))
    areas = ni.sum_labels(np.ones_like(V), labels, range(1, n + 1))
    picks = np.argsort(areas)[-2:] + 1
    eyes = []
    for i in picks:
        ys, xs = np.nonzero(labels == i)
        c = np.array([xs.mean(), ys.mean()])
        vals, vecs = np.linalg.eigh(np.cov(np.stack([xs, ys])))
        major = vecs[:, 1] * (1 if vecs[1, 1] > 0 else -1)
        minor = vecs[:, 0]
        pts = np.stack([xs, ys], 1) - c
        length = np.ptp(pts @ major) + 1
        width = np.ptp(pts @ minor) + 1
        angle = np.degrees(np.arctan2(major[0], major[1]))  # tilt from vertical
        eyes.append({"c": c, "l": length, "w": width, "a": -angle, "mask": labels == i})
    return sorted(eyes, key=lambda e: e["c"][0])


def paint_out(rgb, hole):
    """Fill the hole from its surroundings with a smooth (Laplace) fill."""
    y, x = np.nonzero(hole)
    pad = 12
    y0, y1, x0, x1 = y.min() - pad, y.max() + pad, x.min() - pad, x.max() + pad
    crop, h = rgb[y0:y1, x0:x1].copy(), hole[y0:y1, x0:x1]
    _, (iy, ix) = ni.distance_transform_edt(h, return_indices=True)
    crop[h] = crop[iy[h], ix[h]]
    kernel = np.array([[0, 1, 0], [1, 0, 1], [0, 1, 0]]) / 4
    for _ in range(1500):
        for c in range(3):
            crop[..., c][h] = ni.convolve(crop[..., c], kernel, mode="nearest")[h]
    out = rgb.copy()
    out[y0:y1, x0:x1] = crop
    return out


def halo_profile(rgb, dist, reach):
    """Typical glow colour by distance, measured low enough to ignore a neighbour's light."""
    bins = np.clip(dist.astype(int), 0, reach)
    profile = np.array([np.percentile(rgb[bins == d], 35, axis=0) for d in range(reach + 1)])
    profile[0] = profile[1]
    return ni.gaussian_filter1d(profile, 3 * SCALE, axis=0, mode="nearest")


def main():
    src = Image.open(SRC).convert("RGB")
    src = src.resize((src.width * SCALE, src.height * SCALE), Image.LANCZOS)
    rgb = np.asarray(src).astype(float) / 255
    V = rgb.max(axis=2)
    bodies = find_bodies(V)
    dists = {n: ni.distance_transform_edt(~m) for n, m in bodies.items()}
    geometry = {}

    for name, body in bodies.items():
        filled = body.copy()
        eyes = find_eyes(V, filled)
        hole = np.zeros_like(filled)
        for e in eyes:
            hole |= e["mask"]
        art = paint_out(rgb, ni.binary_dilation(hole, iterations=5))

        reach = GLOW.get(name, DEFAULT_GLOW) * SCALE
        d = dists[name]
        # Keep the art's own light hugging the body, then fade a clean halo built
        # from this character's colours so neighbours' glow doesn't come along.
        profile = halo_profile(rgb, d, reach)
        halo = profile[np.clip(d.astype(int), 0, reach)] * (1 - smooth(reach * 0.25, reach, d))[..., None]
        others = np.min([dists[o] for o in bodies if o != name], axis=0)
        near = ((1 - smooth(2 * SCALE, 10 * SCALE, d)) * smooth(0, 24 * SCALE, others - d))[..., None]
        glow = art * near + halo * (1 - near)

        soft = ni.gaussian_filter(filled.astype(float), 0.8 * SCALE)
        soft = smooth(0.35, 0.75, soft)
        premult = art * soft[..., None] + glow * (1 - soft[..., None])
        alpha = np.maximum(soft, premult.max(axis=2))

        ys, xs = np.nonzero(filled)
        cx, cy = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2
        side = int(max(np.ptp(xs), np.ptp(ys)) / BODY)
        x0, y0 = int(cx - side / 2), int(cy - side / 2)
        rgba = np.dstack([premult, alpha])
        canvas = np.zeros((side, side, 4))
        sx0, sy0 = max(x0, 0), max(y0, 0)
        sx1, sy1 = min(x0 + side, rgba.shape[1]), min(y0 + side, rgba.shape[0])
        canvas[sy0 - y0 : sy1 - y0, sx0 - x0 : sx1 - x0] = rgba[sy0:sy1, sx0:sx1]

        channels = [
            Image.fromarray(canvas[..., c].astype("float32"), mode="F").resize((CANVAS, CANVAS), Image.LANCZOS)
            for c in range(4)
        ]
        small = np.clip(np.dstack([np.asarray(c) for c in channels]), 0, 1)
        a = small[..., 3:]
        final = np.dstack([np.clip(small[..., :3] / np.maximum(a, 1e-4), 0, 1), a])
        final[a[..., 0] < 0.004] = 0
        Image.fromarray((final * 255).round().astype("uint8"), "RGBA").save(
            f"{OUT}/{name}.webp", quality=90, alpha_quality=92, method=6
        )

        k = CANVAS / side
        geometry[name] = [
            {
                "x": round(float((e["c"][0] - x0) * k), 1),
                "y": round(float((e["c"][1] - y0) * k), 1),
                "w": round(float(e["w"] * k), 1),
                "h": round(float(e["l"] * k), 1),
                "r": round(float(e["a"]), 1),
            }
            for e in eyes
        ]
        print(name, "side", side, geometry[name])

    json.dump(geometry, open(f"{OUT}/eyes.json", "w"), indent=2)


main()
