import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CalendarIcon, LocationIcon } from '@/components/Icons';

export default function GaleriPage() {
  const photoGallery = [
    {
      id: 1,
      title: "Seleksi Atlet/Siswa KBOR (PPLP) Sumbar",
      description: "Proses seleksi calon atlet berbakat untuk program PPLP Sumatera Barat tahun 2025",
      date: "4 Juli 2025",
      views: 1259,
      category: "Seleksi",
      images: 15,
      location: "GOR Haji Agus Salim"
    },
    {
      id: 2,
      title: "Pelantikan Eselon II, III dan IV di Lingkungan Dispora Sumbar",
      description: "Upacara pelantikan pejabat struktural di lingkungan Dinas Pemuda dan Olahraga",
      date: "2 Juli 2025",
      views: 864,
      category: "Upacara",
      images: 22,
      location: "Kantor Dispora Sumbar"
    },
    {
      id: 3,
      title: "Kadispora Sumbar Hadiri Sekaligus Menyerahkan Bantuan pada Penutupan Event",
      description: "Kepala Dinas menyerahkan bantuan dan menutup event olahraga daerah",
      date: "8 Agustus 2025",
      views: 1825,
      category: "Event",
      images: 18,
      location: "Stadion Utama Sumbar"
    },
    {
      id: 4,
      title: "Kadispora Sumbar Mewakili Gubernur Membuka Kejuaraan Terbuka",
      description: "Pembukaan kejuaraan olahraga terbuka tingkat provinsi dengan berbagai cabang olahraga",
      date: "30 Juli 2025",
      views: 2049,
      category: "Kejuaraan",
      images: 31,
      location: "Kompleks Olahraga Sumbar"
    },
    {
      id: 5,
      title: "Gubernur Lantik Kadispora Sumbar",
      description: "Upacara pelantikan Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Barat yang baru",
      date: "14 Juli 2025",
      views: 3109,
      category: "Pelantikan",
      images: 25,
      location: "Kantor Gubernur Sumbar"
    },
    {
      id: 6,
      title: "Kunjungan Kerja Komisi V DPRD Sumbar ke Pondok Pemuda Lubuk Selasih",
      description: "Kunjungan kerja untuk monitoring fasilitas kepemudaan dan program pembinaan",
      date: "11 Juli 2025",
      views: 2043,
      category: "Kunjungan",
      images: 12,
      location: "Pondok Pemuda Lubuk Selasih"
    },
    {
      id: 7,
      title: "Pelatihan Kewirausahaan Pemuda Sumbar 2025",
      description: "Program pelatihan kewirausahaan untuk mengembangkan jiwa entrepreneur generasi muda",
      date: "20 Juni 2025",
      views: 1456,
      category: "Pelatihan",
      images: 20,
      location: "Hotel Grand Zuri Padang"
    },
    {
      id: 8,
      title: "Turnamen Sepakbola Antar Lembaga Piala Gubernur",
      description: "Kompetisi sepakbola dengan partisipasi 17 tim dari berbagai instansi di Sumbar",
      date: "15 Juni 2025",
      views: 2234,
      category: "Turnamen",
      images: 42,
      location: "Stadion H. Agus Salim"
    },
    {
      id: 9,
      title: "Senam Rutin Tiap Hari Jumat Bersama Kadispora",
      description: "Kegiatan senam bersama rutin setiap hari Jumat di lingkungan Dinas",
      date: "10 Juni 2025",
      views: 892,
      category: "Rutin",
      images: 8,
      location: "Halaman Kantor Dispora"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: "Highlight PON XX Papua 2021",
      description: "Cuplikan performa terbaik atlet Sumbar di PON XX Papua dengan berbagai prestasi membanggakan",
      duration: "5:32",
      views: 15420,
      date: "25 Oktober 2021",
      category: "Prestasi"
    },
    {
      id: 2,
      title: "Profil PPLP Sumatera Barat 2025",
      description: "Video profil lengkap fasilitas dan program PPLP Sumbar untuk pembinaan atlet masa depan",
      duration: "8:15",
      views: 8934,
      date: "15 Maret 2025",
      category: "Profil"
    },
    {
      id: 3,
      title: "Senam Rutin Tiap Hari Jumat Bersama Kadispora",
      description: "Dokumentasi kegiatan senam bersama rutin setiap hari Jumat di lingkungan Dinas",
      duration: "3:45",
      views: 5672,
      date: "7 Juni 2025",
      category: "Kegiatan"
    },
    {
      id: 4,
      title: "Pembukaan Kejuaraan Bola Voli U-13 Piala Kadispora",
      description: "Dokumentasi pembukaan kejuaraan bola voli junior dengan antusiasme tinggi dari peserta",
      duration: "4:28",
      views: 7234,
      date: "28 Mei 2025",
      category: "Kejuaraan"
    },
    {
      id: 5,
      title: "Pelatihan Kewirausahaan Dispora Sumbar",
      description: "Dokumentasi lengkap pelatihan kewirausahaan untuk pemuda Sumatera Barat",
      duration: "6:42",
      views: 4123,
      date: "20 Mei 2025",
      category: "Pelatihan"
    },
    {
      id: 6,
      title: "Revitalisasi Fasilitas Olahraga Sumbar",
      description: "Progress revitalisasi berbagai fasilitas olahraga di Sumatera Barat",
      duration: "7:18",
      views: 6789,
      date: "10 Mei 2025",
      category: "Infrastruktur"
    }
  ];

  const categories = [
    { name: "Semua", count: 150, active: true },
    { name: "Seleksi", count: 25, active: false },
    { name: "Upacara", count: 18, active: false },
    { name: "Event", count: 32, active: false },
    { name: "Kejuaraan", count: 28, active: false },
    { name: "Pelatihan", count: 22, active: false },
    { name: "Kunjungan", count: 15, active: false },
    { name: "Rutin", count: 10, active: false }
  ];

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
            <button className="px-6 py-3 rounded-md font-semibold bg-red-600 text-white">
              📷 Galeri Foto
            </button>
            <button className="px-6 py-3 rounded-md font-semibold text-gray-600 hover:text-red-600">
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
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between py-2 px-3 rounded text-left transition-colors ${
                      category.active 
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
                  <div key={album.id} className="flex space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2 mb-1">
                        {album.title}
                      </h4>
                      <p className="text-xs text-gray-500">{album.views.toLocaleString()} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {photoGallery.map((album) => (
                <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {album.category}
                      </span>
                    </div>
                    
                    {/* Image Count */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        📷 {album.images} foto
                      </span>
                    </div>
                    
                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

            {/* Video Gallery */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Dokumentasi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoGallery.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {/* Video Thumbnail */}
                    <div className="relative h-40 bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white border-opacity-30">
                          <span className="text-white text-2xl ml-1">▶️</span>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
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
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  ← Sebelumnya
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                  Selanjutnya →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Punya Dokumentasi Kegiatan?</h2>
          <p className="text-lg mb-6 opacity-90">
            Bagikan dokumentasi kegiatan Anda dengan kami untuk dipublikasikan di galeri resmi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              📤 Upload Foto/Video
            </button>
            <Link 
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              💬 Hubungi Admin
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
