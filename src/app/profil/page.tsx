'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MedalIcon, PhoneIcon } from '@/components/Icons';

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState('visi-misi');

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({  
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['visi-misi', 'tugas-fungsi', 'struktur-organisasi', 'sarana-prasarana', 'prestasi'];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const visiMisi = {
    visi: "Terwujudnya Sumatera Barat yang unggul dalam bidang kepemudaan dan keolahragaan melalui pembinaan yang berkelanjutan dan prestasi yang membanggakan.",
    misi: [
      "Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan falsafah Adat Basandi Syara', Syara' Basandi Kitabullah",
      "Mengembangkan sistem pembinaan olahraga yang terintegrasi dan berkelanjutan",
      "Meningkatkan kapasitas dan karakter generasi muda Sumatera Barat",
      "Menciptakan prestasi olahraga yang membanggakan daerah dan bangsa",
      "Meningkatkan tata kelola pemerintahan dan pelayanan publik yang bersih, akuntabel serta berkualitas"
    ]
  };

  const tugasFungsi = {
    tugas: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat mempunyai tugas melaksanakan urusan pemerintahan daerah di bidang kepemudaan dan keolahragaan berdasarkan asas otonomi dan tugas pembantuan.",
    fungsi: [
      "Perumusan kebijakan teknis di bidang kepemudaan dan keolahragaan",
      "Penyelenggaraan urusan pemerintahan dan pelayanan umum di bidang kepemudaan dan keolahragaan",
      "Pembinaan dan pelaksanaan tugas di bidang kepemudaan dan keolahragaan",
      "Pelaksanaan tugas lain yang diberikan oleh Gubernur sesuai dengan tugas dan fungsinya"
    ]
  };

  const strukturOrganisasi = [
    {
      jabatan: "Kepala Dinas",
      nama: "Drs. Bustavidia, MM",
      level: 1,
      description: "Memimpin dan mengendalikan seluruh kegiatan Dinas Pemuda dan Olahraga Provinsi Sumatera Barat"
    },
    {
      jabatan: "Sekretaris",
      nama: "Sekretaris Dinas",
      level: 2,
      description: "Melaksanakan tugas kesekretariatan, kepegawaian, keuangan, dan rumah tangga dinas"
    },
    {
      jabatan: "Kepala Bidang Pemuda",
      nama: "Kabid Pemuda",
      level: 2,
      description: "Melaksanakan pembinaan, pengembangan, dan pemberdayaan generasi muda"
    },
    {
      jabatan: "Kepala Bidang Olahraga",
      nama: "Kabid Olahraga",
      level: 2,
      description: "Melaksanakan pembinaan dan pengembangan prestasi olahraga"
    },
    {
      jabatan: "Kepala UPTD PPLP",
      nama: "Kepala UPTD",
      level: 2,
      description: "Melaksanakan pembinaan atlet pelajar berbakat"
    }
  ];

  const saranaPrasarana = [
    {
      nama: "GOR Haji Agus Salim",
      jenis: "Gedung Olahraga",
      kapasitas: "3,000 penonton",
      fasilitas: ["Lapangan Badminton", "Lapangan Bola Voli", "Lapangan Basket"],
      kondisi: "Baik"
    },
    {
      nama: "Stadion Haji Agus Salim",
      jenis: "Stadion Sepakbola",
      kapasitas: "40,000 penonton",
      fasilitas: ["Lapangan Sepakbola", "Lintasan Atletik", "Tribun VIP"],
      kondisi: "Baik"
    },
    {
      nama: "Kompleks PPLP Sumbar",
      jenis: "Pusat Latihan",
      kapasitas: "200 atlet",
      fasilitas: ["Asrama", "Lapangan Latihan", "Gimnasium", "Kolam Renang"],
      kondisi: "Sangat Baik"
    },
    {
      nama: "Pondok Pemuda Lubuk Selasih",
      jenis: "Pusat Kepemudaan",
      kapasitas: "150 peserta",
      fasilitas: ["Aula", "Ruang Meeting", "Penginapan", "Lapangan"],
      kondisi: "Baik"
    }
  ];

  const prestasi = [
    {
      tahun: "2024",
      event: "PON XXI Aceh-Sumut 2024",
      prestasi: "Peringkat 12 Nasional",
      medali: "8 Emas, 12 Perak, 15 Perunggu"
    },
    {
      tahun: "2023",
      event: "Kejuaraan Nasional Multi Event",
      prestasi: "Juara Umum Wilayah Sumatra",
      medali: "15 Emas, 20 Perak, 18 Perunggu"
    },
    {
      tahun: "2022",
      event: "POPNAS XVI Jawa Barat",
      prestasi: "Peringkat 8 Nasional",
      medali: "12 Emas, 18 Perak, 22 Perunggu"
    },
    {
      tahun: "2021",
      event: "PON XX Papua",
      prestasi: "Peringkat 10 Nasional",
      medali: "10 Emas, 15 Perak, 20 Perunggu"
    }
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
            <span className="text-gray-800 font-medium">Profil</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Dinas</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Dinas Pemuda dan Olahraga Provinsi Sumatera Barat
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Navigation Tabs - Sticky */}
        <div className="sticky top-20 z-40 mb-12">
          <div className="flex flex-wrap justify-center bg-white rounded-lg shadow-md p-1">
            <button 
              onClick={() => scrollToSection('visi-misi')}
              className={`px-4 md:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'visi-misi' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              Visi & Misi
            </button>
            <button 
              onClick={() => scrollToSection('tugas-fungsi')}
              className={`px-4 md:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'tugas-fungsi' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              Tugas & Fungsi
            </button>
            <button 
              onClick={() => scrollToSection('struktur-organisasi')}
              className={`px-4 md:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'struktur-organisasi' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              Struktur Organisasi
            </button>
            <button 
              onClick={() => scrollToSection('sarana-prasarana')}
              className={`px-4 md:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'sarana-prasarana' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              Sarana & Prasarana
            </button>
            <button 
              onClick={() => scrollToSection('prestasi')}
              className={`px-4 md:px-6 py-3 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'prestasi' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
            >
              Prestasi
            </button>
          </div>
        </div>

        {/* Visi & Misi */}
        <section id="visi-misi" className="mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-center text-lg">
                "{visiMisi.visi}"
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi</h2>
              </div>
              <ul className="space-y-4">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tugas & Fungsi */}
        <section id="tugas-fungsi" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Tugas & Fungsi</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tugas */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                Tugas Pokok
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tugasFungsi.tugas}
              </p>
            </div>

            {/* Fungsi */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                Fungsi
              </h3>
              <ul className="space-y-3">
                {tugasFungsi.fungsi.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section id="struktur-organisasi" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Struktur Organisasi</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Organizational Chart */}
            <div className="text-center mb-8">
              <div className="inline-block">
                {/* Kepala Dinas */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 mb-8 shadow-lg">
                  <h3 className="font-bold text-lg">Kepala Dinas</h3>
                  <p className="text-sm opacity-90">Drs. Bustavidia, MM</p>
                </div>
                
                {/* Second Level */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {strukturOrganisasi.slice(1).map((struktur, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4 shadow-md">
                      <h4 className="font-semibold text-sm mb-1">{struktur.jabatan}</h4>
                      <p className="text-xs opacity-90">{struktur.nama}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturOrganisasi.map((struktur, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-2">{struktur.jabatan}</h3>
                  <p className="text-red-600 font-medium mb-3">{struktur.nama}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{struktur.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sarana & Prasarana */}
        <section id="sarana-prasarana" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Sarana & Prasarana</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {saranaPrasarana.map((sarana, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{sarana.nama}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      sarana.kondisi === 'Sangat Baik' ? 'bg-green-100 text-green-800' :
                      sarana.kondisi === 'Baik' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {sarana.kondisi}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{sarana.jenis}</p>
                  <p className="text-gray-600 text-sm mb-4">Kapasitas: {sarana.kapasitas}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sarana.fasilitas.map((fasilitas, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {fasilitas}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prestasi */}
        <section id="prestasi" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Prestasi Terkini</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Tahun</th>
                    <th className="px-6 py-4 text-left">Event</th>
                    <th className="px-6 py-4 text-left">Prestasi</th>
                    <th className="px-6 py-4 text-left">Perolehan Medali</th>
                  </tr>
                </thead>
                <tbody>
                  {prestasi.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{item.tahun}</td>
                      <td className="px-6 py-4 text-gray-600">{item.event}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.prestasi}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.medali}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah Dengan Kami</h2>
          <p className="text-lg mb-8 opacity-90">
            Mari bersama-sama membangun prestasi pemuda dan olahraga Sumatera Barat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/layanan"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Lihat Program Kami
              <MedalIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Hubungi Kami
              <PhoneIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
