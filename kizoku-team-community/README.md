# XYRENT X-GANK — Community Website

Website komunitas statis dengan tema hitam-putih, animasi ringan, pilihan generasi, dan **kartu profil admin yang digeser secara horizontal**. Bagian profil anggota tidak dibuat; foto hanya disiapkan untuk admin.

## Struktur folder

```text
xyrent-x-gank-community/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── imgutama/
    │   └── README.txt  # petunjuk menambahkan hero.jpg
    └── admins/
        └── Rian.jpg    # gambar admin yang sudah tersedia
```

## Memasang foto admin

1. Siapkan foto admin yang memang boleh kamu tampilkan.
2. Buka folder `assets/admins/`.
3. Salin foto ke folder tersebut dan gunakan nama file `raka.jpg`, `naya.jpg`, `mika.jpg`, atau `kai.jpg`.
4. Untuk mengubah nama file atau menambah admin, edit array `admins` di `script.js`.
5. Foto admin ditampilkan dengan warna asli. Jika file foto belum ada, inisial admin akan tampil sebagai placeholder.

**Tidak ada foto anggota** di proyek ini. Kartu admin dapat digeser kiri/kanan dengan jari pada ponsel, atau memakai tombol panah.

## Mengubah konten

- Nama komunitas: sudah menggunakan `XYRENT X-GANK` di `index.html`.
- Nama/jabatan/foto admin dan tautan undangan: edit `script.js`.
- Data generasi: edit array `generations` di `script.js`.
- Angka statistik di bagian atas: ubah atribut `data-count` pada `index.html`.
- Teks dan desain: edit `index.html` dan `style.css`.

Data statistik dan generasi saat ini adalah **contoh**. Sesuaikan sebelum dipublikasikan. Website ini belum memakai database, login admin, atau panel untuk mengedit data dari browser.

## Menjalankan di Android

**Cara sederhana dengan Acode atau Spck Editor:**
1. Ekstrak ZIP ke folder yang mudah ditemukan.
2. Buka folder hasil ekstrak dari Acode/Spck Editor.
3. Buka `index.html`, lalu pilih Preview / Open in browser.
4. Jika editor memiliki fitur preview lokal, gunakan fitur itu agar file CSS dan JavaScript terbaca dari folder yang sama.

Bisa juga membuka `index.html` langsung lewat browser, tetapi hasilnya bergantung pada pengelola file/browser. Jika preview tidak berjalan baik, gunakan preview bawaan editor.

## Deployment online

Website ini statis, jadi tidak memerlukan server backend.

### Netlify
1. Ekstrak ZIP.
2. Buka Netlify di browser dan login.
3. Buat situs baru melalui opsi deploy manual / drag-and-drop.
4. Unggah folder proyek yang berisi `index.html`, `style.css`, `script.js`, dan folder `assets`.
5. Setelah deploy selesai, buka URL yang diberikan Netlify.

### Cloudflare Pages
1. Unggah proyek ke repositori GitHub atau gunakan metode unggah yang tersedia pada akun Cloudflare.
2. Buat project Pages dan pilih repositori.
3. Karena tidak memakai framework, build command dapat dikosongkan dan output directory diisi `/` atau direktori root proyek sesuai pilihan dashboard.
4. Deploy dan buka URL yang diberikan.

### GitHub Pages
1. Buat repositori baru dan unggah seluruh isi folder proyek.
2. Buka **Settings → Pages**.
3. Pilih branch utama dan folder root (`/`), lalu simpan.
4. Tunggu sampai GitHub Pages menampilkan URL website.

## Checklist sebelum publikasi

- [ ] Ganti `inviteUrl` di `script.js` dari `https://example.com` ke tautan komunitas yang benar.
- [ ] Ganti nama dan jabatan admin contoh.
- [ ] Tambahkan foto admin ke `assets/admins/`.
- [ ] Perbarui jumlah anggota dan generasi sesuai data sebenarnya.
- [ ] Pastikan kamu memiliki izin untuk menampilkan foto admin.


## Mengganti gambar utama (menggantikan logo XG di area hero)

1. Buka folder `assets/imgutama/`.
2. Letakkan gambar pilihanmu dengan nama `hero.jpg`.
3. Untuk mengatur tinggi area gambar, ubah `--hero-image-height` di bagian paling bawah `style.css` (contoh `420px`).
4. Untuk cara gambar memenuhi area, ubah `--hero-image-fit`: `contain` menampilkan gambar utuh, sedangkan `cover` mengisi area dan mungkin memotong sebagian gambar.
5. Jika `hero.jpg` belum tersedia, website akan menampilkan petunjuk placeholder.

Bagian website lain tetap dipertahankan. Foto admin sekarang ditampilkan dalam warna aslinya.


## Tema dan tautan grup per generasi

- Tema background memakai beberapa warna gelap (navy/abu-abu) dengan garis putih dekoratif.
- Untuk mengatur tombol masuk grup tiap generasi, buka `script.js` lalu isi properti `url` pada array `generations` dengan tautan undangan WhatsApp yang sesuai. Contoh: `url: "https://chat.whatsapp.com/TAUTAN_GEN_01"`.
- Setiap kartu generasi menampilkan tombol masuk grup untuk generasi yang sedang dipilih. Jika `url` masih kosong, tombol memberi petunjuk untuk mengisi tautan tersebut.


## Fitur tambahan V7
- Area bola/orbit animasi berada tepat di bawah gambar utama; gerak dapat dikurangi melalui pengaturan `prefers-reduced-motion` perangkat.
- Bagian `CLAN RULES` berada di bawah kartu gabung dan sebelum footer. Edit judul serta isi aturan langsung pada bagian `id="rules"` di `index.html`.
- Untuk mengubah jumlah aturan, duplikasikan atau hapus elemen `<article class="rule-card">...</article>` pada `index.html`.


## Revisi V10
- Background memakai animasi bintang jatuh dan bintang berputar/bergerak di seluruh halaman.
- Kartu komunitas dipindahkan ke bawah bagian Rules.
- Teks abu-abu yang dipilih untuk keterbacaan diubah menjadi putih dan ditambahkan aksen emoji secukupnya.
