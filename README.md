<div align="center">

# ✒️ Scripta

**We build what you imagine.**

Creative studio at the intersection of **Education × Technology × Design**.
We turn ideas into digital experiences.

[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License](https://img.shields.io/badge/license-proprietary-lightgrey)](#)

</div>

---

## 🌟 Overview

**Scripta** is a modern portfolio & services website for a creative studio that sits
at the crossroads of *learning, building, and creating*. The best digital products
come from understanding people — not just code.

> Screenshot placeholder — run `npm run dev` and capture the homepage here.

## ✨ Features

- 🎬 **Animated hero** — WebGL gradient waves (OGL) with mouse parallax & film grain
- 🎨 **Pixel-swap transition** — signature visual effect on key sections
- 📄 **7 routed pages** — Home, Services, Portfolio, How It Works, About, FAQ, Contact
- 📱 **Responsive layout** — mobile-first, fluid typography & grids
- 🧩 **Section components** — Hero, Brand Statement, Why Scripta, Numbers, Services Preview, Featured Projects, Testimonials, How It Works, FAQ, Final CTA
- 🧭 **Sticky navbar + footer** — consistent chrome across every route

## 🛠 Stack

| Layer | Choice |
| --- | --- |
| Build | [Vite 8](https://vite.dev) |
| UI | [React 19](https://react.dev) (JSX) |
| Routing | [React Router 7](https://reactrouter.com) |
| Graphics | [OGL](https://github.com/oframe/ogl) (WebGL waves) |
| Lint | [Oxlint](https://oxc.rs) |
| Fonts | Google Fonts — Inter |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- npm (bundled with Node) or your preferred package manager

### Install & run

```bash
# 1. Clone
git clone https://github.com/ausartal/Scripta.git
cd Scripta

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev

# 4. Production build → dist/
npm run build

# 5. Preview the production build locally
npm run preview
```

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint over the project |

## 📁 Project Structure

```
Scripta/
├── index.html                 # Vite entry document
├── vite.config.js             # Vite + React plugin config
├── public/                    # Static assets (logo, icons, images)
│   ├── favicon.svg
│   ├── logo.svg
│   ├── icons.svg
│   └── img/
├── src/
│   ├── main.jsx               # React bootstrap
│   ├── App.jsx                # Router + layout chrome
│   ├── index.css              # Global styles & design tokens
│   ├── assets/                # Bundled images
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, BrandStatement, WhyScripta,
│   │   │                      # Numbers, ServicesPreview, FeaturedProjects,
│   │   │                      # Testimonials, HowItWorksSection, FAQSection,
│   │   │                      # FinalCTA
│   │   ├── GradientWaves.jsx  # OGL WebGL wave canvas
│   │   └── PixelSwap.jsx      # Pixel transition effect
│   └── pages/                 # Home, Services, Portfolio, HowItWorks,
│                              # About, FAQ, Contact
└── docs/img/                  # Documentation imagery
```

## 🎨 Brand Pillars

| Pillar | Meaning |
| --- | --- |
| 🎓 **Education** | Deep understanding of learning & academic needs |
| ⚙️ **Technology** | Modern tools and best practices |
| 🎭 **Creativity** | Design-forward work that stands out |

**Why Scripta?** Personalized · Flexible · Creative · Technology-driven · Education-focused

## 🗺 Roadmap

- [x] Next.js → Vite/React migration
- [x] Multi-page routing with React Router
- [x] WebGL hero (GradientWaves + PixelSwap)
- [ ] Contact form backend integration
- [ ] CMS-driven portfolio content
- [ ] Dark mode toggle

## 👤 Author

**ausartal** — [github.com/ausartal](https://github.com/ausartal)

Crafted with care for learning, building, and creating.

---

<div align="center">

*Education × Technology × Creativity*

</div>
