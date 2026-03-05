/**
 * Interface untuk struktur data berita
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
