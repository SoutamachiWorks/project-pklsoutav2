# Panduan Generate Diagram UML

Folder ini berisi file PlantUML (.puml) untuk diagram-diagram sistem Website Dispora.

## File Diagram

1. **usecase-diagram.puml** - Use Case Diagram
2. **activity-diagram-ssr.puml** - Activity Diagram (Mekanisme SSR)
3. **context-diagram-dfd0.puml** - Diagram Konteks (DFD Level 0)

## Cara Generate Gambar

### Metode 1: Online (Tercepat)

1. Kunjungi **[PlantUML Online Editor](https://www.plantuml.com/plantuml/uml/)**
2. Copy-paste isi file .puml
3. Diagram akan otomatis ter-generate
4. Klik "PNG" atau "SVG" untuk download gambar

### Metode 2: VS Code Extension

1. Install extension **PlantUML** di VS Code
2. Buka file .puml
3. Tekan `Alt+D` untuk preview
4. Klik kanan → Export untuk save gambar

### Metode 3: Command Line (Java)

```bash
# Install PlantUML
# Download plantuml.jar dari https://plantuml.com/download

# Generate diagram
java -jar plantuml.jar usecase-diagram.puml
java -jar plantuml.jar activity-diagram-ssr.puml
java -jar plantuml.jar context-diagram-dfd0.puml
```

### Metode 4: Online Tools Lainnya

- **Draw.io / diagrams.net** - Import PlantUML
- **Lucidchart** - Import PlantUML
- **Creately** - UML Diagram Maker

## Format Output

Diagram dapat di-export dalam format:
- **PNG** - Untuk dokumen Word/PDF
- **SVG** - Untuk kualitas vector
- **PDF** - Langsung untuk laporan

## Kustomisasi

Anda dapat memodifikasi file .puml sesuai kebutuhan:
- Tambah/kurangi use case
- Ubah flow activity diagram
- Sesuaikan label dan keterangan

## Integrasi ke Laporan

Setelah generate gambar:
1. Simpan dengan nama yang sesuai (misal: `usecase-dispora.png`)
2. Insert ke dokumen laporan di bagian yang ditandai `[📌 INSTRUKSI...]`
3. Beri caption sesuai dengan nomor gambar (4.2, 4.3, 4.4)

---

**Referensi:**
- PlantUML Documentation: https://plantuml.com/
- UML Diagram Guide: https://www.visual-paradigm.com/guide/uml-unified-modeling-language/
