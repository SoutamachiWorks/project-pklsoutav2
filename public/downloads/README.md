# File Dummy untuk Testing Download

Folder ini berisi file dummy untuk testing fungsionalitas download pada website Dinas Pemuda dan Olahraga.

## Daftar File Tersedia:

### Kategori: Formulir & Template
1. **form-permohonan-informasi.pdf** (PDF)
   - Formulir untuk mengajukan permohonan informasi publik

2. **form-keberatan.pdf** (PDF)
   - Formulir untuk mengajukan keberatan atas penolakan informasi

3. **form-pengaduan.pdf** (PDF)
   - Formulir untuk menyampaikan pengaduan terkait pelayanan

4. **template-surat-permohonan.docx** (DOCX)
   - Template surat permohonan untuk berbagai keperluan

### Kategori: Laporan & Dokumen
5. **laporan-kinerja-2024.pdf** (PDF)
   - Laporan kinerja tahunan tahun 2024

6. **rka-2025.pdf** (PDF)
   - Rencana Kerja Anggaran tahun 2025

### Kategori: Peraturan & Kebijakan
7. **pergub-45-2024.pdf** (PDF)
   - Peraturan Gubernur tentang Pembinaan Olahraga

### Kategori: Panduan & Petunjuk
8. **panduan-fasilitas.pdf** (TXT - disimpan sebagai PDF)
   - Panduan penggunaan fasilitas olahraga

## Fitur Download yang Diimplementasikan:

1. **Toast Notification**: 
   - Notifikasi "Mengunduh..." saat proses download dimulai
   - Notifikasi "Berhasil mengunduh..." setelah download selesai
   - Notifikasi error jika terjadi kesalahan

2. **Download Counter**: 
   - Setiap file menampilkan jumlah download

3. **File Metadata**: 
   - Ukuran file
   - Format file (PDF/DOCX)
   - Tanggal upload

## Catatan:

- Semua file adalah file dummy untuk testing
- File PDF dibuat dengan struktur PDF minimal yang valid
- File DOCX adalah text plain untuk kesederhanaan
- Notifikasi akan muncul di pojok kanan atas saat download
- Notifikasi akan hilang otomatis setelah 4 detik

## Testing:

Untuk menguji fungsionalitas:
1. Buka halaman `/unduh`
2. Pilih kategori dokumen
3. Klik tombol "Unduh" pada dokumen
4. Perhatikan notifikasi yang muncul
5. Cek folder Downloads browser untuk file yang terunduh
