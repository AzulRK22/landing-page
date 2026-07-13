#!/usr/bin/env python3
"""Convert site PNG/JPEG assets to high-quality WebP without deleting originals.

Defaults preserve the historical `images/` workflow. Pass `--closecut-screenshots`
to produce consistently named full and mobile CloseCut screenshot variants.
"""

from argparse import ArgumentParser
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
QUALITY = 80
MAX_DIM = 1920
MOBILE_WIDTH = 600

CLOSECUT_NAMES = {
    "1-Journal.png": "personal-journal",
    "2-EntryDetail.png": "entry-detail",
    "3-QuickAdd.png": "quick-add",
    "4-Timeline.png": "timeline",
    "5-QuickPick.png": "quickpick",
    "6-WantToWatch.png": "want-to-watch",
    "7-Circles:Watch Plan.png": "circles-watch-plan",
    "8-Settings.png": "privacy-settings",
}


def resized(image, max_dimension=None, width=None):
    current_width, current_height = image.size
    if width and current_width > width:
        ratio = width / current_width
    elif max_dimension and max(current_width, current_height) > max_dimension:
        ratio = max_dimension / max(current_width, current_height)
    else:
        return image.copy()
    size = (round(current_width * ratio), round(current_height * ratio))
    return image.resize(size, Image.Resampling.LANCZOS)


def save_webp(image, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, "WEBP", quality=QUALITY, method=6)


def convert_closecut():
    asset_dir = ROOT / "closecut" / "assets"
    output_dir = asset_dir / "screenshots"
    converted = []

    for original_name, output_name in CLOSECUT_NAMES.items():
        source = asset_dir / original_name
        if not source.exists():
            print(f"Missing: {source.relative_to(ROOT)}")
            continue

        with Image.open(source) as image:
            image.load()
            full = resized(image, max_dimension=MAX_DIM)
            mobile = resized(image, width=MOBILE_WIDTH)
            full_path = output_dir / f"{output_name}.webp"
            mobile_path = output_dir / f"{output_name}-mobile.webp"
            save_webp(full, full_path)
            save_webp(mobile, mobile_path)

        before = source.stat().st_size
        full_size = full_path.stat().st_size
        mobile_size = mobile_path.stat().st_size
        converted.append((source, full_path, mobile_path, before, full_size, mobile_size, full.size, mobile.size))

    total_before = sum(item[3] for item in converted)
    total_full = sum(item[4] for item in converted)
    print(f"Converted: {len(converted)} CloseCut screenshots")
    print(f"Original total: {total_before / 1024 / 1024:.2f} MB")
    print(f"Full WebP total: {total_full / 1024 / 1024:.2f} MB")
    if total_before:
        print(f"Full-size reduction: {(1 - total_full / total_before) * 100:.1f}%")
    for source, full_path, mobile_path, before, full_size, mobile_size, full_dims, mobile_dims in converted:
        print(
            f"{source.name}: {before / 1024:.0f} KB -> "
            f"{full_path.name} {full_size / 1024:.0f} KB {full_dims[0]}x{full_dims[1]}, "
            f"{mobile_path.name} {mobile_size / 1024:.0f} KB {mobile_dims[0]}x{mobile_dims[1]}"
        )


def convert_images():
    image_dir = ROOT / "images"
    converted = 0
    for source in image_dir.rglob("*"):
        if source.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        with Image.open(source) as image:
            output = resized(image, max_dimension=MAX_DIM)
            save_webp(output, source.with_suffix(".webp"))
        converted += 1
    print(f"Converted: {converted} images")


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("--closecut-screenshots", action="store_true")
    args = parser.parse_args()
    convert_closecut() if args.closecut_screenshots else convert_images()
