'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  NewsIcon as FileText,
  DownloadIcon as Download,
  SearchIcon as Search
} from '@/components/Icons';
import downloadsData from '@/data/downloads.json';

// Inline styles for toast animation
const toastStyles = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// Toast Notification Component
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

  return (
    <div 
      className="fixed top-20 left-4 z-[9999] max-w-md"
      style={{ 
        position: 'fixed',
        top: '5rem',
        left: '1rem',
        zIndex: 9999
      }}
    >
      <div 
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3`}
        style={{
          animation: 'slideInLeft 0.4s ease-out'
        }}
      >
        <span className="text-2xl font-bold">{icon}</span>
        <div className="flex-1">
          <p className="font-semibold text-sm md:text-base">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 text-2xl font-bold leading-none"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const File = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
  </svg>
);

const Folder = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// Icon mapping untuk kategori
const categoryIcons: Record<string, string> = {
  'file-text': 'default',
  'folder': 'folder',
  'clipboard': 'clipboard',
  'book': 'book',
  'award': 'award'
};

const categoryColors: Record<number, string> = {
  1: 'blue',
  2: 'green',
  3: 'purple',
  4: 'orange',
  5: 'red',
  6: 'indigo'
};

export default function UnduhPage() {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const selectedCategoryData = selectedCategory 
    ? downloadsData.categories.find(cat => cat.id === selectedCategory)
    : null;

  const filteredDocuments = selectedCategoryData
    ? selectedCategoryData.documents.filter(doc =>
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setShowBackButton(true);
    setSearchQuery('');
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setShowBackButton(false);
    setSearchQuery('');
  };

  const handleDownload = (doc: typeof filteredDocuments[0]) => {
    console.log('Download started:', doc.title);
    
    // Show downloading notification immediately
    setToast({
      message: `Mengunduh ${doc.title}...`,
      type: 'info'
    });

    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = doc.file;
      link.download = `${doc.title}.${doc.format.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download triggered');
      
      // Show success notification after a delay
      setTimeout(() => {
        console.log('Showing success notification');
        setToast({
          message: `Berhasil mengunduh ${doc.title}`,
          type: 'success'
        });
      }, 1000);
    } catch (error) {
      console.error('Download error:', error);
      // Show error notification
      setToast({
        message: 'Gagal mengunduh file. Silakan coba lagi.',
        type: 'error'
      });
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: toastStyles }} />
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Unduh Dokumen
              </h1>
              <p className="text-xl opacity-90">
                Akses dan unduh berbagai dokumen, formulir, dan laporan resmi Dinas Pemuda dan Olahraga
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {downloadsData.stats.totalDocuments}
                </div>
                <div className="text-gray-600">Total Dokumen</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {downloadsData.stats.totalDownloads.toLocaleString()}
                </div>
                <div className="text-gray-600">Total Unduhan</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 shadow-sm text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {downloadsData.categories.length}
                </div>
                <div className="text-gray-600">Kategori</div>
              </div>
            </div>
          </div>
        </section>

        {!selectedCategory ? (
          <>
            {/* Categories Grid */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Pilih Kategori Dokumen
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  Pilih kategori dokumen yang ingin Anda unduh
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {downloadsData.categories.map((category) => {
                    const color = categoryColors[category.id] || 'blue';
                    return (
                      <div
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 border-2 cursor-pointer hover:border-${color}-300 group`}
                      >
                        <div className={`bg-${color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          <Folder className={`w-8 h-8 text-${color}-600`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-semibold text-${color}-600`}>
                            {category.documents.length} Dokumen
                          </span>
                          <span className={`text-${color}-600`}>→</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Panduan Unduhan
                  </h2>
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Semua dokumen tersedia dalam format PDF atau DOCX</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Dokumen dapat diunduh secara gratis tanpa registrasi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Pastikan menggunakan Adobe Reader atau aplikasi sejenis untuk membuka PDF</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Untuk dokumen yang tidak tersedia, hubungi PPID kami</span>
                      </li>
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
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="/ppid" 
                      className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Hubungi PPID
                    </a>
                    <a 
                      href="/kontak" 
                      className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                    >
                      Kontak Kami
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Documents List Section */
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {showBackButton && (
                  <button
                    onClick={handleBackClick}
                    className="text-blue-600 hover:text-blue-700 mb-6 flex items-center font-semibold"
                  >
                    ← Kembali ke Kategori
                  </button>
                )}

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedCategoryData?.name}
                      </h2>
                      <p className="text-gray-600">
                        {selectedCategoryData?.description}
                      </p>
                    </div>
                    <div className={`bg-${categoryColors[selectedCategory]}-100 p-4 rounded-lg`}>
                      <Folder className={`w-10 h-10 text-${categoryColors[selectedCategory]}-600`} />
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Cari dokumen dalam kategori ini..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-6 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Documents Grid */}
                {filteredDocuments.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDocuments.map((doc) => (
                      <div
                        key={doc.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
                      >
                        {/* Icon & Format Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <FileText className="w-8 h-8 text-blue-600" />
                          </div>
                          <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {doc.format}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {doc.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b">
                          <span>{doc.size}</span>
                          <span>{new Date(doc.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>

                        {/* Download Button */}
                        <button 
                          onClick={() => handleDownload(doc)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                          <Download className="w-5 h-5" />
                          <span>Unduh ({doc.downloads}x)</span>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* No Results */
                  <div className="text-center py-16 bg-white rounded-xl shadow-md">
                    <File className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Dokumen Tidak Ditemukan
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Coba gunakan kata kunci lain
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Hapus Pencarian
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
