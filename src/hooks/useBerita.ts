'use client';

import { useState, useEffect } from 'react';
import { ApiBeritaItem, ApiBeritaResponse, NewsItem } from '@/types/news';

const API_URL = '/api/berita';

// Placeholder images untuk berita yang tidak punya gambar
const PLACEHOLDER_IMAGES = [
    'https://images.unsplash.com/photo-1504711434969-e33886168d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

/**
 * Generate slug dari judul berita
 */
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .substring(0, 80)
        .replace(/^-+|-+$/g, '');
}

/**
 * Transform data API ke format NewsItem
 */
function transformApiData(apiData: ApiBeritaItem[]): NewsItem[] {
    return apiData.map((item, index) => ({
        id: item.id,
        title: item.judul_berita,
        excerpt: item.deskripsi,
        date: item.date,
        time: item.time,
        views: Math.floor(Math.random() * 3000) + 100,
        category: 'UMUM',
        tags: [],
        author: 'Admin',
        image: PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length],
        slug: generateSlug(item.judul_berita) || `berita-${item.id}`,
    }));
}

/**
 * Custom hook untuk fetch data berita dari API
 */
export function useBerita() {
    const [berita, setBerita] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function fetchBerita() {
            try {
                setLoading(true);
                setError(null);

                // Fetch halaman pertama dengan limit maksimal
                const response = await fetch(`${API_URL}?page=1&limit=100`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result: ApiBeritaResponse = await response.json();
                let allData: ApiBeritaItem[] = result.data || [];

                // Jika ada lebih dari 1 halaman, fetch sisa halaman secara paralel
                if (result.totalPages > 1) {
                    const remainingPages = [];
                    for (let page = 2; page <= result.totalPages; page++) {
                        remainingPages.push(
                            fetch(`${API_URL}?page=${page}&limit=100`)
                                .then(res => {
                                    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                                    return res.json();
                                })
                                .then((res: ApiBeritaResponse) => res.data || [])
                        );
                    }
                    const additionalData = await Promise.all(remainingPages);
                    allData = [...allData, ...additionalData.flat()];
                }

                if (!isCancelled) {
                    const transformedData = transformApiData(allData);
                    setBerita(transformedData);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : 'Gagal memuat berita');
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        }

        fetchBerita();

        return () => {
            isCancelled = true;
        };
    }, []);

    return { berita, loading, error };
}
