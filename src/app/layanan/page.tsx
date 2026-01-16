'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MedalIcon, SportIcon, UsersIcon, CalendarIcon, SettingsIcon, NewsIcon, MegaphoneIcon, TargetIcon } from '@/components/Icons';

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

export default function LayananPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Scroll Animation
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
  }, []);
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

  const selectedServiceData = selectedService 
    ? mainServices.find(s => s.id === selectedService)
    : null;

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

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

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Layanan Utama</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4</div>
              <div className="text-gray-600">Layanan Digital</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Peserta Aktif</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-sm text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Akses Layanan</div>
            </div>
          </div>
        </div>
      </section>

      {!selectedService ? (
        <>
          {/* Main Services Cards */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Pilih Layanan</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Klik kartu layanan untuk melihat detail lengkap program, persyaratan, dan cara mendaftar
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {mainServices.map((service) => (
                  <div 
                    key={service.id} 
                    onClick={() => handleServiceClick(service.id)}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 border-2 cursor-pointer hover:border-red-300 group"
                  >
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{service.subtitle}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-red-600">
                        Lihat Detail
                      </span>
                      <span className="text-red-600">→</span>
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
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-red-300 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Panduan Pendaftaran</h2>
                  <p className="text-gray-600">
                    Ikuti langkah-langkah mudah untuk mengakses layanan kami
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-100">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { step: 1, title: "Pilih Layanan", desc: "Tentukan program yang sesuai dengan kebutuhan Anda" },
                      { step: 2, title: "Lengkapi Persyaratan", desc: "Siapkan dokumen dan persyaratan yang diperlukan" },
                      { step: 3, title: "Daftar Online/Offline", desc: "Lakukan pendaftaran melalui platform digital atau datang langsung" },
                      { step: 4, title: "Konfirmasi & Mulai", desc: "Terima konfirmasi dan mulai mengikuti program" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                          {item.step}
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
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
        </>
      ) : (
        /* Service Detail Section */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <button
                onClick={handleBackClick}
                className="text-red-600 hover:text-red-700 mb-6 flex items-center font-semibold"
              >
                ← Kembali ke Daftar Layanan
              </button>

              {selectedServiceData && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${selectedServiceData.color} p-8 text-white`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-2">{selectedServiceData.title}</h2>
                        <p className="text-xl opacity-90 mb-4">{selectedServiceData.subtitle}</p>
                        <p className="leading-relaxed opacity-95">
                          {selectedServiceData.description}
                        </p>
                      </div>
                      <div className="ml-6 bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                        {selectedServiceData.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    {/* Benefits Highlight */}
                    <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                      <h3 className="font-bold text-gray-800 mb-3 flex items-center text-xl">
                        <TargetIcon className="w-6 h-6 mr-2 text-green-600" /> 
                        Manfaat Program
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedServiceData.benefits}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-xl">🌟 Fitur Program</h3>
                        <ul className="space-y-3">
                          {selectedServiceData.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Requirements */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-800 mb-4 text-xl">📋 Persyaratan</h3>
                        <ul className="space-y-3">
                          {selectedServiceData.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <span className="text-blue-600 mr-3 mt-0.5 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href="/kontak"
                        className="flex-1 text-center py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
                      >
                        Daftar Sekarang
                      </Link>
                      <Link 
                        href="/kontak"
                        className="flex-1 text-center py-4 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-all duration-300"
                      >
                        Konsultasi Gratis
                      </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-gray-800 mb-3">ℹ️ Informasi Tambahan</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Untuk informasi lebih detail tentang program ini, silakan hubungi kami melalui:
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-gray-700">📞 (0751) 443973</span>
                        <span className="text-gray-700">📧 dispora@sumbarprov.go.id</span>
                        <span className="text-gray-700">⏰ Senin-Jumat 08:00-16:00 WIB</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
