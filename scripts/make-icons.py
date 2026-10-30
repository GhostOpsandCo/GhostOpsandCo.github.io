"""Build the favicon set from the cloud sprite.

White disappears on a light tab strip, so the cloud sits on the banner's black.

  python make_icons.py <dir with cloud.webp and eyes.json> <output dir>
"""
import json
import sys

from PIL import Image, ImageDraw

SRC, OUT = sys.argv[1], sys.argv[2]
INK = (10, 6, 8, 255)
BODY = 0.72  # share of the sprite canvas the body fills
S = 8  # supersample
sprite = Image.open(f"{SRC}/cloud.webp").convert("RGBA")
eyes = json.load(open(f"{SRC}/eyes.json"))["cloud"]


def cloud(size, fill, blink=1.0):
    """The cloud with its body filling `fill` of a size x size square, eyes on top."""
    side = round(size * S * fill / BODY)
    body = sprite.resize((side, side), Image.LANCZOS)
    k = side / sprite.width
    grow = 1.3 if size <= 48 else 1.1 if size <= 64 else 1  # small icons need bolder eyes
    for e in eyes:
        w, h = e["w"] * k * grow, max(e["h"] * k * grow * blink, e["w"] * k * 0.5)
        tile = Image.new("RGBA", (int(side / 3), int(side / 3)), (0, 0, 0, 0))
        cx, cy = tile.width / 2, tile.height / 2
        ImageDraw.Draw(tile).rounded_rectangle([cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2], radius=w / 2, fill=INK)
        tile = tile.rotate(-e["r"], resample=Image.BICUBIC)
        body.alpha_composite(tile, (int(e["x"] * k - cx), int(e["y"] * k - cy)))
    canvas = Image.new("RGBA", (size * S, size * S), (0, 0, 0, 0))
    off = (size * S - side) // 2
    canvas.alpha_composite(body.crop((max(-off, 0), max(-off, 0), side - max(-off, 0), side - max(-off, 0))), (max(off, 0), max(off, 0)))
    return canvas


def tile(size, fill, radius=0.0, blink=1.0):
    """Black square, optionally rounded, with the cloud on it."""
    bg = Image.new("RGBA", (size * S, size * S), (0, 0, 0, 255))
    bg.alpha_composite(cloud(size, fill, blink))
    if radius:
        mask = Image.new("L", bg.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, bg.width - 1, bg.height - 1], radius=int(radius * bg.width), fill=255)
        bg.putalpha(mask)
    return bg.resize((size, size), Image.LANCZOS)


tile(32, 0.9, 0.2).save(f"{OUT}/icon-32.png", optimize=True)
tile(180, 0.74).convert("RGB").save(f"{OUT}/apple-touch-icon.png", optimize=True)
tile(512, 0.68).convert("RGB").save(f"{OUT}/icon-512.png", optimize=True)
sizes = [16, 32, 48, 64]
frames = [tile(n, 0.92 if n <= 16 else 0.9, 0.2) for n in sizes]
frames[-1].save(f"{OUT}/favicon.ico", format="ICO", append_images=frames[:-1], sizes=[(n, n) for n in sizes])

# Firefox animates a GIF favicon, so keep the blink. Chrome and Safari use the first frame.
gif = []
for blink in (1.0, 0.55, 0.14, 0.55):
    rgba = tile(64, 0.9, 0.2, blink)
    p = rgba.convert("RGB").quantize(colors=255, method=Image.MEDIANCUT, dither=Image.NONE)
    alpha = rgba.getchannel("A").point(lambda a: 255 if a < 128 else 0)
    p.paste(255, mask=alpha)
    gif.append(p)
gif[0].save(f"{OUT}/favicon.gif", save_all=True, append_images=gif[1:], duration=[2600, 70, 70, 70], loop=0, transparency=255, disposal=2, optimize=False)

# Preview at real sizes (and 6x) on a light and a dark tab colour.
sheet = Image.new("RGB", (640, 300), (222, 225, 230))
ImageDraw.Draw(sheet).rectangle([0, 150, 640, 300], fill=(32, 33, 36))
for y in (0, 150):
    x = 12
    for n in (16, 32):
        im = Image.open(f"{OUT}/icon-32.png").convert("RGBA").resize((n, n), Image.LANCZOS) if n == 32 else frames[0]
        sheet.paste(im.convert("RGB"), (x, y + 12), im)
        x += n + 12
        big = im.resize((n * 6, n * 6), Image.NEAREST)
        sheet.paste(big.convert("RGB"), (x, y + 12), big)
        x += n * 6 + 16
    a = Image.open(f"{OUT}/icon-512.png").resize((128, 128), Image.LANCZOS)
    sheet.paste(a, (x, y + 11))
    x += 140
    g = Image.open(f"{OUT}/favicon.gif").convert("RGBA")
    sheet.paste(g.convert("RGB"), (x, y + 12), g)
sheet.save(f"{OUT}/icons-sheet.png")
