# KDL-003 — Hero Section

**Status:** Approved v1.1 — siap untuk Analysis Stage read-only  
**Ticket type:** Frontend Feature  
**Project:** Kodela Studio — Single-page Landing Page  
**Dependency:** KDL-001 (foundation), KDL-002 (Navbar & Mobile Navigation)

## 1. Background & Business Goal

Kodela Studio memerlukan Hero Section sebagai bagian utama landing page untuk membantu pengunjung memahami identitas studio, nilai layanan, dan langkah berikutnya secara cepat. Kodela Studio diposisikan sebagai studio pengembangan website dan web application untuk UMKM, bisnis, dan perusahaan. Gaya yang dipilih adalah **Clean Professional**, dengan kesan modern, kredibel, mudah dibaca, dan sedikit aksen teknologi tanpa visual berlebihan.

## 2. Target Users & Roles

- **Visitor (publik, tanpa login):** membaca pesan utama Hero, memahami penawaran studio, dan menggunakan CTA internal bila section tujuan sudah tersedia.
- Tidak ada autentikasi, role khusus, atau permission untuk ticket ini.

## 3. Approved Product Decisions

1. Tampilan **Clean Professional**; responsive, mengutamakan hierarchy tipografi, spasi, keterbacaan, dan aksen visual sederhana.
2. Copy berbahasa Indonesia, profesional tetapi ramah.
3. Headline dan subheadline final menggunakan **Opsi A** pada §12, yang telah disetujui untuk KDL-003. Jangan mengganti copy tanpa persetujuan baru.
4. CTA hanya boleh menggunakan **internal anchor** yang menuju section dengan ID yang benar-benar dirender.
5. Jika belum ada target CTA yang bermakna dan tersedia, **CTA tidak dirender**. Jangan membuat tombol kosong, `href="#"`, placeholder section, atau CTA yang mengarah ke Hero/Beranda sendiri hanya untuk memenuhi tampilan.
6. Integrasi WhatsApp, nomor kontak, dan inquiry flow tetap di KDL-009; **tidak membuat WhatsApp CTA** pada ticket ini.
7. Hero diintegrasikan dengan Navbar static dari KDL-002 tanpa menambah sticky/fixed behavior.
8. Visual Hero menggunakan **tipografi dan aksen CSS/Tailwind ringan**, tanpa ilustrasi atau aset khusus. Tidak mengubah backend/API, menambah routing, atau dependency baru hanya untuk dekorasi.

## 4. Scope

### In scope

- Implementasi satu Hero Section baru setelah Navbar, sebagai bagian dari halaman satu layar panjang (single page).
- Headline dan subheadline Opsi A yang disetujui, serta dekorasi ringan berbasis CSS/Tailwind yang konsisten dengan Clean Professional.
- Layout mobile dan desktop, hierarki heading yang semantik, spacing, dan alignment.
- CTA internal yang **bersyarat** pada target nyata dan relevan; CTA boleh absen pada kondisi repository saat ini.
- Menjaga konsistensi `id="beranda"` pada `<main>` hasil KDL-002; Hero boleh menjadi konten awal di dalam `<main>`.
- Aksesibilitas, responsive behavior, performa dasar, dan pengujian.

### Out of scope

- Pembuatan section Services, Portfolio, Process, FAQ, Contact, atau placeholder untuk section tersebut.
- WhatsApp CTA/integrasi KDL-009, contact form, backend, API, dan CMS.
- Sticky/fixed Navbar, scroll spy, carousel, animasi kompleks, video background, dan dependency tambahan tanpa alasan kuat.
- Penetapan logo akhir, harga paket, atau konten portfolio.
- Ilustrasi, foto, gambar eksternal, aset visual khusus, dan image-generation untuk Hero.
- Implementasi source code sebelum analysis, plan, dan approval tersendiri.

## 5. Functional Requirements

| ID | Functional requirement |
| --- | --- |
| FR-01 | Tampilkan Hero setelah Navbar, di dalam struktur halaman yang valid secara semantik. |
| FR-02 | Tampilkan headline dan subheadline **Opsi A yang sudah disetujui** sesuai §12, tanpa mengubah maknanya. |
| FR-03 | Tunjukkan pesan yang sesuai dengan positioning Kodela Studio tanpa klaim bisnis yang belum diverifikasi. |
| FR-04 | Gunakan visual Clean Professional dengan tipografi dan aksen CSS/Tailwind ringan; tidak menambah ilustrasi atau aset visual khusus. |
| FR-05 | Render CTA internal hanya jika target section yang relevan benar-benar dirender dan memiliki ID yang cocok dengan `href`. |
| FR-06 | Jika target CTA belum tersedia, Hero tetap lengkap dan tidak menampilkan tombol/tautan CTA palsu. |
| FR-07 | Jaga navigasi Beranda (`#beranda`) dan fungsi Navbar KDL-002 tetap bekerja. |
| FR-08 | Hero dapat dibaca dan digunakan pada mobile, tablet, dan desktop tanpa horizontal overflow. |
| FR-09 | Pastikan heading, link, fokus, dan kontras warna dapat diakses menggunakan perangkat input yang relevan. |
| FR-10 | Tetap gunakan React, Vite, dan Tailwind yang telah tersedia tanpa backend atau library visual tambahan yang tidak diperlukan. |

## 6. User Flow

**Tanpa target CTA yang tersedia:** Visitor membuka website → melihat Navbar → membaca headline/subheadline Hero → dapat scroll ke konten berikutnya bila sudah tersedia. Tidak ada CTA dummy.

**Dengan target CTA valid (pada ticket lanjutan):** Visitor membuka website → membaca Hero → memilih CTA → browser berpindah ke section internal yang sesuai.

## 7. System Flow

1. React merender Navbar dan Hero sesuai komposisi halaman.
2. Hero menampilkan headline dan subheadline Opsi A yang telah disetujui.
3. Komposisi halaman menentukan apakah section target CTA benar-benar tersedia; konfigurasi CTA hanya diberikan jika target nyata dirender, konsisten dengan pendekatan KDL-002.
4. Jika target tidak tersedia, elemen CTA tidak dirender. Jika tersedia, anchor native menggunakan hash ID target.
5. Browser menangani navigasi anchor pada halaman yang sama tanpa API atau routing.

## 8. UI/UX, Components & State

- UI direction: Clean Professional, whitespace cukup, tipografi jelas, satu fokus utama, elemen dekoratif ringan bila berguna.
- Layout adaptif dengan tipografi dan aksen CSS/Tailwind ringan; tanpa ilustrasi atau aset khusus. Detail spacing dan komposisi dievaluasi saat analysis/planning.
- Hero dapat berupa satu komponen terpisah jika sesuai struktur repository saat analysis.
- Tidak memerlukan state lokal untuk Hero statis; jangan menambah state tanpa kebutuhan nyata.
- Loading/error data tidak diperlukan karena tidak ada fetch/API atau aset visual eksternal.
- Gunakan satu `h1` utama pada halaman; jangan menggandakan heading utama tanpa alasan.

## 9. Business Rules & Validations

- **BR-01:** CTA hanya untuk tujuan internal yang benar-benar ada; tidak boleh menunjuk ke `#`, target tidak tersedia, atau Hero sendiri sebagai workaround.
- **BR-02:** Jangan mengarang URL WhatsApp, nomor kontak, harga, testimoni, atau statistik bisnis.
- **BR-03:** Label CTA harus menjelaskan target aktual; tidak boleh menjanjikan tindakan yang belum tersedia.
- **BR-04:** Teks final adalah Opsi A pada §12; perubahan copy membutuhkan persetujuan baru.
- **BR-05:** Tidak boleh mengubah scope ticket lain demi menampilkan CTA KDL-003.

## 10. Acceptance Criteria

| ID | Acceptance criteria |
| --- | --- |
| AC-01 | Hero muncul tepat setelah Navbar dalam halaman Kodela Studio tanpa mengganti struktur root yang diperlukan. |
| AC-02 | Headline dan subheadline menggunakan **copy Opsi A** yang disetujui pada §12 serta menjelaskan positioning Kodela Studio. |
| AC-03 | Hero mengikuti gaya Clean Professional dengan hierarchy, alignment, spacing, keterbacaan yang baik, serta aksen CSS/Tailwind ringan tanpa aset visual khusus. |
| AC-04 | Tidak terdapat CTA internal apabila belum ada section tujuan yang valid dan relevan. |
| AC-05 | Ketika section tujuan benar-benar tersedia, CTA internal (jika dikonfigurasi) memakai anchor yang cocok dengan ID DOM dan navigasinya bekerja. |
| AC-06 | Tidak terdapat CTA WhatsApp, link dummy, atau placeholder section yang dibuat khusus untuk CTA. |
| AC-07 | Navbar static dan anchor `#beranda` hasil KDL-002 tetap bekerja. |
| AC-08 | Hero responsif pada lebar 360px, 768px, dan 1280px, tanpa teks terpotong, overlap, atau horizontal overflow. |
| AC-09 | Struktur heading, kontras, fokus keyboard untuk link yang ada, serta elemen dekoratif memenuhi pemeriksaan aksesibilitas dasar. |
| AC-10 | Lint dan production build berhasil; diff hanya berisi perubahan terkait KDL-003 dan tidak menambah dependency tanpa alasan yang disetujui. |

## 11. Edge Cases & Testing

| Case | Expected result / test |
| --- | --- |
| Baru hanya `#beranda` tersedia | Hero tetap tampil tanpa CTA; tidak ada tautan ke section yang belum dibuat. |
| Target CTA baru ditambahkan di ticket berikutnya | CTA hanya diaktifkan setelah section dan ID benar-benar dirender; verifikasi `href` ↔ ID. |
| Target CTA dihapus atau berganti ID | Konfigurasi CTA diperbarui bersamaan dengan komposisi; tidak ada link rusak. |
| Headline panjang | Wrapping tetap baik di 360px; tidak memotong atau mendorong layout horizontal. |
| Zoom browser 200% | Konten tetap terbaca dan dapat dinavigasi tanpa terpotong. |
| Aksen dekoratif tidak dirender atau CSS gagal diterapkan | Headline dan subheadline tetap terbaca dan informasi utama tidak bergantung pada dekorasi. |
| Keyboard navigation | Link yang ada memiliki fokus terlihat; tidak ada kontrol dekoratif yang memperoleh fokus. |
| Scroll dari Hero | Navbar tetap mengikuti alur dokumen normal. |
| Browser dan viewport berbeda | Manual/browser smoke test sesuai lingkungan yang benar-benar tersedia; jangan mengklaim tes yang tidak dijalankan. |

**Verification setelah approval implementasi:** jalankan `npm.cmd run lint`, `npm.cmd run build`, cek UI pada 360/768/1280px, pemeriksaan keyboard/zoom, verifikasi ketiadaan CTA dummy/WhatsApp, serta periksa `git diff`. Untuk AC-05, uji target valid di fixture terisolasi bila belum ada section tujuan pada production; jangan mengirim fixture ke production. Jika tidak dijalankan, statusnya **Not Verified**.

## 12. Approved Copywriting — Opsi A

**Status:** Approved — menjadi source of truth untuk implementasi KDL-003.

- **Headline:** Website Profesional untuk Bisnis yang Terus Berkembang
- **Subheadline:** Kodela Studio membantu UMKM dan perusahaan membangun website serta aplikasi web yang modern, mudah digunakan, dan sesuai kebutuhan bisnis.

Opsi B dan C dari draft v1.0 tidak lagi menjadi kandidat implementasi KDL-003. Perubahan headline/subheadline hanya dilakukan setelah approval baru.

## 13. Assumptions & Need Clarification

### Confirmed
- Desain: **Clean Professional**.
- Visual: **tipografi dengan aksen CSS/Tailwind ringan tanpa aset khusus**.
- Copy final: **Opsi A** sebagaimana tercantum pada §12.
- CTA: internal, kondisional pada target section nyata; **tidak ditampilkan jika belum ada target relevan yang tersedia**.
- Navbar dan `#beranda` KDL-002 harus dipertahankan.
- Tidak ada WhatsApp CTA sampai KDL-009.

### Non-blocking / future integration
- Label dan target CTA untuk fase berikutnya baru ditetapkan saat section tujuan benar-benar tersedia; bukan blocker Hero tanpa CTA.
- Komposisi CSS, spacing, breakpoint dan pemisahan komponen dianalisis berdasarkan repository aktual pada Analysis Stage; tidak mengubah keputusan produk di atas.

## 14. Definition of Done

- Requirement v1.1 dan copy Opsi A sudah disetujui.
- Analysis Stage selesai secara read-only.
- `analysis.md` dan `plan.md` dibuat dan direview.
- Implementation plan disetujui eksplisit sebelum perubahan source.
- Semua AC diuji dan statusnya dilaporkan beserta bukti; yang belum diuji ditandai Not Verified.
- Tidak ada perubahan di luar scope; hasil Git siap direview untuk commit/PR.

---

**Approval Gate:** Requirement v1.1 telah disetujui untuk **Analysis Stage read-only**. Jangan mengimplementasikan KDL-003 sampai analysis/planning selesai dan user menyetujui `plan.md` secara eksplisit.
