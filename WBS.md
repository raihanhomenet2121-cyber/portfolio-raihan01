# Work Breakdown Structure (WBS)
# Raihan Portfolio Web

**Stack:** React Vite + Tailwind CSS + Sanity.io + Vercel  
**Repo:** raizenHans/raihan-portfolio  

---

## FASE 0 — Setup & Infrastruktur

### 0.1 Prasyarat Tools
- [ ] Install GitHub CLI (`gh`) untuk otomatisasi repo
- [ ] Login GitHub CLI: `gh auth login`
- [ ] Pastikan Node.js ≥ 18 terinstall ✅ (v24.13.0)
- [ ] Pastikan Git terinstall ✅ (v2.55.0)
- [ ] Buat akun Sanity.io di https://sanity.io (gratis)

### 0.2 Inisialisasi Project
- [ ] Buat project React Vite: `npm create vite@latest raihan-portfolio -- --template react`
- [ ] Install dependencies utama (Tailwind, Framer Motion, React Router, Sanity Client)
- [ ] Setup Tailwind CSS
- [ ] Buat repo GitHub `raihan-portfolio` (public)
- [ ] Push initial commit ke GitHub

### 0.3 Setup Sanity
- [ ] Daftar/login akun Sanity.io
- [ ] Buat project Sanity baru: `npm create sanity@latest`
- [ ] Catat `Project ID` dan `Dataset` dari Sanity dashboard
- [ ] Buat file schema: profile, project, experience, award
- [ ] Test Sanity Studio berjalan lokal

### 0.4 Koneksi Frontend ↔ Sanity
- [ ] Install `@sanity/client` dan `@sanity/image-url`
- [ ] Buat file `src/lib/sanityClient.js`
- [ ] Buat file `.env` dengan variabel Sanity
- [ ] Buat `.env.example` dan tambahkan `.env` ke `.gitignore`
- [ ] Test fetch data dari Sanity berhasil

### 0.5 Setup Vercel
- [ ] Connect repo GitHub ke Vercel (via vercel.com dashboard)
- [ ] Set environment variables di Vercel (sama dengan `.env`)
- [ ] Test auto-deploy berhasil

---

## FASE 1 — Komponen Dasar & Layout

### 1.1 Layout Global
- [ ] `index.css` — Tailwind directives + font global
- [ ] `App.jsx` — routing setup
- [ ] `Navbar.jsx` — logo/nama + navigasi link smooth scroll
- [ ] `Footer.jsx` — copyright + link sosial

### 1.2 Komponen Reusable
- [ ] `ImageSlider.jsx` — slideshow foto dengan navigasi prev/next
- [ ] `ProjectCard.jsx` — card proyek (foto slider, judul, deskripsi, link)
- [ ] `ExperienceCard.jsx` — card pengalaman (logo, posisi, perusahaan, periode)
- [ ] `AwardCard.jsx` — card penghargaan (foto slider, nama, tahun, link)
- [ ] `SkillBadge.jsx` — badge kecil untuk daftar skill/tech stack

---

## FASE 2 — Sections Halaman Utama

### 2.1 HeroSection
- [ ] Foto profil (dari Sanity)
- [ ] Nama + tagline
- [ ] Tombol CTA: "Lihat Proyek" + "Download CV"
- [ ] Animasi entrance (Framer Motion)

### 2.2 AboutSection
- [ ] Bio/deskripsi diri (dari Sanity)
- [ ] Daftar skill dengan badge
- [ ] Layout dua kolom (teks + foto) di desktop

### 2.3 ProjectsSection
- [ ] Fetch data projects dari Sanity
- [ ] Grid card responsif (1 kolom mobile, 2-3 kolom desktop)
- [ ] Setiap card: ImageSlider + judul + deskripsi + link (opsional)
- [ ] Animasi card masuk (scroll-triggered)

### 2.4 ExperienceSection
- [ ] Fetch data experience dari Sanity
- [ ] Timeline atau card list vertikal
- [ ] Filter: "Pekerjaan" vs "Organisasi" (opsional)
- [ ] Logo perusahaan, posisi, periode

### 2.5 AwardsSection
- [ ] Fetch data awards dari Sanity
- [ ] Grid card: foto slideshow + nama + tahun + link event
- [ ] Animasi hover pada card

### 2.6 ContactSection
- [ ] Link email (mailto)
- [ ] Icon link: GitHub, LinkedIn, media sosial
- [ ] Pesan singkat / call to action

---

## FASE 3 — Konten Sanity (Pengisian Data)

### 3.1 Data Profil
- [ ] Upload foto profil ke Sanity
- [ ] Isi bio, tagline, skill list
- [ ] Upload CV (PDF) opsional

### 3.2 Data Projects
- [ ] Input minimal 3 proyek unggulan
- [ ] Upload foto slideshow per proyek
- [ ] Isi deskripsi, tech stack, link

### 3.3 Data Experience
- [ ] Input semua pengalaman kerja/organisasi
- [ ] Upload logo perusahaan/institusi
- [ ] Atur urutan

### 3.4 Data Awards
- [ ] Input penghargaan yang ada
- [ ] Upload foto dokumentasi
- [ ] Tambahkan link event jika ada

---

## FASE 4 — Polish & Optimasi

### 4.1 Responsivitas
- [ ] Test di mobile (320px - 480px)
- [ ] Test di tablet (768px)
- [ ] Test di desktop (1280px+)
- [ ] Fix layout issues

### 4.2 Performa
- [ ] Lazy loading gambar
- [ ] Optimasi gambar via Sanity image URL builder (resize, quality)
- [ ] Code splitting dengan React lazy

### 4.3 SEO
- [ ] Meta title + description di `index.html`
- [ ] Open Graph tags (untuk preview link di WhatsApp/LinkedIn)
- [ ] Favicon custom

### 4.4 Animasi Final
- [ ] Smooth scroll behavior
- [ ] Section entrance animation (fade + slide up)
- [ ] Card hover effects

---

## FASE 5 — Deploy Final & Testing

### 5.1 Pre-Deploy Checklist
- [ ] Semua environment variable sudah di-set di Vercel
- [ ] Build lokal berhasil: `npm run build`
- [ ] Tidak ada error di console browser
- [ ] Semua link berfungsi

### 5.2 Deploy
- [ ] Push ke `main` → Vercel auto deploy
- [ ] Verifikasi live URL: `https://raihan-portfolio.vercel.app`
- [ ] Test di berbagai browser (Chrome, Firefox, Safari mobile)

### 5.3 Custom Domain (Opsional)
- [ ] Beli domain (misal: raihandev.my.id atau raihannugraha.com)
- [ ] Connect domain ke Vercel
- [ ] Setup HTTPS otomatis

---

## Ringkasan Urutan Pengerjaan

```
FASE 0 (Setup)        → ~1-2 jam   → WAJIB selesai dulu
FASE 1 (Layout)       → ~2-3 jam   → Komponen dasar
FASE 2 (Sections)     → ~4-6 jam   → Konten utama
FASE 3 (Sanity Data)  → ~1-2 jam   → Isi konten nyata
FASE 4 (Polish)       → ~2-3 jam   → Finishing
FASE 5 (Deploy)       → ~30 menit  → Go live
```

**Total estimasi:** ~12-18 jam pengerjaan (bisa dibagi beberapa hari)

---

## Dependensi Package

```bash
# Core
npm create vite@latest raihan-portfolio -- --template react

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Routing & Animasi
npm install react-router-dom framer-motion

# Sanity
npm install @sanity/client @sanity/image-url

# Sanity Studio (init terpisah)
npm create sanity@latest
```
