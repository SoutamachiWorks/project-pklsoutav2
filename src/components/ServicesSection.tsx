import React from 'react';
import Link from 'next/link';
import { MedalIcon, SportIcon, UsersIcon, CalendarIcon, SettingsIcon, ClockIcon, PhoneIcon, CheckIcon } from './Icons';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "PPOP",
      subtitle: "Pusat Pembinaan Olahraga Pelajar",
      description: "Program pembinaan atlet pelajar berbakat untuk mencapai prestasi optimal di tingkat nasional dan internasional.",
      features: ["Pembinaan Atlet", "Fasilitas Modern", "Pelatih Bersertifikat", "Program Komprehensif"],
      icon: <MedalIcon className="w-8 h-8" />,
      link: "/layanan/ppop",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "PPLP",
      subtitle: "Pusat Pembinaan Latihan Pelajar",
      description: "Sistem pembinaan terpadu untuk menghasilkan atlet-atlet berprestasi melalui latihan sistematis dan berkelanjutan.",
      features: ["Seleksi Atlet", "Program Latihan", "Asrama Atlet", "Pendidikan Formal"],
      icon: <MedalIcon className="w-8 h-8" />,
      link: "/layanan/pplp",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Layanan Pemuda",
      subtitle: "Pemberdayaan Generasi Muda",
      description: "Program-program pengembangan kapasitas dan potensi pemuda Sumatera Barat dalam berbagai bidang.",
      features: ["Pelatihan Leadership", "Kewirausahaan", "Organisasi Pemuda", "Kreativitas"],
      icon: <UsersIcon className="w-8 h-8" />,
      link: "/layanan/pemuda",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Layanan Olahraga",
      subtitle: "Pengembangan Olahraga Masyarakat",
      description: "Layanan komprehensif untuk pengembangan olahraga masyarakat dan peningkatan prestasi keolahragaan.",
      features: ["Event Olahraga", "Pelatihan Pelatih", "Sarana Prasarana", "Kompetisi"],
      icon: <SportIcon className="w-8 h-8" />,
      link: "/layanan/olahraga",
      color: "from-red-500 to-red-600"
    }
  ];

  const quickServices = [
    {
      title: "E-Booking Venue",
      description: "Pemesanan venue olahraga online",
      icon: <CalendarIcon className="w-8 h-8" />,
      link: "/layanan/booking"
    },
    {
      title: "Pendaftaran Atlet",
      description: "Daftar menjadi atlet binaan",
      icon: <SettingsIcon className="w-8 h-8" />,
      link: "/layanan/daftar-atlet"
    },
    {
      title: "Sertifikat Olahraga",
      description: "Penerbitan sertifikat keolahragaan",
      icon: <MedalIcon className="w-8 h-8" />,
      link: "/layanan/sertifikat"
    },
    {
      title: "Informasi Event",
      description: "Jadwal pertandingan dan event",
      icon: <ClockIcon className="w-8 h-8" />,
      link: "/layanan/event"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai layanan berkualitas untuk pengembangan pemuda dan olahraga di Sumatera Barat
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="text-white mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.subtitle}</p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckIcon className="text-green-500 mr-2 w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.link}
                    className="block w-full text-center py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Services */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Layanan Cepat</h3>
            <p className="text-gray-600">Akses layanan digital dengan mudah dan cepat</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-gray-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Butuh Bantuan atau Konsultasi?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Tim ahli kami siap membantu Anda 24/7. Hubungi kami sekarang untuk mendapatkan layanan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontak"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Hubungi Kami
                <PhoneIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/layanan"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Lihat Semua Layanan
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
