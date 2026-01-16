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
      title: "Selamat Datang di Website Resmi",
      subtitle: "Dinas Pemuda dan Olahraga Provinsi Sumatera Barat",
      description: "Berkomitmen mengembangkan potensi pemuda dan prestasi olahraga untuk membangun Sumatra Barat yang lebih maju dan berprestasi",
      image: "/slider/dispora-meeting.jpg",
      cta: "Jelajahi Layanan Kami",
      ctaLink: "/layanan"
    },
    {
      id: 2,
      title: "Cetak Atlet Juara Nasional",
      subtitle: "PPLP & PPOP Sumatera Barat",
      description: "Sistem pembinaan atlet terintegrasi yang telah menghasilkan ratusan atlet berprestasi di tingkat nasional dan internasional",
      image: "/slider/dispora-prestasi.jpg",
      cta: "Lihat Program Pembinaan",
      ctaLink: "/layanan/pplp"
    },
    {
      id: 3,
      title: "Generasi Muda Berkarakter & Berdaya",
      subtitle: "Program Pemberdayaan Pemuda", 
      description: "Mengembangkan jiwa kepemimpinan, kewirausahaan, dan kreativitas pemuda melalui program-program kepemudaan yang inovatif dan berkelanjutan",
      image: "/slider/dispora-pengembangan.jpg",
      cta: "Gabung Program Pemuda",
      ctaLink: "/layanan/pemuda"
    }
  ];

  const breakingNews = [
    {
      id: 1,
      icon: <MedalIcon className="w-4 h-4 mr-2 flex-shrink-0" />,
      text: "Atlet PPLP Sumbar Raih 5 Medali Emas di Kejuaraan Nasional 2025!"
    },
    {
      id: 2,
      icon: <SettingsIcon className="w-4 h-4 mr-2 flex-shrink-0" />,
      text: "Pendaftaran PPOP 2025 Dibuka! Deadline 31 Agustus - Jangan Lewatkan!"
    },
    {
      id: 3,
      icon: <TargetIcon className="w-4 h-4 mr-2 flex-shrink-0" />,
      text: "Program Beasiswa Atlet Berprestasi Tahun 2025 Sudah Dibuka"
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
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 
            index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
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
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
              quality={85}
            />
          </div>
          
          {/* Enhanced gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex items-center">
            <div className="max-w-3xl text-white fade-in-up pl-8 pr-8 sm:pl-12 sm:pr-12 md:pl-16 md:pr-16 lg:pl-4 lg:pr-4">
              <div className="mb-3 sm:mb-4">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold text-white border border-white/30 shadow-lg">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight text-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 text-gray-100 leading-relaxed max-w-2xl">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href={slide.ctaLink}
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-sm md:text-base transform hover:scale-105"
                >
                  {slide.cta}
                  <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link 
                  href="/berita"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300 text-sm md:text-base backdrop-blur-sm transform hover:scale-105"
                >
                  Berita Terkini
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Improved for mobile */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator - More visible on mobile */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-2.5 sm:w-10 sm:h-3 bg-white shadow-lg' 
                : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Breaking News Ticker - Optimized for mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-700/95 backdrop-blur-sm text-white py-2 sm:py-2.5 md:py-3 z-20 shadow-lg">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center">
            <span className="bg-yellow-400 text-red-900 px-2 py-1 sm:px-3 sm:py-1.5 rounded text-xs sm:text-sm font-bold mr-2 sm:mr-3 md:mr-4 flex-shrink-0 shadow-md">
              BREAKING NEWS
            </span>
            <div className="overflow-hidden flex-1">
              <div className="animate-marquee whitespace-nowrap flex items-center text-xs sm:text-sm font-medium">
                {breakingNews.map((news) => (
                  <span key={news.id} className="mx-4 sm:mx-6 md:mx-8 inline-flex items-center">
                    {news.icon}
                    <span className="ml-1">{news.text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
