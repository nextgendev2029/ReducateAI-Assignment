# JG University — Premium Landing Page Redesign

A modern, responsive, and visually premium landing page for **JG University**, built as an internship assignment for **Reducate.AI**. Inspired by the official [jguni.in](https://jguni.in/) website, this project delivers a high-fidelity institutional web experience using Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 🔗 Live Demo

> **[View Live Demo](#)** _(link will be updated after Vercel deployment)_

---

## ✨ Features

- **Premium Editorial Hero** — Image collage layout with overlapping campus visuals, trust pills, and animated stats
- **Leadership Section** — Profiles of university president and director-general with official photos
- **Partners Marquee** — Auto-scrolling horizontal logo strip featuring 9+ industry partners (IBM, ISRO, Yudiz, etc.)
- **Beyond Classrooms** — Full-bleed image-overlay cards showcasing experiential learning, industry exposure, and campus life
- **Campus Mosaic Gallery** — Asymmetric grid with 1 large featured image + 4 smaller images with hover zoom
- **Alumni Testimonials** — Carousel with real alumni photos, avatar strip navigation, and auto-advance
- **Social Connect Footer** — Complete social media links (Facebook, Instagram, LinkedIn, YouTube, Twitter/X, WhatsApp) with custom SVG icons
- **Smooth Animations** — Framer Motion scroll-triggered reveals and micro-interactions
- **Fully Responsive** — Optimized for desktop (1440px), tablet (768px), and mobile (360px)
- **SEO Optimized** — Proper meta tags, semantic HTML, and structured heading hierarchy

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | React framework with SSR/SSG |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling with `@theme` design tokens |
| **Framer Motion** | Scroll animations and transitions |
| **Lucide React** | Icon library (with custom SVGs for social icons) |
| **next/image** | Optimized image loading |

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Design tokens, marquee animation, scrollbar
│   ├── layout.tsx           # Root layout with Google Fonts (Playfair + Inter)
│   ├── page.tsx             # Page assembly — all sections composed here
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx            # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx              # Editorial image collage + trust pills + stats
│   ├── About.tsx             # Mission & values section
│   ├── Programs.tsx          # Programme cards (UG, PG, Doctoral, Certificates)
│   ├── Strengths.tsx         # Why JG — 4 strength cards
│   ├── Features.tsx          # Salient features list
│   ├── BeyondClassrooms.tsx  # 3 image-overlay experiential learning cards
│   ├── Leadership.tsx        # University leadership profiles
│   ├── Partners.tsx          # Horizontal marquee of partner logos
│   ├── Campus.tsx            # Mosaic gallery + facility cards
│   ├── Testimonials.tsx      # Alumni carousel with avatar strip
│   ├── CTA.tsx               # Call-to-action banner
│   ├── Footer.tsx            # Social links + contact + quick links
│   └── SectionHeader.tsx     # Reusable section header component
├── lib/
│   └── data.ts               # All content data (centralized)
├── public/
│   └── assets/jg/            # Official campus, leader, partner images
├── package.json
├── tailwind config via globals.css (@theme)
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nextgendev2029/Reduct.AI-Assingment.git

# Navigate to the project
cd Reduct.AI-Assingment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design Decisions

- **Color Palette:** Maroon (`#B91C1C`) + Gold (`#D4A017`) + Cream (`#FFF8ED`) — matching JG University's official branding
- **Typography:** Playfair Display (serif headings) + Inter (sans-serif body) — editorial university aesthetic
- **Layout Philosophy:** Premium institutional feel over generic SaaS template — inspired by top-tier university websites
- **Content Architecture:** All data centralized in `lib/data.ts` for easy content updates without touching components
- **Asset Strategy:** Official images sourced from jguni.in, stored locally in `public/assets/jg/` for reliability

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| `≥1440px` | Desktop — full editorial layout |
| `≥768px` | Tablet — 2-column grids |
| `≤640px` | Mobile — stacked layout, text-first hero |

---

## 📝 Assignment Context

This project was built as part of the **Reducate.AI Frontend Internship Assignment**. The goal was to create a polished, production-quality landing page inspired by [jguni.in](https://jguni.in/) demonstrating:

- Modern frontend architecture (Next.js App Router)
- Clean component composition
- Responsive design excellence
- Attention to visual detail and brand alignment

---

## 📄 License

This project is for educational/assignment purposes. All university branding, images, and content belong to JG University.
