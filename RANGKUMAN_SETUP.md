# Ringkasan Setup — Raihan Portfolio Web

> Dokumen ringkasan lengkap seluruh proses setup dari awal hingga selesai.
> **Tanggal selesai:** 22 November 2026
> **Technologies:** React Vite + Tailwind CSS + Framer Motion + Sanity.io + Vercel + GitHub

---

## 1. 🔗 Semua Link Penting

| Layanan | URL | Status |
|---|---|---|
| **Website Live** | https://raihanportfolioweb.vercel.app | 🟢 Live (HTTP 200) |
| **CMS Sanity Studio** | https://raihan-portfolio.sanity.studio | 🟢 Active |
| **GitHub Repo** | https://github.com/raihanhomenet2121-cyber/portfolio-raihan01 | 🟢 Public |
| **Vercel Dashboard** | https://vercel.com/raizen-cyber/raihan_portfolio_web | 🟢 Ready |
| **Sanity Manage** | https://sanity.io/manage/project/ssll9tsi | 🟢 Active |

---

## 2. 🏗️ Arsitektur Stack

```
Pengunjung Browser
        │
        ▼
┌───────────────────────────────┐
│  VERCEL  (Hosting/Deploy)     │
│  https://raihanportfolioweb   │
│  .vercel.app                  │
│                               │
│  React Vite (Frontend)        │
│  Snap slider + cards          │
└──────────────┬────────────────┘
               │ Sanity Client / GROQ
               ▼
┌───────────────────────────────┐
│  SANITY.IO (Headless CMS)     │
│  Project ID: ssll9tsi         │
│  Dataset: production          │
│  Studio: raihan-portfolio     │
│  schemas: profile, project,   │
│  experience, award            │
└───────────────────────────────┘

┌───────────────────────────────┐
│  GITHUB  (Code repo)          │
│  raihanhomenet2121-cyber/     │
│  portfolio-raihan01           │
│  main → auto-deploy Vercel    │
└───────────────────────────────┘
```

---

## 3. 📂 Struktur Folder Project

```
raihan_portfolio_web/          ← C:\...\Project_Laravel_dll\raihan_portfolio_web
├── src/
│   ├── components/            # Navbar, Footer, ImageSlider, ProjectCard, ExperienceCard, AwardCard
│   ├── sections/              # Hero, About, Projects, Experience, Awards, Contact
│   ├── hooks/                 # useSanityData.js
│   ├── lib/                   # sanityClient.js
│   ├── App.jsx                # Main app (fetch data dari Sanity)
│   ├── main.jsx
│   └── index.css              # Tailwind + font Inter
│
├── sanity/
│   └── schemas/               # profile.js, project.js, experience.js, award.js, index.js
│
├── sanity.config.js           # Config Sanity Studio (Vite + process.env)
├── sanity.cli.js              # Config CLI (studioHost: raihan-portfolio, appId)
├── .env                       # VITE_SANITY_* (tidak di-commit)
├── .env.example               # Template env
├── .gitignore
├── index.html                 # SEO/Optimized title + meta
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 4. 🔐 Akun & Kredensial

### 4.1 Akun GitHub

| Akun | Peran | GH CLI Status |
|---|---|---|
| `raihanhomenet2121-cyber` | Pemilik repo + Vercel login | ✅ Active |
| `raizenHans` | Sanity CLI (pemilik project Sanity) | ✅ Tersimpan (swit balik) |

> **Cara switch akun GH CLI:**
> ```powershell
> gh auth switch          # pilih akun yang aktif
> ```

### 4.2 Git Credentials (Terpisah per Repo)

- Remote `origin` → `https://github.com/raihanhomenet2121-cyber/portfolio-raihan01.git`
- Credentials tersimpan di **Windows Credential Manager** (bukan di URL — aman)
- Setup credential: `cmdkey /generic:git:https://github.com /user:raihanhomenet2121-cyber /pass:<PAT>`

### 4.3 Environment Variables (Vercel Production)

| Variable | Value |
|---|---|
| `VITE_SANITY_PROJECT_ID` | `ssll9tsi` |
| `VITE_SANITY_DATASET` | `production` |
| `VITE_SANITY_API_VERSION` | `2024-01-01` |
| `VITE_SANITY_TOKEN` | token Sanity CLI (Viewer) |

---

## 5. ✅ Checklist Setup (Semua Selesai)

### 5.1 GitHub
- [x] Repo public `portfolio-raihan01` dibuat
- [x] Branch `main`, commit sudah ter-push (`e954b26`)
- [x] 2 akun GH CLI terhubung tanpa logout

### 5.2 Vercel
- [x] Project `raihan_portfolio_web` (scope `raizen-cyber`)
- [x] Terhubung ke GitHub (auto-deploy dari push `main`)
- [x] 4 env vars Sanity terpasang (Production)
- [x] Deployment READY — terpicu otomatis dari push

### 5.3 Sanity.io
- [x] Project ID `ssll9tsi` (nama: `raihan-portfolio-01`)
- [x] Dataset `production`
- [x] Sanity Studio deployed → https://raihan-portfolio.sanity.studio
- [x] CORS origins: `localhost:5173`, `localhost:3333`, `raihanportfolioweb.vercel.app`
- [x] 4 schema types deployed (profile, project, experience, award)

### 5.4 Code
- [x] React 19 + Vite + Tailwind 3 + Framer Motion + Sanity Client
- [x] Komponen slider (gambar slideshow per kartu)
- [x] Kartu Project/Experience/Award dengan link opsional
- [x] Build produksi sukses (`npm run build`)
- [x] SEO meta tags di `index.html`

---

## 6. 📦 Dependencies (package.json)

**Dependencies:**
```
@sanity/client, @sanity/image-url, @sanity/vision,
framer-motion, react, react-dom, react-router-dom, sanity, styled-components
```

**DevDependencies:**
```
@types/react, @types/react-dom, @vitejs/plugin-react,
autoprefixer, oxlint, postcss, tailwindcss, vite
```

**Scripts:**
```json
"dev":         "vite",
"build":       "vite build",
"lint":        "oxlint",
"preview":     "vite preview",
"studio":      "sanity dev",
"studio:deploy": "sanity deploy"
```

---

## 7. 🚀 Alur Kerja Sehari-hari

### Update Konten (tanpa coding)
1. Buka https://raihan-portfolio.sanity.studio
2. Edit/tambah dokumen (profil, project, pengalaman, penghargaan)
3. Simpan → website ter-update otomatis

### Development Lokal
```powershell
cd D:\MUHAMMAD_RAIHAN_NUGRAHA\Project_Laravel_dll\raihan_portfolio_web
npm run dev                     # jalankan app di localhost:5173
npm run studio                  # jalankan Sanity Studio lokal
```

### Push & Auto-deploy
```powershell
git add -A
git commit -m "pesan commit"
git push origin main            # → Vercel auto deploy
```

### Deploy Ulang Sanity Studio (jika ubah schema)
```powershell
npx sanity deploy               # studioHost sudah di-set: raihan-portfolio
```

---

## 8. ⚠️ Keamanan — Wajib Dilakukan

Token berikut **sudah terekspos di riwayat chat** → sebaiknya segera di-revoke & ganti:

| Token | Lokasi Revoke | Langkah |
|---|---|---|
| Sanity CLI Viewer Token | https://sanity.io/manage → project `ssll9tsi` → API → Tokens | Delete → buat baru → update `.env` & Vercel env |
| GitHub PAT `ghp_DCFAh...` | https://github.com/settings/tokens | Delete → buat baru (scope `repo`) → update Windows Credential Manager |
| GitHub CLI token | `gh auth switch`/`logout` lalu `gh auth login` ulang jika diperlukan | — |

**Update setelah ganti token:**
```powershell
# Windows Credential Manager
cmdkey /delete:git:https://github.com
cmdkey /generic:git:https://github.com /user:raihanhomenet2121-cyber /pass:<TOKEN_BARU>

# Vercel env
vercel env rm VITE_SANITY_TOKEN production
vercel env add VITE_SANITY_TOKEN  --environment production --value <TOKEN_BARU> --type config
```

---

## 9. 📈 Fitur yang Sudah Ada / Potensi Dikembangkan

### Sudah Ada (V1)
- Hero section dengan foto profil
- About dengan daftar skill/tag
- Grid proyek + slideshow gambar
- Pengalaman kerja & organisasi (timeline based on `type`)
- Penghargaan + link event
- Kontak (email, LinkedIn, GitHub)
- Responsif (mobile-first)
- Animasi Framer Motion

### Potensi Dikembangkan (V2+)
- Dark mode toggle
- Blog/artikel
- Multi-bahasa (ID/EN)
- Custom domain (mis. `raihandev.id`)
- Vercel Analytics
- SEO/OG image tambahan
- Filter proyek by tech stack

---

## 10. 📄 Dokumen Pendukung (di folder yang sama)

| File | Isi |
|---|---|
| `PRD.md` | Product Requirements Document (fitur, tujuan, tech stack, batasan) |
| `ARSITEKTUR_INFORMASI.md` | Diagram arsitektur, struktur folder, schema data, alur deploy |
| `WBS.md` | Work Breakdown Structure — fase & checklist pengerjaan |
| `docs/` | Dokumen tambahan (CV) |

---

*Dokumen ringkasan ini dibuat otomatis dari seluruh proses setup. Jika ada perubahan konfigurasi di masa depan, perbarui bagian yang relevan di atas.*
