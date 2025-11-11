'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon, MenuIcon, ArrowDownIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isUnduhOpen, setIsUnduhOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset dropdowns when closing menu
    if (isMenuOpen) {
      setIsLayananOpen(false);
      setIsUnduhOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg" suppressHydrationWarning>
      {/* Top Header with Orange Background */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium">Dinas Pemuda Dan Olahraga • Provinsi Sumatera Barat</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
              <Image
                src="/logo-sumbar.png"
                alt="Logo Sumatera Barat"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>
            <div>
              <h1 className="text-sm md:text-xl font-bold text-gray-800 leading-tight">
                DINAS PEMUDA DAN OLAHRAGA
              </h1>
              <p className="text-xs md:text-sm text-gray-600">PROVINSI SUMATERA BARAT</p>
            </div>
          </div>

          {/* Search Box - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Cari..." 
                className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
              />
              <button 
                className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-600"
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
            className="lg:hidden flex items-center justify-center p-2"
            aria-label="Toggle mobile menu"
            title="Menu"
          >
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Link href="/" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                BERANDA
              </Link>
              <Link href="/profil" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                PROFIL
              </Link>
              <Link href="/berita" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                BERITA
              </Link>
              <Link href="/galeri" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                GALERI
              </Link>
              <Link href="/program" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                PROGRAM
              </Link>
              <div className="relative group">
                <button className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide flex items-center">
                  LAYANAN
                  <ArrowDownIcon className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/layanan/ppop" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    PPOP
                  </Link>
                  <Link href="/layanan/pplp" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    PPLP
                  </Link>
                  <Link href="/layanan/pplp" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Layanan Kepemudaan
                  </Link>
                  <Link href="/layanan/olahraga" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Layanan Keolahragaan
                  </Link>
                </div>
              </div>
              <Link href="/kontak" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                HUBUNGI KAMI
              </Link>
              <Link href="/ppid" className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide">
                PPID
              </Link>
              <div className="relative group">
                <button className="px-6 py-4 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide flex items-center">
                  UNDUH & LAPOR
                  <ArrowDownIcon className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/download/laporan" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Laporan
                  </Link>
                  <Link href="/download/dokumen" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Unduh
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="py-4 space-y-2">
                <Link href="/" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  BERANDA
                </Link>
                <Link href="/profil" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  PROFIL
                </Link>
                <Link href="/berita" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  BERITA
                </Link>
                <Link href="/galeri" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  GALERI
                </Link>
                <Link href="/program" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  PROGRAM
                </Link>
                
                {/* Layanan Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsLayananOpen(!isLayananOpen)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide flex items-center justify-between"
                  >
                    LAYANAN
                    <ArrowDownIcon className={`ml-1 w-4 h-4 transform transition-transform ${isLayananOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isLayananOpen && (
                    <div className="bg-blue-800 py-2">
                      <Link href="/layanan/ppop" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        PPOP
                      </Link>
                      <Link href="/layanan/pplp" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        PPLP
                      </Link>
                      <Link href="/layanan/pemuda" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Layanan Kepemudaan
                      </Link>
                      <Link href="/layanan/olahraga" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Layanan Keolahragaan
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/kontak" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  HUBUNGI KAMI
                </Link>
                <Link href="/ppid" className="block px-4 py-2 hover:bg-blue-800 transition-colors text-sm uppercase" onClick={() => setIsMenuOpen(false)}>
                  PPID
                </Link>
                
                {/* Unduh & Lapor Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsUnduhOpen(!isUnduhOpen)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-800 transition-colors font-medium text-sm uppercase tracking-wide flex items-center justify-between"
                  >
                    UNDUH & LAPOR
                    <ArrowDownIcon className={`ml-1 w-4 h-4 transform transition-transform ${isUnduhOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isUnduhOpen && (
                    <div className="bg-blue-800 py-2">
                      <Link href="/download/laporan" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Laporan
                      </Link>
                      <Link href="/download/dokumen" className="block px-8 py-2 text-gray-200 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Unduh
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
