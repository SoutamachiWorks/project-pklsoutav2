'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, LocationIcon, EyeIcon, ClockIcon } from '@/components/Icons';
import galleryData from '@/data/gallery.json';
import videosData from '@/data/videos.json';
import categoriesData from '@/data/gallery-categories.json';

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 9 items per halaman (3x3 grid)
  
  // Data dari JSON
  const photoGallery = galleryData;
  const videoGallery = videosData;
  const photoCategories = categoriesData.photo;
  const videoCategories = categoriesData.video;

  const currentCategories = activeTab === 'photo' ? photoCategories : videoCategories;
  
  const filteredPhotos = activeCategory === 'Semua' 
    ? photoGallery 
    : photoGallery.filter(item => item.category === activeCategory);
  
  const filteredVideos = activeCategory === 'Semua' 
    ? videoGallery 
    : videoGallery.filter(item => item.category === activeCategory);

  // Pagination logic
  const currentItems = activeTab === 'photo' ? filteredPhotos : filteredVideos;
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDisplayItems = currentItems.slice(startIndex, endIndex);

  // Filtered items untuk display
  const displayPhotos = activeTab === 'photo' ? currentDisplayItems : [];
  const displayVideos = activeTab === 'video' ? currentDisplayItems : [];

  // Reset page saat ganti tab atau kategori
  const handleTabChange = (tab: 'photo' | 'video') => {
    setActiveTab(tab);
    setActiveCategory('Semua');
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Beranda</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Galeri</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Dokumentasi</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan momen penting Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button 
              onClick={() => handleTabChange('photo')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'photo' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              📷 Galeri Foto
            </button>
            <button 
              onClick={() => handleTabChange('video')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'video' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              🎥 Galeri Video
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Filter Kategori</h3>
              <div className="space-y-2">
                {currentCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`w-full flex items-center justify-between py-2 px-3 rounded text-left transition-colors ${
                      activeCategory === category.name 
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Statistik Galeri</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Foto</span>
                  <span className="font-semibold text-blue-600">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Video</span>
                  <span className="font-semibold text-green-600">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Views</span>
                  <span className="font-semibold text-purple-600">45,623</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Album Terbaru</span>
                  <span className="font-semibold text-red-600">12</span>
                </div>
              </div>
            </div>

            {/* Popular Albums */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Album Populer</h3>
              <div className="space-y-4">
                {photoGallery.slice(0, 3).map((album, index) => (
                  <button
                    key={album.id}
                    onClick={() => {
                      setActiveTab('photo');
                      setActiveCategory(album.category);
                    }}
                    className="flex space-x-3 w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 group-hover:bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-red-600 leading-tight line-clamp-2 mb-1 transition-colors duration-200">
                        {album.title}
                      </h4>
                      <p className="text-xs text-gray-500">{album.views.toLocaleString()} views</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Photo Gallery Grid */}
            {activeTab === 'photo' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {(displayPhotos as typeof photoGallery).map((album) => (
                <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={album.image}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {album.category}
                      </span>
                    </div>
                    
                    {/* Image Count */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        {album.images} foto
                      </span>
                    </div>
                    
                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                      <button className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-all duration-300">
                        Lihat Album
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                      {album.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {album.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <CalendarIcon className="mr-2 w-4 h-4" />
                        <span>{album.date}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <LocationIcon className="mr-2 w-4 h-4" />
                        <span className="truncate">{album.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>👁️ {album.views.toLocaleString()} views</span>
                        <span>📷 {album.images} foto</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            )}

            {/* Video Gallery */}
            {activeTab === 'video' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(displayVideos as typeof videoGallery).map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    onClick={() => openVideoModal(video.youtubeId)}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300">
                        <div className="w-16 h-16 bg-red-600 bg-opacity-80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {video.duration}
                        </span>
                      </div>
                      
                      {/* Category */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {video.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{video.date}</span>
                        <span>👁️ {video.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {((activeTab === 'photo' && filteredPhotos.length === 0) || 
              (activeTab === 'video' && filteredVideos.length === 0)) && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Tidak ada {activeTab === 'photo' ? 'foto' : 'video'} ditemukan</h3>
                <p className="text-gray-600">Coba pilih kategori lain atau kembali ke &quot;Semua&quot;</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex justify-center">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Previous Button */}
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ← Sebelumnya
                    </button>

                    {/* Page Numbers */}
                    {(() => {
                      const pages = [];
                      const maxVisible = 5; // Maksimal tombol halaman yang ditampilkan
                      
                      let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
                      let endPage = Math.min(totalPages, startPage + maxVisible - 1);
                      
                      // Adjust jika di akhir
                      if (endPage - startPage < maxVisible - 1) {
                        startPage = Math.max(1, endPage - maxVisible + 1);
                      }

                      // First page
                      if (startPage > 1) {
                        pages.push(
                          <button
                            key={1}
                            onClick={() => handlePageChange(1)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            1
                          </button>
                        );
                        if (startPage > 2) {
                          pages.push(
                            <span key="dots1" className="px-2 text-gray-400">...</span>
                          );
                        }
                      }

                      // Middle pages
                      for (let i = startPage; i <= endPage; i++) {
                        pages.push(
                          <button
                            key={i}
                            onClick={() => handlePageChange(i)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              currentPage === i
                                ? 'bg-red-600 text-white'
                                : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {i}
                          </button>
                        );
                      }

                      // Last page
                      if (endPage < totalPages) {
                        if (endPage < totalPages - 1) {
                          pages.push(
                            <span key="dots2" className="px-2 text-gray-400">...</span>
                          );
                        }
                        pages.push(
                          <button
                            key={totalPages}
                            onClick={() => handlePageChange(totalPages)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            {totalPages}
                          </button>
                        );
                      }

                      return pages;
                    })()}

                    {/* Next Button */}
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Selanjutnya →
                    </button>
                  </div>
                </div>

                {/* Page Info */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  Halaman {currentPage} dari {totalPages} • Menampilkan {startIndex + 1}-{Math.min(endIndex, currentItems.length)} dari {currentItems.length} {activeTab === 'photo' ? 'foto' : 'video'}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                aria-label="Close video"
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
