# KDL-002 — Rencana Navbar & Mobile Navigation

**Status:** Menunggu review dan persetujuan; implementasi belum diizinkan  
**Sumber utama:** [Requirement KDL-002](./requirement.md)  
**Dasar analisis:** [Analisis KDL-002](./analysis.md)  
**Konteks fondasi:** [Analisis KDL-001](../KDL-001/analysis.md) dan [Rencana KDL-001](../KDL-001/plan.md)

Dokumen KDL-001 menjelaskan snapshot lama. Pemeriksaan repository saat planning menunjukkan `src/App.jsx` hanya memiliki `<main>` dan judul Kodela Studio, tanpa Navbar atau ID Beranda. `index.html` memiliki `#root` sebagai titik mount React. `src/main.jsx` memuat `App` dan CSS, `src/index.css` mengimpor Tailwind, dan `vite.config.js` sudah mendaftarkan plugin React serta Tailwind. Konfigurasi dan tes yang direncanakan di bawah mengikuti kondisi sekarang. Tidak ada pertentangan antara requirement KDL-002 dan keputusan analisis yang disetujui.

## 1. Implementation Goal

Menyediakan identitas dan navigasi satu halaman yang jelas bagi pengunjung Kodela Studio, dengan link hanya ke bagian yang telah tersedia. Navbar berada dalam alur dokumen biasa. Saat ini implementasi akan menyediakan satu target nyata, Beranda pada `<main>` yang sudah ada; kemampuan menu mobile untuk dua target atau lebih tetap dibuat dan diuji tanpa mengirim section placeholder ke produksi.

## 2. Scope

**Dalam cakupan:** komponen Navbar yang dapat dipakai ulang, integrasi minimal ke `App`, `id="beranda"` pada `<main>` yang sudah ada, wordmark teks, konfigurasi eksplisit item yang sesuai dengan section yang dirender, link anchor satu halaman, menu mobile dengan state lokal pada ≥2 target, semantik/aksesibilitas dasar, dan gaya responsif memakai Tailwind yang sudah terpasang.

**Di luar cakupan:** membuat Hero atau section bisnis lain; CTA WhatsApp aktif maupun preview sebelum KDL-009; logo final; sticky/fixed positioning; scroll spy, listener scroll, atau animasi kompleks; React Router; backend/API, form, global state, dependensi baru, deployment, atau perubahan copy section lain. Fixture pengujian bersifat sementara dan tidak masuk hasil produksi.

## 3. File Change Plan

| File | Tindakan | Tanggung jawab dan alasan |
| --- | --- | --- |
| `src/components/Navbar.jsx` | **Buat setelah plan disetujui.** | Komponen presentasi dan interaksi Navbar: `header`/`nav`, wordmark, link valid, tombol mobile, state lokal, dan gaya Tailwind. Satu komponen nyata cukup; tidak perlu folder atau abstraksi lain. |
| `src/App.jsx` | **Ubah setelah plan disetujui.** | Tetap menjadi akar komposisi. Pasang Navbar sebelum `<main>`, beri `<main>` yang ada `id="beranda"`, dan sediakan daftar navigasi eksplisit yang saat ini hanya berisi Beranda. Daftar bertambah hanya bersama section yang benar-benar dirender. |
| Fixture pengujian sementara, misalnya entri Vite lokal dan komponen fixture | **Buat hanya saat pengujian setelah implementasi diizinkan, lalu hapus sebelum review akhir.** | Render Navbar dengan 0, 1, dan minimal 2 target nyata, termasuk konten cukup panjang untuk uji scroll. Tidak ditautkan dari `App` produksi, tidak menjadi section bisnis, dan tidak tertinggal dalam diff akhir. |

`src/main.jsx`, `src/index.css`, `index.html`, `vite.config.js`, `package.json`, dan lockfile tidak direncanakan berubah. Utility Tailwind dalam komponen cukup untuk kebutuhan gaya yang diketahui saat ini. Jangan menambah file konfigurasi navigasi terpisah hanya untuk satu item produksi.

## 4. Implementation Steps

1. **Gerbang persetujuan:** tunggu persetujuan eksplisit atas `plan.md` sebelum menyentuh source atau menjalankan implementasi/pengujian runtime.
2. Periksa ulang `git status` dan source saat implementasi dimulai; jaga perubahan lokal dan pastikan target yang dirender masih sesuai analisis.
3. Buat komponen Navbar yang menerima daftar item eksplisit dari `App`. Setiap item memuat label bahasa Indonesia dan anchor ID target. Navbar hanya menampilkan item yang disediakan; tidak mencari section melalui query DOM sebagai mekanisme utama.
4. Integrasikan Navbar sebelum `<main>` dan tambahkan `id="beranda"` ke `<main>` yang sudah ada. Konfigurasi produksi hanya memuat Beranda (`#beranda`); wordmark juga menuju target Beranda yang nyata. Jangan buat section placeholder atau CTA WhatsApp.
5. Atur tampilan desktop horizontal dan tampilan mobile. Jika item valid kurang dari dua, sembunyikan hamburger; jika minimal dua, sediakan tombol dan panel menu yang dapat dibuka/ditutup. Untuk satu target, link Beranda dapat ditampilkan langsung tanpa menu lipat.
6. Gunakan state React lokal untuk buka/tutup. Aktivasi link mobile menutup menu dan membiarkan anchor browser menuju ID target pada halaman yang sama. Pastikan kontrol semantik, nama aksesibel, `aria-expanded`, `aria-controls` yang merujuk panel nyata, focus indicator, dan link tersembunyi tidak dapat difokus.
7. Buat fixture terisolasi sementara yang merender Navbar dengan daftar 0, 1, dan ≥2 item serta anchor yang benar-benar ada. Gunakan fixture untuk interaksi mobile, keyboard, perubahan viewport, dan uji scroll dengan konten cukup. Hapus fixture sebelum review diff akhir.
8. Jalankan validasi pada bagian 8, perbaiki masalah yang ditemukan dalam cakupan, lalu tinjau diff hanya untuk Navbar dan integrasi minimal. Catat status setiap AC berdasarkan bukti; yang tidak dapat dijalankan tetap **Not Verified**. Hentikan server lokal setelah pemeriksaan.

## 5. Acceptance Criteria Mapping

Teks AC di bawah mengikuti `requirement.md` tanpa mengganti ID atau maknanya. Seluruh status saat planning adalah **Not Verified**; tabel ini berisi cara verifikasi setelah implementasi disetujui.

| ID | Acceptance Criteria (sesuai requirement) | Planned implementation | Validation method and expected result |
| --- | --- | --- | --- |
| AC-01 | Identitas **Kodela Studio** tampil di Navbar pada desktop dan mobile. | Wordmark teks di Navbar. | Lihat produksi pada desktop dan mobile; teks identitas terlihat pada keduanya. |
| AC-02 | Navbar berada pada normal document flow, tidak menggunakan fixed atau sticky positioning. | `header` tanpa posisi sticky/fixed. | Periksa computed `position` dan scroll fixture yang cukup panjang; Navbar bergerak bersama dokumen. |
| AC-03 | Hanya menu dengan anchor target yang ada yang terlihat; tidak ada link menu ke target yang belum dibuat. | Konfigurasi `App` hanya mendaftarkan target yang dirender; produksi hanya Beranda. | Cocokkan seluruh `href` menu dengan ID DOM produksi dan fixture 0/1/≥2; tidak ada item untuk section yang belum ada. |
| AC-04 | Seluruh link menu yang ditampilkan menuju section yang tepat pada halaman yang sama. | Anchor hash ke ID valid, tanpa routing. | Aktifkan tiap link; hash dan target benar, halaman tidak melakukan full-page navigation. |
| AC-05 | Pada mobile, hamburger **tidak tampil bila hanya satu atau nol target valid**; ketika ada minimal dua target valid, hamburger dapat membuka/menutup menu dan state aksesibilitas konsisten. | Tombol hanya dirender pada ≥2 item; state lokal dan `aria-expanded`. | Uji fixture 0, 1, ≥2 dengan mouse/touch/keyboard; tombol absen pada 0/1, panel dan `aria-expanded` cocok pada ≥2. |
| AC-06 | Memilih item menu mobile menutup menu dan menuju target yang dipilih. | Handler link menutup state; browser mengikuti anchor. | Pada fixture ≥2, pilih setiap target; panel menutup dan hash/posisi menuju target yang dipilih. |
| AC-07 | Interaksi dapat dioperasikan dengan keyboard, focus indicator terlihat, dan kontrol memiliki accessible name. | `button`, `nav`, nama aksesibel, fokus terlihat, dan panel tertutup tidak tabbable. | Tab, Enter, Space; inspeksi semantik dan nama kontrol; fokus terlihat dan operasional. |
| AC-08 | Navbar responsif pada viewport mobile dan desktop tanpa horizontal overflow atau elemen saling menimpa. | Utility Tailwind responsif untuk desktop/mobile. | Smoke test pada 360, 768, 1280 px di produksi dan fixture ≥2; tidak ada overflow atau tabrakan. |
| AC-09 | Tidak ada CTA WhatsApp sama sekali (aktif maupun preview non-interaktif) sebelum KDL-009. | Tidak merender CTA, preview, nomor dummy, atau link kosong. | Periksa tampilan, DOM, konfigurasi, dan diff; tidak ada elemen CTA WhatsApp. |
| AC-10 | Perubahan dibatasi pada Navbar dan integrasi minimalnya; lint dan production build tetap berhasil, tanpa dependency tidak perlu. | Hanya komponen dan integrasi `App`, tanpa dependensi baru. | Review git diff, `npm.cmd run lint`, `npm.cmd run build`; keduanya exit 0 dan diff sesuai cakupan. |

## 6. UI Behavior

- **Desktop:** wordmark dan item valid tersusun horizontal. Klik link mengikuti hash halaman yang sama.
- **Mobile, 0 target (fixture):** wordmark tetap berupa identitas teks; tidak ada link ke anchor yang hilang, item navigasi, atau hamburger.
- **Mobile, 1 target (produksi setelah implementasi):** Beranda menuju `<main id="beranda">`; hamburger tidak tampil. Link Beranda dapat terlihat langsung, dan wordmark juga menuju awal halaman.
- **Mobile, ≥2 target (fixture atau ticket berikutnya):** hamburger tampil; sekali aktivasi membuka panel, aktivasi berikutnya menutup; memilih link menutup panel dan menuju target.
- **Positioning:** `header` mengikuti normal document flow. Tidak memakai kelas `sticky`/`fixed`, overlay yang menempel pada viewport, atau perilaku berdasarkan scroll.
- **Perubahan viewport:** menu desktop tetap dapat dipakai ketika beralih dari mobile yang sedang terbuka; panel mobile tidak menghalangi tampilan desktop.

## 7. State and Accessibility

Gunakan satu boolean state lokal pada Navbar untuk menu mobile. Jumlah item yang diterima menentukan apakah tombol dan panel perlu dirender; ketika kurang dari dua, tidak ada kontrol menu mobile. State diperbarui oleh tombol dan ditutup setelah memilih link. Tidak perlu state global, scroll listener, atau DOM querying untuk menentukan daftar item.

`header` membungkus identitas dan `nav`; link tetap berupa anchor native. Tombol hamburger memiliki `type="button"`, accessible name yang menjelaskan tindakan, `aria-expanded` sesuai state, serta `aria-controls` yang cocok dengan ID panel saat panel ada. Pertahankan focus indicator pada tombol dan link. Panel yang tertutup tidak terlihat dan tidak dapat difokus. Uji urutan Tab, Enter/Space untuk tombol, Enter untuk link, serta pengoperasian mouse/touch. Jangan membuat animasi yang menjadi syarat penggunaan; hormati reduced motion bila transisi sederhana akhirnya dipakai.

## 8. Testing Plan

Pengujian berikut dilakukan **hanya setelah implementasi disetujui**. Ketersediaan skrip belum membuktikan hasilnya; status sekarang seluruhnya **Not Verified**.

| Pemeriksaan | Cara dan bukti yang diharapkan |
| --- | --- |
| Lint dan build | Jalankan `npm.cmd run lint` dan `npm.cmd run build`; catat exit code dan galat jika ada. |
| Browser smoke | Jalankan dev server/preview lokal, periksa render dan konsol pada browser yang tersedia. Catat browser yang benar-benar diuji dan yang tidak tersedia. |
| Responsive | Periksa 360, 768, dan 1280 px, produksi dan fixture ≥2; tidak ada horizontal overflow atau elemen bertabrakan. |
| Target produksi | Cocokkan link Beranda dengan `<main id="beranda">`; tidak ada link ke Services/Portfolio/Process/FAQ/Contact sebelum targetnya dirender. |
| Kasus 0/1/≥2 | Fixture sementara menyajikan target aktual sebanyak 0, 1, dan minimal 2. Hamburger absen pada 0/1; pada ≥2, tombol buka/tutup dan `aria-expanded` sinkron. |
| Seleksi mobile | Dalam fixture ≥2, buka menu dan pilih tiap item; menu menutup, hash/target benar, tanpa reload penuh. Uji mouse, touch, dan keyboard sejauh alat yang tersedia. |
| Aksesibilitas | Periksa semantik, accessible name, `aria-controls`, urutan Tab, Enter/Space, focus indicator, serta panel tertutup tidak tabbable. |
| Static saat scroll | Pada fixture dengan konten cukup, periksa computed `position` dan scroll; header tidak menempel pada viewport. |
| Tidak ada link rusak/CTA | Bandingkan `href` dengan ID DOM dan periksa tampilan/DOM/config untuk memastikan tidak ada CTA WhatsApp, preview, nomor, atau tautan dummy. |
| Cakupan akhir | Hapus fixture sementara, periksa status/diff, pastikan source produksi hanya berisi Navbar dan integrasi minimal serta tidak ada perubahan dependency. Hentikan server pengujian. |

Jika pemeriksaan tidak dapat dijalankan dengan alat yang tersedia, laporkan **Not Verified** beserta alasannya; jangan menandainya Pass. Khusus AC-05/06, tanpa bukti fixture ≥2 statusnya tetap **Not Verified** meskipun kondisi satu target di produksi terlihat benar.

## 9. Risks and Dependencies

| Risiko atau dependensi | Dampak dan penanganan |
| --- | --- |
| Konfigurasi eksplisit tidak lagi sesuai ID section yang dirender | Link bisa rusak. Tiap penambahan atau penghapusan section perlu memperbarui konfigurasi bersama komposisi `App`, lalu membandingkan `href` dengan ID DOM. |
| Halaman produksi hanya memiliki satu target dan kontennya pendek | Menu ≥2 serta scroll static tidak dapat dibuktikan dari produksi saat ini. Gunakan fixture terisolasi dengan target dan panjang konten nyata, lalu hapus. |
| Mobile menu tetap terbuka saat viewport melebar | Pastikan panel mobile tersembunyi pada desktop dan navigasi desktop dapat dipakai; uji perubahan viewport ketika menu terbuka. |
| Branding dan label section berikutnya belum final | Gunakan wordmark teks dan Beranda sekarang; cocokkan label lain dengan konten aktual saat section dibuat. |
| KDL-001 sebagai fondasi | Source saat ini sudah berisi root minimal, tetapi keberhasilan runtime/build KDL-002 tetap harus dibuktikan sesudah perubahan. Snapshot dokumen KDL-001 tidak dipakai sebagai bukti kondisi sekarang. |
| KDL-003 | Cakupan ticket tidak tersedia di repository saat planning. Jika menghasilkan section yang dirender, tambahkan item navigasi dengan ID aktualnya. |
| KDL-004 | Cakupan ticket tidak tersedia di repository saat planning. Periksa target yang benar-benar terpasang sebelum menambah item. |
| KDL-005 | Cakupan ticket tidak tersedia di repository saat planning. Periksa target yang benar-benar terpasang sebelum menambah item. |
| KDL-006 | Cakupan ticket tidak tersedia di repository saat planning. Periksa target yang benar-benar terpasang sebelum menambah item. |
| KDL-007 | Cakupan ticket tidak tersedia di repository saat planning. Periksa target yang benar-benar terpasang sebelum menambah item. |
| KDL-008 | Cakupan ticket tidak tersedia di repository saat planning. Periksa target yang benar-benar terpasang sebelum menambah item. |
| KDL-009 | Requirement KDL-002 menempatkan CTA WhatsApp di ticket ini; sampai integrasi tersebut, tidak ada CTA dalam Navbar. Detail integrasi harus mengikuti requirement KDL-009 ketika tersedia. |
| KDL-010 | Cakupan ticket tidak tersedia di repository saat planning. Periksa dampaknya pada target navigasi hanya setelah requirement-nya tersedia. |

Tidak ada blocker untuk merencanakan perubahan KDL-002. Detail future ticket tidak diasumsikan dari nomor ticket saja.

## 10. Rollback Plan

Sebelum implementasi, catat status dan diff agar perubahan pengguna tetap terjaga. Jika implementasi KDL-002 perlu dibatalkan, identifikasi hanya perubahan milik ticket ini: hapus komponen Navbar yang baru setelah memastikan tidak dipakai pekerjaan lain, dan kembalikan integrasi Navbar serta `id="beranda"` di `src/App.jsx` melalui pembalikan patch yang spesifik. Hapus fixture sementara yang dibuat untuk pengujian. Periksa status/diff sebelum dan sesudah rollback; jangan memakai `git reset --hard`, `git clean`, atau menghapus pekerjaan lain. Rollback tidak dijalankan pada tahap dokumentasi ini.

**Gerbang akhir:** Dokumen ini menunggu review dan persetujuan eksplisit. Tidak ada source implementation, pengujian runtime, commit, push, atau PR pada tahap ini.
