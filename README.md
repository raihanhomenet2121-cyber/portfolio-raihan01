# Raihan Portfolio Web

Portfolio personal Muhammad Raihan Nugraha — Full Stack Developer.

**Stack:** React Vite + Tailwind CSS + Framer Motion + Sanity.io + Vercel

---

## Quick Start

```bash
# 1. Clone & install
npm install

# 2. Setup environment
cp .env.example .env
# Isi VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_TOKEN di .env

# 3. Run dev
npm run dev
```

## Sanity Studio

```bash
# Install sanity CLI globally (jika belum)
npm install -g sanity

# Login ke Sanity
npx sanity login

# Deploy Sanity Studio (buka CMS online)
npx sanity deploy

# Atau dev lokal
npm run studio
```

## Deploy

```bash
# Push ke GitHub → Vercel auto-deploy
git push origin main
```

## Project Structure

```
src/
├── components/     → ImageSlider, Navbar, Footer, Cards
├── sections/       → Hero, About, Projects, Experience, Awards, Contact
├── lib/            → sanityClient.js
└── App.jsx         → Main app

sanity/
└── schemas/        → profile, project, experience, award
```

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animasi | Framer Motion |
| CMS | Sanity.io v3 |
| Image CDN | Sanity Asset CDN |
| Hosting | Vercel |