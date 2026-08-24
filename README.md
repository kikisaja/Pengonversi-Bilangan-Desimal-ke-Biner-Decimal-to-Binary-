# 🔢 Decimal to Binary Converter (Radix Conversions & Bit Layout)

Aplikasi **Pengonversi Bilangan Desimal ke Biner** berbasis web untuk mengubah angka basis 10 menjadi biner (basis 2), oktal (basis 8), dan heksadesimal (basis 16), dilengkapi visualisasi grid 8-bit.

Proyek ini sangat cocok bagi siswa SMK Jurusan Rekayasa Perangkat Lunak (RPL/PPLG) Kelas X untuk mempelajari materi dasar Sistem Komputer & Pemrograman Web.

---

## 🎯 Target Belajar & Konsep RPL

1. **Radix Conversion (`Number.toString(radix)`):**
   Mengonversi angka desimal ke basis lain secara otomatis:
   - Biner: `num.toString(2)`
   - Oktal: `num.toString(8)`
   - Heksadesimal: `num.toString(16)`
2. **String Padding (`padStart()`):**
   Memastikan format biner tampil dalam kelipatan byte (8-bit layout):
   `binaryStr.padStart(8, '0')`
3. **Dynamic DOM Generation (`document.createElement`):**
   Membuat elemen visualisasi bit secara dinamis berdasarkan nilai biner yang dihasilkan.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Input angka desimal, tombol aksi, grid visualisasi 8-bit, dan kartu hasil
├── style.css        # Styling layout Neobrutalism dengan indikator status aktif pada bit
└── script.js        # Fungsi konversi basis radix, handler DOM grid bit, dan listener UI
