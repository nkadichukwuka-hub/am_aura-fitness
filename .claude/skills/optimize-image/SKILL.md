---
name: optimize-image
description: Downloads an image from a URL (e.g. a Pexels or Unsplash stock photo link), resizes it for web use, and converts it to WebP, saving the result into public/images/ so the site can serve it locally instead of hot-linking to the external host. Use whenever the user asks to grab/download/save a stock photo, optimize an image for the website, or convert an image to WebP.
---

# Optimize Image

Downloads one or more images, resizes them to a sane web max-width, converts them
to WebP, and saves them under `public/images/` in this project — so the site never
has to make a live request to an external image host (Pexels, Unsplash, etc.) at
runtime.

## Setup (once per environment)

Check whether the dependencies are already installed:

```
pip show Pillow requests
```

If either is missing, install them from this skill's pinned requirements:

```
pip install -r "<skill-dir>/requirements.txt"
```

(`<skill-dir>` is the directory this SKILL.md lives in.)

## Usage

Run the script for one image:

```
python "<skill-dir>/scripts/optimize_image.py" "<image-url>"
```

Options:
- `--name NAME` — output filename without extension (only valid with a single URL). If omitted, a filename is derived by slugifying the last path segment of the URL.
- `--max-width N` — maximum output width in pixels, default `1600`. The image is never upscaled if it's already smaller.
- `--quality N` — WebP quality 1-100, default `80`.

Multiple URLs can be passed in one call to batch-process several images at once:

```
python "<skill-dir>/scripts/optimize_image.py" "<url-1>" "<url-2>" "<url-3>"
```

The script prints one line per image on success, e.g.:

```
OK  public/images/gym-workout.webp  2400x1600 -> 1600x1067  142.3 KB
```

or on failure (download error, unreadable image data):

```
FAIL <url>: <reason>
```

Non-zero exit status means at least one image failed — surface the failure to the
user rather than silently ignoring it.

## After running

Tell the user the local path(s) the image(s) were saved to under `public/images/`,
and use that local path (e.g. `/images/gym-workout.webp`) in the site's HTML/CSS
instead of the original external URL.

Note: Pexels/Unsplash images are free to use, but any attribution requirements are
the user's responsibility to satisfy — this skill only handles the technical
download/resize/convert step.
