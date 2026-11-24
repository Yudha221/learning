# Aturan Agent untuk Kodela Studio

Aturan ini berlaku untuk seluruh repository. Gunakan sebagai panduan kerja tetap; cakupan setiap tugas ditentukan oleh permintaan pengguna dan dokumen pekerjaan yang relevan, bukan oleh satu tiket tertentu. Instruksi terbaru dari pengguna mengungguli aturan di file ini.

## Konteks project

- Kodela Studio adalah website studio pengembangan web. Arah produk saat ini adalah landing page satu halaman.
- Stack saat ini: React, Vite, JavaScript/JSX, Tailwind CSS v4, dan npm. Pertahankan stack ini kecuali tugas baru memang meminta perubahan.
- Kode aplikasi ada di `src/`, aset publik di `public/`, dan dokumentasi pekerjaan di `docs/`.
- Ikuti pola dan struktur yang sudah ada. Buat komponen, folder, atau abstraksi baru ketika benar-benar dibutuhkan oleh fitur yang sedang dikerjakan.

## Batas kerja

- Kerjakan permintaan pengguna sampai selesai dalam cakupan yang diberikan. Perubahan source, style, aset, konfigurasi, dan dokumentasi yang diperlukan oleh tugas boleh dilakukan tanpa meminta izin ulang.
- Baca dokumen pekerjaan yang berkaitan jika tersedia. Dokumen tiket menjelaskan cakupan tiket tersebut; jangan menjadikan batas satu tiket sebagai larangan permanen untuk seluruh project.
- Ambil keputusan implementasi rutin secara mandiri. Jika kebutuhan baru belum jelas, kerjakan bagian yang jelas terlebih dahulu lalu tanyakan hal yang benar-benar menentukan hasil.
- Jangan menambah fitur, dependensi, framework, layanan eksternal, atau perubahan arsitektur yang tidak diperlukan oleh permintaan. Jika memang dibutuhkan untuk mencapai tujuan pengguna, jelaskan alasannya dan dampaknya.
- Jangan melakukan deployment, publikasi, pengiriman data ke layanan luar, atau perubahan pada project lain tanpa instruksi pengguna yang mencakup tindakan itu.

## Menjaga pekerjaan dan lingkungan

- Periksa `git status` sebelum mengedit. Pertahankan perubahan lokal dan file untracked; jangan menimpa pekerjaan yang asalnya tidak jelas.
- Jangan menjalankan `git reset --hard`, `git clean`, force push, penghapusan massal, atau penulisan ulang riwayat tanpa izin eksplisit.
- Jangan commit, push, atau merge kecuali diminta atau sudah diizinkan pengguna.
- Jangan mengedit `.git/`, `node_modules/`, atau hasil build secara manual untuk memperbaiki aplikasi. Ubah file sumber yang tepat.
- Batasi perubahan file pada repository dan lokasi sementara yang diizinkan. Jangan mengubah konfigurasi sistem atau memasang software global tanpa kebutuhan dan izin.
- Jangan membuka, menyalin, atau menampilkan kredensial yang tidak diperlukan. Jangan memasukkan rahasia ke kode, dokumentasi, atau output.
- Jaga `package.json` dan lockfile tetap selaras jika dependensi atau metadata paket berubah. Hindari pembaruan versi yang tidak berkaitan.

## Kualitas implementasi

- Utamakan perubahan yang sederhana, mudah dibaca, dan sesuai pola project. Hindari folder kosong dan abstraksi untuk kebutuhan yang belum ada.
- Pastikan antarmuka dapat digunakan pada layar kecil dan besar, serta perhatikan semantik HTML, aksesibilitas dasar, dan performa aset saat mengerjakan UI.
- Jangan menghapus kode atau aset sebelum memastikan tidak dipakai. Jangan menyamarkan error dengan menonaktifkan lint atau pemeriksaan lain.
- Gunakan `npm.cmd` di PowerShell jika `npm.ps1` diblokir; jangan mengubah execution policy untuk itu.

## Prinsip penulisan kode

- **DRY (Don't Repeat Yourself):** Satukan logika atau data yang sama jika pengulangannya sudah menimbulkan risiko perubahan tidak konsisten. Jangan membuat abstraksi hanya karena dua potong kode kebetulan mirip.
- **KISS (Keep It Simple, Stupid):** Pilih solusi paling sederhana yang memenuhi kebutuhan dan tetap mudah dibaca. Hindari alur, pola desain, atau lapisan tambahan tanpa alasan nyata.
- **SoC (Separation of Concerns):** Pisahkan tanggung jawab yang berbeda, misalnya tampilan, data, dan logika interaksi. Pecah komponen atau modul ketika itu memperjelas kode, bukan semata-mata untuk menambah jumlah file.
- **YAGNI (You Aren't Gonna Need It):** Bangun hanya kemampuan yang dibutuhkan sekarang. Jangan menambah konfigurasi, komponen, parameter, atau antarmuka untuk kemungkinan kebutuhan di masa depan.
- Jika prinsip-prinsip ini tampak bertentangan, utamakan kebutuhan saat ini dan keterbacaan. Ekstrak kode bersama setelah ada pola penggunaan yang jelas.

## Penamaan kode dan file

- Gunakan `camelCase` untuk variabel, fungsi, props, dan custom hook, misalnya `serviceList`, `formatPrice`, dan `useViewport`.
- Gunakan `PascalCase` untuk komponen React dan nama file komponennya, misalnya `ServiceCard` dalam `ServiceCard.jsx`.
- Gunakan `kebab-case` untuk folder, file nonkomponen yang baru, class CSS buatan sendiri, dan nama aset, misalnya `site-header`, `site-header.css`, dan `hero-banner.webp`.
- Gunakan `UPPER_SNAKE_CASE` untuk konstanta tetap yang berlaku luas, misalnya `MAX_ITEMS`. Nilai lokal biasa tetap memakai `camelCase`.
- Ikuti nama bawaan framework dan file yang sudah ada, seperti `main.jsx`, `index.css`, `vite.config.js`, dan `package.json`; jangan mengganti nama file lama hanya demi mengikuti aturan ini.
- Untuk nama baru, pilih istilah bahasa Inggris yang jelas dan konsisten. Hindari singkatan yang tidak umum.

## Verifikasi dan laporan

- Pilih pemeriksaan sesuai perubahan. Untuk perubahan aplikasi, jalankan `npm.cmd run lint` dan `npm.cmd run build`, lalu cek perilaku di browser bila hasil visual atau interaksi berubah.
- Untuk dokumentasi saja, periksa isi, tautan lokal, dan diff. Tidak perlu menjalankan build aplikasi.
- Tinjau diff akhir dan pastikan hanya file yang terkait tugas yang berubah. Hentikan server lokal yang dijalankan untuk pemeriksaan.
- Laporkan apa yang berubah, pemeriksaan yang benar-benar dijalankan beserta hasilnya, dan batas verifikasi yang masih ada. Jangan mengklaim sesuatu sudah diuji jika belum.
- Berkomunikasi dalam bahasa Indonesia yang jelas dan ringkas. Jangan meminta persetujuan ulang untuk tindakan yang sudah diminta atau disetujui pengguna.
