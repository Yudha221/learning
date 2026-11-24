# KDL-003 — Rencana Hero Section

**Status:** Disetujui untuk implementasi oleh pengguna pada 24 November 2026  
**Sumber utama:** [Requirement KDL-003](./requirement.md)  
**Dasar analisis:** [Analisis KDL-003](./analysis.md)  
**Dependensi:** KDL-001 (fondasi) dan KDL-002 (Navbar)

Repository saat planning sudah merender `Navbar` sebelum `<main id="beranda">`. Isi `<main>` masih berupa `h1` sementara “Kodela Studio”. Hanya Beranda yang tersedia sebagai target anchor; belum ada section tujuan CTA yang relevan. Rencana ini mengikuti kondisi tersebut dan copy Opsi A yang disetujui dalam requirement §12. Seluruh acceptance criteria masih **Not Verified** sampai implementasi dan pemeriksaan dilakukan.

## 1. Implementation Goal

Menampilkan Hero yang segera menjelaskan layanan Kodela Studio melalui headline dan subheadline yang disetujui. Tampilan mengikuti arah Clean Professional, dapat dibaca pada mobile hingga desktop, dan terintegrasi dengan Navbar static serta anchor Beranda yang sudah ada. Hero produksi KDL-003 tampil lengkap tanpa CTA karena belum ada target internal yang relevan.

## 2. Scope

**Dalam cakupan:** satu Hero setelah Navbar sebagai konten awal `<main id="beranda">`; copy Opsi A; satu `h1` utama; layout responsif, spacing, alignment, dan aksen ringan dengan Tailwind/CSS yang sudah tersedia; aksesibilitas dasar; verifikasi lint, build, browser, dan diff.

**Di luar cakupan:** section Services, Portfolio, Process, FAQ, Contact atau placeholder; CTA WhatsApp dan alur inquiry KDL-009; logo akhir, harga, testimoni, statistik, atau konten portofolio; ilustrasi, foto, gambar eksternal, aset khusus, video, carousel, animasi kompleks; perubahan Navbar menjadi sticky/fixed; routing, backend/API/CMS, dependensi baru, deployment, commit, atau push.

## 3. File Change Plan

| File | Tindakan setelah plan disetujui | Tanggung jawab dan alasan |
| --- | --- | --- |
| `src/sections/Hero.jsx` | Buat. | Satu komponen section untuk headline, subheadline, dan aksen dekoratif ringan. Tidak memakai state atau aset eksternal. Folder `sections` dibuat karena ada section nyata. |
| `src/App.jsx` | Ubah. | Pertahankan `Navbar` sebelum `<main id="beranda">`, gantikan `h1` sementara dengan Hero, dan sesuaikan kelas layout `<main>` bila dibutuhkan untuk komposisi responsif. Daftar navigasi Beranda tetap menuju ID yang ada. |

`src/components/Navbar.jsx`, `src/main.jsx`, `src/index.css`, `index.html`, `vite.config.js`, `package.json`, dan lockfile tidak direncanakan berubah. Utility Tailwind cukup untuk tampilan yang direncanakan; bila pemeriksaan visual menunjukkan kebutuhan CSS global yang benar-benar spesifik, alasan dan perubahan itu harus dicatat pada diff. Tidak ada prop CTA atau abstraksi konfigurasi tambahan yang dibuat hanya untuk penggunaan di masa depan.

## 4. Implementation Steps

1. Tunggu persetujuan eksplisit atas `plan.md` sebelum mengubah source aplikasi atau menjalankan implementasi KDL-003.
2. Saat implementasi dimulai, periksa ulang `git status`, `App.jsx`, Navbar, dan target ID yang benar-benar dirender. Pertahankan perubahan lokal yang tidak berasal dari ticket ini.
3. Buat `Hero.jsx` dengan `h1` persis **Website Profesional untuk Bisnis yang Terus Berkembang** dan paragraf persis **Kodela Studio membantu UMKM dan perusahaan membangun website serta aplikasi web yang modern, mudah digunakan, dan sesuai kebutuhan bisnis.** Jangan menambah klaim bisnis atau copy pemasaran baru yang belum disetujui.
4. Tempatkan Hero sebagai konten awal di dalam `<main id="beranda">` setelah Navbar. Hapus `h1` sementara dari `App` agar halaman memiliki satu `h1`. Jaga tautan Beranda tetap menuju `<main>` dan Navbar tetap dalam alur dokumen biasa.
5. Susun hierarki tipografi, batas lebar teks, ruang vertikal, dan aksen CSS/Tailwind ringan. Sesuaikan padding dan `min-h-screen` `<main>` hanya jika diperlukan agar Hero nyaman pada mobile, tablet, desktop, dan zoom 200%. Informasi utama harus tetap terbaca bila aksen tidak muncul.
6. Jangan render CTA pada produksi KDL-003: `#beranda` bukan tujuan CTA yang relevan dan section bisnis lain belum tersedia. Jangan membuat placeholder, tautan kosong, WhatsApp CTA, atau prop CTA yang belum digunakan. Saat section tujuan ditambahkan pada ticket berikutnya, konfigurasi CTA dan target yang dirender harus ditambahkan bersama dan `href` dicocokkan dengan ID DOM.
7. Jalankan pemeriksaan pada bagian 8, perbaiki masalah dalam cakupan, review diff akhir, dan catat status setiap AC berdasarkan bukti. Hentikan server lokal setelah pemeriksaan.

## 5. Acceptance Criteria Mapping

Teks AC mengikuti `requirement.md`; tabel ini merencanakan cara pembuktiannya. Semua status saat planning adalah **Not Verified**.

| ID | Acceptance criteria (sesuai requirement) | Planned implementation | Validation method and expected result |
| --- | --- | --- | --- |
| AC-01 | Hero muncul tepat setelah Navbar dalam halaman Kodela Studio tanpa mengganti struktur root yang diperlukan. | Hero menjadi konten awal `<main>` setelah Navbar. | Periksa urutan DOM dan tampilan; root React, Navbar, dan `<main>` tetap ada. |
| AC-02 | Headline dan subheadline menggunakan **copy Opsi A** yang disetujui pada §12 serta menjelaskan positioning Kodela Studio. | Teks Opsi A dipasang persis di Hero. | Bandingkan teks ter-render dengan requirement §12; tidak ada klaim tambahan. |
| AC-03 | Hero mengikuti gaya Clean Professional dengan hierarchy, alignment, spacing, keterbacaan yang baik, serta aksen CSS/Tailwind ringan tanpa aset visual khusus. | Tipografi, lebar baca, ruang, dan aksen utility Tailwind. | Tinjau visual mobile/desktop serta source dan aset; pesan utama jelas tanpa ilustrasi/aset khusus. |
| AC-04 | Tidak terdapat CTA internal apabila belum ada section tujuan yang valid dan relevan. | Tidak merender CTA pada kondisi produksi saat ini. | Periksa tampilan dan DOM; tidak ada tombol/link CTA Hero. |
| AC-05 | Ketika section tujuan benar-benar tersedia, CTA internal (jika dikonfigurasi) memakai anchor yang cocok dengan ID DOM dan navigasinya bekerja. | Integrasi CTA dilakukan bersama section tujuan pada ticket berikutnya; KDL-003 tidak membuat target atau konfigurasi semu. | Saat target nyata dan CTA tersedia, periksa `href` ↔ ID dan aktivasi anchor. Pada kondisi KDL-003 sekarang, catat **Not Verified**; jangan klaim Pass dari ketiadaan CTA. |
| AC-06 | Tidak terdapat CTA WhatsApp, link dummy, atau placeholder section yang dibuat khusus untuk CTA. | Tidak menambah elemen atau section tersebut. | Inspeksi source, DOM, tampilan, dan diff; tidak ada WhatsApp/dummy/placeholder. |
| AC-07 | Navbar static dan anchor `#beranda` hasil KDL-002 tetap bekerja. | Navbar tidak diubah; `<main id="beranda">` dipertahankan. | Klik Beranda, cocokkan hash dan ID; periksa computed position serta scroll ketika konten cukup. |
| AC-08 | Hero responsif pada lebar 360px, 768px, dan 1280px, tanpa teks terpotong, overlap, atau horizontal overflow. | Ukuran teks, lebar, dan spacing responsif. | Periksa ketiga lebar dan zoom 200%; tidak ada clipping, overlap, atau horizontal overflow. |
| AC-09 | Struktur heading, kontras, fokus keyboard untuk link yang ada, serta elemen dekoratif memenuhi pemeriksaan aksesibilitas dasar. | Satu `h1`, teks kontras, dekorasi noninteraktif; link Navbar tetap fokus terlihat. | Inspeksi heading dan DOM; uji Tab/Enter, fokus link, kontras, dan dekorasi tidak tabbable. |
| AC-10 | Lint dan production build berhasil; diff hanya berisi perubahan terkait KDL-003 dan tidak menambah dependency tanpa alasan yang disetujui. | Perubahan source dibatasi pada Hero dan komposisi `App`. | `npm.cmd run lint`, `npm.cmd run build`, review status/diff serta manifest; catat exit code dan cakupan akhir. |

## 6. UI Behavior

- **Mobile:** headline membungkus alami, subheadline tetap mudah dibaca, aksen tidak mengganggu teks, dan tidak ada overflow pada 360px.
- **Tablet dan desktop:** hierarki judul tetap jelas dengan lebar baca terkontrol dan ruang yang seimbang pada 768px serta 1280px.
- **CTA:** tidak muncul pada produksi KDL-003. Pengunjung tetap dapat memakai Beranda di Navbar; tidak ada tombol yang mengarah kembali ke Hero.
- **Scroll:** Navbar tetap bergerak bersama dokumen. Hero tidak menambah perilaku sticky, overlay, atau animasi yang diperlukan untuk memahami konten.

## 7. State and Accessibility

Hero tidak membutuhkan state, fetch, loading, atau error UI. Teks utama memakai satu `h1` dan paragraf yang semantik di dalam `<main>`. Elemen aksen murni dekoratif tidak menjadi kontrol atau elemen fokus; bila berupa elemen DOM, sembunyikan dari teknologi bantu dengan cara yang sesuai. Pilih warna teks/latar dengan kontras yang memadai dan pastikan keterbacaan tanpa aksen.

Hero produksi tidak memiliki link baru. Pemeriksaan keyboard tetap mencakup wordmark dan tautan Beranda pada Navbar. Jika CTA internal ditambahkan pada pekerjaan berikutnya, gunakan anchor native dengan label yang menggambarkan target aktual, fokus terlihat, dan ID tujuan yang benar-benar dirender.

## 8. Testing Plan

Pengujian aplikasi berikut dilakukan **setelah persetujuan implementasi**. Pada tahap dokumen ini belum ada hasil lint, build, atau browser untuk KDL-003.

| Pemeriksaan | Cara dan bukti yang diharapkan |
| --- | --- |
| Lint dan build | Jalankan `npm.cmd run lint` dan `npm.cmd run build`; catat hasil sebenarnya. |
| Browser smoke | Jalankan server lokal, periksa tampilan dan konsol di browser yang tersedia, lalu hentikan server. |
| Copy dan struktur | Bandingkan headline/subheadline dengan requirement §12; inspeksi urutan Navbar → main → Hero, satu `h1`, dan `id="beranda"`. |
| Responsif dan zoom | Periksa 360, 768, 1280 px serta zoom 200%; tidak ada teks terpotong, overlap, atau horizontal overflow. |
| Aksesibilitas | Periksa kontras, heading, Tab/Enter dan fokus link Navbar; dekorasi tidak mendapat fokus atau menyembunyikan informasi utama. |
| CTA dan target | Periksa tampilan, DOM, serta source: tidak ada CTA Hero, WhatsApp, `href="#"`, link ke target yang belum ada, atau placeholder section. AC-05 tetap Not Verified sampai ada CTA dengan target nyata dan pengujian anchor. |
| Regresi Navbar | Aktifkan Beranda dan verifikasi `#beranda`; periksa posisi Navbar saat scroll dengan konten cukup jika perlu memakai lingkungan uji sementara yang tidak masuk produksi. |
| Cakupan akhir | Periksa `git status` dan diff; hanya perubahan terkait KDL-003, tanpa dependency baru atau file uji sementara yang tertinggal. |

Jika pemeriksaan tertentu tidak dapat dijalankan, laporkan **Not Verified** beserta alasan dan jangan menandainya Pass.

## 9. Risks and Dependencies

| Risiko atau dependensi | Dampak dan penanganan |
| --- | --- |
| Spacing `<main>` yang ada tidak cocok dengan Hero | Periksa komposisi setelah Hero dipasang; sesuaikan kelas layout dalam cakupan KDL-003 tanpa mengubah anchor atau Navbar. |
| Headline panjang pada 360px atau zoom 200% | Gunakan wrapping alami dan batas lebar responsif; periksa clipping dan overflow secara visual. |
| Aksen mengurangi kontras atau mengganggu teks | Jaga aksen ringan dan dekoratif; periksa kontras serta keterbacaan saat aksen tidak ada. |
| CTA diaktifkan sebelum ada target nyata | Jangan memasangnya pada KDL-003; pada ticket section berikutnya, tambahkan CTA bersama target dan uji `href` ↔ ID DOM. |
| KDL-001 dan KDL-002 | Fondasi dan Navbar sudah ada di source saat planning; pertahankan struktur dan uji regresinya setelah perubahan Hero. |
| KDL-009 | WhatsApp/inquiry tetap menjadi pekerjaan ticket tersebut; tidak ada integrasi atau nilai kontak dalam Hero ini. |

Tidak ada blocker untuk rencana KDL-003. Rincian CTA masa depan menunggu section tujuan yang benar-benar tersedia.

## 10. Rollback Plan

Sebelum implementasi, catat status dan diff agar perubahan lokal lain tetap terjaga. Bila perubahan KDL-003 perlu dibatalkan, balikkan hanya pemasangan Hero dan penyesuaian layout di `src/App.jsx`, lalu hapus `src/sections/Hero.jsx` setelah memastikan tidak dipakai pekerjaan lain. Periksa status/diff sebelum dan sesudahnya. Jangan menggunakan `git reset --hard`, `git clean`, atau menghapus file milik pekerjaan lain. Rollback tidak dilakukan pada tahap dokumentasi ini.

**Gerbang akhir:** Pengguna menyetujui plan dan meminta implementasi KDL-003 pada 24 November 2026. Commit, push, dan deployment tetap di luar cakupan persetujuan tersebut.

## Catatan revisi visual

Setelah implementasi awal, pengguna meminta tampilan Hero diperbagus dan mengizinkan gambar atau ikon. Hero kemudian diberi ilustrasi antarmuka website dan ikon dekoratif berbasis SVG/Tailwind di `src/sections/Hero.jsx`. Perubahan ini mengikuti instruksi terbaru pengguna; copy Opsi A, ketiadaan CTA tanpa target, dan struktur Navbar/Beranda tetap berlaku. Tidak ada aset eksternal atau dependensi baru.
