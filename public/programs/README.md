# Program Images Folder

Folder ini berisi gambar-gambar untuk halaman Program Dispora Sumbar.

## Struktur Gambar yang Dibutuhkan

### Program Kepemudaan (3 gambar)
1. `sumpah-pemuda-digital.jpg` - Program literasi digital untuk pemuda
2. `wirausaha-muda.jpg` - Program kewirausahaan untuk pemuda
3. `pemuda-tanggap-bencana.jpg` - Program relawan bencana

### Program Keolahragaan (3 gambar)
4. `pplp-sumbar.jpg` - Pusat Pendidikan dan Latihan Pelajar
5. `ppop-sumbar.jpg` - Pusat Pembinaan Olahraga Pelajar
6. `olahraga-masyarakat.jpg` - Program olahraga untuk masyarakat umum

## Spesifikasi Gambar

- **Format**: JPG, PNG, atau SVG
- **Dimensi Rekomendasi**: 400x300px (4:3 ratio)
- **Ukuran File**: Maksimal 500KB per gambar
- **Kualitas**: Tinggi, resolusi minimal 72dpi

## Cara Menambah Gambar

1. Siapkan gambar dengan nama sesuai list di atas
2. Copy gambar ke folder `public/programs/`
3. Gambar akan otomatis muncul di halaman Program

## Backup dengan Gradient

Jika gambar belum tersedia, sistem akan menampilkan gradient background sebagai fallback:
- **Program Pemuda**: Gradient biru-ungu (blue-400 to purple-500)
- **Program Olahraga**: Gradient orange-merah (orange-400 to red-500)

## Tips Gambar yang Baik

✅ Gunakan foto aktivitas program yang sebenarnya  
✅ Pastikan pencahayaan bagus  
✅ Hindari gambar blur atau buram  
✅ Crop gambar ke fokus utama  
✅ Compress gambar untuk performa website optimal  

## Update Data Program

Untuk mengubah data program (judul, deskripsi, dll), edit file:
`src/data/programs.json`
