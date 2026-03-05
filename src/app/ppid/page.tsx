'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  NewsIcon as FileText, 
  DownloadIcon as Download, 
  CalendarIcon as Calendar, 
  AlertIcon as AlertCircle, 
  ClockIcon as Clock, 
  CheckIcon as CheckCircle, 
  LocationIcon as MapPin,
  PhoneIcon as Phone,
  EmailIcon as Mail
} from '@/components/Icons';
import ppidData from '@/data/ppid.json';

// Additional icons needed
const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const Inbox = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);

const File = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function PPIDPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    purpose: '',
    description: ''
  });

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
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        requestType: '',
        purpose: '',
        description: ''
      });
    }, 5000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {ppidData.profile.title}
            </h1>
            <p className="text-base md:text-xl mb-3 md:mb-4 opacity-90">
              {ppidData.profile.subtitle}
            </p>
            <p className="text-sm md:text-lg opacity-80 leading-relaxed">
              {ppidData.profile.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppidData.stats.map((stat) => (
              <div key={stat.title} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent name={stat.icon} className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-500">{stat.period}</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Kategori Informasi Publik
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Informasi publik yang tersedia sesuai dengan UU No. 14 Tahun 2008
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ppidData.informationCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <CategoryIcon name={category.icon} className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Dokumen Informasi Publik
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Unduh dokumen informasi publik yang tersedia
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ppidData.documents.map((doc) => (
              <div key={doc.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {doc.category === 'berkala' ? 'Berkala' : 'Setiap Saat'}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{new Date(doc.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span>{doc.size}</span>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Unduh ({doc.downloads})
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Layanan PPID
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Prosedur dan mekanisme pelayanan informasi publik
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ppidData.services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ServiceIcon name={service.icon} className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-3">
                  {service.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar PPID
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {ppidData.faqs.map((faq) => (
              <details key={faq.id} className="bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-blue-600 ml-4">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hubungi PPID
            </h2>
            <p className="text-center mb-12 opacity-90">
              Untuk informasi lebih lanjut, silakan menghubungi kami
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Alamat</h3>
                <p className="text-sm opacity-90">{ppidData.contact.address}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm opacity-90">{ppidData.contact.phone}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-90">{ppidData.contact.email}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Jam Layanan</h3>
                <p className="text-sm opacity-90">{ppidData.contact.hours}</p>
              </div>
            </div>

            {!showForm && !submitted && (
              <div className="text-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Ajukan Permohonan Informasi
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Form Section */}
      {showForm && !submitted && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Form Permohonan Informasi</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jenis Permohonan *
                    </label>
                    <select
                      name="requestType"
                      required
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih jenis</option>
                      <option value="berkala">Informasi Berkala</option>
                      <option value="serta-merta">Informasi Serta Merta</option>
                      <option value="setiap-saat">Informasi Setiap Saat</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tujuan Penggunaan Informasi *
                  </label>
                  <input
                    type="text"
                    name="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Untuk penelitian, tugas akhir, dll"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rincian Informasi yang Dibutuhkan *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jelaskan secara detail informasi yang Anda butuhkan..."
                  ></textarea>
                </div>

                <div className="pt-6 border-t">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Kirim Permohonan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Success Message */}
      {submitted && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Permohonan Berhasil Dikirim!
              </h2>
              <p className="text-gray-600 mb-6">
                Nomor registrasi: <span className="font-bold text-blue-600">PPID-2026-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}</span>
              </p>
              <p className="text-gray-600 mb-8">
                Permohonan Anda akan diproses maksimal 10 hari kerja sesuai dengan UU No. 14 Tahun 2008. 
                Anda akan dihubungi melalui email/telepon yang terdaftar.
              </p>
            </div>
          </div>
        </section>
      )}
      </div>
      <Footer />
    </>
  );
}

// Icon Components
function IconComponent({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    inbox: Inbox,
    'check-circle': CheckCircle,
    file: File,
    clock: Clock,
  };
  
  const Icon = icons[name] || File;
  return <Icon className={className} />;
}

function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    calendar: Calendar,
    alert: AlertCircle,
    clock: Clock,
    lock: Lock,
  };
  
  const Icon = icons[name] || FileText;
  return <Icon className={className} />;
}

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    'file-text': FileText,
    'alert-circle': AlertCircle,
    'message-circle': MessageCircle,
  };
  
  const Icon = icons[name] || FileText;
  return <Icon className={className} />;
}
