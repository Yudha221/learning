# KDL-001 — Project Foundation: Rencana Implementasi

**Status:** Approved  
**Project:** Kodela Studio  
**Ticket Type:** Frontend Foundation  
**Tanggal:** 24 November 2026

Referensi: [Requirement](./requirement.md) dan [Analisis](./analysis.md).

Pengguna menyetujui requirement, analisis, dan rencana ini pada **24 November 2026**. Gerbang persetujuan telah terpenuhi. Catatan review analisis tetap berlaku: temuan berasal dari snapshot sebelumnya dan perlu diperiksa ulang jika repositori berubah. Seluruh AC tetap **Pending** sampai bukti implementasi/pengujian terkumpul. Lint yang dilaporkan berhasil sebelumnya tidak membuktikan keberhasilan runtime atau build.

## 1. Tujuan dan ruang lingkup

Menyiapkan fondasi frontend Kodela Studio, landing website satu halaman untuk layanan pengembangan web bagi UMKM, perusahaan, dan klien aplikasi web kustom. Pertahankan repositori, React, Vite, JavaScript/JSX, Tailwind CSS v4, Node.js **24.20.0**, dan npm.

Cakupan: memperbaiki konfigurasi yang diperlukan, mengaktifkan plugin React yang tersedia, membersihkan demo secara aman, menyediakan akar aplikasi minimal, memperbarui metadata/README, serta memvalidasi development, build, preview, Tailwind, lint, dan browser.

Tidak mencakup Navbar, Hero, Services, Portfolio, Why Choose Us, Work Process, FAQ, Contact, section bisnis lainnya, WhatsApp, form, autentikasi, backend, API, database, routing banyak halaman, atau deployment. Tidak menambah framework UI/pengujian, state manager, dependensi tanpa kebutuhan terbukti, abstraksi besar, atau file SKILL.md/AGENTS.md.

`App.jsx` menjadi akar komposisi untuk section mendatang. Tidak perlu `pages/HomePage.jsx`. Folder `components`, `sections`, dan `content` baru dibuat ketika ada kebutuhan nyata, bukan sebagai placeholder kosong.

## 2. Usulan perubahan file

| File | Perubahan yang direncanakan | Dasar |
| --- | --- | --- |
| `vite.config.js` | Impor dan daftarkan plugin React yang sudah tersedia bersama plugin Tailwind. | FR-001, FR-002; temuan konfigurasi plugin React. |
| `src/App.jsx` | Hapus counter/state, markup demo, tautan, dan impor terkait; sediakan akar aplikasi sederhana dengan identitas minimal Kodela Studio tanpa section bisnis. | FR-003, FR-004, FR-005. |
| `src/index.css` | Pertahankan impor Tailwind; bersihkan gaya demo, batas lebar root, pemusatan teks, dan warna otomatis yang tidak diperlukan. Sisakan gaya global yang disengaja. | FR-002, FR-003. |
| `src/App.css` | Bersihkan gaya demo; hapus file dan impornya jika tidak ada aturan yang diperlukan. | FR-003. |
| `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`, `public/icons.svg`, `public/favicon.svg` | Kandidat penghapusan hanya setelah seluruh referensi diperiksa; pertahankan aset yang masih diperlukan dengan alasan jelas. | FR-003. |
| `index.html` | Ubah judul menjadi Kodela Studio dan bersihkan metadata template; perbarui/hapus referensi favicon demo sesuai hasil pemeriksaan aset. Pertahankan root dan entry script. | FR-008. |
| `package.json` | Ubah nama paket dari `learning` menjadi `kodela-studio`; pertahankan skrip dan dependensi kecuali ada kebutuhan perubahan yang terbukti. | FR-008, AC-06. |
| `package-lock.json` | Sinkronkan metadata nama proyek terkait manifest tanpa pembaruan versi dependensi yang tidak diperlukan. | FR-008, AC-06. |
| `README.md` | Dokumentasikan proyek, cakupan fondasi, Node.js 24.20.0/npm, instalasi dari lockfile, perintah, struktur aktual, dan panduan penambahan section saat dibutuhkan. | FR-005, FR-006, FR-008. |

`src/main.jsx` tetap sebagai bootstrap dengan StrictMode dan impor CSS global. `eslint.config.js` dan `.gitignore` cukup diperiksa; perubahan hanya jika ditemukan masalah konkret. Pertahankan klasifikasi dependensi Tailwind sampai proses instalasi deployment diketahui. Paket tipe React tidak dihapus semata-mata karena proyek menggunakan JavaScript; paket tersebut dapat mendukung editor.

## 3. Urutan implementasi

1. **Gerbang persetujuan — terpenuhi:** pengguna menyetujui rencana pada 24 November 2026. Implementasi berikutnya mengikuti cakupan yang telah disetujui.
2. Periksa status kerja, perubahan pengguna, dan kondisi file terhadap snapshot analisis. Verifikasi Node.js 24.20.0, npm, serta kesesuaian dependensi dengan lockfile. Gunakan `npm.cmd` bila PowerShell memblokir `npm.ps1`, tanpa mengubah execution policy.
3. Pada tahap implementasi yang diizinkan, gunakan dependensi yang ada jika valid. Jika diperlukan, siapkan dependensi dari lockfile melalui `npm.cmd ci`; jangan melakukan upgrade sebagai bagian cleanup.
4. Daftarkan plugin React bersama Tailwind pada Vite; pertahankan bootstrap React dan jalur impor CSS.
5. Sederhanakan `App.jsx` menjadi akar aplikasi minimal beridentitas Kodela Studio. Gunakan utility Tailwind yang dapat diperiksa pada elemen tersebut tanpa membuat section bisnis atau komponen demo tambahan.
6. Bersihkan CSS dan impor demo. Telusuri referensi pada JSX, CSS, HTML, dan file lain sebelum menghapus aset tak terpakai; sesuaikan referensi favicon pada HTML.
7. Perbarui nama paket, metadata lockfile terkait, dan judul halaman. Pastikan versi dependensi tidak berubah tanpa alasan.
8. Perbarui README sesuai struktur aktual, lingkungan, perintah, dan pola pemisahan komponen/section/konten saat diperlukan.
9. Jalankan validasi pada bagian 5. Perbaiki masalah dalam cakupan, ulangi pemeriksaan terdampak, dan sesuaikan README dengan hasil nyata.
10. Tinjau diff akhir serta catat hasil tiap AC, perintah, browser yang diuji, dan keterbatasan. Jangan menyatakan pemeriksaan yang belum dijalankan sebagai lulus.

## 4. Pemetaan kriteria penerimaan

ID dan makna AC mengikuti requirement.md.

| Kriteria | Langkah | Bukti penerimaan | Status |
| --- | --- | --- | --- |
| AC-01: Development server berjalan dan React merender | 2–5, 9 | Dev server berjalan dan browser memuat akar Kodela Studio tanpa galat aplikasi. | Pending |
| AC-02: Production build berhasil | 4–7, 9 | Build selesai dengan exit code 0; output diperiksa melalui preview. | Pending |
| AC-03: Utility Tailwind terbukti berfungsi | 4–5, 9 | Computed style utility pada elemen aplikasi sesuai di development dan production preview. | Pending |
| AC-04: Demo beserta sisa referensinya dibersihkan aman | 5–7, 9 | Review source/referensi dan browser membuktikan demo, impor, CSS, tautan, dan aset tak terpakai dibersihkan tanpa request aset rusak. | Pending |
| AC-05: Fondasi modular dan minimal | 5, 8–10 | App menjadi akar komposisi sederhana; README menjelaskan pemisahan saat diperlukan; tidak ada folder kosong atau abstraksi prematur. | Pending |
| AC-06: Tidak ada dependensi tidak diperlukan | 2–3, 7, 10 | Diff manifest/lockfile diperiksa; perubahan metadata dijelaskan dan perubahan dependensi lain memiliki kebutuhan terbukti. | Pending |

Metadata/README (FR-008), lint, refresh, dan browser smoke check juga wajib diperiksa sesuai requirement meskipun tidak memiliki AC tersendiri.

## 5. Strategi pengujian dan validasi

Pengujian runtime berikut hanya dilakukan pada tahap implementasi/pengujian yang sudah diizinkan. Revisi dokumen ini tidak menjalankan instalasi, dev server, lint, atau build.

| Pemeriksaan | Cara dan hasil yang diharapkan |
| --- | --- |
| Lingkungan | Periksa `node --version` untuk v24.20.0 dan `npm.cmd --version`. Bedakan kegagalan launcher dari kegagalan proyek. |
| Development | Jalankan `npm.cmd run dev`, buka URL yang dilaporkan Vite, periksa render, konsol, dan request aset. Tidak ada galat aplikasi atau aset hilang. |
| React refresh | Ubah teks root sementara saat dev server aktif, periksa pembaruan tampilan, lalu kembalikan teks sebelum review akhir. |
| Tailwind development | Periksa utility yang benar-benar dipakai dan computed style-nya, misalnya padding atau ukuran font; pastikan sesuai utility dan tidak tertimpa CSS demo. |
| Build dan preview | Jalankan `npm.cmd run build` hingga exit code 0, lalu `npm.cmd run preview`; periksa render, konsol, request aset, dan computed style utility yang sama pada hasil produksi. |
| Lint | Jalankan `npm.cmd run lint` hingga exit code 0. Hasil lint dari analisis tidak menggantikan pemeriksaan setelah perubahan. |
| Layout dan browser | Smoke check desktop/mobile: tidak ada overflow atau batas root demo yang tersisa. Target modern Chrome, Edge, Firefox, Safari sesuai ketersediaan. Catat browser/versi dan viewport yang diuji serta browser yang belum diuji. |
| Cleanup dan metadata | Telusuri referensi demo/aset, periksa judul tab dan metadata paket/lockfile, lalu cocokkan README dengan kondisi akhir. Referensi yang sengaja dipertahankan harus memiliki alasan. |
| Cakupan/dependensi | Tinjau diff dan struktur: tidak ada section bisnis, folder placeholder, framework baru, atau perubahan dependensi tanpa kebutuhan yang dijelaskan. |

Tidak menambah framework unit/E2E hanya untuk cleanup fondasi. Catat bukti berupa perintah/exit code, observasi browser, hasil computed style, dan keterbatasan. Hentikan server pemeriksaan setelah selesai.

Catatan validasi dokumentasi di atas hanya menjelaskan tahap review sebelum persetujuan. Setelah rencana disetujui, validasi implementasi wajib mengikuti seluruh pemeriksaan pada tabel ini dan hasilnya dilaporkan terpisah dari status persetujuan.

## 6. Risiko dan mitigasi

| Risiko | Mitigasi |
| --- | --- |
| Snapshot analisis berbeda dari kondisi terbaru. | Periksa ulang file, lingkungan, dan dependensi sebelum implementasi. |
| Plugin React tersedia tetapi belum digunakan. | Daftarkan plugin yang ada dan verifikasi refresh/dev/build; jangan menyimpulkan kondisi sebelumnya pasti gagal. |
| CSS global mengganggu utility Tailwind. | Bersihkan aturan demo dan verifikasi computed style di development maupun production. |
| Cleanup menyisakan referensi rusak atau metadata template. | Periksa JSX/CSS/HTML, manifest/lockfile, README, dan request browser. |
| PowerShell memblokir npm.ps1. | Gunakan npm.cmd tanpa mengubah kebijakan sistem. |
| Pembaruan metadata mengubah lockfile terlalu luas. | Batasi perubahan pada metadata dan tinjau versi/resolusi dependensi. |
| Pemindahan build tooling mengganggu instalasi deployment. | Pertahankan klasifikasi dependensi sampai proses deployment diketahui. |
| Browser target, terutama Safari, tidak tersedia. | Laporkan cakupan aktual dan yang belum diuji; jangan mengklaim verifikasi lintas browser penuh. |
| Cakupan meluas menjadi fitur bisnis. | Batasi root pada identitas minimal; tunda section, branding final, dan struktur tambahan. |

## 7. Pertanyaan terbuka

Klarifikasi tentang JavaScript, Node.js 24.20.0/npm, target browser, metadata/README, dan folder sesuai kebutuhan sudah disetujui sehingga tidak perlu diminta ulang.

- Provider static hosting belum ditentukan. Tidak menghalangi fondasi karena deployment di luar cakupan; jangan mengasumsikan proses instalasinya untuk mengubah kategori dependensi.
- Browser mana yang tersedia untuk pengujian aktual? Tentukan saat validasi dan catat keterbatasannya.
- Branding visual/aset final belum ditentukan. Gunakan identitas teks minimal Kodela Studio; desain final menjadi pekerjaan berikutnya.

Persetujuan rencana telah diberikan pada 24 November 2026. Pertanyaan operasional di atas ditangani saat implementasi sesuai batas cakupan yang disetujui.

## 8. Definition of Done

- Rencana disetujui sebelum source diubah atau implementasi dijalankan.
- AC-01 sampai AC-06 terpenuhi dengan bukti validasi; bagian yang belum terverifikasi tidak dinyatakan lulus.
- Development, React refresh, build, production preview, Tailwind di kedua mode, serta lint berhasil diverifikasi.
- Demo dan referensi tak terpakai dibersihkan; akar aplikasi siap untuk komposisi section berikutnya tanpa mengimplementasikan section tersebut.
- Metadata Kodela Studio dan README sesuai hasil akhir, termasuk lingkungan serta penggunaan npm pada PowerShell.
- Browser smoke check dilakukan sesuai ketersediaan; browser yang belum diuji dan keterbatasannya dicatat.
- Tidak ada dependensi tidak diperlukan, folder kosong, abstraksi prematur, atau perubahan di luar cakupan; perubahan manifest/lockfile memiliki alasan.
- Diff akhir ditinjau, pekerjaan pengguna terjaga, dan hasil validasi disertakan dalam serah terima.

Status rencana **Approved**. Status ini mencatat persetujuan untuk implementasi; keberhasilan implementasi dan pengujian harus ditentukan dari bukti validasi setelah perubahan source.
