'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon, ArrowRightIcon, AlertIcon } from './Icons';
import { useBerita } from '@/hooks/useBerita';
import categoriesData from '@/data/categories.json';

const NewsSection = () => {
  const { berita, loading, error } = useBerita();

  // Data berita dari API - hanya tampilkan 8 berita pertama untuk homepage
  const allNews = berita.slice(0, 8);

  // Featured news = berita pertama
  const featuredNews = allNews[0];

  // Latest news = 4 berita terbaru setelah featured
  const latestNews = allNews.filter(news => news.id !== featuredNews?.id).slice(0, 4);

  // Categories dari JSON
  const categories = categoriesData;

  // Loading State
  if (loading) {
    return (
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Update Terbaru
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Berita & Informasi Terkini
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              {/* Featured skeleton */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6 sm:mb-8 animate-pulse">
                <div className="h-64 sm:h-72 md:h-80 bg-gray-200"></div>
                <div className="p-5 sm:p-6 md:p-8 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
              {/* Grid skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="h-44 sm:h-48 bg-gray-200"></div>
                    <div className="p-4 sm:p-5 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Update Terbaru
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita & Informasi Terkini
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-lg mx-auto">
            <p className="text-red-600 font-medium mb-2">Gagal memuat berita</p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Empty State
  if (!featuredNews || allNews.length === 0) {
    return (
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita & Informasi Terkini
          </h2>
          <p className="text-gray-500">Belum ada berita tersedia.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 fade-in-up">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Update Terbaru
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita & Informasi Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Ikuti perkembangan terbaru seputar kegiatan, prestasi, dan program-program unggulan
            Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6 sm:mb-8 group hover:shadow-2xl transition-all duration-300 hover-float">
              <div className="relative">
                <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm flex items-center gap-2">
                    BERITA UTAMA
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3">
                    {featuredNews.category}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  <Link href={`/berita/${featuredNews.slug}`} className="hover:text-red-600 transition-colors">
                    {featuredNews.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-wrap gap-3">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      {featuredNews.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <EyeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {featuredNews.views.toLocaleString()}
                    </span>
                  </div>
                  <Link
                    href={`/berita/${featuredNews.slug}`}
                    className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-1 text-xs sm:text-sm transition-all hover:gap-2"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </div>

            {/* Latest News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {latestNews.map((news) => (
                <div key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover-lift">
                  <div className="h-44 sm:h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-red-600">
                        {news.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2 text-sm sm:text-base group-hover:text-red-600 transition-colors">
                      <Link href={`/berita/${news.slug}`}>
                        {news.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        {news.date}
                      </span>
                      <span className="flex items-center text-xs text-gray-500 gap-1">
                        <EyeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {news.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <Link
                href="/berita"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Lihat Semua Berita
                <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 sm:space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <h3 className="font-bold text-base sm:text-lg text-gray-800">Kategori Berita</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/berita/kategori/${category.slug}`}
                    className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300 group border border-transparent hover:border-red-100"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${category.color} group-hover:scale-125 transition-transform`}></div>
                      <span className="text-gray-700 group-hover:text-red-600 font-medium transition-colors text-sm sm:text-base">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm font-semibold bg-gray-100 px-2 py-0.5 sm:py-1 rounded-full group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-5 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <span className="text-xl sm:text-2xl">📊</span>
                <h3 className="font-bold text-base sm:text-lg">Statistik Website</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <span className="text-blue-50 text-xs sm:text-sm">👥 Online Sekarang</span>
                  <span className="font-bold text-lg sm:text-xl text-green-300 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    24
                  </span>
                </div>
                <div className="flex justify-between items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <span className="text-blue-50 text-xs sm:text-sm">📅 Hari Ini</span>
                  <span className="font-bold text-lg sm:text-xl text-white">1,245</span>
                </div>
                <div className="flex justify-between items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <span className="text-blue-50 text-xs sm:text-sm">⏮️ Kemarin</span>
                  <span className="font-bold text-lg sm:text-xl text-blue-100">987</span>
                </div>
                <div className="flex justify-between items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <span className="text-blue-50 text-xs sm:text-sm">🌐 Total Pengunjung</span>
                  <span className="font-bold text-lg sm:text-xl text-yellow-300">351,665</span>
                </div>
                <div className="flex justify-between items-center p-2.5 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                  <span className="text-blue-50 text-xs sm:text-sm">🎯 Total Hits</span>
                  <span className="font-bold text-lg sm:text-xl text-red-300">1,237,684</span>
                </div>
              </div>
            </div>

            {/* Breaking News */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl shadow-xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full -ml-10 sm:-ml-12 -mb-10 sm:-mb-12"></div>
              <div className="relative">
                <h3 className="font-bold text-base sm:text-lg mb-4 flex items-center">
                  <AlertIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  <span>Pengumuman Penting</span>
                </h3>
                <div className="space-y-4">
                  {allNews.slice(0, 1).map((news) => (
                    <div key={news.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <p className="text-xs sm:text-sm leading-relaxed font-medium mb-2">
                        {news.title}
                      </p>
                      <p className="text-[10px] sm:text-xs text-red-100 mb-2 sm:mb-3">
                        {news.date}
                      </p>
                      <Link href={`/berita/${news.slug}`} className="inline-flex items-center text-xs sm:text-sm font-semibold text-white hover:text-red-200 transition-all hover:gap-1.5">
                        Baca Selengkapnya
                        <span className="ml-1">→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
