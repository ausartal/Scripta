# Scripta

Pixel-perfect one-page website clone of the **Scripta** Figma design (creative agency landing page).

Built with **Vite + TypeScript (class-based OOP) + GSAP (ScrollTrigger) + SCSS** — no framework.

## Features

- **Hero** — layered composition (INTO / IMPACT / character / outline TO·T letters / floating cards), parallax on scroll
- **Marquee** — infinite scrolling lime band with ✦ separators
- **Services** — 4 service cards (Web / App / Game Dev / Education)
- **Who We Help** — audience section with scroll reveals
- **How It Works** — process steps on red tiles with white icons
- **FAQ** — accordion with smooth open/close animation
- **Pricing** — 3 tiers (ESENSIAL / MASTERPIECE / …) with feature lists and CTA banner
- **Footer** — social rail + nav
- Sticky navbar with smooth anchor scrolling
- Per-section scroll progress bars
- Full-viewport stage: design (1728px) scales proportionally to any width via `StageScaler`

## Tech Stack

| Layer | Choice |
|-------|--------|
| Bundler | Vite 5 |
| Language | TypeScript 5 (OOP: `Component` → `Section`) |
| Animation | GSAP 3 + ScrollTrigger |
| Styles | SCSS (tokens, sections, widgets) |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc && vite build → dist/
npm run preview  # preview production build
```

## Project Structure

```
src/
├── app/            # App bootstrap + AnimationManager
├── core/           # Component / Section base classes
├── sections/       # Hero, Services, Audience, Process, FAQ, Pricing, Footer
├── widgets/        # Navbar, SocialRail, Accordion, ScrollProgressBar
├── styles/         # tokens, fonts, stage, sections/, widgets/
├── types/          # shared TS types
└── utils/          # assets map, dom helpers, StageScaler
public/assets/      # images, SVGs, local fonts (all cloned from Figma)
```

## Notes

- Design canvas is **1728px** wide; `StageScaler` always applies `scale = viewportWidth / 1728` so the page fills the full screen at every width.
- All assets and fonts are stored locally under `public/assets/` — no external CDNs.
- Copy intentionally preserves the original design text (including typos such as “what icluded” and “ESENSIAL”).
