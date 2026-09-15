#!/usr/bin/env python3
import argparse
import re
import sys
from io import BytesIO
from pathlib import Path
from urllib.parse import urlparse

import requests
from PIL import Image

# am_aura-fitness/.claude/skills/optimize-image/scripts/optimize_image.py -> project root is 5 parents up
PROJECT_ROOT = Path(__file__).resolve().parents[4]
OUTPUT_DIR = PROJECT_ROOT / "public" / "images"


def slugify(text: str) -> str:
    text = re.sub(r"\.[a-zA-Z0-9]+$", "", text)
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "image"


def derive_name(url: str) -> str:
    path = urlparse(url).path
    last_segment = path.rstrip("/").rsplit("/", 1)[-1]
    return slugify(last_segment)


def unique_path(directory: Path, stem: str, suffix: str) -> Path:
    candidate = directory / f"{stem}{suffix}"
    counter = 2
    while candidate.exists():
        candidate = directory / f"{stem}-{counter}{suffix}"
        counter += 1
    return candidate


def optimize_one(url: str, name: str | None, max_width: int, quality: int) -> None:
    response = requests.get(url, timeout=30, stream=True)
    response.raise_for_status()

    data = BytesIO(response.content)
    try:
        image = Image.open(data)
        image.load()
    except Exception as exc:
        raise RuntimeError(f"could not read image data from {url}: {exc}") from exc

    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

    original_size = image.size
    if image.width > max_width:
        new_height = round(image.height * (max_width / image.width))
        image = image.resize((max_width, new_height), Image.LANCZOS)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    stem = slugify(name) if name else derive_name(url)
    out_path = unique_path(OUTPUT_DIR, stem, ".webp")

    image.save(out_path, "WEBP", quality=quality)

    rel_path = out_path.relative_to(PROJECT_ROOT)
    file_size_kb = out_path.stat().st_size / 1024
    print(
        f"OK  {rel_path}  "
        f"{original_size[0]}x{original_size[1]} -> {image.width}x{image.height}  "
        f"{file_size_kb:.1f} KB"
    )


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Download, resize, and convert web images to optimized local WebP files."
    )
    parser.add_argument("urls", nargs="+", help="One or more image URLs to download")
    parser.add_argument(
        "--name",
        help="Output filename (without extension). Only valid with a single URL.",
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=1600,
        help="Maximum output width in pixels (default: 1600). Images are never upscaled.",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=80,
        help="WebP quality, 1-100 (default: 80).",
    )
    args = parser.parse_args()

    if args.name and len(args.urls) > 1:
        parser.error("--name can only be used with a single URL")

    exit_code = 0
    for url in args.urls:
        try:
            optimize_one(url, args.name, args.max_width, args.quality)
        except Exception as exc:
            print(f"FAIL {url}: {exc}", file=sys.stderr)
            exit_code = 1

    return exit_code


if __name__ == "__main__":
    sys.exit(main())
