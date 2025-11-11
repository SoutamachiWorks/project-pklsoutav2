import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon, ArrowRightIcon, AlertIcon } from './Icons';

const NewsSection = () => {
  // Data berita - sinkron dengan halaman berita
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      slug: "revitalisasi-fasilitas-olahraga"
    }
  ];

  // Featured news = berita pertama (berita utama terbaru)
  const featuredNews = allNews.find(news => news.tags?.includes("berita utama")) || allNews[0];
  
  // Latest news = 4 berita terbaru setelah featured
  const latestNews = allNews.filter(news => news.id !== featuredNews.id).slice(0, 4);

  const categories = [
    { name: "Pengumuman", count: 2, color: "bg-blue-500" },
    { name: "Program", count: 4, color: "bg-green-500" },
    { name: "Kegiatan", count: 4, color: "bg-yellow-500" },
    { name: "Prestasi", count: 1, color: "bg-purple-500" },
    { name: "Berita Utama", count: 3, color: "bg-red-500" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Berita Terkini
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar kegiatan dan prestasi Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BERITA UTAMA
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  <Link href={`/berita/${featuredNews.slug}`} className="hover:text-red-600 transition-colors">
                    {featuredNews.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{featuredNews.date} {featuredNews.time}</span>
                  <span className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-1" /> 
                    {featuredNews.views} views
                  </span>
                </div>
              </div>
            </div>

            {/* Latest News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map((news) => (
                <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${
                        news.category === 'PENGUMUMAN' ? 'bg-blue-500' :
                        news.category === 'PROGRAM' ? 'bg-green-500' :
                        news.category === 'KEGIATAN' ? 'bg-yellow-500' :
                        news.category === 'PRESTASI' ? 'bg-purple-500' : 'bg-red-500'
                      }`}>
                        {news.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                      <Link href={`/berita/${news.slug}`} className="hover:text-red-600 transition-colors">
                        {news.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{news.date}</span>
                      <span className="flex items-center">
                        <EyeIcon className="w-3 h-3 mr-1" />
                        {news.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/berita"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Lihat Semua Berita
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Kategori Berita</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={`/berita/kategori/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                      <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Statistik Website</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Online</span>
                  <span className="font-semibold text-green-600">9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pengunjung Hari Ini</span>
                  <span className="font-semibold text-blue-600">190</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pengunjung Kemarin</span>
                  <span className="font-semibold text-gray-600">451</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Pengunjung</span>
                  <span className="font-semibold text-purple-600">351,665</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Hits</span>
                  <span className="font-semibold text-red-600">1,237,684</span>
                </div>
              </div>
            </div>

            {/* Breaking News */}
            <div className="bg-red-600 text-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <AlertIcon className="mr-2 w-5 h-5" />
                Breaking News
              </h3>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed">
                  Seleksi Penerimaan Siswa Baru Binaan UPTD Kebakatan Olahraga Dinas Pemuda dan Olahraga
                </p>
                <Link href="/berita/breaking-news" className="text-red-200 hover:text-white text-sm underline">
                  Baca selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
