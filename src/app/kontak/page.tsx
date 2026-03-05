'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactIcon, SettingsIcon, UsersIcon, SportIcon, MedalIcon, LocationIcon, ClockIcon, PhoneIcon, EmailIcon } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

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
      icon: "https://img.icons8.com/color/96/facebook-new.png",
      color: "from-blue-600 to-blue-700",
      followers: "12.5K",
      label: "followers"
    },
    {
      name: "Instagram",
      handle: "@dispora_sumbar",
      url: "https://instagram.com/dispora_sumbar",
      icon: "https://img.icons8.com/color/96/instagram-new--v1.png",
      color: "from-pink-600 to-purple-600",
      followers: "8.2K",
      label: "followers"
    },
    {
      name: "Twitter",
      handle: "@disporasumbar",
      url: "https://twitter.com/disporasumbar",
      icon: "https://img.icons8.com/color/96/twitterx--v1.png",
      color: "from-sky-500 to-blue-500",
      followers: "5.8K",
      label: "followers"
    },
    {
      name: "YouTube",
      handle: "Dispora Sumbar Official",
      url: "https://youtube.com/disporasumbar",
      icon: "https://img.icons8.com/color/96/youtube-play.png",
      color: "from-red-600 to-red-700",
      followers: "3.1K",
      label: "subscribers"
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
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm flex items-center">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Beranda</Link>
            <span className="mx-2 text-gray-400">→</span>
            <span className="text-gray-800 font-semibold">Kontak</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Layanan Komunikasi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Siap melayani Anda 24/7. Hubungi kami untuk informasi, konsultasi, 
            atau kerjasama di bidang kepemudaan dan keolahragaan
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <p className="font-semibold">✓ Pesan berhasil dikirim!</p>
                <p className="text-sm mt-1">Terima kasih, kami akan segera merespons pesan Anda.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
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
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
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
                    <PhoneIcon className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <EmailIcon className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <ClockIcon className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Jam Kerja</h3>
                    <p className="text-gray-600">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Kami</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3089876543216!2d100.3547!3d-0.9471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b7f8f8f8f8f8%3A0x1234567890abcdef!2sJl.%20Rasuna%20Said%20No.74%2C%20Padang%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Dinas Pemuda dan Olahraga Provinsi Sumatera Barat"
                ></iframe>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Jl.+Rasuna+Said+No.74,+Padang,+Sumatera+Barat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center flex items-center justify-center"
                >
                  <LocationIcon className="w-4 h-4 mr-2" /> Buka di Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Jl.+Rasuna+Said+No.74,+Padang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center flex items-center justify-center"
                >
                  <LocationIcon className="w-4 h-4 mr-2" /> Buka di Waze
                </a>
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
                      <PhoneIcon className="text-blue-600 w-4 h-4" />
                      <span className="text-gray-600">{dept.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <EmailIcon className="text-green-600 w-4 h-4" />
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
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ikuti Media Sosial Kami</h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Dapatkan informasi terbaru dan berinteraksi dengan kami di media sosial
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 rounded-xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={64}
                    height={64}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">{social.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 font-medium">{social.handle}</p>
                <div className={`bg-gradient-to-r ${social.color} text-white text-xs md:text-sm font-semibold py-2 px-4 rounded-full`}>
                  {social.followers} {social.label || 'followers'}
                </div>
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
