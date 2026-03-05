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
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Berbagai layanan berkualitas untuk pengembangan pemuda dan olahraga di Sumatera Barat
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <div key={service.id} className="group" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full hover-lift">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-5 sm:p-6 text-white`}>
                  <div className="text-white mb-3 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{service.subtitle}</p>
                </div>
                
                {/* Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow min-h-[4rem] sm:min-h-[5rem] text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-5 sm:mb-6 min-h-[6rem] sm:min-h-[7rem]">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <CheckIcon className="text-green-500 mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link 
                      href={service.link}
                      className="block w-full text-center py-2.5 sm:py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white text-sm sm:text-base transform group-hover:scale-105"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Services */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 shadow-inner">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Layanan Cepat</h3>
            <p className="text-gray-600 text-sm sm:text-base">Akses layanan digital dengan mudah dan cepat</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickServices.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group hover-lift"
              >
                <div className="text-gray-700 mb-2 sm:mb-3 group-hover:scale-110 group-hover:text-red-600 transition-all duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors text-xs sm:text-base">
                  {service.title}
                </h4>
                <p className="text-[10px] sm:text-sm text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Butuh Bantuan atau Konsultasi?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 opacity-90 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda 24/7. Hubungi kami sekarang untuk mendapatkan layanan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/kontak"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
              >
                Hubungi Kami
                <PhoneIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href="/layanan"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
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
