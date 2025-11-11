# Data Structure Documentation

## Overview
Folder ini berisi file-file JSON yang menyimpan data statis untuk website Dinas Pemuda dan Olahraga Provinsi Sumatera Barat.

## Files

### 1. `news.json`
Berisi data semua berita yang ditampilkan di website.

**Struktur:**
```json
[
  {
    "id": number,              // ID unik berita
    "title": string,           // Judul berita
    "excerpt": string,         // Ringkasan/cuplikan berita
    "date": string,            // Tanggal publikasi (format: "DD Month YYYY")
    "time": string,            // Waktu publikasi (format: "HH:MM:SS WIB")
    "views": number,           // Jumlah views
    "category": string,        // Kategori: PROGRAM, PENGUMUMAN, KEGIATAN, PRESTASI
    "tags": string[],          // Array tags, misal: ["berita utama", "program"]
    "author": string,          // Nama penulis
    "image": string,           // Path gambar (relatif ke public folder)
    "slug": string             // URL slug untuk routing
  }
]
```

**Tag System:**
- `"berita utama"` - Berita akan muncul di slider utama halaman berita
- Tags lain (program, pengumuman, kegiatan, dll) - Untuk kategorisasi dan filtering

**Cara Menambah Berita Baru:**
1. Buka `news.json`
2. Tambahkan object baru ke array dengan struktur yang sama
3. Pastikan `id` unik dan berurutan
4. Tambahkan tag `"berita utama"` jika ingin muncul di slider
5. Simpan file

**Cara Update Berita:**
1. Cari berita berdasarkan `id` atau `slug`
2. Edit field yang diinginkan
3. Simpan file

### 2. `categories.json`
Berisi data kategori berita untuk sidebar dan filter.

**Struktur:**
```json
[
  {
    "name": string,     // Nama kategori yang ditampilkan
    "count": number,    // Jumlah berita dalam kategori ini
    "color": string,    // Tailwind CSS class untuk warna badge
    "slug": string      // URL slug untuk routing kategori
  }
]
```

**Warna yang Tersedia:**
- `bg-blue-500` - Biru (Pengumuman)
- `bg-green-500` - Hijau (Program)
- `bg-yellow-500` - Kuning (Kegiatan)
- `bg-purple-500` - Ungu (Prestasi)
- `bg-red-500` - Merah (Berita Utama)

**Update Count:**
Saat menambah/menghapus berita, jangan lupa update `count` di kategori yang sesuai.

## Usage

### Import di Component
```typescript
import newsData from '@/data/news.json';
import categoriesData from '@/data/categories.json';
```

### Filter Berita Utama
```typescript
const featuredNews = newsData.filter(news => news.tags?.includes("berita utama"));
```

### Filter by Category
```typescript
const programNews = newsData.filter(news => news.category === "PROGRAM");
```

## Files yang Menggunakan Data Ini

1. **src/app/berita/page.tsx** - Halaman daftar berita utama dengan slider dan pagination
2. **src/components/NewsSection.tsx** - Section berita di homepage

## Backup

Backup file ada di folder `backup/`:
- `backup/berita-page-backup.tsx`
- `backup/NewsSection-backup.tsx`

Jika terjadi error, bisa restore dari file backup tersebut.

## Notes

- Semua path gambar menggunakan format `/news/nama-file.jpg` yang merujuk ke `public/news/`
- Pastikan gambar sudah ada di folder `public/news/` sebelum menambah berita
- Format tanggal konsisten: "DD Month YYYY" (contoh: "22 April 2025")
- Format waktu konsisten: "HH:MM:SS WIB"
- Slug harus unik dan URL-friendly (lowercase, hyphen-separated)

## Maintenance

**Update Regular:**
1. Tambah berita baru ke `news.json`
2. Update count di `categories.json` sesuai kategori
3. Test di halaman berita dan homepage
4. Commit changes ke git

**Best Practices:**
- Jangan edit langsung di production
- Test perubahan di local development dulu
- Backup data sebelum perubahan besar
- Validasi JSON format sebelum save (gunakan JSON validator)
