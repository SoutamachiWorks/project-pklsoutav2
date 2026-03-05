'use client';

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import newsData from '@/data/news.json';
import categoriesData from '@/data/categories.json';

export default function BeritaPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Semua Berita dari JSON - Single Source of Truth
  const allNews = newsData;

  // Filter berita untuk slider utama (yang punya tag "berita utama")
  const featuredNews = allNews.filter(news => news.tags?.includes("berita utama"));

  // Categories dari JSON
  const categories = [
    { name: "Semua", count: allNews.length, id: 'semua' },
    ...categoriesData.map(cat => ({
      name: cat.name,
      count: cat.count,
      id: cat.slug
    }))
  ];


  // Berita Terkait
  const beritaTerkait = [
    {
      id: 1,
      title: "Judul berita terkait yang menarik untuk dibaca",
      time: "2 hari yang lalu"
    },
    {
      id: 2,
      title: "Judul berita terkait yang menarik untuk dibaca",
      time: "2 hari yang lalu"
    },
    {
      id: 3,
      title: "Judul berita terkait yang menarik untuk dibaca",
      time: "2 hari yang lalu"
    }
  ];

  // Filter berita berdasarkan kategori aktif
  const filteredNews = allNews.filter((news) => {
    // Exclude berita utama dari grid (karena sudah di slider)
    const isNotFeatured = !news.tags?.includes("berita utama");
    
    if (activeFilter === 'semua') return isNotFeatured;
    if (activeFilter === 'berita') return isNotFeatured && (news.category === 'TERKINI' || news.category === 'OLAHRAGA' || news.category === 'PEMUDA' || news.category === 'PRESTASI');
    if (activeFilter === 'pengumuman') return isNotFeatured && news.category === 'PENGUMUMAN';
    if (activeFilter === 'program') return isNotFeatured && news.category === 'PROGRAM';
    if (activeFilter === 'kegiatan') return isNotFeatured && news.category === 'KEGIATAN';
    if (activeFilter === 'berita-utama') return news.tags?.includes("berita utama");
    return isNotFeatured;
  });

  // Agenda Kegiatan
  const agendaKegiatan = [
    {
      id: 1,
      date: "25",
      month: "Jan",
      time: "09:00",
      title: "Rapat Koordinasi Bulanan",
      location: "Ruang Rapat"
    },
    {
      id: 2,
      date: "28",
      month: "Jan",
      time: "13:00",
      title: "Workshop Digital",
      location: "Aula Utama"
    },
    {
      id: 3,
      date: "30",
      month: "Jan",
      time: "10:00",
      title: "Sosialisasi Regulasi",
      location: "Gedung Pertemuan"
    }
  ];

  // Filter berdasarkan search term
  const searchedNews = filteredNews.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculation
  const totalPages = Math.ceil(searchedNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = searchedNews.slice(startIndex, endIndex);

  // Reset ke halaman 1 saat filter atau search berubah
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  // Auto-play slider for featured news
  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, featuredNews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredNews.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredNews.length) % featuredNews.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  // Scroll Animation Hook
  useEffect(() => {
    // Optimized for mobile and desktop
    const isMobile = window.innerWidth < 768;
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.15,
      rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [currentNews]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm flex items-center">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Beranda</Link>
            <span className="mx-2 text-gray-400">→</span>
            <span className="text-gray-800 font-semibold">Berita</span>
          </nav>
        </div>
      </div>

      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white py-16 relative overflow-hidden scroll-animate">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Portal Berita & Informasi
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita Terkini</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Informasi terbaru, update kegiatan, dan prestasi gemilang 
            Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured News Hero Slider */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 relative scroll-animate">
          {/* Slider Container */}
          <div className="relative min-h-[280px] md:min-h-[400px] lg:min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[280px] md:min-h-[400px] lg:min-h-[500px]">
              {/* Left Content */}
              <div className="p-2 sm:p-6 lg:p-12 flex flex-col justify-center min-h-[280px] md:min-h-[400px] lg:min-h-[500px] relative">
                {featuredNews.map((news, index) => (
                  <div
                    key={news.id}
                    className={`transition-all duration-700 absolute inset-0 p-2 sm:p-6 lg:p-12 flex flex-col justify-center ${
                      index === currentSlide
                        ? 'opacity-100 z-10'
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-sm font-medium mb-1.5 sm:mb-4 w-fit">
                      Berita Utama
                    </span>
                    
                    <h2 className="text-base md:text-xl lg:text-3xl font-bold text-gray-800 mb-1.5 md:mb-3 lg:mb-4 leading-tight">
                      {news.title}
                    </h2>
                    
                    <div className="flex items-center text-[10px] sm:text-sm text-gray-500 mb-1.5 sm:mb-4">
                      <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {news.date}
                      <span className="mx-1 sm:mx-2">•</span>
                      <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-0.5 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {news.views} views
                    </div>
                    
                    <p className="text-[10px] md:text-sm lg:text-base text-gray-600 mb-2 md:mb-4 lg:mb-6 leading-snug line-clamp-2 overflow-hidden">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-6">
                      {news.tags && news.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md text-[9px] sm:text-sm ${
                            tagIndex === 0 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'bg-green-50 text-green-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center lg:justify-start">
                      <Link 
                        href={`/berita/${news.slug}`}
                        className="inline-flex items-center bg-blue-600 text-white px-2.5 py-1 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-[10px] md:text-sm lg:text-base"
                      >
                        Baca Selengkapnya
                        <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1 md:ml-1.5 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Right Image */}
              <div className="relative min-h-[200px] md:min-h-[400px] lg:min-h-[500px]">
                {featuredNews.map((news, index) => (
                  <div
                    key={news.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-md text-sm font-medium z-10">
                      {news.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {featuredNews.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10 group"
                aria-label="Slide sebelumnya"
              >
                <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10 group"
                aria-label="Slide berikutnya"
              >
                <svg className="w-5 h-5 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {featuredNews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 h-3 bg-blue-600'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Pergi ke slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label={isAutoPlay ? 'Pause auto-play' : 'Resume auto-play'}
              >
                {isAutoPlay ? (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 scroll-animate">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari berita, program, atau kegiatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.name}
              {activeFilter === category.id && (
                <span className="ml-2 inline-flex items-center justify-center w-2 h-2 bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Semua Berita</h2>
              <p className="text-sm md:text-base text-gray-500">{searchedNews.length} berita ditemukan</p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group scroll-animate">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-5 flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-2 flex-wrap">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">{news.date}</span>
                      <span className="mx-1.5 sm:mx-2 flex-shrink-0">•</span>
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="truncate">{news.views}</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-2 md:mb-3 leading-tight text-sm md:text-base line-clamp-2 h-[2.8rem] md:h-[3rem]">
                      <Link href={`/berita/${news.slug}`} className="hover:text-blue-600 transition-colors">
                        {news.title}
                      </Link>
                    </h3>
                    
                    <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 leading-tight h-[2.4rem] md:h-[2.8rem] overflow-hidden">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <Link 
                        href={`/berita/${news.slug}`} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-xs md:text-sm group-hover:gap-2 transition-all"
                      >
                        <span className="hidden sm:inline">Baca Selengkapnya</span>
                        <span className="sm:hidden">Baca</span>
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      {news.author && (
                        <span className="text-[10px] md:text-xs text-gray-400 truncate ml-2 max-w-[100px] md:max-w-[120px]">
                          {news.author}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {searchedNews.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600 text-lg">Tidak ada berita ditemukan</p>
                <p className="text-gray-500 text-sm mt-2">Coba gunakan kata kunci lain atau pilih kategori berbeda</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Sebelumnya
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Hanya tampilkan 5 halaman: current, 2 sebelum, 2 sesudah
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`px-4 py-2 rounded-lg font-medium ${
                            currentPage === pageNumber
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return <span key={pageNumber} className="px-2 py-2 text-gray-400">...</span>;
                    }
                    return null;
                  })}
                  
                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Selanjutnya →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Berita Terkait */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-5 lg:p-6 mb-6 scroll-animate">
              <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">Berita Terkait</h3>
              <div className="space-y-4">
                {beritaTerkait.map((berita) => (
                  <div key={berita.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <h4 className="text-sm font-medium text-gray-800 leading-tight mb-2 line-clamp-2 overflow-hidden text-ellipsis hover:text-blue-600 cursor-pointer">
                      {berita.title}
                    </h4>
                    <p className="text-xs text-gray-500">{berita.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda Kegiatan */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-5 lg:p-6 scroll-animate">
              <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">Agenda Kegiatan</h3>
              <div className="space-y-4">
                {agendaKegiatan.map((agenda) => (
                  <div key={agenda.id} className="flex space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-red-600 text-white rounded-lg p-2 w-14">
                        <div className="text-2xl font-bold leading-none">{agenda.date}</div>
                        <div className="text-xs uppercase">{agenda.month}</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight line-clamp-2 overflow-hidden text-ellipsis">
                        {agenda.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {agenda.time}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {agenda.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
