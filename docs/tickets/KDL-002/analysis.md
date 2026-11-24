# KDL-002 — Analisis Navbar & Mobile Navigation

**Status:** Analisis disetujui; rencana menunggu review dan implementasi belum disetujui  
**Sumber utama:** [requirement.md](./requirement.md)  
**Tahap:** Analisis repository, tanpa perubahan aplikasi

## 1. Repository Findings

- `src/App.jsx` adalah akar tampilan saat ini: satu `<main>` berisi judul “Kodela Studio”. Belum ada Navbar, komponen terpisah, section bisnis, atau ID pada `<main>`.
- `index.html` memiliki `id="root"` sebagai titik mount React. `src/main.jsx` merender `App` di dalam `StrictMode` dan mengimpor CSS global.
- `src/index.css` hanya mengimpor Tailwind CSS. `vite.config.js` mendaftarkan plugin React dan Tailwind; `App.jsx` memakai utility Tailwind.
- `package.json` menyediakan skrip `dev`, `build`, `lint`, dan `preview`. Tidak ditemukan skrip atau konfigurasi pengujian.
- `AGENTS.md` menetapkan perubahan sederhana, folder dibuat saat diperlukan, serta verifikasi lint, build, dan browser untuk perubahan UI.
- Saat pemeriksaan awal analisis, `git status --short --untracked-files=all` hanya menunjukkan `docs/tickets/KDL-002/requirement.md` sebagai file untracked. `analysis.md` dibuat setelah analisis disetujui. Tidak ada direktori `public/` saat ini. Daftar aset pada analisis KDL-001 adalah snapshot lama, bukan keadaan repository sekarang.

## 2. Requirement Coverage and Constraints

Navbar harus berada dalam alur dokumen biasa, menampilkan wordmark teks Kodela Studio, dan menyediakan anchor satu halaman hanya untuk target yang tersedia. Pada mobile, hamburger hanya boleh muncul untuk **minimal dua target valid**; pemilihan item menutup menu. Kontrol harus dapat dipakai dengan keyboard, mouse, dan touch.

CTA WhatsApp tidak ditampilkan dalam bentuk apa pun sebelum KDL-009. Requirement juga mengecualikan section placeholder, React Router, API/backend, scroll spy, animasi kompleks, dan dependensi baru yang tidak diperlukan. Label konseptual Home, Services, Portfolio, Process, FAQ, Contact perlu ditampilkan dalam bahasa Indonesia sesuai konten yang akhirnya tersedia.

## 3. Existing Section Targets & Navigation Visibility (0, 1, ≥2 cases)

| Kondisi | Keadaan atau hasil yang diharapkan |
| --- | --- |
| **0 target section** | **Keadaan repository saat analisis.** `<main>` belum memiliki ID. `#root` memang ada, tetapi merupakan titik mount, bukan section navigasi. Tidak ada item menu section atau hamburger yang layak ditampilkan; wordmark tetap tampil. |
| **1 target** | Keputusan yang disetujui: pada implementasi nanti tambahkan `id="beranda"` pada `<main>` yang sudah ada. Item Beranda dapat tampil karena targetnya nyata. Hamburger tetap tersembunyi. Ini tidak memerlukan section bisnis baru. |
| **≥2 target** | Hanya mungkin ketika section lain benar-benar dirender, atau dalam fixture pengujian terisolasi. Item valid tampil; hamburger mobile tersedia dan dapat membuka/menutup menu. |

## 4. Proposed Minimal Component/State Approach

Sebagai arah analisis, `App` tetap menjadi akar komposisi, dengan satu komponen Navbar sebelum `<main>`. Konfigurasi eksplisit item navigasi ditempatkan dekat komposisi section di `App`: untuk kondisi produksi saat ini hanya Beranda yang ditambahkan bersamaan dengan `id="beranda"` pada `<main>`. Section berikutnya menambah item hanya ketika section tersebut benar-benar dirender. Navbar menerima daftar item valid ini; penemuan target melalui query DOM bukan mekanisme utama. Keterkaitan konfigurasi dan elemen yang dirender tetap harus diperiksa dengan membandingkan `href` dan ID DOM aktual agar perubahan ID tidak meninggalkan link rusak.

State lokal boolean di Navbar cukup untuk menu mobile. State diperlukan hanya untuk membuka/menutup menu, lalu dikembalikan ke tertutup saat item dipilih. Wordmark pada aplikasi produksi dapat menuju `#beranda` setelah ID tersebut ditambahkan; pada fixture 0 target, wordmark berupa teks agar tidak membuat anchor rusak. Tautan wordmark tidak dihitung sebagai item section tambahan untuk aturan hamburger. Tidak diperlukan routing atau state global.

## 5. User Flow

Pengunjung melihat wordmark dan link section yang tersedia. Di desktop, link langsung menuju section. Di mobile dengan minimal dua target, pengunjung membuka menu, memilih link, lalu menu menutup dan browser menuju anchor. Dengan 0–1 target, pengunjung tidak melihat hamburger.

## 6. System Flow

`App` merender Navbar dan target halaman yang tersedia, lalu memberikan konfigurasi item yang sesuai dengan target yang dipasang. Navbar merender tombol mobile hanya bila jumlah item valid minimal dua. Tombol mengubah state terbuka/tertutup; aktivasi anchor menggunakan navigasi hash pada halaman yang sama dan menutup menu.

## 7. Accessibility and Responsive Risks

Gunakan semantik `header` dan `nav`; hamburger berupa `button` dengan accessible name, `aria-expanded` yang mengikuti state, serta focus indicator yang terlihat. Link dalam menu tertutup tidak boleh tetap dapat difokus lewat Tab. Interaksi tidak boleh bergantung pada hover.

Peralihan viewport mobile ke desktop perlu diperiksa saat menu sedang terbuka agar tampilan desktop tidak tertutup atau memiliki navigasi ganda yang mengganggu. Lebar 360, 768, dan 1280 px perlu diperiksa untuk tabrakan elemen dan horizontal overflow. Karena halaman saat ini pendek, perilaku navbar static saat scroll memerlukan konten yang cukup dalam lingkungan pengujian.

## 8. Edge Cases, Test Strategy, and How to Test Mobile Menu Without Production Placeholders

Uji 0, 1, dan ≥2 target; target yang hilang atau ID-nya berubah; buka/tutup berulang; pemilihan item; perpindahan viewport; keyboard dan touch; serta ketiadaan CTA WhatsApp di tampilan dan DOM. Setelah implementasi diizinkan, jalankan `npm.cmd run lint`, `npm.cmd run build`, pemeriksaan browser, dan review diff.

Untuk kasus ≥2, gunakan fixture/harness **sementara dan terisolasi** yang merender dua anchor valid bersama Navbar. Jalankan interaksi mobile dan periksa `aria-expanded`, penutupan menu, serta hash/target. Fixture itu tidak menjadi section bisnis production dan harus tidak ada pada diff akhir. Bila pengujian tersebut belum dilakukan, AC-05/06 untuk kondisi ≥2 dicatat **Not Verified**, bukan Pass. Pada tahap analisis ini tidak ada lint, build, atau tes browser yang dijalankan.

## 9. Approved Decisions and Remaining Assumptions

**Keputusan disetujui:** Navbar static; `id="beranda"` pada `<main>` yang ada saat implementasi; konfigurasi eksplisit berdasar section yang dirender tanpa query DOM sebagai mekanisme utama; hanya link bertarget nyata; hamburger tersembunyi pada 0/1 target; state React lokal; tanpa CTA WhatsApp sebelum KDL-009, routing, API/backend, atau dependensi tidak perlu; pengujian ≥2 target memakai fixture terisolasi yang tidak masuk production.

**Asumsi tersisa:** Kandidat label tampil adalah Beranda, Layanan, Portofolio, Proses, FAQ, Kontak; label untuk section berikutnya perlu dicocokkan dengan konten aktual. Tautan wordmark dihitung terpisah dari item menu section untuk aturan hamburger. Pada kondisi 0 target dalam fixture, brand tidak menjadi tautan ke anchor yang tidak ada.

## 10. Technical Risks and Need Clarification

Konfigurasi eksplisit dapat tertinggal ketika ID section berubah atau section dihapus; periksa pasangan `href` dan ID ter-render saat tiap ticket menambah section. Halaman produksi sekarang pendek sehingga uji scroll untuk posisi static perlu fixture dengan konten cukup. Kondisi ≥2 tidak tersedia di produksi sekarang sehingga AC-05/06 bergantung pada fixture terisolasi. Tidak ada blocker untuk planning; label section berikutnya menunggu kontennya tersedia.

## 11. Recommendation & Readiness for Planning

Analisis siap menjadi masukan planning. Repository saat ini belum memiliki target section; setelah implementasi yang disetujui nanti, `<main id="beranda">` menyediakan satu target, sehingga hamburger tetap tersembunyi. Rencana implementasi harus mengikat konfigurasi navigasi ke target yang benar-benar dirender, memakai state lokal untuk menu mobile, dan menguji kondisi ≥2 melalui fixture sementara. Persetujuan analisis dan dokumentasinya tidak mengesahkan implementasi.
