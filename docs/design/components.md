# Am'aura's Fitness — Component Specs

Specs for every component needed to build the 7-section site (Hero, About, Classes, Trainers, Pricing, Testimonials, Contact) plus the Header and Footer that wrap it. Each spec assumes the tokens in `design-tokens.md` and the rules in `style-guide.md`. Prop interfaces are written for React function components under Next.js App Router + TypeScript conventions; none of this code is wired up yet — this is the spec to build from.

---

## 1. Header / Nav

**Purpose:** Persistent top navigation — wordmark, primary links, auth/CTA actions.

**Anatomy:**
```
┌────────────────────────────────────────────────────────────────┐
│ AM'AURA'S FITNESS   Classes  Trainers  Pricing  Contact  Log in [Join Now]│
└────────────────────────────────────────────────────────────────┘
```
Mobile:
```
┌──────────────────────────┐
│ AM'AURA'S FITNESS    [≡] │
└──────────────────────────┘
```

**Variants:** Transparent-over-hero (initial state, Track Black at low opacity) → solid Graphite once scrolled past the hero (background-color transition only, no layout shift).

**States:** Link default (Chalk) / hover (Volt underline, 150ms) / active route (Volt text, persistent). Mobile menu closed/open (slide-down sheet, Graphite background).

**Responsive:** Full link row ≥1024px. Below that, links collapse into the hamburger sheet; wordmark and CTA stay visible in the bar.

```ts
interface NavLink { label: string; href: string }
interface HeaderProps {
  links: NavLink[];
  ctaLabel?: string; // default "Join Now"
  ctaHref: string;
}
```

**Accessibility:** `<nav>` landmark with `aria-label="Primary"`. Hamburger button has `aria-expanded` and `aria-controls` pointing at the sheet `id`. Current route link gets `aria-current="page"`.

---

## 2. Button

**Purpose:** The single interactive-action component, used everywhere (Nav CTA, Hero CTAs, pricing cards, form submit).

**Variants:**
- **Primary:** solid Volt fill, Ink text, `radius-full`. The one-per-view emphasis action ("Join Now", "Get Started").
- **Secondary:** transparent fill, Chalk 1px border, Chalk text, `radius-full`. Paired with Primary for a lower-emphasis action ("View Classes", "Learn More").
- **Ghost:** no border/fill, Chalk text, underline on hover only. Used inline in body copy or low-emphasis contexts (e.g. "Log in" in the nav).

**States:** default / hover (Primary → Volt Deep fill + `shadow-volt-glow`; Secondary → border brightens to Volt, text to Volt) / `:focus-visible` (2px Volt outline, 2px offset, all variants) / disabled (50% opacity, no hover transition, `cursor: not-allowed`).

**Sizing:** `md` (default, 16px/24px vertical/horizontal padding, 14px UI-label text) and `lg` (hero CTAs — 20px/32px padding).

```ts
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size?: "md" | "lg"; // default "md"
  href?: string; // renders as <a> when present, <button> otherwise
  disabled?: boolean;
  children: React.ReactNode;
}
```

**Accessibility:** Renders a real `<button>` or `<a>` (never a `<div onClick>`). Disabled buttons get `aria-disabled` (not just visual dimming) so they stay announced.

---

## 3. Badge / Pill tag

**Purpose:** Small inline metadata — class difficulty, "Most Popular" ribbon, form feedback tags.

**Variants:**
- **Outline** (default): 1px hairline border, Smoke text — difficulty tags, date/meta tags.
- **Filled-Volt:** solid Volt background, Ink text — "Most Popular" ribbon, active/success states.
- **Filled-Graphite:** solid Graphite background, Chalk text — neutral category tags (e.g. class type on the Classes grid).

**Anatomy:** single line, `radius-full`, `space-1`/`space-3` vertical/horizontal padding, UI-label type.

```ts
interface BadgeProps {
  variant?: "outline" | "filled-volt" | "filled-graphite"; // default "outline"
  children: React.ReactNode;
}
```

**Accessibility:** Decorative badges (e.g. difficulty tag inside a card that's already labeled) are plain text nodes, not interactive elements — no button/link semantics unless the badge is itself clickable (e.g. a filter chip, out of scope for v1).

---

## 4. Hero

**Purpose:** First-screen introduction — the site's one big characteristic moment.

**Anatomy (desktop):**
```
╔══════════════════════════════════════════════════════════════╗ ← radius-hero, Volt border-width-hero
║ ┌──────────────────────────────────────────────────────────┐ ║
║ │ [full-bleed athlete photo, grayscale, behind everything]   │ ║ ← Ink card, radius-hero
║ │ [dark gradient scrim: opaque left → transparent right]     │ ║
║ │  TRAIN HARD.                                                │ ║
║ │  LIVE STRONG.                                               │ ║
║ │  (one line set in Volt)                                     │ ║
║ │                                                             │ ║
║ │  Short tagline, Body L, max ~50ch.                          │ ║
║ │                                                             │ ║
║ │  [Join Now (primary)]  [View Classes (secondary)]           │ ║
║ │                                                             │ ║
║ │  ┌────────────┐ ┌──────────────┐ ┌─────────────────────┐  │ ║
║ │  │ solid Chalk│ │ glass card   │ │ solid Volt card      │  │ ║
║ │  │ stat card  │ │ (blur+border)│ │ (bold CTA-style card)│  │ ║
║ │  └────────────┘ └──────────────┘ └─────────────────────┘  │ ║
║ └──────────────────────────────────────────────────────────┘ ║
╚══════════════════════════════════════════════════════════════╝
```
The photo spans the full hero card as a background layer (`absolute inset-0`, `object-cover`), not a boxed element beside the text — the gradient scrim is what keeps the headline legible, replacing the earlier boxed-photo layout.

**Headline:** two to three short lines, Display 2XL, one line set in Volt (per style-guide §"kept" list — restricted to this single occurrence sitewide). Example copy: "TRAIN HARD." / "LIVE STRONG." with "LIVE STRONG." in Volt.

**Bottom card cluster:** exactly 3 cards, one of each material (solid-Chalk, glass, solid-Volt) — reused from the reference's 3-material pattern. Content: a headline stat (e.g. "500+ members"), a short insight/value prop, and a secondary CTA card. Not a generic 3-column feature grid — each card has a distinct material and a distinct job.

**Motion:** the single staged reveal described in style-guide §9 — headline, then CTAs, then photo, then card cluster, ~400-600ms total.

**Responsive:** The background photo stays full-bleed at every width (it's a background layer, not a layout column); the headline/CTA content stack to a single column <1024px, still on top of the same photo; card cluster stacks to 1 column <640px.

```ts
interface HeroStat { value: string; label: string }
interface HeroProps {
  headlineLines: string[]; // last line rendered in accent color
  tagline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  photoSrc: string;
  photoAlt: string;
  stat: HeroStat;
  insight: { title: string; body: string; date?: string };
  secondaryCard: { title: string; body: string; cta: { label: string; href: string } };
}
```

**Accessibility:** headline is a real `<h1>` (single element, line breaks via `<br>` or block children — not split across multiple heading tags). Photo `alt` describes the scene meaningfully, not "hero image."

---

## 5. Stat / metric display

**Purpose:** A big number + label — used inside the Hero stat card and the About stat row.

**Anatomy:**
```
500+
Members
```
Number in Display L (Anton), label in Body S (Geist, Smoke or Chalk depending on surface).

```ts
interface StatProps {
  value: string; // e.g. "500+", "20+", "10"
  label: string; // e.g. "Members", "Classes", "Expert Trainers"
}
```

**Accessibility:** rendered as a `<dl>`/`<dt>`/`<dd>` pair when several stats appear together (About row), so assistive tech reads value+label as a unit.

---

## 6. About section

**Purpose:** Studio mission, values, and the stat row.

**Anatomy:**
```
[Display XL heading, e.g. "WHY WE TRAIN"]
[Body L mission paragraph, max 70ch]

[optional 2-3 short value statements, Heading M + Body M pairs]

┌────────┐  ┌────────┐  ┌────────┐
│ 500+   │  │ 20+    │  │ 10     │   ← Stat components, no card
│ Members│  │ Classes│  │ Trainers│
└────────┘  └────────┘  └────────┘
```
Stat row sits directly on the section background (no card wrapper) with hairline dividers between items, not boxed — keeps it visually distinct from the Hero's boxed stat card.

**Responsive:** stat row is 3 columns ≥768px, stacks to 1 column with horizontal dividers below that.

```ts
interface ValueItem { title: string; body: string }
interface AboutSectionProps {
  heading: string;
  mission: string;
  values?: ValueItem[];
  stats: StatProps[]; // exactly 3 for the default layout
}
```

**Accessibility:** section wrapped in `<section aria-labelledby="about-heading">` with the heading carrying `id="about-heading"`.

---

## 7. Class Card

**Purpose:** One entry in the Classes grid (HIIT, Yoga, Strength Training, Cycling, Boxing, Pilates).

**Anatomy:**
```
┌───────────────────────────┐
│ (●)  ← circular icon badge│
│                            │
│ HIIT                       │  ← Heading M
│ Short one-sentence          │  ← Body M
│ description of the class.  │
│                            │
│ [45 min]  [Intermediate]   │  ← Badge (outline) x2
└───────────────────────────┘
```
`radius-md`, Graphite fill, hairline border — standard content-card treatment, not the Hero's special materials.

**Grid:** unnumbered, 3 columns ≥1024px, 2 columns ≥640px, 1 column below — explicitly no 01/02/03 markers (six class types aren't a sequence).

**States:** hover — border brightens from hairline to Volt at 30% opacity, no lift/shadow.

```ts
interface ClassCardProps {
  icon: React.ReactNode; // from the single consistent icon set
  name: string;
  description: string;
  duration: string; // e.g. "45 min"
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}
```

**Accessibility:** if the card links to a class-detail page, the whole card is wrapped in a single `<a>` (not nested interactive elements); icon is `aria-hidden` since the class name already conveys the same info.

---

## 8. Trainers section + Trainer Card

**Purpose:** Introduce 3-4 trainers.

**Anatomy (card):**
```
┌───────────────┐
│               │
│  [1:1 photo,  │  ← grayscale treatment per style-guide §7
│   grayscale]  │
│               │
├───────────────┤
│ Jordan Reyes   │  ← Heading M
│ Strength & Cond│  ← Badge (filled-graphite), specialty
│                │
│ Short 1-2      │  ← Body M
│ sentence bio.  │
└───────────────┘
```
`radius-md`, Graphite fill for the text portion, photo fills the top at its native 1:1 aspect ratio (no cropping distortion).

**Responsive:** 4 columns ≥1280px, 2 columns ≥640px, 1 column below.

```ts
interface TrainerCardProps {
  photoSrc: string; // "placeholder" acceptable pre-launch — component still expects a real src prop
  name: string;
  specialty: string;
  bio: string;
}
interface TrainersSectionProps {
  heading: string;
  trainers: TrainerCardProps[];
}
```

**Accessibility:** photo `alt` is the trainer's name (the surrounding text already gives specialty/bio, so alt shouldn't repeat it); section heading structure same pattern as About.

---

## 9. Pricing section + Pricing Card

**Purpose:** 3 membership tiers (Basic / Pro / Elite), Pro highlighted.

**Anatomy:**
```
┌──────────┐  ╔══════════╗  ┌──────────┐
│  BASIC   │  ║   PRO    ║  │  ELITE   │
│          │  ║[Most Pop.]║  │          │
│  $29/mo  │  ║  $49/mo  ║  │  $79/mo  │
│          │  ║          ║  │          │
│ ✓ item   │  ║ ✓ item   ║  │ ✓ item   │
│ ✓ item   │  ║ ✓ item   ║  │ ✓ item   │
│ ✓ item   │  ║ ✓ item   ║  │ ✓ item   │
│          │  ║          ║  │          │
│[Get      │  ║[Get      ║  │[Get      │
│ Started] │  ║ Started] ║  │ Started] │
│(secondary)│  ║(primary) ║  │(secondary)│
└──────────┘  ╚══════════╝  └──────────┘
  Graphite      solid Volt      Graphite
  radius-lg    radius-lg,      radius-lg
               scaled 1.05x,
               "Most Popular"
               badge (filled-graphite,
               sits ON the volt card)
```
This directly reuses the Hero's 3-material pattern (two neutral cards flanking one high-emphasis card) rather than three identical cards with a border-color swap — the recommended tier should look structurally different, not just labeled differently.

**States:** non-highlighted cards get the standard hairline-border hover brighten; the Pro card doesn't need a hover distinction since it's already the visual peak.

**Responsive:** 3 columns ≥1024px; below that, stacks to 1 column with Pro reordered first.

```ts
interface PricingFeature { label: string; included: boolean }
interface PricingCardProps {
  tier: "Basic" | "Pro" | "Elite";
  price: string; // e.g. "$29"
  billingPeriod: string; // e.g. "/mo"
  features: PricingFeature[];
  ctaLabel: string; // default "Get Started"
  ctaHref: string;
  highlighted?: boolean; // true for Pro
}
```

**Accessibility:** feature list is a real `<ul>`; included/excluded state isn't color-only — excluded items get a muted icon + `sr-only` "not included" text alongside the strikethrough styling.

---

## 10. Testimonial Card

**Purpose:** 3 client reviews.

**Anatomy:**
```
┌─────────────────────────┐
│ ★★★★★                    │  ← Volt stars, outline for empty
│                          │
│ "Quote text, Body L,     │
│  understated — no giant  │
│  decorative quote marks."│
│                          │
│ — Sam Ortiz              │  ← Body S, Smoke
│   Pro Member             │
└─────────────────────────┘
```
`radius-md`, hairline border, Graphite fill — deliberately understated (no oversized decorative quotation-mark glyph, which is a common generic tell for this component type).

```ts
interface TestimonialCardProps {
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  name: string;
  membershipTier?: string; // e.g. "Pro Member"
}
```

**Accessibility:** star rating is not purely visual — `aria-label="Rated 5 out of 5"` on the rating element; decorative star icons themselves `aria-hidden`.

---

## 11. Contact section + Contact Form

**Purpose:** Lead-capture form plus studio info.

**Anatomy:**
```
┌───────────────────────┐  ┌───────────────────────┐
│ Name       [________] │  │ Am'aura's Fitness       │
│ Email      [________] │  │ 123 Fitness Ave         │
│ Phone      [________] │  │ City, ST 00000          │
│ Interested in         │  │                         │
│  [dropdown: tier]     │  │ Mon–Fri  6am–9pm        │
│                        │  │ Sat–Sun  8am–4pm        │
│ [Send message]         │  │                         │
│ (primary button)        │  │ (555) 123-4567          │
└───────────────────────┘  └───────────────────────┘
   form, Graphite fields      info column, plain text
```
Two-column layout ≥1024px (form left, studio info right); stacks to 1 column below.

**Field states:** default (hairline border, Graphite fill) / focus (Volt border + `focus-visible` outline) / error (Error-red border + inline message below field, `aria-describedby`) / disabled (50% opacity, during submit).

**Form behavior:** client-side validation on blur, not on every keystroke; submit button shows a loading state (label unchanged, spinner replaces nothing — button stays legible) rather than disabling silently.

```ts
type MembershipInterest = "Basic" | "Pro" | "Elite" | "Not sure yet";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  interest: MembershipInterest;
}
interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>;
}
interface StudioInfo {
  address: string[];
  hours: { days: string; time: string }[];
  phone: string;
}
interface ContactSectionProps {
  info: StudioInfo;
}
```

**Accessibility:** every field has a real `<label for>` (no placeholder-as-label); error messages are programmatically associated via `aria-describedby` and the field gets `aria-invalid="true"`; form submission errors are announced via an `aria-live="polite"` region near the submit button.

---

## 12. Footer

**Purpose:** Sitewide closing — wordmark, link columns, credit bar.

**Anatomy:**
```
┌──────────────────────────────────────────────────┐
│ AM'AURA'S FITNESS          Studio        Connect   │
│ Short tagline line.        Classes       Instagram │
│                             Trainers      Email     │
│                             Pricing                 │
├──────────────────────────────────────────────────┤
│ © 2026 Am'aura's Fitness            [small ' mark] │
└──────────────────────────────────────────────────┘
```
Ink background (darkest surface, grounds the page). The small brand mark in the credit bar is the standalone Volt apostrophe glyph from the wordmark — a distinct, minimal use of the signature device, not a repeat of the Hero's bold frame gesture.

```ts
interface FooterLinkColumn { heading: string; links: NavLink[] }
interface FooterProps {
  tagline: string;
  columns: FooterLinkColumn[];
  socialLinks: NavLink[];
}
```

**Accessibility:** `<footer>` landmark; link columns use `<nav aria-label="Footer">` if there are multiple columns of navigational links.

---

## Coverage check against the 7 required sections

| Site section | Component(s) |
|---|---|
| Hero | Hero, Button, Stat |
| About | About section, Stat |
| Classes | Class Card, Badge |
| Trainers | Trainers section, Trainer Card |
| Pricing | Pricing section, Pricing Card, Badge, Button |
| Testimonials | Testimonial Card |
| Contact/Join | Contact section, Contact Form |

Header and Footer wrap all 7 sections but aren't part of the enumerated list — included because every page needs them.
