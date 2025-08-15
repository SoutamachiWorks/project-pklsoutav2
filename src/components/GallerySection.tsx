'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CameraIcon, MonitorIcon, EyeIcon, ClockIcon } from '@/components/Icons';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('foto');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const photoGallery = [
    {
      id: 1,
      title: "Seleksi Atlet/Siswa KBOR (PPLP) Sumbar",
      description: "Proses seleksi calon atlet berbakat untuk program PPLP Sumatera Barat",
      date: "4 Juli 2019",
      views: 1259,
      category: "Seleksi",
      image: "/gallery/seleksi-pplp.svg"
    },
    {
      id: 2,
      title: "Pelantikan Eselon II, III dan IV di Lingkungan Dispora Sumbar",
      description: "Upacara pelantikan pejabat struktural di lingkungan Dinas Pemuda dan Olahraga",
      date: "2 Juli 2019",
      views: 864,
      category: "Upacara",
      image: "/gallery/pelantikan.svg"
    },
    {
      id: 3,
      title: "Kadispora Sumbar Hadiri Sekaligus Menyerahkan Bantuan pada Penutupan Event",
      description: "Kepala Dinas menyerahkan bantuan dan menutup event olahraga daerah",
      date: "8 Agustus 2019",
      views: 1825,
      category: "Event",
      image: "/gallery/penutupan-event.svg"
    },
    {
      id: 4,
      title: "Kadispora Sumbar Mewakili Gubernur Membuka Kejuaraan Terbuka",
      description: "Pembukaan kejuaraan olahraga terbuka tingkat provinsi",
      date: "30 Juli 2019",
      views: 2049,
      category: "Kejuaraan",
      image: "/gallery/kejuaraan-terbuka.svg"
    },
    {
      id: 5,
      title: "Gubernur Lantik Kadispora Sumbar Drs. Bustavidia, MM",
      description: "Upacara pelantikan Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Barat",
      date: "14 Juli 2019",
      views: 3109,
      category: "Pelantikan",
      image: "/gallery/pelantikan-kadis.svg"
    },
    {
      id: 6,
      title: "Kunjungan Kerja Komisi V DPRD Sumbar ke Pondok Pemuda Lubuk Selasih",
      description: "Kunjungan kerja untuk monitoring fasilitas kepemudaan",
      date: "11 Juli 2019",
      views: 2043,
      category: "Kunjungan",
      image: "/gallery/kunjungan-dprd.svg"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: "Highlight PON XX Papua 2021",
      description: "Cuplikan performa atlet Sumbar di PON XX Papua",
      duration: "5:32",
      views: 15420,
      youtubeId: "dQw4w9WgXcQ", // Ganti dengan ID YouTube video yang sesuai
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Profil PPLP Sumatera Barat",
      description: "Video profil fasilitas dan program PPLP Sumbar",
      duration: "8:15",
      views: 8934,
      youtubeId: "ScMzIvxBSi4", // Ganti dengan ID YouTube video yang sesuai
      thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Senam Rutin Tiap Hari Jumat Bersama Kadispora",
      description: "Kegiatan senam bersama di lingkungan Dinas",
      duration: "3:45",
      views: 5672,
      youtubeId: "9bZkp7q19f0", // Ganti dengan ID YouTube video yang sesuai
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
    }
  ];

  const categories = ['Semua', 'Seleksi', 'Upacara', 'Event', 'Kejuaraan', 'Pelantikan', 'Kunjungan'];
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredPhotos = selectedCategory === 'Semua' 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === selectedCategory);

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

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
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'foto'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <CameraIcon className="w-4 h-4" />
              Galeri Foto
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'video'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <MonitorIcon className="w-4 h-4" />
              Galeri Video
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
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-100 group-hover:bg-opacity-0 transition-all duration-300"></div> */}
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
                      <span className="flex items-center gap-1">
                        <EyeIcon className="w-3 h-3" />
                        {photo.views.toLocaleString()}
                      </span>
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
              <div 
                key={video.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
                onClick={() => openVideoModal(video.youtubeId)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300"></div> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 bg-opacity-80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {video.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      YouTube
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
                    <span className="flex items-center gap-1">
                      <MonitorIcon className="w-3 h-3" />
                      Video
                    </span>
                    <span className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3" />
                      {video.views.toLocaleString()}
                    </span>
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

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 modal-bg-transparent flex items-center justify-center z-50 p-4"
            onClick={closeVideoModal}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video bg-white rounded-lg overflow-hidden shadow-2xl border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideoModal}
                aria-label="Close video"
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg"
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
    </section>
  );
};

export default GallerySection;
