'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { UsersIcon, TargetIcon, MedalIcon } from '@/components/Icons';

export default function ProgramPage() {
  const programPemuda = [
    {
      id: 1,
      title: "Sumpah Pemuda Digital",
      category: "Kepemudaan",
      description: "Program pengembangan literasi digital dan teknologi untuk generasi muda Sumatera Barat",
      target: "Pemuda usia 17-30 tahun",
      durasi: "6 bulan",
      peserta: "500 peserta",
      fasilitas: ["Pelatihan gratis", "Sertifikat", "Networking", "Magang"],
      status: "Pendaftaran Dibuka",
      image: "/programs/sumpah-pemuda-digital.jpg",
      deadline: "31 Desember 2024"
    },
    {
      id: 2,
      title: "Wirausaha Muda Sumbar",
      category: "Kewirausahaan",
      description: "Program pemberdayaan ekonomi kreatif dan kewirausahaan untuk pemuda Sumatera Barat",
      target: "Calon entrepreneur muda",
      durasi: "12 bulan",
      peserta: "200 peserta",
      fasilitas: ["Modal usaha", "Mentoring", "Pelatihan bisnis", "Jaringan pasar"],
      status: "Akan Dibuka",
      image: "/programs/wirausaha-muda.jpg",
      deadline: "15 Januari 2025"
    },
    {
      id: 3,
      title: "Pemuda Tanggap Bencana",
      category: "Kerelawanan",
      description: "Pelatihan kesiapsiagaan bencana dan pembentukan tim relawan pemuda di setiap daerah",
      target: "Pemuda relawan",
      durasi: "3 bulan",
      peserta: "1000 peserta",
      fasilitas: ["Pelatihan SAR", "Peralatan", "Sertifikat", "Tim response"],
      status: "Sedang Berjalan",
      image: "/programs/pemuda-tanggap-bencana.jpg",
      deadline: "Ongoing"
    }
  ];

  const programOlahraga = [
    {
      id: 4,
      title: "PPLP Sumbar",
      category: "Prestasi",
      description: "Pusat Pendidikan dan Latihan Pelajar untuk mengembangkan atlet berbakat di berbagai cabang olahraga",
      target: "Pelajar berbakat olahraga",
      durasi: "3-6 tahun",
      peserta: "200 atlet",
      fasilitas: ["Asrama", "Pelatih profesional", "Fasilitas latihan", "Pendidikan formal"],
      status: "Pendaftaran Dibuka",
      image: "/programs/pplp-sumbar.jpg",
      deadline: "28 Februari 2025"
    },
    {
      id: 5,
      title: "PPOP Sumbar",
      category: "Prestasi",
      description: "Pusat Pembinaan dan Pendidikan Olahraga Pelajar untuk meningkatkan prestasi olahraga pelajar",
      target: "Atlet pelajar terpilih",
      durasi: "1-2 tahun",
      peserta: "150 atlet",
      fasilitas: ["Beasiswa", "Pelatihan intensif", "Kompetisi", "Gizi olahraga"],
      status: "Pendaftaran Dibuka",
      image: "/programs/ppop-sumbar.jpg",
      deadline: "15 Maret 2025"
    },
    {
      id: 6,
      title: "Olahraga Masyarakat",
      category: "Massal",
      description: "Program pengembangan olahraga rekreasi dan kesehatan untuk masyarakat umum",
      target: "Masyarakat umum",
      durasi: "Berkelanjutan",
      peserta: "Unlimited",
      fasilitas: ["Instruktur gratis", "Peralatan olahraga", "Event kompetisi", "Pemeriksaan kesehatan"],
      status: "Sedang Berjalan",
      image: "/programs/olahraga-masyarakat.jpg",
      deadline: "Ongoing"
    }
  ];

  const programUnggulan = [
    {
      title: "Festival Pemuda Nusantara",
      description: "Event tahunan yang mempertemukan pemuda dari seluruh Indonesia untuk berbagi budaya dan inovasi",
      tanggal: "17-20 Agustus 2024",
      lokasi: "Padang, Sumatera Barat",
      participants: "2000+ peserta",
      highlights: ["Parade budaya", "Kompetisi inovasi", "Talkshow inspiratif", "Bazar produk lokal"]
    },
    {
      title: "Sumbar Sports Week",
      description: "Pekan olahraga terbesar di Sumatera Barat yang menggabungkan kompetisi dan festival olahraga",
      tanggal: "1-7 November 2024",
      lokasi: "Berbagai venue di Sumbar",
      participants: "5000+ atlet",
      highlights: ["20+ cabang olahraga", "Kompetisi internasional", "Expo olahraga", "Seminar kepelatihan"]
    }
  ];

  const beasiswa = [
    {
      nama: "Beasiswa Atlet Berprestasi",
      deskripsi: "Bantuan pendidikan untuk atlet yang berprestasi di tingkat nasional dan internasional",
      syarat: ["Prestasi juara 1-3 tingkat nasional", "Rekomendasi pelatih", "Surat keterangan sekolah"],
      benefit: "Rp 2.000.000/bulan + fasilitas latihan",
      kuota: "50 penerima"
    },
    {
      nama: "Beasiswa Pemuda Berprestasi",
      deskripsi: "Dukungan pendidikan untuk pemuda yang aktif dalam kegiatan sosial dan kepemudaan",
      syarat: ["Aktif di organisasi pemuda", "IPK minimal 3.0", "Surat rekomendasi"],
      benefit: "Rp 1.500.000/bulan",
      kuota: "100 penerima"
    },
    {
      nama: "Beasiswa Penelitian Olahraga",
      deskripsi: "Bantuan untuk penelitian di bidang ilmu keolahragaan dan kesehatan",
      syarat: ["Mahasiswa S2/S3", "Proposal penelitian", "Rekomendasi dosen"],
      benefit: "Rp 5.000.000/penelitian",
      kuota: "20 peneliti"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50" suppressHydrationWarning>
      <div suppressHydrationWarning>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Beranda</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Program</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Program Kami</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Berbagai program unggulan untuk pengembangan pemuda dan prestasi olahraga Sumatera Barat
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Program Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">15+</h3>
            <p className="text-gray-600">Program Aktif</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TargetIcon className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">5,000+</h3>
            <p className="text-gray-600">Peserta Aktif</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MedalIcon className="text-yellow-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">200+</h3>
            <p className="text-gray-600">Prestasi Dicapai</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">50M+</h3>
            <p className="text-gray-600">Dana Bantuan</p>
          </div>
        </div>

        {/* Program Pemuda */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Kepemudaan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program-program unggulan untuk pengembangan kapasitas dan karakter generasi muda Sumatera Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programPemuda.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {program.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'Pendaftaran Dibuka' ? 'bg-green-100 text-green-800' :
                      program.status === 'Sedang Berjalan' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Target:</span>
                      <span>{program.target}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Durasi:</span>
                      <span>{program.durasi}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Peserta:</span>
                      <span>{program.peserta}</span>
                    </div>
                    {program.deadline !== 'Ongoing' && (
                      <div className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">Deadline:</span>
                        <span className="text-red-600 font-medium">{program.deadline}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-2">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.fasilitas.map((fasilitas, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {fasilitas}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 mt-auto">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Olahraga */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Keolahragaan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program pembinaan dan pengembangan prestasi olahraga untuk berbagai tingkatan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programOlahraga.map((program) => (
              <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      {program.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      program.status === 'Pendaftaran Dibuka' ? 'bg-green-100 text-green-800' :
                      program.status === 'Sedang Berjalan' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Target:</span>
                      <span>{program.target}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Durasi:</span>
                      <span>{program.durasi}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Peserta:</span>
                      <span>{program.peserta}</span>
                    </div>
                    {program.deadline !== 'Ongoing' && (
                      <div className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">Deadline:</span>
                        <span className="text-red-600 font-medium">{program.deadline}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 mb-2">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.fasilitas.map((fasilitas, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {fasilitas}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-colors duration-300 mt-auto">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Unggulan */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Event dan program besar yang menjadi kebanggaan Dispora Sumbar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programUnggulan.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Tanggal</h4>
                    <p className="text-gray-600 text-sm">{program.tanggal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lokasi</h4>
                    <p className="text-gray-600 text-sm">{program.lokasi}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Peserta: {program.participants}</h4>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-3">Highlight Acara:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-600 mr-2">✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 mt-auto">
                  Daftar Partisipasi
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Program Beasiswa */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Program Beasiswa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bantuan pendidikan untuk mendukung prestasi pemuda dan atlet berbakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beasiswa.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500 flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.nama}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.deskripsi}</p>
                
                <div className="mb-4 flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-2">Syarat:</h4>
                  <ul className="space-y-1">
                    {item.syarat.map((syarat, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-yellow-600 mr-2 mt-1">•</span>
                        {syarat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-1">Benefit:</h4>
                  <p className="text-green-700 text-sm">{item.benefit}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Kuota:</span> {item.kuota}
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-colors duration-300 mt-auto">
                  Ajukan Beasiswa
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bergabung?</h2>
          <p className="text-lg mb-8 opacity-90">
            Daftarkan diri Anda dalam program-program unggulan kami dan wujudkan potensi terbaik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Lihat Semua Program
              <span className="ml-2">🚀</span>
            </button>
            <Link 
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Konsultasi Gratis
              <span className="ml-2">💬</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </main>
  );
}
