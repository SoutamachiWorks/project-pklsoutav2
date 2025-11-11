'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { MedalIcon, PhoneIcon } from '@/components/Icons';

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState('visi-misi');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
  
  // Prestasi data
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
      kondisi: "Baik",
      image: "/sarana/gor-agus-salim.jpg"
    },
    {
      nama: "Stadion Haji Agus Salim",
      jenis: "Stadion Sepakbola",
      kapasitas: "40,000 penonton",
      fasilitas: ["Lapangan Sepakbola", "Lintasan Atletik", "Tribun VIP"],
      kondisi: "Baik",
      image: "/sarana/stadion-agus-salim.jpg"
    },
    {
      nama: "Kompleks PPLP Sumbar",
      jenis: "Pusat Latihan",
      kapasitas: "200 atlet",
      fasilitas: ["Asrama", "Lapangan Latihan", "Gimnasium", "Kolam Renang"],
      kondisi: "Sangat Baik",
      image: "/sarana/pplp-sumbar.jpg"
    },
    {
      nama: "Pondok Pemuda Lubuk Selasih",
      jenis: "Pusat Kepemudaan",
      kapasitas: "150 peserta",
      fasilitas: ["Aula", "Ruang Meeting", "Penginapan", "Lapangan"],
      kondisi: "Baik",
      image: "/sarana/pondok-pemuda.jpg"
    },
  ];

  // Filter sarana berdasarkan search term
  const filteredSarana = saranaPrasarana.filter(sarana =>
    sarana.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sarana.jenis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sarana.fasilitas.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredSarana.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSarana = filteredSarana.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Auto-play slider for prestasi
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % prestasi.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, prestasi.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % prestasi.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + prestasi.length) % prestasi.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

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
        <div className="sticky top-5 z-40 mb-12">
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
                &quot;{visiMisi.visi}&quot;
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
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                Tugas Pokok
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {tugasFungsi.tugas}
              </p>
            </div>

            {/* Fungsi */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                Fungsi
              </h3>
              <ul className="space-y-3 flex-grow">
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
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Sarana & Prasarana</h2>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari sarana berdasarkan nama, jenis, atau fasilitas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Ditemukan {filteredSarana.length} sarana prasarana
            </p>
          </div>

          {/* Results */}
          {currentSarana.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentSarana.map((sarana, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={sarana.image}
                        alt={sarana.nama}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Halaman sebelumnya"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === index + 1
                            ? 'bg-red-600 text-white'
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                        aria-label={`Halaman ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Halaman berikutnya"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-lg">Tidak ada sarana ditemukan</p>
              <p className="text-gray-500 text-sm mt-2">Coba gunakan kata kunci lain</p>
            </div>
          )}
        </section>

        {/* Prestasi */}
        <section id="prestasi" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Prestasi Terkini</h2>
          
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Slider Container */}
            <div className="relative h-[400px] md:h-[450px]">
              {prestasi.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="h-full flex flex-col justify-center items-center p-8 md:p-12">
                    {/* Year Badge */}
                    <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-2xl font-bold mb-6">
                      {item.tahun}
                    </div>
                    
                    {/* Event Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                      {item.event}
                    </h3>
                    
                    {/* Achievement Badge */}
                    <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold mb-8 flex items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {item.prestasi}
                    </div>
                    
                    {/* Medals */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                      {/* Gold Medal */}
                      <div className="text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-gray-800">
                          {item.medali.split(',')[0].trim().split(' ')[0]}
                        </p>
                        <p className="text-sm text-gray-600">Emas</p>
                      </div>
                      
                      {/* Silver Medal */}
                      <div className="text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-gray-800">
                          {item.medali.split(',')[1].trim().split(' ')[0]}
                        </p>
                        <p className="text-sm text-gray-600">Perak</p>
                      </div>
                      
                      {/* Bronze Medal */}
                      <div className="text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-gray-800">
                          {item.medali.split(',')[2].trim().split(' ')[0]}
                        </p>
                        <p className="text-sm text-gray-600">Perunggu</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 group"
              aria-label="Slide sebelumnya"
            >
              <svg className="w-6 h-6 text-gray-800 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 group"
              aria-label="Slide berikutnya"
            >
              <svg className="w-6 h-6 text-gray-800 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {prestasi.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-3 bg-red-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Pergi ke slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label={isAutoPlay ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isAutoPlay ? (
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
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
