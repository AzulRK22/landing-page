#!/usr/bin/env python3
"""Convert PNG/JPEG assets in the shared images directory to WebP."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
QUALITY = 80
MAX_DIM = 1920


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
    convert_images()
