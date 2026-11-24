# KDL-003 — Analisis Hero Section

**Status:** Analisis untuk review; rencana dan implementasi belum disetujui  
**Sumber utama:** [requirement.md](./requirement.md)  
**Tahap:** Analisis repository, tanpa perubahan aplikasi

## 1. Repository Findings

- `src/App.jsx` merender `Navbar` sebelum `<main id="beranda">`. Di dalam `<main>` saat ini hanya ada `h1` “Kodela Studio”; Hero belum ada.
- Daftar navigasi di `App.jsx` hanya memuat Beranda dengan `href="#beranda"`. Tidak ada section Layanan, Portofolio, Proses, FAQ, atau Kontak yang dirender. Karena itu belum ada target CTA Hero yang relevan.
- `src/components/Navbar.jsx` adalah komponen terpisah dengan header dalam alur dokumen biasa. Wordmark dan item Beranda menuju `#beranda`; menu mobile baru tersedia bila jumlah item minimal dua. Integrasi Hero tidak perlu mengubah perilaku ini.
- `<main>` memakai `min-h-screen bg-white px-6 py-12 text-slate-900 sm:px-10`. Padding dan tinggi minimum ini akan memengaruhi komposisi Hero; desain perlu mempertimbangkannya agar jarak dari Navbar, lebar teks, dan tampilan mobile tetap tepat.
- `src/index.css` hanya mengimpor Tailwind CSS. `package.json` menyediakan skrip `dev`, `build`, `lint`, dan `preview`, tanpa skrip pengujian otomatis. Tidak ada direktori `public/` atau aset Hero yang perlu dipakai.
- Pada awal analisis, `git status --short` menunjukkan `docs/tickets/KDL-003/` sebagai direktori untracked. `requirement.md` di direktori tersebut dipertahankan; analisis ini hanya menambah dokumen baru.

## 2. Requirement Coverage and Constraints

Hero harus menjadi konten awal di dalam `<main id="beranda">`, tepat setelah Navbar, dengan satu `h1` halaman. Headline dan subheadline wajib menggunakan Opsi A yang disetujui pada requirement §12. Arah visualnya Clean Professional: hierarki tipografi, ruang, keterbacaan, serta aksen CSS/Tailwind ringan tanpa ilustrasi atau aset khusus.

CTA hanya boleh berupa anchor internal menuju section relevan yang benar-benar dirender. Keadaan repository saat ini tidak menyediakan target tersebut, sehingga Hero produksi untuk KDL-003 **tidak menampilkan CTA**. Tidak boleh menambah placeholder section, tautan `#`, tautan ke Hero/Beranda sendiri sebagai pengganti, atau CTA WhatsApp. Navbar tetap static; tidak diperlukan routing, API, state Hero, atau dependensi baru.

## 3. Existing Structure, Copy, and CTA Eligibility

| Elemen | Keadaan saat analisis | Implikasi KDL-003 |
| --- | --- | --- |
| Navbar | Sudah dirender sebelum `<main>` dan memiliki tautan Beranda yang valid. | Pertahankan posisi, perilaku static, serta target `#beranda`. |
| `<main id="beranda">` | Satu-satunya target anchor halaman. | Tempatkan Hero sebagai konten awal di dalamnya; jangan membuat ID Beranda kedua. |
| `h1` saat ini | Berisi “Kodela Studio”. | Saat implementasi, jadikan headline Opsi A sebagai `h1` utama dan hindari dua `h1` yang bersaing. |
| Copy Hero | Belum ada di aplikasi. | Gunakan persis headline dan subheadline yang telah disetujui dalam requirement §12. |
| Target CTA | Belum ada section tujuan yang relevan selain Beranda. | Jangan render CTA pada keadaan produksi saat ini. |

Headline yang disetujui: **Website Profesional untuk Bisnis yang Terus Berkembang**. Subheadline yang disetujui: **Kodela Studio membantu UMKM dan perusahaan membangun website serta aplikasi web yang modern, mudah digunakan, dan sesuai kebutuhan bisnis.**

## 4. Proposed Minimal Component and Layout Approach

Sebagai arah analisis, `App` tetap menjadi akar komposisi dan `Navbar` tetap sebelum `<main>`. Hero dapat dipisahkan menjadi satu komponen section agar konten dan tampilan Hero jelas, sementara `App` mempertahankan tanggung jawab atas urutan halaman dan `id="beranda"`. Tidak diperlukan state lokal karena kontennya statis.

Gunakan ukuran teks yang bertahap, lebar baca yang dibatasi, dan ruang vertikal yang sesuai dengan padding `<main>` yang sudah ada. Aksen dekoratif dapat dibuat dengan utility Tailwind atau CSS ringan dan tidak boleh membawa informasi yang hanya bisa dipahami lewat dekorasi. Perubahan pada kelas `<main>` boleh direncanakan jika perlu untuk komposisi Hero, dengan mempertahankan latar, keterbacaan, dan anchor Beranda.

Jika section tujuan ditambahkan pada ticket berikutnya, konfigurasi CTA dapat diberikan dari komposisi halaman bersama target yang benar-benar dirender. Pada implementasi KDL-003 saat ini, prop atau konfigurasi CTA yang belum dipakai tidak perlu dibuat hanya untuk persiapan masa depan.

## 5. User Flow

Pengunjung membuka halaman, melihat Navbar, lalu membaca headline dan subheadline Hero. Karena belum ada section tujuan yang relevan, pengunjung tidak melihat CTA. Tautan Beranda pada Navbar tetap menuju `<main id="beranda">`. Saat section tujuan nyata tersedia di ticket berikutnya, CTA internal dapat ditambahkan dengan label yang sesuai dan anchor yang valid.

## 6. System Flow

`App` merender `Navbar` dan `<main id="beranda">` yang berisi Hero. React menampilkan copy Opsi A dan aksen visual ringan tanpa mengambil data atau memuat aset eksternal. Browser menangani anchor Beranda dari Navbar. Tidak ada kontrol interaktif atau state baru pada Hero produksi saat ini.

## 7. Accessibility and Responsive Risks

Headline panjang perlu membungkus secara alami pada lebar 360px tanpa overflow atau kata terpotong. Periksa hierarki `h1`, ukuran teks, panjang baris, kontras, dan ruang di 360px, 768px, serta 1280px. Pada zoom 200%, teks dan ruang tetap harus dapat dibaca tanpa overlap atau pemotongan.

Aksen CSS yang murni dekoratif tidak boleh menjadi satu-satunya penyampai informasi atau mendapat fokus keyboard. Karena Hero saat ini tanpa CTA, pemeriksaan fokus tetap mencakup tautan Navbar yang sudah ada. Jika CTA kelak ditambahkan, label, fokus terlihat, serta kecocokan `href` dengan ID DOM perlu diperiksa. Penambahan Hero juga perlu memastikan Navbar tetap mengikuti alur dokumen saat halaman cukup panjang untuk di-scroll.

## 8. Edge Cases and Test Strategy

Setelah plan dan implementasi disetujui, periksa Hero pada 360px, 768px, dan 1280px; wrapping headline; zoom 200%; keyboard; kontras; serta ketiadaan horizontal overflow. Inspeksi DOM untuk memastikan hanya satu `h1`, `#beranda` tetap ada, dan tidak ada CTA dummy, WhatsApp, atau placeholder section. Jalankan `npm.cmd run lint`, `npm.cmd run build`, pemeriksaan browser, dan review diff.

AC-05 mengenai CTA saat target nyata tersedia tidak dapat dibuktikan dari halaman produksi KDL-003 yang hanya memiliki Beranda. Bila pendekatan CTA kondisional sudah diimplementasikan dan perlu diuji, gunakan fixture sementara yang terisolasi dengan target dan ID valid; jangan kirim fixture sebagai section produksi. Jika jalur itu belum dibangun atau diuji, catat AC-05 sebagai **Not Verified**, bukan Pass. Pada tahap analisis ini lint, build, dan pemeriksaan browser belum dijalankan.

## 9. Approved Decisions and Remaining Assumptions

**Keputusan disetujui dalam requirement:** gaya Clean Professional; copy Opsi A; tipografi dan aksen CSS/Tailwind ringan tanpa aset khusus; CTA internal hanya untuk target nyata dan relevan; tanpa CTA bila belum ada target; tidak ada WhatsApp CTA sebelum KDL-009; Navbar static dan `#beranda` dipertahankan.

**Asumsi teknis untuk planning:** Hero menjadi konten awal di dalam `<main>` yang ada. `h1` sementara digantikan oleh headline yang disetujui, sedangkan wordmark Navbar tetap sebagai identitas brand. Pemisahan satu komponen Hero dapat menjaga `App` tetap ringkas tanpa membuat struktur atau abstraksi tambahan.

## 10. Technical Risks and Need Clarification

- Padding dan `min-h-screen` pada `<main>` perlu ditinjau bersama ukuran Hero supaya komposisi tidak terlalu kosong atau menempel ke Navbar pada viewport berbeda.
- Headline dan subheadline yang cukup panjang dapat menghasilkan baris sempit pada mobile atau zoom tinggi; verifikasi visual diperlukan setelah implementasi.
- CTA yang kelak ditambahkan bisa menjadi link rusak bila target dihapus atau ID berubah. Konfigurasi CTA harus diperbarui bersama komposisi section dan diperiksa terhadap DOM ter-render.
- Tidak ada blocker untuk planning. Label dan target CTA masa depan baru perlu ditetapkan ketika section tujuan tersedia.

## 11. Recommendation and Readiness for Planning

Analisis siap menjadi masukan `plan.md`. Rencana perlu mempertahankan struktur Navbar dan `#beranda`, mengganti judul sementara dengan copy Opsi A sebagai satu `h1`, merancang Hero responsif dengan aksen CSS/Tailwind ringan, serta mengirim KDL-003 tanpa CTA pada keadaan repository saat ini. Persetujuan analisis atau pembuatan dokumen ini tidak mengesahkan perubahan source; requirement menetapkan review dan persetujuan plan tersendiri sebelum implementasi.
