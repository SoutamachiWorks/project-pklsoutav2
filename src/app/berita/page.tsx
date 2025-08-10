import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BeritaPage() {
  const featuredNews = [
    {
      id: 1,
      title: "Seleksi Penerimaan Siswa Baru Binaan UPTD Kebakatan Olahraga Dinas Pemuda dan Olahraga",
      excerpt: "Dinas Pemuda Dan Olahraga Provinsi Sumatera Barat Melalui Uptd Kebakatan Olahraga Akan Melaksanakan Seleksi Penerimaan penerimaan Atlet/siswa Binaan Pada Kegiatan Sentra.",
      date: "22 April 2025",
      time: "14:59:09 WIB",
      views: 112,
      category: "TERKINI",
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
      category: "TERKINI",
      image: "/news/news2.jpg",
      slug: "laporan-layanan-informasi-publik-2024"
    }
  ];

  const allNews = [
    {
      id: 3,
      title: "LHKPN Pimpinan Dinas Pemuda dan Olahraga Provinsi Sumatera Barat Tahun 2024",
      excerpt: "Laporan Harta Kekayaan Pejabat Negara Pimpinan Dinas Pemuda Dan Olahraga Provinsi Sumatera Barat Tahun 2024 Yang Telah Diperiksa, Diverifikasi Dan Telah Dikirimkan Oleh Komisi Pemb.",
      date: "18 September 2024",
      time: "11:13:07 WIB",
      views: 280,
      category: "TERKINI",
      author: "Admin Dispora"
    },
    {
      id: 4,
      title: "Turnamen Sepakbola Antar Lembaga, 17 Tim Siap Perebutkan Piala Gubernur Sumatera Barat",
      excerpt: "Turnamen sepakbola antar lembaga dengan partisipasi 17 tim terbaik dari berbagai instansi di Sumatera Barat dalam rangka memperebutkan Piala Gubernur.",
      date: "7 Agustus 2023",
      time: "08:15:09 WIB",
      views: 456,
      category: "OLAHRAGA",
      author: "Admin Dispora"
    },
    {
      id: 5,
      title: "Kadispora Sumbar: Jangan Setengah Setengah Menjadi Atlet",
      excerpt: "Jadilah Atlet Hebat, Buat Bangga Orang Tua, Pelatih, Dan Daerah Dengan Torehan Prestasi. Motifasi Ini Disampaikan Kepala Dinas Pemuda Dan Olahraga (Kadispo).",
      date: "18 Mei 2023",
      time: "17:08:08 WIB",
      views: 934,
      category: "PRESTASI",
      author: "Michael Angelo"
    },
    {
      id: 6,
      title: "PPLP Sumbar Gelar Seleksi Penerimaan Atlet Tahun 2025",
      excerpt: "Padang, lebih kurang 177 orang atlet (siswa) ikuti seleksi calon penerimaan Pusat Pembinaan Dan Latihan Pelajar (PPLP) Sumbar Tahun 2025.",
      date: "14 Maret 2025",
      time: "10:30:00 WIB",
      views: 324,
      category: "PPLP",
      author: "Admin Dispora"
    },
    {
      id: 7,
      title: "Pelatihan Kewirausahaan Dispora Sumbar Tahun 2025",
      excerpt: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat menggelar pelatihan kewirausahaan untuk mengembangkan jiwa entrepreneur generasi muda.",
      date: "10 Maret 2025",
      time: "14:20:00 WIB",
      views: 189,
      category: "PEMUDA",
      author: "Admin Dispora"
    },
    {
      id: 8,
      title: "Revitalisasi Fasilitas Olahraga di Sumatera Barat",
      excerpt: "Program revitalisasi fasilitas olahraga dilakukan untuk mendukung pembinaan atlet dan pengembangan olahraga masyarakat di Sumatera Barat.",
      date: "5 Maret 2025",
      time: "09:15:00 WIB",
      views: 267,
      category: "OLAHRAGA",
      author: "Admin Dispora"
    }
  ];

  const categories = [
    { name: "Semua", count: 50, active: true },
    { name: "TERKINI", count: 15, active: false },
    { name: "OLAHRAGA", count: 12, active: false },
    { name: "PEMUDA", count: 8, active: false },
    { name: "PPLP", count: 10, active: false },
    { name: "PRESTASI", count: 5, active: false }
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
            <span className="text-gray-800 font-medium">Berita</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita Terkini</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Informasi terbaru seputar kegiatan dan prestasi Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Kategori Berita</h3>
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

            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Cari Berita</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Masukkan kata kunci..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-red-600">
                  🔍
                </button>
              </div>
            </div>

            {/* Popular News */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Berita Populer</h3>
              <div className="space-y-4">
                {allNews.slice(0, 3).map((news, index) => (
                  <div key={news.id} className="flex space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2 mb-1">
                        {news.title}
                      </h4>
                      <p className="text-xs text-gray-500">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Berita Utama</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-red-500 to-orange-500"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {news.category}
                        </span>
                        <span className="ml-3 text-sm text-gray-500">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                        <Link href={`/berita/${news.slug}`} className="hover:text-red-600 transition-colors">
                          {news.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>👁️ {news.views} views</span>
                        <Link href={`/berita/${news.slug}`} className="text-red-600 hover:text-red-700 font-medium">
                          Baca Selengkapnya →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* All News */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Semua Berita</h2>
              <div className="space-y-6">
                {allNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                      <div className="md:w-48 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 md:mb-0 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                            news.category === 'TERKINI' ? 'bg-red-500' :
                            news.category === 'OLAHRAGA' ? 'bg-blue-500' :
                            news.category === 'PEMUDA' ? 'bg-green-500' :
                            news.category === 'PPLP' ? 'bg-purple-500' : 'bg-gray-500'
                          }`}>
                            {news.category}
                          </span>
                          <span className="ml-3 text-sm text-gray-500">{news.date} | {news.time}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                          <Link href={`/berita/${news.id}`} className="hover:text-red-600 transition-colors">
                            {news.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <span className="mr-4">✍️ {news.author}</span>
                            <span>👁️ {news.views} views</span>
                          </div>
                          <Link href={`/berita/${news.id}`} className="text-red-600 hover:text-red-700 font-medium">
                            Baca Selengkapnya →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
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
        </div>
      </div>

      <Footer />
    </main>
  );
}
