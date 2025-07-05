# Wardantz Store

Wardantz Store adalah website e-commerce modern yang menawarkan pengalaman belanja online premium dengan tampilan profesional, fitur lengkap, dan performa responsif. Proyek ini dibangun menggunakan HTML, CSS (TailwindCSS), dan JavaScript, serta mengutamakan maintainability dengan pemisahan file dan struktur yang rapi.

## Fitur Utama
- **Desain Responsif**: Tampilan optimal di berbagai perangkat (mobile, tablet, desktop)
- **Navigasi Mudah**: Menu utama, menu mobile, dan pencarian produk
- **Produk Dinamis**: Daftar produk dapat diatur melalui file JSON
- **Keranjang Belanja**: Sidebar keranjang dengan update jumlah dan total harga secara real-time
- **Quick View**: Modal untuk melihat detail produk secara instan
- **Testimoni Pelanggan**: Ulasan pelanggan dengan visual menarik
- **Form Kontak**: Formulir untuk menghubungi layanan pelanggan
- **Footer Informatif**: Tautan cepat, layanan pelanggan, dan metode pembayaran

## Struktur Folder
```
Wardantz Store/
├── assets/
│   ├── main.js         # Script utama (logika produk, keranjang, dsb)
│   ├── style.css       # Kustomisasi CSS tambahan
│   └── products.json   # Data produk (opsional)
├── index.html          # Halaman utama
└── README.md           # Dokumentasi proyek
```

## Cara Menjalankan
1. **Clone repository ini**
   ```bash
   git clone https://github.com/username/wardantz-store.git
   cd wardantz-store
   ```
2. **Buka file `index.html` di browser**
   - Tidak memerlukan instalasi backend atau build tools
   - Semua dependensi utama (TailwindCSS, FontAwesome) di-load via CDN

## Kustomisasi
- **Produk**: Edit `assets/products.json` dan/atau `main.js` untuk menambah/mengubah produk
- **Style**: Tambahkan CSS di `assets/style.css` jika diperlukan
- **Fungsi**: Kembangkan fitur baru di `assets/main.js`

## Kontribusi
Kontribusi sangat terbuka! Silakan fork, buat branch, dan ajukan pull request. Pastikan kode tetap rapi dan mudah dipahami.

## Lisensi
MIT License

---

> Website ini dibuat untuk keperluan pembelajaran, portofolio, dan pengembangan e-commerce modern.
