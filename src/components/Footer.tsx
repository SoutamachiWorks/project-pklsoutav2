'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon, PhoneIcon, EmailIcon, LocationIcon } from './Icons';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-blue-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/logo-sumbar.png"
                  alt="Logo Sumatera Barat"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">DISPORA SUMBAR</h3>
                <p className="text-sm text-gray-300">Provinsi Sumatera Barat</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Dinas Pemuda dan Olahraga Provinsi Sumatera Barat berkomitmen untuk mengembangkan potensi pemuda dan prestasi olahraga di Sumatera Barat.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/disposumabar" className="text-gray-300 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/disposumabar" className="text-gray-300 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/disposumabar" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/disposumabar" className="text-gray-300 hover:text-red-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">YouTube</span>
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/profil/visi-misi" className="text-gray-300 hover:text-white transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link href="/profil/struktur-organisasi" className="text-gray-300 hover:text-white transition-colors">
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link href="/profil/tugas-fungsi" className="text-gray-300 hover:text-white transition-colors">
                  Tugas & Fungsi
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-gray-300 hover:text-white transition-colors">
                  Berita Terkini
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white transition-colors">
                  Galeri Foto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/layanan/ppop" className="text-gray-300 hover:text-white transition-colors">
                  PPOP (Pusat Pembinaan Olahraga Pelajar)
                </Link>
              </li>
              <li>
                <Link href="/layanan/pplp" className="text-gray-300 hover:text-white transition-colors">
                  PPLP (Pusat Pembinaan Latihan Pelajar)
                </Link>
              </li>
              <li>
                <Link href="/layanan/pemuda" className="text-gray-300 hover:text-white transition-colors">
                  Layanan Kepemudaan
                </Link>
              </li>
              <li>
                <Link href="/layanan/olahraga" className="text-gray-300 hover:text-white transition-colors">
                  Layanan Keolahragaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <LocationIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    Jl. Rasuna Said No. 74<br />
                    Padang, Sumatera Barat<br />
                    Kode Pos: 25129
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-red-500" />
                <p className="text-gray-300">(0751) 443973</p>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-red-500" />
                <p className="text-gray-300">(0751) 443973 (Fax)</p>
              </div>
              <div className="flex items-center space-x-2">
                <EmailIcon className="w-5 h-5 text-red-500" />
                <p className="text-gray-300">dispora@sumbarprov.go.id</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2025 Dinas Pemuda dan Olahraga Provinsi Sumatera Barat. Semua hak dilindungi.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="bg-blue-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm">
            <span className="text-gray-400">Link Terkait:</span>
            <a href="http://www.kemenpora.go.id/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Kemenpora
            </a>
            <a href="http://sumbarprov.go.id/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Website Sumbarprov
            </a>
            <a href="http://newsimaya.sumbarprov.go.id/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Aplikasi siMAYA
            </a>
          </div>
        </div>
      </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-orange-600 hover:bg-orange-700 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-50 group"
          aria-label="Kembali ke atas"
        >
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
