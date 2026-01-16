'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  PhoneIcon as Phone,
  EmailIcon as Mail
} from '@/components/Icons';
import reportsData from '@/data/reports.json';

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const Gift = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="20 12 20 22 4 22 4 12"/>
    <rect width="20" height="5" x="2" y="7"/>
    <line x1="12" y1="22" x2="12" y2="7"/>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const Inbox = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'alert-circle': AlertCircle,
  'gift': Gift,
  'shield': Shield,
  'message-circle': MessageCircle,
  'check-circle': CheckCircle,
  'clock': Clock,
  'inbox': Inbox,
  'zap': Zap,
};

export default function LaporPage() {
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

  const [selectedType, setSelectedType] = React.useState<number | null>(null);
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedType(null);
      setFormData({});
    }, 5000);
  };

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectedReportType = selectedType 
    ? reportsData.reportTypes.find(t => t.id === selectedType)
    : null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lapor & Pengaduan
            </h1>
            <p className="text-xl opacity-90">
              Sampaikan laporan, pengaduan, atau saran Anda untuk peningkatan pelayanan
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportsData.statistics.map((stat, idx) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <span className="text-sm text-gray-500">{stat.period}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {!selectedType ? (
        <>
          {/* Report Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Pilih Jenis Laporan
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Pilih kategori laporan yang sesuai dengan keperluan Anda
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {reportsData.reportTypes.map((type) => {
                  const Icon = iconMap[type.icon];
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 border-2 cursor-pointer hover:border-${type.color}-300`}
                    >
                      <div className={`bg-${type.color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 text-${type.color}-600`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {type.description}
                      </p>
                      <button className={`text-${type.color}-600 hover:text-${type.color}-700 font-semibold`}>
                        Buat Laporan →
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Guidelines */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Panduan Pelaporan
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
                  <ul className="space-y-4">
                    {reportsData.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
                <p className="text-lg opacity-90 mb-8">
                  Hubungi kami untuk bantuan atau informasi lebih lanjut
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Phone className="w-8 h-8 mx-auto mb-3" />
                    <p className="font-semibold mb-2">Telepon</p>
                    <p className="text-sm opacity-90">{reportsData.contact.phone}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Mail className="w-8 h-8 mx-auto mb-3" />
                    <p className="font-semibold mb-2">Email</p>
                    <p className="text-sm opacity-90">{reportsData.contact.email}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Clock className="w-8 h-8 mx-auto mb-3" />
                    <p className="font-semibold mb-2">Jam Layanan</p>
                    <p className="text-sm opacity-90">{reportsData.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Form Section */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {!submitted ? (
                <>
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-blue-600 hover:text-blue-700 mb-6 flex items-center"
                  >
                    ← Kembali
                  </button>
                  
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedReportType?.title}
                    </h2>
                    <p className="text-gray-600 mb-8">
                      {selectedReportType?.description}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {selectedReportType?.fields.map((field) => (
                        <div key={field.name}>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </label>
                          
                          {field.type === 'textarea' ? (
                            <textarea
                              required={field.required}
                              value={formData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              rows={5}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          ) : field.type === 'select' ? (
                            <select
                              required={field.required}
                              value={formData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Pilih...</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'checkbox' ? (
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData[field.name] || false}
                                onChange={(e) => handleInputChange(field.name, e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-gray-700">Ya, saya ingin merahasiakan identitas</span>
                            </label>
                          ) : field.type === 'file' ? (
                            <input
                              type="file"
                              required={field.required}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          ) : (
                            <input
                              type={field.type}
                              required={field.required}
                              value={formData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          )}
                        </div>
                      ))}

                      <div className="pt-6 border-t">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors"
                        >
                          Kirim Laporan
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                /* Success Message */
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Laporan Berhasil Dikirim!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Nomor tiket Anda: <span className="font-bold text-blue-600">LPR-2026-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}</span>
                  </p>
                  <p className="text-gray-600 mb-8">
                    Laporan Anda akan ditindaklanjuti maksimal 3x24 jam. 
                    Anda dapat melacak status laporan menggunakan nomor tiket di atas.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedType(null);
                      setFormData({});
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                  >
                    Kembali ke Halaman Utama
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      </div>
      <Footer />
    </>
  );
}
