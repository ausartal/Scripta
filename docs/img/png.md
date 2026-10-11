# Project Scripta - Analisis Teknis

## Ringkasan Projekt
**Nama:** Scripta  
**Tipologi:** Portfolio & Services Website  
**Status:** Dalam Pengembangan  

## Stack Teknologi
| Layer  | Teknologi                 | Versi     |
|--------|---------------------------|-----------|
| Build  | Vite                      | v8.x      |
| UI     | React                     | v19       |
| Routing| React Router (v7)         | v7        |
| Graphics| OGL (WebGL canvas)       | v1        |
| Lint   | Oxlint                    | v1.75.x   |

## Struktur Direktori Utama
```
Scripta/
├── index.html                 # Entry point Vite
├── vite.config.js             # Konfigurasi Vite + React plugin
├── public/                    # Static assets
│   ├── favicon.svg
│   ├── logo.svg
│   ├── icons.svg
│   └── img/                   # Gambar statis
├── src/
│   ├── main.jsx               # Bootstrap React
│   ├── App.jsx                # Router + layout chrome
│   ├── index.css              # Global styles
│   ├── components/            # Component React
│   │   ├── layout/            # Navbar, Footer
│   │   ├── sections/          # Hero, Services, Projects, etc.
│   │   ├── GradientWaves.jsx  # OGL WebGL waves
│   │   └── PixelSwap.jsx      # Efek transisi pixel
│   └── pages/                 # Halaman: Home, About, Contact, dll
└── docs/img/                  # Dokumentasi imagery (target lokasi)
```

## Fitur Kunci
1. **Hero Animation** – Gradient wave dengan OGL + mouse parallax
2. **Pixel-Swap Transition** – Efek transisi visual signature
3. **Multi-page Routing** – Home, Services, Portfolio, About, FAQ, Contact
4. **Responsive Design** – Mobile-first layout
5. **Sticky Chrome** – Navbar & footer tetap di semua route

## Tujuan Proyek
Studio kreatif yang bersektor pada persimpangan:
- **🎓 Pendidikan:** Pemahaman kebutuhan akademik & pembelajaran
- **⚙️ Teknologi:** Tools modern & best practices
- **🎭 Kreativitas:** Desain hasil yang menonjol

**Motto:** "We turn ideas into digital experiences."

## Catatan Pengembangan
- ~~Next.js~~ → Migrasi ke Vite/React selesai ✓
- 7 halaman ter-rute selesai ✓
- Contact form backend: TODO
- CMS-driven portfolio: PENDING
- Dark mode toggle: PLANNING

---
*Education × Technology × Creativity*  
© ausartal / Scripta Project Team
