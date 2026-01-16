'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon, MenuIcon, ArrowDownIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnduhOpen, setIsUnduhOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset dropdown when closing menu
    if (isMenuOpen) {
      setIsUnduhOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" suppressHydrationWarning>
      {/* Main Header */}
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex-shrink-0">
              <Image
                src="/logo-sumbar.png"
                alt="Logo Sumatera Barat"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm md:text-xl font-bold text-gray-800 leading-tight">
                DINAS PEMUDA DAN OLAHRAGA
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 truncate">PROVINSI SUMATERA BARAT</p>
            </div>
          </Link>

          {/* Search Box - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari..." 
                className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-64 transition-all"
              />
              <button 
                className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-600 transition-colors"
                title="Cari"
                aria-label="Tombol pencarian"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            title="Menu"
          >
            <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Link href="/" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                BERANDA
              </Link>
              <Link href="/profil" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                PROFIL
              </Link>
              <Link href="/berita" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                BERITA
              </Link>
              <Link href="/galeri" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                GALERI
              </Link>
              <Link href="/program" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                PROGRAM
              </Link>
              <Link href="/layanan" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                LAYANAN
              </Link>
              <Link href="/kontak" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                HUBUNGI KAMI
              </Link>
              <Link href="/ppid" className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide">
                PPID
              </Link>
              <div className="relative group">
                <button className="px-4 xl:px-6 py-4 hover:bg-blue-800 transition-all duration-300 font-medium text-xs xl:text-sm uppercase tracking-wide flex items-center">
                  UNDUH & LAPOR
                  <ArrowDownIcon className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform scale-95 group-hover:scale-100">
                  <Link href="/unduh" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                    Unduh Dokumen
                  </Link>
                  <Link href="/lapor" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200">
                    Lapor & Pengaduan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden animate-fadeIn">
              <div className="py-3 space-y-1">
                <Link href="/" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  BERANDA
                </Link>
                <Link href="/profil" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  PROFIL
                </Link>
                <Link href="/berita" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  BERITA
                </Link>
                <Link href="/galeri" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  GALERI
                </Link>
                <Link href="/program" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  PROGRAM
                </Link>
                <Link href="/layanan" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  LAYANAN
                </Link>
                <Link href="/kontak" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  HUBUNGI KAMI
                </Link>
                <Link href="/ppid" className="block px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 text-sm uppercase rounded" onClick={() => setIsMenuOpen(false)}>
                  PPID
                </Link>
                
                {/* Unduh & Lapor Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsUnduhOpen(!isUnduhOpen)}
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-800 transition-all duration-200 font-medium text-sm uppercase tracking-wide flex items-center justify-between rounded"
                  >
                    UNDUH & LAPOR
                    <ArrowDownIcon className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${isUnduhOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isUnduhOpen && (
                    <div className="bg-blue-800/50 py-1 animate-fadeIn">
                      <Link href="/unduh" className="block px-8 py-2.5 text-gray-200 hover:bg-blue-700 hover:text-white transition-all duration-200 rounded" onClick={() => setIsMenuOpen(false)}>
                        Unduh Dokumen
                      </Link>
                      <Link href="/lapor" className="block px-8 py-2.5 text-gray-200 hover:bg-blue-700 hover:text-white transition-all duration-200 rounded" onClick={() => setIsMenuOpen(false)}>
                        Lapor & Pengaduan
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
