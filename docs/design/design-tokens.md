# Am'aura's Fitness — Design Tokens

Implementation-ready tokens for **Tailwind CSS v4**, matching the CSS-first `@theme` config style already used in this project's `app/globals.css` (there is no `tailwind.config.js` — v4 themes directly in CSS).

**This block is live in `app/globals.css`.** Implementation caught up to this doc in the same pass, so what follows is the actual file content, not a proposal — it maps 1:1 to the palette, type scale, spacing, and radius values defined in `style-guide.md`.

---

## Full token block

```css
@import "tailwindcss";

:root {
  /* Brand palette — see style-guide.md §2 for role descriptions */
  --track-black: #0a0a08;
  --ink: #050504;
  --volt: #d7ff3f;
  --volt-deep: #b8de2e;
  --chalk: #f5f4ec;
  --graphite: #1c1e17;
  --smoke: #8b8d82;
  --glass-fill: rgba(245, 244, 236, 0.06);
  --hairline: rgba(245, 244, 236, 0.14);
  --warning: #ffb020;
  --error: #ff5a44;

  /* Semantic aliases — components reference these, not the raw palette */
  --background: var(--track-black);
  --foreground: var(--chalk);
  --surface: var(--graphite);
  --surface-deep: var(--ink);
  --accent: var(--volt);
  --accent-hover: var(--volt-deep);
  --muted: var(--smoke);
  --border: var(--hairline);
  --success: var(--volt);
}

@theme inline {
  /* Fonts — Anton is added via next/font/google in app/layout.tsx
     alongside the existing Geist imports; see note below. */
  --font-display: var(--font-anton);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-deep: var(--surface-deep);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-glass-fill: var(--glass-fill);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-error: var(--error);

  /* Stepped radius scale — radius-hero is used once, on the Hero only.
     radius-full is Tailwind's built-in 999px, not redefined here. */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 28px;
  --radius-hero: 40px;

  /* The system's one shadow: a Volt hover glow, never a grey drop-shadow */
  --shadow-glow: 0 0 24px rgba(215, 255, 63, 0.25);
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
}

/* Display type (Anton, uppercase) is reserved for the hero headline,
   section headings, and anything explicitly marked .font-display —
   NOT every heading level. Heading M (h3: trainer/class names, card
   titles) stays Geist Sans, sentence case, per style-guide.md §3. */
h1,
h2,
.font-display {
  font-family: var(--font-display);
  text-transform: uppercase;
}
```

**Spacing:** the 4/8/12/16/24/32/48/64/96/128 scale from `style-guide.md` §4 is implemented using Tailwind's *default* spacing utilities (`p-1`…`p-32`, `gap-1`…`gap-32`, etc.) rather than custom tokens — Tailwind v4's built-in scale already lands on exactly these pixel values at those utility numbers, so no `--spacing-*` overrides were needed.

**Border widths:** the hairline (1px) default uses Tailwind's standard `border`; the hero's bold 3px frame uses the arbitrary value `border-[3px]` directly where it's needed, rather than a named token.

---

## Token group reference

| Group | Purpose |
|---|---|
| `--track-black` / `--ink` / `--volt` / `--volt-deep` / `--chalk` / `--graphite` / `--smoke` (raw) | The six named brand colors — the single source of truth for every color in the system. |
| `--background` / `--foreground` / `--surface` / `--surface-deep` / `--accent` / `--accent-hover` / `--muted` / `--border` | Semantic aliases components actually reference (e.g. a Card uses `bg-surface`, not `bg-graphite`) — lets the raw palette shift later without touching component code. |
| `--radius-*` | Stepped radius scale — note `--radius-hero` is intentionally separate and used in exactly one place (the hero frame), not a general card radius. |
| `--shadow-glow` | The system's only shadow — a Volt-tinted glow on button/card hover, used via the `shadow-glow` utility. No generic grey drop-shadow token exists by design. |
| `--font-display` / `--font-sans` / `--font-mono` | Anton (headings), Geist Sans (UI/body, already loaded), Geist Mono (reserved, unused in v1). |

---

## Implementation notes

1. **Anton** is loaded in `app/layout.tsx` via `next/font/google` alongside the existing Geist Sans/Mono imports, with `variable: "--font-anton"`, and included in the `<html>` className.
2. **Light/dark mode:** the original boilerplate's `--background`/`--foreground` pair driven by `prefers-color-scheme` was removed — this design system is dark-first/dark-only by brand, not a light/dark toggle.
3. **Reduced motion:** a global `@media (prefers-reduced-motion: reduce)` block in `app/globals.css` shortens all animations/transitions to near-zero, and the hero's one-time stage-in animation (`@keyframes fade-up`) is defined alongside it.
