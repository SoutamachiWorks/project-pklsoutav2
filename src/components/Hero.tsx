'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ArrowLeftIcon, MedalIcon, SettingsIcon, TargetIcon } from './Icons';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Selamat Datang di Website Resmi Dispora Sumbar",
      subtitle: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat",
      description: "Berkomitmen mengembangkan potensi pemuda dan prestasi olahraga demi kemajuan Sumatera Barat",
      image: "/slider/dispora-meeting.jpg", // Gambar meeting/rapat yang baru diupload
      cta: "Jelajahi Layanan",
      ctaLink: "/layanan"
    },
    {
      id: 2,
      title: "Pembinaan Atlet Berprestasi",
      subtitle: "PPLP & PPOP Sumatera Barat",
      description: "Menghasilkan atlet-atlet berbakat melalui sistem pembinaan yang terintegrasi dan berkelanjutan",
      image: "/slider/dispora-prestasi.jpg", // Menggunakan gambar pembinaan untuk konsistensi
      cta: "Lihat Program",
      ctaLink: "/layanan/pplp"
    },
    {
      id: 3,
      title: "Pengembangan Kepemudaan",
      subtitle: "Generasi Muda Berkarakter", 
      description: "Memberdayakan pemuda Sumatera Barat melalui program-program kepemudaan yang inovatif",
      image: "/slider/dispora-pengembangan.jpg", // Menggunakan gambar meeting untuk konsistensi
      cta: "Info Pemuda",
      ctaLink: "/layanan/pemuda"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {/* CSS Background as fallback */}
            <div className="absolute inset-0 hero-bg-meeting"></div>
            
            {/* Next.js Image as overlay */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
          
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-bold text-red-500">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={slide.ctaLink}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  {slide.cta}
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/berita"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-700 transition-colors duration-300"
                >
                  Berita Terkini
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Breaking News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-800 bg-opacity-90 text-white py-2 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-yellow-500 text-red-900 px-3 py-1 rounded text-sm font-bold mr-4 flex-shrink-0">
              BREAKING NEWS
            </span>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                <span className="mx-8 inline-flex items-center">
                  <MedalIcon className="w-4 h-4 mr-2 flex-shrink-0" /> 
                  Atlet PPLP Sumbar Raih Medali Emas di Kejuaraan Nasional
                </span>
                <span className="mx-8 inline-flex items-center">
                  <SettingsIcon className="w-4 h-4 mr-2 flex-shrink-0" /> 
                  Pendaftaran PPOP 2025 Dibuka Hingga 31 Agustus
                </span>
                <span className="mx-8 inline-flex items-center">
                  <TargetIcon className="w-4 h-4 mr-2 flex-shrink-0" /> 
                  Program Pembinaan Atlet Berbakat Tahun 2025 Segera Dimulai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
