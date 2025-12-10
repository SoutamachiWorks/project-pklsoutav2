import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MedalIcon, SportIcon, UsersIcon, CalendarIcon, SettingsIcon, NewsIcon, MegaphoneIcon, TargetIcon } from '@/components/Icons';

export default function LayananPage() {
  const mainServices = [
    {
      id: 1,
      title: "PPOP",
      subtitle: "Pusat Pembinaan Olahraga Pelajar",
      description: "Program pembinaan atlet pelajar berbakat untuk mencapai prestasi optimal di tingkat nasional dan internasional melalui sistem pelatihan yang terstruktur dan berkelanjutan.",
      features: [
        "Seleksi Atlet Berbakat",
        "Program Latihan Intensif", 
        "Fasilitas Training Modern",
        "Pelatih Bersertifikat Nasional",
        "Monitoring Kesehatan Atlet",
        "Program Beasiswa Pendidikan"
      ],
      requirements: [
        "Usia 12-17 tahun",
        "Memiliki bakat olahraga yang menonjol",
        "Kondisi fisik dan kesehatan prima",
        "Rekomendasi dari sekolah/klub",
        "Lulus tes seleksi"
      ],
      icon: <MedalIcon className="w-8 h-8" />,
      link: "/layanan/ppop",
      color: "from-blue-500 to-blue-600",
      benefits: "Menghasilkan atlet berprestasi tingkat nasional dan internasional"
    },
    {
      id: 2,
      title: "PPLP",
      subtitle: "Pusat Pembinaan Latihan Pelajar",
      description: "Sistem pembinaan terpadu untuk menghasilkan atlet-atlet berprestasi melalui latihan sistematis, pendidikan formal, dan pengembangan karakter yang berkelanjutan.",
      features: [
        "Asrama Atlet Lengkap",
        "Pendidikan Formal Terintegrasi",
        "Program Latihan Harian",
        "Gizi dan Nutrisi Terpantau",
        "Bimbingan Psikologi Olahraga",
        "Kompetisi Rutin"
      ],
      requirements: [
        "Lulusan seleksi PPOP",
        "Usia 15-18 tahun",
        "Prestasi minimal tingkat provinsi",
        "Komitmen tinggal di asrama",
        "Dukungan penuh keluarga"
      ],
      icon: <MedalIcon className="w-8 h-8" />,
      link: "/layanan/pplp",
      color: "from-green-500 to-green-600",
      benefits: "Pembentukan atlet elit yang siap berkompetisi di level tertinggi"
    },
    {
      id: 3,
      title: "Layanan Pemuda",
      subtitle: "Pemberdayaan Generasi Muda",
      description: "Program-program komprehensif untuk mengembangkan kapasitas, karakter, dan potensi pemuda Sumatera Barat dalam berbagai bidang kehidupan dan karir.",
      features: [
        "Pelatihan Leadership",
        "Program Kewirausahaan",
        "Pengembangan Soft Skills",
        "Organisasi Kepemudaan",
        "Kreativitas dan Inovasi",
        "Volunteerism"
      ],
      requirements: [
        "Usia 16-30 tahun",
        "Domisili Sumatera Barat",
        "Motivasi tinggi untuk berkembang",
        "Komitmen mengikuti program",
        "Berpartisipasi aktif"
      ],
      icon: <UsersIcon className="w-8 h-8" />,
      link: "/layanan/pemuda",
      color: "from-purple-500 to-purple-600",
      benefits: "Generasi muda yang berkarakter, terampil, dan siap memimpin"
    },
    {
      id: 4,
      title: "Layanan Olahraga",
      subtitle: "Pengembangan Olahraga Masyarakat",
      description: "Layanan komprehensif untuk pengembangan olahraga masyarakat, peningkatan prestasi keolahragaan, dan pembinaan infrastruktur olahraga di Sumatera Barat.",
      features: [
        "Event Olahraga Daerah",
        "Pelatihan Pelatih",
        "Penyediaan Sarana Prasarana",
        "Kompetisi Multi Level",
        "Olahraga Rekreasi",
        "Pembinaan Wasit"
      ],
      requirements: [
        "Terbuka untuk semua kalangan",
        "Registrasi sesuai program",
        "Mengikuti protokol kesehatan",
        "Komitmen fair play",
        "Partisipasi aktif"
      ],
      icon: <SportIcon className="w-8 h-8" />,
      link: "/layanan/olahraga",
      color: "from-red-500 to-red-600",
      benefits: "Masyarakat yang sehat, aktif, dan berprestasi dalam olahraga"
    }
  ];

  const digitalServices = [
    {
      title: "E-Booking Venue",
      description: "Sistem pemesanan venue olahraga online yang mudah dan cepat",
      icon: <CalendarIcon className="w-8 h-8" />,
      features: ["Booking Online 24/7", "Konfirmasi Instan", "Pembayaran Digital"],
      status: "Aktif"
    },
    {
      title: "Pendaftaran Atlet Online",
      description: "Platform digital untuk pendaftaran program pembinaan atlet",
      icon: <SettingsIcon className="w-8 h-8" />,
      features: ["Form Digital", "Upload Dokumen", "Tracking Status"],
      status: "Aktif"
    },
    {
      title: "E-Certificate",
      description: "Penerbitan sertifikat keolahragaan secara digital",
      icon: <MedalIcon className="w-8 h-8" />,
      features: ["Sertifikat Digital", "Verifikasi Online", "Download Instant"],
      status: "Segera Hadir"
    },
    {
      title: "Sistem Informasi Event",
      description: "Informasi lengkap jadwal dan hasil pertandingan",
      icon: <MegaphoneIcon className="w-8 h-8" />,
      features: ["Jadwal Real-time", "Hasil Live", "Statistik Lengkap"],
      status: "Aktif"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm flex items-center">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Beranda</Link>
            <span className="mx-2 text-gray-400">→</span>
            <span className="text-gray-800 font-semibold">Layanan</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Program & Fasilitas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Berbagai layanan berkualitas, program unggulan, dan fasilitas modern 
            untuk pengembangan pemuda dan olahraga di Sumatera Barat
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Utama</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program-program unggulan yang dirancang untuk mengembangkan potensi pemuda dan olahraga
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">{service.icon}</div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-sm opacity-90">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed opacity-95">
                    {service.description}
                  </p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🌟 Fitur Program</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Requirements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">📋 Persyaratan</h4>
                      <ul className="space-y-2">
                        {service.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-blue-500 mr-2 mt-0.5">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center"><TargetIcon className="w-5 h-5 mr-2" /> Manfaat</h4>
                    <p className="text-sm text-gray-600">{service.benefits}</p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <Link 
                      href={service.link}
                      className="block w-full text-center py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Digital</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform digital untuk mempermudah akses layanan kepada masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <ul className="text-xs space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-500">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Aktif' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Mendaftar</h2>
              <p className="text-gray-600">
                Ikuti langkah-langkah mudah untuk mengakses layanan kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Pilih Layanan", desc: "Tentukan program yang sesuai dengan kebutuhan Anda" },
                { step: 2, title: "Lengkapi Persyaratan", desc: "Siapkan dokumen dan persyaratan yang diperlukan" },
                { step: 3, title: "Daftar Online/Offline", desc: "Lakukan pendaftaran melalui platform digital atau datang langsung" },
                { step: 4, title: "Konfirmasi & Mulai", desc: "Terima konfirmasi dan mulai mengikuti program" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bergabung?</h2>
          <p className="text-xl mb-8 opacity-90">
            Hubungi kami untuk informasi lebih lanjut dan konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Hubungi Kami
              <span className="ml-2">📞</span>
            </Link>
            <Link 
              href="/berita"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Lihat Berita Terkini
              <NewsIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
