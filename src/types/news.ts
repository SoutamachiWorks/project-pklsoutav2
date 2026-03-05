/**
 * Interface untuk response API berita
 */
export interface ApiBeritaItem {
  _id: string;
  id: number;
  judul_berita: string;
  deskripsi: string;
  time: string;
  date: string;
}

/**
 * Interface untuk struktur data berita yang digunakan di UI
 * Mendefinisikan kontrak tipe data yang harus dipenuhi oleh setiap item berita
 */
export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  views: number;
  category: string;
  tags: string[];
  author: string;
  image: string;
  slug: string;
}

/**
 * Type untuk array berita
 */
export type NewsData = NewsItem[];
