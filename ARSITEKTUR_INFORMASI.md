# Arsitektur Informasi
# Raihan Portfolio Web

---

## 1. Diagram Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────┐
│                    BROWSER PENGUNJUNG                   │
└─────────────────────┬───────────────────────────────────┘
                      │ HTTPS
┌─────────────────────▼───────────────────────────────────┐
│                      VERCEL                             │
│              (Hosting + CDN Global)                     │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │            React Vite (Frontend)                 │   │
│  │                                                  │   │
│  │  / (Home)                                        │   │
│  │  ├── HeroSection                                 │   │
│  │  ├── AboutSection                                │   │
│  │  ├── ProjectsSection ──→ ProjectCard + Slider    │   │
│  │  ├── ExperienceSection → ExperienceCard          │   │
│  │  ├── AwardsSection ────→ AwardCard + Slider      │   │
│  │  └── ContactSection                              │   │
│  └────────────────────┬─────────────────────────────┘   │
└───────────────────────┼─────────────────────────────────┘
                        │ Sanity Client (fetch API)
                        │ GROQ Query
┌───────────────────────▼─────────────────────────────────┐
│                    SANITY.IO                            │
│              (Headless CMS + Asset CDN)                 │
│                                                         │
│  Content Lake (Database)                                │
│  ├── profile       → bio, foto, tagline, skills         │
│  ├── project[]     → judul, deskripsi, images[], link   │
│  ├── experience[]  → posisi, perusahaan, periode        │
│  └── award[]       → nama, tahun, images[], link        │
│                                                         │
│  Sanity Studio (Dashboard CMS)                          │
│  └── https://raihan-portfolio.sanity.studio             │
│                                                         │
│  Asset CDN                                              │
│  └── cdn.sanity.io/images/... (foto otomatis dioptimasi)│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                     GITHUB                              │
│         raizenHans/raihan-portfolio                     │
│                                                         │
│  main branch → push → Vercel auto deploy                │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Struktur Folder Project

```
raihan-portfolio/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/                   # Aset statis lokal (logo, CV)
│   │   └── cv-raihan.pdf
│   │
│   ├── components/               # Komponen reusable
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ImageSlider.jsx       # Komponen slideshow foto
│   │   ├── ProjectCard.jsx
│   │   ├── ExperienceCard.jsx
│   │   └── AwardCard.jsx
│   │
│   ├── sections/                 # Section per halaman utama
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── AwardsSection.jsx
│   │   └── ContactSection.jsx
│   │
│   ├── lib/
│   │   └── sanityClient.js       # Konfigurasi koneksi Sanity
│   │
│   ├── hooks/
│   │   └── useSanityData.js      # Custom hook fetch data
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 # Tailwind directives
│
├── sanity/                       # Sanity Studio (embedded)
│   ├── sanity.config.js
│   └── schemas/
│       ├── index.js              # Export semua schema
│       ├── profile.js
│       ├── project.js
│       ├── experience.js
│       └── award.js
│
├── .env                          # Environment variables (lokal)
├── .env.example                  # Template env untuk tim/deploy
├── .gitignore
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 3. Schema Data (Sanity)

### 3.1 Profile
```
profile
├── name          : string        → "Muhammad Raihan Nugraha"
├── tagline       : string        → "Full Stack Developer"
├── bio           : text          → paragraf about me
├── photo         : image         → foto profil
├── cvFile        : file          → upload PDF CV (opsional)
├── email         : string
├── linkedin      : url
├── github        : url
└── skills[]      : array<string> → ["React", "Laravel", ...]
```

### 3.2 Project
```
project
├── title         : string
├── description   : text
├── images[]      : array<image>  → slideshow foto
├── link          : url           → (opsional)
├── techStack[]   : array<string> → ["React", "Node.js"]
├── order         : number        → urutan tampil
└── featured      : boolean       → tampil di hero/highlight
```

### 3.3 Experience
```
experience
├── position      : string        → "Frontend Developer"
├── company       : string        → "PT. Contoh"
├── logo          : image         → logo perusahaan
├── startDate     : date
├── endDate       : date          → (kosong = "Present")
├── description   : text
├── type          : string        → "work" | "organization"
└── order         : number
```

### 3.4 Award
```
award
├── name          : string        → nama penghargaan
├── issuer        : string        → institusi pemberi
├── year          : number        → 2024
├── images[]      : array<image>  → slideshow foto dokumentasi
├── link          : url           → link event (opsional)
└── order         : number
```

---

## 4. Alur Data (Data Flow)

```
Sanity Studio
     │  (Raihan update konten)
     ▼
Content Lake (Sanity DB)
     │  (GROQ query via @sanity/client)
     ▼
useSanityData() hook
     │  (useState + useEffect)
     ▼
Section Component (ProjectsSection, dll)
     │  (props)
     ▼
Card Component (ProjectCard, dll)
     │  (render)
     ▼
Browser Pengunjung
```

---

## 5. Environment Variables

```bash
# .env (JANGAN di-commit ke GitHub)
VITE_SANITY_PROJECT_ID=xxxxxxxxx
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# Untuk Sanity Studio (read-only token untuk public fetch)
VITE_SANITY_TOKEN=              # opsional jika dataset public
```

---

## 6. Deployment Flow

```
1. Code di local (VS Code)
         │
         ▼
2. git push origin main
         │
         ▼
3. Vercel mendeteksi push (webhook GitHub)
         │
         ▼
4. Vercel build: npm run build (Vite)
         │
         ▼
5. Deploy ke CDN Vercel global
         │
         ▼
6. Live di: https://raihan-portfolio.vercel.app
```
