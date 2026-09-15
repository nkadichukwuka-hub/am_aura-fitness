# Am'aura's Fitness — Style Guide

This is the visual and verbal identity for Am'aura's Fitness. It's built from the two reference images in `docs/design/reference/` (`2.png`, `3.png`) — a dark, high-energy fitness-app aesthetic — refined into a system specific to this brand. Every choice below is either sourced directly from that reference or deliberately made to avoid generic "AI-generated web design" defaults; the reasoning for both is in [Self-critique](#self-critique) at the end.

Tech context this guide assumes: Next.js 16 (App Router), React 19, TypeScript, **Tailwind CSS v4** (CSS-first `@theme` config, no `tailwind.config.js`). The token values here are implemented as copy-paste-ready CSS in `design-tokens.md`.

---

## 1. Brand identity

**Name:** Am'aura's Fitness. Keep the possessive apostrophe — it's the one punctuation mark in the wordmark and becomes the brand's signature device (below).

**Wordmark:** Two-tier lockup, left-aligned, matching the scale relationship seen in the reference logotypes:
- Primary line: `AM'AURA'S` set in Anton, all caps, tight tracking.
- Secondary line: `FITNESS` set in Geist Sans Medium, smaller, letter-spaced, directly beneath or inline after a vertical divider.

**Signature device — the Volt apostrophe:** In both wordmark occurrences, the apostrophe glyph is rendered in Volt (`#D7FF3F`) against the otherwise white/black wordmark. This is the brand's own mark — not copied from either reference (`.TITAN` uses a leading dot; `MAXTORQUE` uses a monogram "M") — and it doubles as a small recurring accent shape usable in loading states, list bullets, and the footer credit mark.

**Voice:** Direct, encouraging, plain-spoken. Short sentences. Active voice. Coach, not salesperson — "Book your first class" rather than "Unlock your fitness journey." No exclamation-point-per-sentence hype.

---

## 2. Color

Six named colors plus two translucent utility values and three semantic colors. Warm-black and warm-white, not blue-black/clinical-white — this keeps the palette feeling athletic rather than "tech SaaS."

| Name | Hex | Role |
|---|---|---|
| Track Black | `#0A0A08` | Primary page background |
| Ink | `#050504` | Deepest black — hero card interior, footer |
| Volt | `#D7FF3F` | The single accent color — CTAs, highlighted headline word, active states, the wordmark apostrophe |
| Volt Deep | `#B8DE2E` | Volt's hover/pressed state (darker, not lighter — keeps contrast on black) |
| Chalk | `#F5F4EC` | Warm off-white — text on dark surfaces, light card fills |
| Graphite | `#1C1E17` | Layered surface — nav bar fill, solid dark cards, input backgrounds |
| Smoke | `#8B8D82` | Muted secondary text on dark surfaces (captions, metadata, placeholder text) |

**Translucent utilities:**
| Name | Value | Role |
|---|---|---|
| Glass fill | `rgba(245, 244, 236, 0.06)` | Glass-card background (over photography or Graphite) |
| Hairline border | `rgba(245, 244, 236, 0.14)` | Default border on dark surfaces (cards, inputs, dividers) |

**Semantic:**
| Name | Hex | Role |
|---|---|---|
| Success | `#D7FF3F` (= Volt) | Form success, confirmation states |
| Warning | `#FFB020` | Form warnings, low-availability notices (e.g. class nearly full) |
| Error | `#FF5A44` | Form validation errors |

**Usage rules:**
- Volt is rationed. One primary action per view gets the solid-Volt treatment; everything else uses outline, ghost, or Graphite.
- Never place Volt text on Chalk or white — it fails contrast. Volt only sits on Track Black, Ink, or Graphite.
- Photography is always desaturated (see [Imagery](#7-imagery)) — color in a layout should come from Volt and the surfaces, not from photos.

---

## 3. Typography

**Typefaces:**
- **Anton** (display) — headlines, section titles, stat numbers, the primary wordmark line. Loaded via `next/font/google` alongside the existing Geist fonts.
- **Geist Sans** (UI/body) — already installed in the project. Nav, body copy, buttons, form labels, card text, the secondary wordmark line.
- **Geist Mono** — already installed; reserved for a future data-table or timer feature, not used in v1 of this design system.

Two families, clearly distinct in weight and width — Anton's heavy condensed caps against Geist's neutral, readable sans. No third display face; no swapping fonts by section.

**Case rule:** Caps are reserved for the display face, buttons, and pill/badge labels. Nav links, body copy, and form fields stay in sentence case. (This is a deliberate line — the reference images use caps almost everywhere, but all-caps-for-everything is a generic tell; restricting it to display/UI-action text keeps caps meaningful instead of decorative.)

**Type scale:**

| Level | Size (desktop / mobile) | Face & weight | Line-height | Tracking |
|---|---|---|---|---|
| Display 2XL (hero headline) | 96px / 56px | Anton | 0.95 | -0.01em |
| Display XL (section heading) | 56px / 36px | Anton | 1.0 | -0.005em |
| Display L (card feature heading, stat number) | 32px / 28px | Anton | 1.05 | normal |
| Heading M (trainer name, class name) | 22px | Geist Semibold | 1.2 | normal |
| Body L (mission copy, intro paragraphs) | 18px | Geist Regular | 1.6 | normal — max 70ch line length |
| Body M (card copy, bios, descriptions) | 16px | Geist Regular | 1.55 | normal |
| Body S / caption (metadata, dates, fine print) | 14px | Geist Regular | 1.4 | normal |
| UI label (buttons, pills, badges, nav) | 14px | Geist Semibold, caps | 1.0 | 0.02em |

---

## 4. Spacing

An 8-based scale (with a 4px half-step for tight UI contexts):

| Token | Value |
|---|---|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 24px |
| space-6 | 32px |
| space-7 | 48px |
| space-8 | 64px |
| space-9 | 96px |
| space-10 | 128px |

Section vertical rhythm uses space-8/space-9 (64/96px) between major sections; card internal padding uses space-4/space-5 (16/24px); tight UI (badge padding, icon gaps) uses space-1/space-2.

---

## 5. Radius

| Token | Value | Used for |
|---|---|---|
| radius-xs | 6px | Small chips, input checkboxes |
| radius-sm | 10px | Form inputs, small badges |
| radius-md | 16px | Standard content cards (class cards, trainer cards, testimonial cards) |
| radius-lg | 28px | Feature cards — glass card, pricing cards, the hero's bottom card cluster |
| radius-full | 999px | Buttons, pills, tags — always fully rounded |
| radius-hero | 40px | The hero's outer frame and hero card **only** — this large radius is a one-time gesture, not a general card radius |

Using one radius everywhere is the generic "SaaS card kit" tell. This scale is deliberately stepped, and `radius-hero` is explicitly restricted to a single use so it reads as a considered gesture, not a template default.

---

## 6. Elevation, borders & glass

- **Default surface treatment:** flat fill + 1px hairline border (`rgba(245,244,236,0.14)`). No drop shadow on standard cards.
- **Glass card:** `backdrop-filter: blur(16px)`, Glass fill background, hairline border, still no drop shadow. Used only where content sits over photography (matches the "App Insight" card in the reference).
- **Hero outer frame:** a bold 3px Volt border wrapping the hero section only — the single boldest structural element on the page, used exactly once.
- **Interactive elevation:** buttons get a soft Volt-tinted glow on hover (`box-shadow: 0 0 24px rgba(215,255,63,0.25)`), not a generic grey drop shadow. This is the only shadow in the system.

---

## 7. Imagery

- All photography is **desaturated to grayscale** (or a tight near-monochrome duotone if color processing is available) — this is the system's one photographic treatment, applied consistently to the hero photo, trainer headshots, and the About photo strip.
- Aspect ratios: hero photo full-bleed background (covers the entire hero card, behind the text and card cluster); trainer card photo 1:1 (square, top of card); About photo strip 21:9 (wide band).
- Photography never sits directly under text without a scrim: the Hero's headline and CTAs sit over a left-to-right dark gradient scrim (opaque Track Black at the text edge, fading toward transparent) so text stays legible without needing a card behind it. Where a scrim isn't used, photography sits behind or beside UI instead (e.g. trainer photos are contained within their own card region, not behind text).

---

## 8. Iconography

- Simple 1.5px-stroke line icons (a single consistent set — e.g. Lucide — not mixed styles).
- Icons that accompany a card (class icon, stat icon) sit inside a circular badge container: Graphite fill, hairline border, icon in Chalk or Volt depending on emphasis. This mirrors the circular icon treatment in the reference's "App Insight" and "custom plan" cards.

---

## 9. Motion

- **One deliberate moment:** the hero content (headline → CTAs → photo → bottom card cluster) stages in on page load in a single short sequence (~400–600ms total, subtle upward fade, last-in-first-visible ordering). This is the only scroll-independent animation on the page.
- **No scroll-triggered fade-ups.** Sections below the hero appear immediately, at full opacity, when scrolled to — no repeating reveal animation per section.
- **Interactive states still animate:** button hover/press, card hover (border brightens, no lift/shadow-pop), form field focus — these are functional transitions (150–200ms ease), not decoration, and are required, not optional.
- **`prefers-reduced-motion`:** the hero stage-in sequence is skipped entirely (content renders in its final state immediately); interactive transitions are shortened but not fully removed, since they communicate state change.

---

## 10. Accessibility floor

- Body text on Track Black/Ink must meet WCAG AA contrast (Chalk on Track Black ≈ 17:1 — passes comfortably; Smoke on Track Black ≈ 6.8:1 — passes for body text down to 14px).
- Volt on Track Black/Ink is used for large text, icons, and UI chrome (borders, focus rings) rather than small body copy, where its contrast, while passing numerically, is visually harsh.
- Every interactive element (link, button, form field, card acting as a link) has a visible `:focus-visible` state: a 2px Volt outline with 2px offset.
- Respect `prefers-reduced-motion` as described above.
- Form errors are announced via `aria-describedby` linking the field to its error message, not color alone (paired with an inline icon + text).

---

## Self-critique

Per the frontend-design skill's required process, here's what was deliberately kept from the reference brief versus what was rejected as a generic default:

**Kept, because it's the brief's own pinned-down direction, not an invented default:**
- Near-black background + a single lime/acid accent. This is trait #2 on the list of common AI-generated-design clichés — but the user handed us two reference images that use exactly this, as the explicit visual source of truth. Following it is following the brief, not defaulting to it.
- One word of the hero headline set in the accent color ("TRANSFORM" in the reference). Kept, but restricted to that single hero occurrence — it is not turned into a repeating formula where every section heading gets one accent-colored word.
- Pill-shaped buttons and a mixed glass/solid card system — both present in the reference, carried through consistently.

**Explicitly rejected, even though the reference or a "fitness app" brief might invite them:**
- Tracked-out ALL-CAPS eyebrow labels above headings — not used anywhere in this system.
- Middle-dot-joined meta strings or em-dash "WORD — fragment" labels — not used.
- A monospace face for small data labels — Geist Mono is reserved, unused in v1.
- Arrow (→) suffixes on buttons or links — none of the CTA copy uses them.
- Numbered 01/02/03 markers on the Classes grid — six class types are not a sequence, so they aren't numbered.
- One uniform border-radius and one generic grey drop-shadow applied to every card (the "SaaS card kit" pattern) — replaced with a stepped radius scale, borders-not-shadows on most surfaces, and `radius-hero` reserved for a single structural use.
- Clinical pure white — swapped for the warmer Chalk throughout.

**Anton as the display face:** chosen after comparing against Bebas Neue (rejected — too light-weight to match the reference's heavy letterforms) and Archivo Black (rejected — not condensed enough to reproduce the reference's tight four-line headline wrap). Anton was the closest match to the actual weight and width shown in `2.png`'s headline, not a default "bold Google Font" reach.
