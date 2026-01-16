'use client';

import { use, useEffect } from 'react';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import newsData from '@/data/news.json';

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = use(params);
  
  // Find news by slug
  const news = newsData.find(item => item.slug === slug);

  // Scroll Animation Hook
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
  }, [slug]);

  // Get related news (same category, excluding current)
  const relatedNews = news 
    ? newsData
        .filter(item => item.category === news.category && item.id !== news.id)
        .slice(0, 3)
    : [];

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">Maaf, berita yang Anda cari tidak ditemukan.</p>
            <Link 
              href="/berita"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Kembali ke Halaman Berita
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Beranda</Link>
              <span>/</span>
              <Link href="/berita" className="hover:text-blue-600">Berita</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{news.category}</span>
            </div>
          </div>
        </div>

        {/* News Content */}
        <article className="py-12 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {news.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {news.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{news.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{news.date} - {news.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{news.views.toLocaleString()} views</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg scroll-animate">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12 scroll-animate">
                <div className="text-xl text-gray-700 mb-6 font-medium leading-relaxed">
                  {news.excerpt}
                </div>
                
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Padang - Dinas Pemuda dan Olahraga Provinsi Sumatera Barat terus berkomitmen dalam mengembangkan 
                    potensi pemuda dan prestasi olahraga di daerah. Melalui berbagai program strategis, kami berupaya 
                    menciptakan ekosistem yang kondusif bagi pertumbuhan dan pengembangan talenta muda.
                  </p>

                  <p>
                    Kegiatan ini merupakan bagian dari upaya berkelanjutan untuk meningkatkan kualitas pembinaan atlet 
                    dan pengembangan infrastruktur olahraga di Sumatera Barat. Dengan dukungan penuh dari Pemerintah 
                    Provinsi, kami optimis dapat mencapai target yang telah ditetapkan.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tujuan dan Manfaat</h2>
                  
                  <p>
                    Program ini dirancang dengan tujuan utama untuk memberikan kesempatan seluas-luasnya bagi para 
                    atlet muda berbakat dalam mengembangkan kemampuan mereka. Melalui pembinaan yang terstruktur dan 
                    sistematis, diharapkan dapat lahir atlet-atlet berprestasi yang mampu mengharumkan nama Sumatera 
                    Barat di tingkat nasional maupun internasional.
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Meningkatkan kualitas pembinaan atlet sejak dini</li>
                    <li>Menyediakan fasilitas dan sarana prasarana yang memadai</li>
                    <li>Mengembangkan program pelatihan yang terstandarisasi</li>
                    <li>Membangun kerjasama dengan berbagai pihak terkait</li>
                    <li>Menciptakan ekosistem olahraga yang berkelanjutan</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pelaksanaan Program</h2>

                  <p>
                    Pelaksanaan kegiatan ini melibatkan berbagai stakeholder termasuk pelatih profesional, 
                    tenaga medis, dan ahli gizi untuk memastikan pembinaan yang komprehensif. Setiap atlet akan 
                    mendapatkan program latihan yang disesuaikan dengan kebutuhan dan potensi masing-masing.
                  </p>

                  <p>
                    Tim teknis telah mempersiapkan segala sesuatunya dengan matang untuk memastikan kelancaran 
                    seluruh rangkaian kegiatan. Monitoring dan evaluasi akan dilakukan secara berkala untuk 
                    memastikan pencapaian target yang telah ditetapkan.
                  </p>

                  <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 my-6">
                    "Investasi terbaik adalah investasi pada generasi muda. Melalui pembinaan olahraga yang baik, 
                    kita tidak hanya mencetak atlet juara, tetapi juga membangun karakter pemuda yang tangguh dan 
                    berprestasi."
                  </blockquote>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Harapan ke Depan</h2>

                  <p>
                    Kedepannya, Dinas Pemuda dan Olahraga Provinsi Sumatera Barat akan terus meningkatkan kualitas 
                    program-program pembinaan. Kami berharap dengan dukungan semua pihak, visi untuk menjadikan 
                    Sumatera Barat sebagai salah satu pusat pengembangan olahraga prestasi di Indonesia dapat terwujud.
                  </p>

                  <p>
                    Kami mengajak seluruh masyarakat, khususnya para orang tua yang memiliki anak berbakat di bidang 
                    olahraga, untuk tidak ragu memanfaatkan program-program yang telah kami sediakan. Mari bersama-sama 
                    membangun masa depan olahraga Sumatera Barat yang lebih gemilang.
                  </p>
                </div>
              </div>

              {/* Tags */}
              {news.tags && news.tags.length > 0 && (
                <div className="mb-12 pb-8 border-b scroll-animate">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {news.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mb-12 pb-8 border-b scroll-animate">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bagikan Berita:</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Related News */}
              {relatedNews.length > 0 && (
                <div className="mt-16 scroll-animate">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Berita Terkait</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedNews.map((related) => (
                      <Link 
                        key={related.id}
                        href={`/berita/${related.slug}`}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-xs font-semibold text-blue-600 mb-2 block">
                            {related.category}
                          </span>
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {related.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{related.date}</span>
                            <span>{related.views} views</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to News Button */}
              <div className="mt-12 text-center scroll-animate">
                <Link 
                  href="/berita"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali ke Halaman Berita
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
