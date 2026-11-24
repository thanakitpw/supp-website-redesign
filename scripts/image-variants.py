"""Pre-sized image variants for next/image (custom loader) + social share cards.

The site serves images without an optimizer (Cloudflare Workers, no Vercel
image quota), so every <Image> used to ship the full 1600–2900 px original.
This script writes smaller copies that `lib/image-loader.ts` points srcset at:

  public/images/<name>.webp      original (unchanged)
  public/images/_v/<name>-<w>.webp  variant for each width below the original
  lib/image-manifest.json        { "/images/<name>.webp": originalWidth }

It also renders 1200x630 Open Graph cards into public/images/og/.

Run after adding or replacing an image:  python3 -I scripts/image-variants.py
Requires Pillow with WebP support.
"""

import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"
VARIANTS = IMAGES / "_v"
MANIFEST = ROOT / "lib" / "image-manifest.json"

# Must equal images.deviceSizes + images.imageSizes in next.config.ts.
WIDTHS = [160, 256, 320, 384, 640, 828, 1200, 1600, 2048]

# Social cards: source image, and how far down (0 = top, 1 = bottom) to centre
# the 1200x630 crop, chosen per photo so faces stay in frame.
OG_CARDS = {
    "home": ("life.webp", 0.3),
    "about": ("family-beach.webp", 0.4),
    "services": ("planning.webp", 0.62),
    "join": ("join-cover.webp", 0.4),
}


def sources():
    for path in sorted(IMAGES.rglob("*")):
        if VARIANTS in path.parents or (IMAGES / "og") in path.parents:
            continue
        if path.suffix in {".webp", ".png"} and not path.name.startswith("icon"):
            yield path


def save(img, out, fmt):
    out.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "WEBP":
        img.save(out, "WEBP", quality=78, method=6)
    else:
        img.save(out, "PNG", optimize=True)


def variants():
    manifest = {}
    for path in sources():
        rel = path.relative_to(IMAGES)
        with Image.open(path) as img:
            width, height = img.size
            fmt = "WEBP" if path.suffix == ".webp" else "PNG"
            manifest[f"/images/{rel.as_posix()}"] = width
            for w in WIDTHS:
                if w >= width:
                    continue
                out = VARIANTS / rel.parent / f"{path.stem}-{w}{path.suffix}"
                h = round(height * w / width)
                save(img.resize((w, h), Image.LANCZOS), out, fmt)
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    return manifest


def og_cards():
    out_dir = IMAGES / "og"
    out_dir.mkdir(exist_ok=True)
    for name, (src, focus) in OG_CARDS.items():
        with Image.open(IMAGES / src) as img:
            img = img.convert("RGB")
            scale = max(1200 / img.width, 630 / img.height)
            img = img.resize(
                (round(img.width * scale), round(img.height * scale)),
                Image.LANCZOS,
            )
            left = (img.width - 1200) // 2
            top = round((img.height - 630) * focus)
            card = img.crop((left, top, left + 1200, top + 630))
            card.save(out_dir / f"{name}.jpg", "JPEG", quality=82, optimize=True)


if __name__ == "__main__":
    manifest = variants()
    og_cards()
    print(f"{len(manifest)} source images, variants in {VARIANTS.relative_to(ROOT)}")
