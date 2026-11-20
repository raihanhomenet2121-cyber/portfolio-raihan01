# Product Requirements Document (PRD)
# Raihan Portfolio Web

**Owner:** Muhammad Raihan Nugraha  
**GitHub:** raizenHans  
**Tanggal:** November 2026  
**Stack:** React Vite + Tailwind CSS + Sanity.io + Vercel  

---

## 1. Latar Belakang

Portfolio web personal untuk menampilkan profil profesional, proyek kerja, pengalaman, dan penghargaan secara visual dan interaktif. Konten dikelola melalui Sanity Studio (CMS headless) tanpa perlu menyentuh kode, dan di-hosting di Vercel dengan deploy otomatis dari GitHub.

---

## 2. Tujuan Produk

- Membangun kehadiran profesional online yang dapat dibagikan ke rekruter, klien, atau kolega
- Menyediakan CMS visual agar konten mudah diperbarui kapan saja tanpa coding
- Arsitektur yang fleksibel dan mudah dikembangkan di masa depan

---

## 3. Target Pengguna

| Pengguna | Peran |
|---|---|
| **Raihan (Owner)** | Mengelola konten via Sanity Studio, mengembangkan fitur baru |
| **Rekruter / HRD** | Melihat profil, proyek, dan pengalaman kerja |
| **Klien / Kolega** | Melihat portofolio dan menghubungi via link/kontak |

---

## 4. Fitur Utama

### 4.1 Halaman Publik (Frontend)

| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Hero Section | Foto profil, nama, tagline, tombol CTA (kontak / download CV) | Tinggi |
| About Me | Bio singkat, skill stack dengan ikon | Tinggi |
| Projects | Card grid per proyek, slideshow foto, deskripsi, link (opsional) | Tinggi |
| Experience | Card per pengalaman kerja/organisasi, periode, deskripsi | Tinggi |
| Awards | Card penghargaan, foto, link event (opsional) | Tinggi |
| Contact | Link email, LinkedIn, GitHub, media sosial | Menengah |
| Navbar | Navigasi smooth scroll atau per halaman | Tinggi |
| Responsif | Mobile-first, tampil baik di semua ukuran layar | Tinggi |
| Animasi | Transisi halus antar section dan card (Framer Motion) | Menengah |

### 4.2 CMS (Sanity Studio — Backend Konten)

| Fitur | Deskripsi |
|---|---|
| Kelola Projects | Tambah/edit/hapus proyek: judul, deskripsi, foto slideshow, link, urutan |
| Kelola Experience | Tambah/edit/hapus pengalaman: perusahaan, posisi, periode, deskripsi, logo |
| Kelola Awards | Tambah/edit/hapus penghargaan: nama, foto slideshow, link event, tahun |
| Kelola Profil | Edit nama, bio, foto profil, tagline, skill list |
| Upload Gambar | Upload dan kelola aset gambar langsung dari Sanity Studio |
| Urutan Konten | Drag & drop untuk mengatur urutan card yang tampil |

---

## 5. Kebutuhan Non-Fungsional

| Aspek | Target |
|---|---|
| **Performance** | Lighthouse score > 85 (Performance, SEO, Accessibility) |
| **Hosting** | Vercel Free Tier, auto-deploy dari branch `main` |
| **CMS** | Sanity Free Tier (10k dokumen, 20GB bandwidth) |
| **SEO** | Meta tag, Open Graph, deskripsi halaman |
| **Keamanan** | Sanity API token disimpan di environment variable Vercel |

---

## 6. Batasan (Out of Scope — V1)

- ❌ Sistem login/autentikasi untuk pengunjung
- ❌ Fitur blog / artikel
- ❌ Dark mode toggle (bisa ditambahkan V2)
- ❌ Multi-bahasa (Indonesia/Inggris)
- ❌ Analytics dashboard (bisa pakai Vercel Analytics V2)

---

## 7. Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animasi | Framer Motion |
| Routing | React Router DOM v6 |
| CMS | Sanity.io v3 (Sanity Studio) |
| Image | Sanity Asset CDN + @sanity/image-url |
| Hosting | Vercel |
| Repo | GitHub (raizenHans/raihan-portfolio) |
| Package Manager | npm |

---

## 8. Kriteria Selesai (Definition of Done)

- [ ] Repo GitHub `raihan-portfolio` sudah ada dan terhubung ke Vercel
- [ ] Sanity Studio bisa diakses dan schema Project/Experience/Award sudah terdefinisi
- [ ] Frontend berhasil fetch data dari Sanity dan tampil di halaman
- [ ] Deploy ke Vercel berhasil via push ke `main`
- [ ] Semua section tampil responsif di mobile dan desktop
