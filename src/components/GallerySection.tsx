'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('foto');

  const photoGallery = [
    {
      id: 1,
      title: "Seleksi Atlet/Siswa KBOR (PPLP) Sumbar",
      description: "Proses seleksi calon atlet berbakat untuk program PPLP Sumatera Barat",
      date: "4 Juli 2019",
      views: 1259,
      category: "Seleksi",
      image: "/gallery/seleksi-pplp.jpg"
    },
    {
      id: 2,
      title: "Pelantikan Eselon II, III dan IV di Lingkungan Dispora Sumbar",
      description: "Upacara pelantikan pejabat struktural di lingkungan Dinas Pemuda dan Olahraga",
      date: "2 Juli 2019",
      views: 864,
      category: "Upacara",
      image: "/gallery/pelantikan.jpg"
    },
    {
      id: 3,
      title: "Kadispora Sumbar Hadiri Sekaligus Menyerahkan Bantuan pada Penutupan Event",
      description: "Kepala Dinas menyerahkan bantuan dan menutup event olahraga daerah",
      date: "8 Agustus 2019",
      views: 1825,
      category: "Event",
      image: "/gallery/penutupan-event.jpg"
    },
    {
      id: 4,
      title: "Kadispora Sumbar Mewakili Gubernur Membuka Kejuaraan Terbuka",
      description: "Pembukaan kejuaraan olahraga terbuka tingkat provinsi",
      date: "30 Juli 2019",
      views: 2049,
      category: "Kejuaraan",
      image: "/gallery/kejuaraan-terbuka.jpg"
    },
    {
      id: 5,
      title: "Gubernur Lantik Kadispora Sumbar Drs. Bustavidia, MM",
      description: "Upacara pelantikan Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Barat",
      date: "14 Juli 2019",
      views: 3109,
      category: "Pelantikan",
      image: "/gallery/pelantikan-kadis.jpg"
    },
    {
      id: 6,
      title: "Kunjungan Kerja Komisi V DPRD Sumbar ke Pondok Pemuda Lubuk Selasih",
      description: "Kunjungan kerja untuk monitoring fasilitas kepemudaan",
      date: "11 Juli 2019",
      views: 2043,
      category: "Kunjungan",
      image: "/gallery/kunjungan-dprd.jpg"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: "Highlight PON XX Papua 2021",
      description: "Cuplikan performa atlet Sumbar di PON XX Papua",
      duration: "5:32",
      views: 15420,
      thumbnail: "/videos/pon-highlight.jpg"
    },
    {
      id: 2,
      title: "Profil PPLP Sumatera Barat",
      description: "Video profil fasilitas dan program PPLP Sumbar",
      duration: "8:15",
      views: 8934,
      thumbnail: "/videos/profil-pplp.jpg"
    },
    {
      id: 3,
      title: "Senam Rutin Tiap Hari Jumat Bersama Kadispora",
      description: "Kegiatan senam bersama di lingkungan Dinas",
      duration: "3:45",
      views: 5672,
      thumbnail: "/videos/senam-rutin.jpg"
    }
  ];

  const categories = ['Semua', 'Seleksi', 'Upacara', 'Event', 'Kejuaraan', 'Pelantikan', 'Kunjungan'];
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredPhotos = selectedCategory === 'Semua' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeri Dokumentasi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi kegiatan dan momen penting Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('foto')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'foto'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              📷 Galeri Foto
            </button>
            <button
              onClick={() => setActiveTab('video')}
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

        {/* Photo Gallery */}
        {activeTab === 'foto' && (
          <div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{photo.date}</span>
                      <span>👁️ {photo.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {videoGallery.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64 bg-gradient-to-br from-red-500 to-pink-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">▶️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>🎥 Video</span>
                    <span>👁️ {video.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/galeri"
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            {activeTab === 'foto' ? 'Lihat Semua Foto' : 'Lihat Semua Video'}
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600 text-sm">Album Foto</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600 text-sm">Video Dokumentasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.5K+</div>
              <div className="text-gray-600 text-sm">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Rating Positif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
