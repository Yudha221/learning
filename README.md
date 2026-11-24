# Kodela Studio

Fondasi frontend untuk landing page satu halaman Kodela Studio. Saat ini aplikasi hanya menampilkan identitas proyek. Section bisnis dan integrasi akan ditambahkan pada pekerjaan berikutnya.

## Stack dan lingkungan

- React dan Vite dengan JavaScript/JSX
- Tailwind CSS v4
- Node.js 24.20.0 dan npm

## Menjalankan proyek

```powershell
npm.cmd ci
npm.cmd run dev
```

Buka URL lokal yang ditampilkan Vite. Pada shell yang tidak memblokir launcher npm, `npm` dapat digunakan sebagai pengganti `npm.cmd`.

## Pemeriksaan dan build

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

`preview` menyajikan hasil build lokal untuk pemeriksaan. Hasil build berada di `dist/` dan tidak perlu diedit langsung.

## Struktur saat ini

- `index.html`: dokumen dan elemen mount React.
- `src/main.jsx`: bootstrap React dan impor CSS global.
- `src/App.jsx`: akar komposisi halaman.
- `src/index.css`: impor Tailwind CSS.
- `vite.config.js`: konfigurasi plugin React dan Tailwind CSS.
- `docs/tickets/KDL-001/`: requirement, analisis, dan rencana fondasi.

Tambahkan komponen, section, atau modul konten di `src/` ketika fiturnya benar-benar diperlukan. Jangan membuat direktori kosong sebagai placeholder.
