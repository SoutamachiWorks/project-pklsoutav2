import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactIcon, SettingsIcon, UsersIcon, SportIcon, MedalIcon, BookIcon, CameraIcon, TwitterIcon, MonitorIcon, LocationIcon, ClockIcon } from '@/components/Icons';
import Link from 'next/link';

export default function KontakPage() {
  const contactInfo = {
    address: "Jl. Rasuna Said No. 74, Padang, Sumatera Barat 25129",
    phone: "(0751) 443973",
    fax: "(0751) 443973",
    email: "dispora@sumbarprov.go.id",
    workingHours: "Senin - Jumat: 08:00 - 16:00 WIB"
  };

  const departments = [
    {
      name: "Kepala Dinas",
      person: "Drs. Bustavidia, MM",
      phone: "(0751) 443973",
      email: "kadis.dispora@sumbarprov.go.id",
      icon: <ContactIcon className="w-8 h-8" />
    },
    {
      name: "Sekretariat",
      person: "Sekretaris Dinas",
      phone: "(0751) 443974",
      email: "sekretariat.dispora@sumbarprov.go.id",
      icon: <SettingsIcon className="w-8 h-8" />
    },
    {
      name: "Bidang Pemuda",
      person: "Kepala Bidang Pemuda",
      phone: "(0751) 443975",
      email: "pemuda.dispora@sumbarprov.go.id",
      icon: <UsersIcon className="w-8 h-8" />
    },
    {
      name: "Bidang Olahraga",
      person: "Kepala Bidang Olahraga",
      phone: "(0751) 443976",
      email: "olahraga.dispora@sumbarprov.go.id",
      icon: <SportIcon className="w-8 h-8" />
    },
    {
      name: "UPTD PPLP",
      person: "Kepala UPTD PPLP",
      phone: "(0751) 443977",
      email: "pplp.dispora@sumbarprov.go.id",
      icon: <MedalIcon className="w-8 h-8" />
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      handle: "@dispora.sumbar",
      url: "https://facebook.com/dispora.sumbar",
      icon: <BookIcon className="w-6 h-6" />,
      followers: "12.5K"
    },
    {
      name: "Instagram",
      handle: "@dispora_sumbar",
      url: "https://instagram.com/dispora_sumbar",
      icon: <CameraIcon className="w-6 h-6" />,
      followers: "8.2K"
    },
    {
      name: "Twitter",
      handle: "@disporasumbar",
      url: "https://twitter.com/disporasumbar",
      icon: <TwitterIcon className="w-6 h-6" />,
      followers: "5.8K"
    },
    {
      name: "YouTube",
      handle: "Dispora Sumbar Official",
      url: "https://youtube.com/disporasumbar",
      icon: <MonitorIcon className="w-6 h-6" />,
      followers: "3.1K"
    }
  ];

  const services = [
    {
      title: "Layanan Pengaduan",
      description: "Sampaikan keluhan, saran, atau pengaduan Anda",
      time: "24/7 Online",
      contact: "pengaduan@sumbarprov.go.id"
    },
    {
      title: "Informasi PPID",
      description: "Pejabat Pengelola Informasi dan Dokumentasi",
      time: "Senin - Jumat 08:00-16:00",
      contact: "ppid.dispora@sumbarprov.go.id"
    },
    {
      title: "Konsultasi Program",
      description: "Konsultasi program pemuda dan olahraga",
      time: "Senin - Jumat 08:00-15:00",
      contact: "(0751) 443973"
    },
    {
      title: "Media & Publikasi",
      description: "Kerjasama media dan publikasi kegiatan",
      time: "Senin - Jumat 09:00-16:00",
      contact: "humas.dispora@sumbarprov.go.id"
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
            <span className="text-gray-800 font-medium">Kontak</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Siap melayani dan membantu Anda dengan informasi yang dibutuhkan
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select 
                    required
                    title="Pilih subjek pesan"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="informasi">Permintaan Informasi</option>
                    <option value="pengaduan">Pengaduan</option>
                    <option value="saran">Saran</option>
                    <option value="kerjasama">Kerjasama</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Main Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <LocationIcon className="text-red-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Jam Kerja</h3>
                    <p className="text-gray-600">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Kami</h3>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="font-semibold">Peta Lokasi</p>
                  <p className="text-sm opacity-90">Jl. Rasuna Said No. 74, Padang</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <LocationIcon className="w-4 h-4 mr-2" /> Buka di Google Maps
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <LocationIcon className="w-4 h-4 mr-2" /> Buka di Waze
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Kontak Departemen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-4xl mb-3">{dept.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dept.person}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600">📞</span>
                      <span className="text-gray-600">{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-green-600">✉️</span>
                      <span className="text-gray-600 text-xs">{dept.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Layanan Bantuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center"><ClockIcon className="w-4 h-4 mr-1" /> {service.time}</span>
                  <span className="text-red-600 font-medium">{service.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ikuti Media Sosial Kami</h2>
          <p className="text-lg mb-8 opacity-90">
            Dapatkan informasi terbaru dan berinteraksi dengan kami di media sosial
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <h3 className="font-semibold mb-1">{social.name}</h3>
                <p className="text-sm opacity-90 mb-2">{social.handle}</p>
                <p className="text-xs opacity-75">{social.followers} followers</p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Pertanyaan Umum</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Bagaimana cara mendaftar program PPLP?",
                answer: "Pendaftaran PPLP dapat dilakukan melalui website resmi atau datang langsung ke kantor Dispora Sumbar dengan membawa persyaratan yang telah ditentukan."
              },
              {
                question: "Kapan jadwal seleksi atlet berbakat?",
                answer: "Seleksi atlet berbakat biasanya dilakukan 2 kali dalam setahun, yaitu pada bulan Maret dan September. Informasi lengkap akan diumumkan melalui website dan media sosial resmi."
              },
              {
                question: "Bagaimana cara mengajukan bantuan fasilitas olahraga?",
                answer: "Pengajuan bantuan fasilitas olahraga dapat dilakukan dengan mengajukan proposal ke Bidang Olahraga Dispora Sumbar disertai dengan dokumen pendukung yang diperlukan."
              },
              {
                question: "Apakah ada program magang di Dispora Sumbar?",
                answer: "Ya, Dispora Sumbar menerima mahasiswa magang dari berbagai universitas. Silakan hubungi bagian kepegawaian untuk informasi lebih lanjut."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                    <span className="text-gray-400">+</span>
                  </div>
                  <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
