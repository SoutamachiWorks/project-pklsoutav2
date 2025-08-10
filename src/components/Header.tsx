'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchIcon, MenuIcon, ArrowDownIcon } from './Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <header className="bg-white shadow-lg">
      {/* Top Header with Orange Background */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium">Dinas Pemuda Dan Olahraga • Provinsi Sumatera Barat</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">DS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                DINAS PEMUDA DAN OLAHRAGA
              </h1>
              <p className="text-sm text-gray-600">PROVINSI SUMATERA BARAT</p>
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
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Link href="/" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                BERANDA
              </Link>
              <Link href="/profil" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                PROFIL
              </Link>
              <div className="relative group">
                <button className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide flex items-center">
                  KATEGORI
                  <ArrowDownIcon className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/berita?kategori=olahraga" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Berita Olahraga
                  </Link>
                  <Link href="/berita?kategori=ppid" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    PPID
                  </Link>
                  <Link href="/berita?kategori=daerah" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Daerah
                  </Link>
                  <Link href="/berita?kategori=agenda" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Agenda Kegiatan
                  </Link>
                  <Link href="/berita?kategori=bidang-olahraga" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Bidang Olahraga
                  </Link>
                  <Link href="/berita?kategori=uptd-pplp" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    UPTD PPLP
                  </Link>
                </div>
              </div>
              <Link href="/berita" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                BERITA
              </Link>
              <div className="relative group">
                <button className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide flex items-center">
                  DOWNLOAD AREA
                  <ArrowDownIcon className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/layanan" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Informasi Layanan
                  </Link>
                  <Link href="/lapor" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Lapor
                  </Link>
                  <Link href="/resipora" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    Resipora
                  </Link>
                  <Link href="/sippko" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    SIPPKO
                  </Link>
                  <Link href="/sidaka" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                    SIDAKA
                  </Link>
                </div>
              </div>
              <Link href="/galeri" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                DATA
              </Link>
              <Link href="/pengumuman" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                PENGUMUMAN
              </Link>
              <Link href="/kontak" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                HUBUNGI KAMI
              </Link>
              <Link href="/ppid" className="px-6 py-4 hover:bg-gray-700 transition-colors font-medium text-sm uppercase tracking-wide">
                PPID
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="py-4 space-y-2">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  HOME PAGE
                </Link>
                <Link href="/profil" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  PROFIL
                </Link>
                <Link href="/berita" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  KATEGORI
                </Link>
                <Link href="/berita" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  BERITA
                </Link>
                <Link href="/layanan" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  DOWNLOAD AREA
                </Link>
                <Link href="/galeri" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  DATA
                </Link>
                <Link href="/pengumuman" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  PENGUMUMAN
                </Link>
                <Link href="/kontak" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  HUBUNGI KAMI
                </Link>
                <Link href="/ppid" className="block px-4 py-2 hover:bg-gray-700 transition-colors text-sm uppercase">
                  PPID
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
