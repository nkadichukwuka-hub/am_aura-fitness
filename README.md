# Am'aura's Fitness

A modern, mobile-first website for a strength and conditioning studio, built with Next.js and Claude Code.

**Live site:** [am-aura-fitness.vercel.app](https://am-aura-fitness.vercel.app)

## What's on the site

A single-page experience with a bold, high-energy design:

- **Hero:** "Train Hard. Live Strong." with calls to action to join or view classes.
- **About:** the studio, its coaching approach and key numbers.
- **Classes:** HIIT, yoga, strength training, cycling, boxing and Pilates, each with a duration and difficulty level.
- **Trainers:** the coaching team.
- **Pricing:** Basic, Pro and Elite membership tiers with a feature comparison.
- **Testimonials:** what members say.
- **Contact:** a contact form and studio details.
- **AI assistant:** a chat widget that answers questions about classes, trainers and membership (an [n8n](https://n8n.io) chat workflow behind it).

## Built with

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- [lucide-react](https://lucide.dev) icons
- [@n8n/chat](https://www.npmjs.com/package/@n8n/chat) for the chat widget

## How it was built

The site was designed and built with [Claude Code](https://claude.com/claude-code). The project includes the design system and rules it worked from:

- `docs/design/` holds the design tokens, component guide, style guide and image credits.
- `CLAUDE.md` and `AGENTS.md` hold project instructions for the AI assistant.
- `.claude/` holds a design-enforcer agent and an image-optimising skill used during the build.

## Getting started

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                 Page, layout and global styles
components/
  layout/            Header and footer
  sections/          Hero, About, Classes, Trainers, Pricing, Testimonials, Contact
  ui/                Reusable pieces (Button, Badge, Stat, photo placeholder)
  Chatbot.tsx        The n8n chat widget
lib/content.ts       All site copy and data (classes, trainers, pricing, ...)
docs/design/         Design tokens, components and style guide
public/images/       Optimised class and studio photos
```

All text and data lives in `lib/content.ts`, so content can be edited without touching the components.

## Author

Built by [Goshen Nkadi](https://www.linkedin.com/in/goshen-chukwuka-73842943a/), Claude Code and AI developer.
