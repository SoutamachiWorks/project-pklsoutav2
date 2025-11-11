'use client';

import { useState } from 'react';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BeritaPage() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Semua Berita - Single Source of Truth
  const allNews = [
    {
      id: 1,
      title: "Seleksi Penerimaan Siswa Baru Binaan UPTD Kebakatan Olahraga Dinas Pemuda dan Olahraga",
      excerpt: "Dinas Pemuda Dan Olahraga Provinsi Sumatera Barat Melalui Uptd Kebakatan Olahraga Akan Melaksanakan Seleksi Penerimaan penerimaan Atlet/siswa Binaan Pada Kegiatan Sentra.",
      date: "22 April 2025",
      time: "14:59:09 WIB",
      views: 112,
      category: "PROGRAM",
      tags: ["berita utama", "program"],
      author: "Admin Dispora",
      image: "/news/featured-news.jpg",
      slug: "seleksi-penerimaan-siswa-baru-binaan-uptd"
    },
    {
      id: 2,
      title: "Laporan Layanan Informasi Publik Tahun 2024",
      excerpt: "Pada Tahun 2024, Ppid Dinas Pemuda Dan Olahraga Provinsi Sumatera Barat telah Menyelesaikan Permohonan Informasi Publik Yang Disampaikan Melalui Formulir Permohonan Datang Lan.",
      date: "18 Maret 2025",
      time: "09:43:52 WIB",
      views: 102,
      category: "PENGUMUMAN",
      tags: ["berita utama", "pengumuman"],
      author: "Admin Dispora",
      image: "/news/news2.jpg",
      slug: "laporan-layanan-informasi-publik-2024"
    },
    {
      id: 3,
      title: "PPLP Sumbar Gelar Seleksi Penerimaan Atlet Tahun 2025",
      excerpt: "Padang, lebih kurang 177 orang atlet (siswa) ikuti seleksi calon penerimaan Pusat Pembinaan Dan Latihan Pelajar (PPLP) Sumbar Tahun 2025.",
      date: "14 Maret 2025",
      time: "10:30:00 WIB",
      views: 324,
      category: "KEGIATAN",
      tags: ["berita utama", "kegiatan"],
      author: "Admin Dispora",
      image: "/news/news3.jpg",
      slug: "pplp-seleksi-atlet-2025"
    },
    {
      id: 4,
      title: "LHKPN Pimpinan Dinas Pemuda dan Olahraga Provinsi Sumatera Barat Tahun 2024",
      excerpt: "Laporan Harta Kekayaan Pejabat Negara Pimpinan Dinas Pemuda Dan Olahraga Provinsi Sumatera Barat Tahun 2024 Yang Telah Diperiksa, Diverifikasi Dan Telah Dikirimkan Oleh Komisi Pemb.",
      date: "18 September 2024",
      time: "11:13:07 WIB",
      views: 280,
      category: "PENGUMUMAN",
      tags: ["pengumuman"],
      author: "Admin Dispora",
      image: "/news/news4.jpg",
      slug: "lhkpn-pimpinan-dispora-2024"
    },
    {
      id: 5,
      title: "Turnamen Sepakbola Antar Lembaga, 17 Tim Siap Perebutkan Piala Gubernur Sumatera Barat",
      excerpt: "Turnamen sepakbola antar lembaga dengan partisipasi 17 tim terbaik dari berbagai instansi di Sumatera Barat dalam rangka memperebutkan Piala Gubernur.",
      date: "7 Agustus 2023",
      time: "08:15:09 WIB",
      views: 456,
      category: "KEGIATAN",
      tags: ["kegiatan", "olahraga"],
      author: "Admin Dispora",
      image: "/news/news5.jpg",
      slug: "turnamen-sepakbola-piala-gubernur"
    },
    {
      id: 6,
      title: "Kadispora Sumbar: Jangan Setengah Setengah Menjadi Atlet",
      excerpt: "Jadilah Atlet Hebat, Buat Bangga Orang Tua, Pelatih, Dan Daerah Dengan Torehan Prestasi. Motifasi Ini Disampaikan Kepala Dinas Pemuda Dan Olahraga (Kadispo).",
      date: "18 Mei 2023",
      time: "17:08:08 WIB",
      views: 934,
      category: "PRESTASI",
      tags: ["prestasi", "motivasi"],
      author: "Michael Angelo",
      image: "/news/news6.jpg",
      slug: "kadispora-motivasi-atlet"
    },
    {
      id: 7,
      title: "Pelatihan Kewirausahaan Dispora Sumbar Tahun 2025",
      excerpt: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat menggelar pelatihan kewirausahaan untuk mengembangkan jiwa entrepreneur generasi muda.",
      date: "10 Maret 2025",
      time: "14:20:00 WIB",
      views: 189,
      category: "PROGRAM",
      tags: ["program", "pemuda"],
      author: "Admin Dispora",
      image: "/news/news7.jpg",
      slug: "pelatihan-kewirausahaan-2025"
    },
    {
      id: 8,
      title: "Revitalisasi Fasilitas Olahraga di Sumatera Barat",
      excerpt: "Program revitalisasi fasilitas olahraga dilakukan untuk mendukung pembinaan atlet dan pengembangan olahraga masyarakat di Sumatera Barat.",
      date: "5 Maret 2025",
      time: "09:15:00 WIB",
      views: 267,
      category: "PROGRAM",
      tags: ["program", "infrastruktur"],
      author: "Admin Dispora",
      image: "/news/news8.jpg",
      slug: "revitalisasi-fasilitas-olahraga"
    },
    {
      id: 9,
      title: "Workshop Pembinaan Organisasi Pemuda Tingkat Provinsi",
      excerpt: "Kegiatan workshop bertujuan meningkatkan kapasitas organisasi kepemudaan dalam mengelola program dan kegiatan yang bermanfaat.",
      date: "1 Maret 2025",
      time: "13:00:00 WIB",
      views: 156,
      category: "KEGIATAN",
      tags: ["kegiatan", "pemuda"],
      author: "Admin Dispora",
      image: "/news/news9.jpg",
      slug: "workshop-pembinaan-pemuda"
    },
    {
      id: 10,
      title: "Pengumuman Hasil Seleksi Beasiswa Atlet Berprestasi 2025",
      excerpt: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat mengumumkan hasil seleksi penerima beasiswa untuk atlet berprestasi tahun 2025.",
      date: "25 Februari 2025",
      time: "10:00:00 WIB",
      views: 421,
      category: "PENGUMUMAN",
      tags: ["pengumuman", "beasiswa"],
      author: "Admin Dispora",
      image: "/news/news10.jpg",
      slug: "pengumuman-beasiswa-atlet-2025"
    },
    {
      id: 11,
      title: "Festival Olahraga Tradisional Sumatera Barat 2025",
      excerpt: "Rangkaian kegiatan festival olahraga tradisional akan digelar sebagai upaya melestarikan budaya olahraga lokal Minangkabau.",
      date: "15 Februari 2025",
      time: "14:45:00 WIB",
      views: 512,
      category: "KEGIATAN",
      tags: ["kegiatan", "budaya"],
      author: "Admin Dispora",
      image: "/news/news11.jpg",
      slug: "festival-olahraga-tradisional-2025"
    }
  ];

  // Filter berita untuk slider utama (yang punya tag "berita utama")
  const featuredNews = allNews.filter(news => news.tags?.includes("berita utama"));

  // Categories
  const categories = [
    { name: "Semua", count: 50, id: 'semua' },
    { name: "Berita", count: 15, id: 'berita' },
    { name: "Pengumuman", count: 12, id: 'pengumuman' },
    { name: "Program", count: 8, id: 'program' },
    { name: "Kegiatan", count: 10, id: 'kegiatan' },
    { name: "Berita Utama", count: 5, id: 'berita-utama' }
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

  return (
    <main className="min-h-screen bg-gray-50" suppressHydrationWarning>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Beranda</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Berita</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured News Hero Slider */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 relative">
          {/* Slider Container */}
          <div className="relative min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center min-h-[500px] relative">
                {featuredNews.map((news, index) => (
                  <div
                    key={news.id}
                    className={`transition-all duration-700 absolute inset-0 p-8 lg:p-12 flex flex-col justify-center ${
                      index === currentSlide
                        ? 'opacity-100 z-10'
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                      Berita Utama
                    </span>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      {news.title}
                    </h2>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {news.date}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {news.views} views
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {news.tags && news.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 py-1 rounded-md text-sm ${
                            tagIndex === 0 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'bg-green-50 text-green-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/berita/${news.slug}`}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit"
                    >
                      Baca Selengkapnya
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
              
              {/* Right Image */}
              <div className="relative min-h-[500px]">
                {featuredNews.map((news, index) => (
                  <div
                    key={news.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"></div>
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 group"
                aria-label="Slide sebelumnya"
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 group"
                aria-label="Slide berikutnya"
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-3xl mx-auto mb-8">
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              <h2 className="text-2xl font-bold text-gray-800">Semua Berita</h2>
              <p className="text-gray-500">{searchedNews.length} berita ditemukan</p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 overflow-hidden">
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {news.date}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {news.views}
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-3 leading-tight line-clamp-2 h-12">
                      <Link href={`/berita/${news.id}`} className="hover:text-blue-600 transition-colors">
                        {news.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/berita/${news.id}`} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-2 transition-all"
                      >
                        Baca Selengkapnya
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      {news.author && (
                        <span className="text-xs text-gray-400">
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
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Berita Terkait</h3>
              <div className="space-y-4">
                {beritaTerkait.map((berita) => (
                  <div key={berita.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <h4 className="text-sm font-medium text-gray-800 leading-tight mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer">
                      {berita.title}
                    </h4>
                    <p className="text-xs text-gray-500">{berita.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda Kegiatan */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Agenda Kegiatan</h3>
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
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">
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
