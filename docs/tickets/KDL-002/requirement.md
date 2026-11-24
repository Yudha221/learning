# KDL-002 — Navbar & Mobile Navigation

**Project:** Kodela Studio  
**Type:** Frontend Feature  
**Priority:** High  
**Status:** Approved — Requirement Final v1.1  
**Stage:** Requirement approved; Analysis Stage authorized (read-only, no implementation)  
**Stack:** React, Vite, Tailwind CSS v4, JavaScript/JSX  
**Dependency:** KDL-001 — Project Foundation

## 1. Context and Objective

Kodela Studio adalah single-page Web Development Studio untuk UMKM, perusahaan, dan kebutuhan custom web application. Ticket ini membuat navigasi utama yang mudah dipahami, responsif, dan aksesibel tanpa membangun section bisnis lain.

**Objective:** Menyediakan static navbar dengan identitas Kodela Studio, navigasi anchor ke section yang benar-benar tersedia, dan mobile navigation yang dapat dibuka/tutup.

## 2. Approved Decisions

- Navbar **static** (normal document flow), bukan sticky/fixed.
- Website single-page; tidak memakai multi-page routing.
- Menu yang direncanakan untuk website lengkap: Home, Services, Portfolio, Process, FAQ, Contact.
- **Hanya tampilkan menu dengan anchor target yang benar-benar ada** pada halaman saat ini; tidak membuat placeholder section demi mengaktifkan menu.
- Copy antarmuka menggunakan bahasa Indonesia. Label menu di atas merupakan nama konseptual; label tampil perlu konsisten dengan bahasa dan konten final.
- Identitas brand sementara menggunakan teks/wordmark Kodela Studio sampai aset logo disetujui.
- WhatsApp merupakan satu-satunya kanal inquiry, tetapi **CTA WhatsApp tidak ditampilkan sama sekali sebelum KDL-009**. Jangan memasang preview non-interaktif, nomor dummy, atau tautan kosong.
- **Jika hanya Home/Beranda tersedia, tombol hamburger disembunyikan**. Hamburger hanya diperlukan ketika setidaknya dua target navigasi valid tersedia; implementasinya harus tetap dapat diuji tanpa menambahkan placeholder ke production.

## 3. Scope

### In Scope

1. Reusable Navbar untuk layout utama.
2. Brand/wordmark Kodela Studio yang dapat mengarah ke bagian awal halaman.
3. Navigasi desktop horizontal untuk target section yang tersedia.
4. Navigasi mobile dengan tombol hamburger dan state open/closed jika setidaknya dua target navigasi valid tersedia; jika hanya satu atau nol target, hamburger tidak ditampilkan.
5. Conditional rendering item navigasi berdasarkan target section yang tersedia, menggunakan konfigurasi yang sederhana dan dapat diperluas.
6. Navigasi anchor intra-page dan penutupan menu setelah memilih item.
7. Semantics dan aksesibilitas dasar: `header`, `nav`, button, focus indicator, keyboard operability, accessible name, dan state expanded.
8. Responsive styling pada ukuran mobile dan desktop, sesuai visual direction Clean Professional dengan sentuhan Dark Tech.

### Out of Scope

- Implementasi Hero, Services, Portfolio, Process, FAQ, Contact atau section kosong sebagai placeholder.
- Integrasi WhatsApp final, WhatsApp API, form inquiry, atau nomor kontak dummy.
- Sticky/fixed navbar, scroll listener untuk perubahan tampilan, scroll spy, animasi kompleks.
- React Router, backend, database, authentication, global state management.
- Perubahan brand identity final, logo produksi, atau copywriting section lain.

## 4. Functional Requirements

| ID | Requirement |
| --- | --- |
| FR-01 | Navbar menampilkan identitas Kodela Studio dan terintegrasi ke root layout KDL-001. |
| FR-02 | Navbar mengikuti normal document flow tanpa sticky/fixed behavior. |
| FR-03 | Daftar navigasi dirancang untuk Home, Services, Portfolio, Process, FAQ, Contact, tetapi hanya item dengan target section yang tersedia yang ditampilkan. |
| FR-04 | Link yang terlihat menavigasi ke anchor ID yang sesuai tanpa reload penuh. |
| FR-05 | Pada viewport mobile, tombol hamburger hanya muncul jika ada **minimal dua** target navigasi valid; jika hanya Home yang ada, tombol disembunyikan. Jika tombol muncul, menu dapat dibuka dan ditutup melalui kontrol yang aksesibel. |
| FR-06 | Memilih item pada mobile menutup menu dan menavigasi ke target. |
| FR-07 | Aksi dan state menu dapat digunakan dengan mouse, touch, dan keyboard. |
| FR-08 | Navbar **tidak menampilkan CTA WhatsApp dalam bentuk apa pun** sebelum integrasi KDL-009, termasuk elemen non-interaktif/preview dan tautan dummy. |
| FR-09 | Implementasi ringan dan dapat diperluas saat section berikutnya tersedia tanpa menambah framework routing atau dependency yang tidak diperlukan. |

## 5. Acceptance Criteria

| ID | Acceptance Criteria | Verification |
| --- | --- | --- |
| AC-01 | Identitas **Kodela Studio** tampil di Navbar pada desktop dan mobile. | Visual check pada kedua viewport. |
| AC-02 | Navbar berada pada normal document flow, tidak menggunakan fixed atau sticky positioning. | Inspect computed position dan uji scroll ketika konten cukup panjang. |
| AC-03 | Hanya menu dengan anchor target yang ada yang terlihat; tidak ada link menu ke target yang belum dibuat. | Bandingkan daftar navigasi dengan ID section ter-render. |
| AC-04 | Seluruh link menu yang ditampilkan menuju section yang tepat pada halaman yang sama. | Aktivasi link dan verifikasi hash/target; tidak ada full-page navigation. |
| AC-05 | Pada mobile, hamburger **tidak tampil bila hanya satu atau nol target valid**; ketika ada minimal dua target valid, hamburger dapat membuka/menutup menu dan state aksesibilitas konsisten. | Uji kondisi 0, 1, dan >=2 target; mouse/touch/keyboard dan `aria-expanded`. |
| AC-06 | Memilih item menu mobile menutup menu dan menuju target yang dipilih. | Tes interaksi pada setidaknya dua target valid di lingkungan pengujian. |
| AC-07 | Interaksi dapat dioperasikan dengan keyboard, focus indicator terlihat, dan kontrol memiliki accessible name. | Tab, Enter/Space, inspect semantics. |
| AC-08 | Navbar responsif pada viewport mobile dan desktop tanpa horizontal overflow atau elemen saling menimpa. | Smoke test 360, 768, 1280 px. |
| AC-09 | Tidak ada CTA WhatsApp sama sekali (aktif maupun preview non-interaktif) sebelum KDL-009. | Review tampilan, DOM, dan konfigurasi. |
| AC-10 | Perubahan dibatasi pada Navbar dan integrasi minimalnya; lint dan production build tetap berhasil, tanpa dependency tidak perlu. | Review git diff, `npm run lint`, `npm run build`. |

**Catatan pengujian AC-05/06:** Dengan keputusan menyembunyikan menu ke section yang belum ada, menu mobile pada konten KDL-001 saja mungkin hanya mempunyai Home, sehingga tombol hamburger **wajib disembunyikan**. Jangan membuat section placeholder hanya agar pengujian terlihat lulus. Verifikasi interaksi memakai fixture/test harness sementara dengan sedikitnya dua anchor target valid, tanpa memasukkan section bisnis palsu ke production. Bila belum dapat diuji, tandai **Not Verified**, bukan Pass.

## 6. User Flow

### Desktop

1. Visitor membuka website Kodela Studio.
2. Visitor melihat brand dan link ke section yang saat ini tersedia.
3. Visitor memilih salah satu link.
4. Browser memindahkan posisi ke anchor section yang dimaksud.

### Mobile

1. Visitor membuka website di layar kecil.
2. Jika ada minimal dua target navigasi valid, visitor mengaktifkan tombol hamburger. Jika hanya Home atau tidak ada target, tombol tidak tampil.
3. Visitor melihat item navigasi yang memiliki target valid.
4. Visitor memilih item.
5. Menu tertutup dan browser menuju section tersebut.

## 7. System Flow

1. React merender Navbar beserta identitas brand.
2. Aplikasi menentukan item navigasi yang diaktifkan berdasarkan daftar target section yang benar-benar disediakan/dirender, bukan asumsi tentang section berikutnya.
3. Pada mobile, tombol menu hanya dirender bila minimal dua target navigasi valid; jika dirender, state navigasi menentukan menu terbuka atau tertutup.
4. Interaksi memilih anchor menggunakan navigasi intra-halaman ke ID yang valid.
5. State mobile menu dikembalikan ke closed setelah pemilihan item.
6. Browser mempertahankan fokus dan navigasi sesuai mekanisme yang aksesibel.

**Catatan arsitektur:** Mekanisme mengetahui target yang tersedia harus ditentukan pada Analysis/Planning berdasarkan struktur aktual repository (misalnya daftar section terpasang), bukan ditetapkan sebagai API/komponen yang belum ada.

## 8. States, Edge Cases, and Error Handling

| Condition | Expected Behavior |
| --- | --- |
| Semua section selain root belum dibuat | Hanya navigasi valid muncul; tidak ada hamburger jika target kurang dari dua; CTA WhatsApp tidak ditampilkan. |
| Hanya Home/satu target tersedia | Brand/Home tetap dapat digunakan; hamburger menu **wajib disembunyikan**. |
| Ada target baru setelah ticket berikutnya | Target baru dapat diaktifkan melalui konfigurasi sederhana tanpa refactor besar. |
| Target menu tidak ada atau ID berubah | Item tidak ditampilkan sampai target valid tersedia; jangan buat link rusak. |
| User membuka/menutup mobile menu berulang | Tidak ada state yang tertinggal atau duplikasi konten. |
| Viewport berubah mobile → desktop | Navigasi desktop tetap tersedia; tidak ada overlay/mobile menu mengganggu. |
| Keyboard-only / reduced motion | Menu tetap dapat digunakan; tidak bergantung pada hover atau animasi. |
| WhatsApp belum diintegrasikan (sebelum KDL-009) | CTA WhatsApp tidak ditampilkan sama sekali, termasuk preview non-interaktif. |

## 9. Test Cases

| TC | Scenario | Expected Result | AC |
| --- | --- | --- | --- |
| TC-01 | Load navbar desktop dan mobile | Brand tampil | AC-01 |
| TC-02 | Scroll halaman dengan konten cukup | Navbar bergerak mengikuti dokumen, bukan tetap menempel | AC-02 |
| TC-03 | Render dengan sebagian target belum ada | Hanya link valid muncul | AC-03 |
| TC-04 | Aktivasi anchor yang valid | Menuju target tanpa full-page navigation | AC-04 |
| TC-05 | Render 0 atau 1 target valid, kemudian >=2 target; buka/tutup mobile menu | Hamburger tersembunyi pada 0/1 target dan berfungsi dengan `aria-expanded` konsisten pada >=2 target | AC-05 |
| TC-06 | Pilih item di mobile menu | Menu tertutup dan target terbuka | AC-06 |
| TC-07 | Navigasi keyboard | Tab/focus/Enter/Space bekerja sesuai kontrol | AC-07 |
| TC-08 | 360, 768, 1280 px | Tidak ada overflow dan tabrakan layout | AC-08 |
| TC-09 | Navbar sebelum KDL-009 | Tidak ada CTA WhatsApp aktif maupun preview | AC-09 |
| TC-10 | Lint, build, git diff | Berhasil, perubahan sesuai scope | AC-10 |

## 10. Dependencies, Assumptions, and Need Clarification

**Dependencies:** KDL-001 selesai dan root app dapat dijalankan. Tidak membutuhkan API atau data backend.

**Confirmed:** Navbar static; hanya menu dengan target tersedia; single-page; brand sementara Kodela Studio; visual Clean Professional + Dark Tech; hamburger disembunyikan jika target kurang dari dua; CTA WhatsApp tidak tampil sebelum KDL-009.

**To resolve during Analysis/Planning:**
1. Dari struktur repository yang aktual, cara paling sederhana memastikan target section tersedia tanpa membuat placeholder?
2. Bagaimana menentukan daftar label tampil berbahasa Indonesia untuk menu konseptual Home/Services/Portfolio/Process/FAQ/Contact? Kandidat: Beranda, Layanan, Portofolio, Proses, FAQ, Kontak; tetap cocokkan dengan konten aktual sebelum implementasi.
3. Bagaimana menguji perilaku >=2 target valid tanpa mengirim section placeholder ke production? Pilihan test fixture/harness diputuskan setelah audit repo.

## 11. Definition of Done

- Semua acceptance criteria yang dapat dinilai dari implementasi telah terverifikasi dengan bukti; item yang memerlukan fixture diuji tanpa memasukkan section palsu ke aplikasi production.
- Tidak ada link navigasi atau CTA dummy yang dikirim ke production.
- `npm run lint` dan `npm run build` berhasil.
- Perubahan Git sudah direview dan hanya mencakup KDL-002.
- Tidak ada dependency yang tidak diperlukan.
- Dokumentasi dan hasil test dilaporkan, lalu menunggu review sebelum commit.

**Approval gate:** Requirement **sudah disetujui**. Analysis Stage boleh dimulai dengan pemeriksaan read-only atas repository dan dokumen ini. **Belum ada izin membuat/mengubah kode aplikasi, menambah dependency, atau memulai implementasi**. Planning dilakukan setelah analisis direview.
