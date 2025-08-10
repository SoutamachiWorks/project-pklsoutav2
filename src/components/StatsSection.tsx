'use client';

import React, { useState, useEffect } from 'react';
import { SportIcon, MedalIcon, TargetIcon, StadiumIcon, StarIcon } from './Icons';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    athletes: 0,
    medals: 0,
    events: 0,
    facilities: 0
  });

  const finalNumbers = {
    athletes: 1250,
    medals: 324,
    events: 156,
    facilities: 45
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = (target: number) => target / (duration / 50);

    const timer = setInterval(() => {
      setCounters(prev => ({
        athletes: Math.min(prev.athletes + increment(finalNumbers.athletes), finalNumbers.athletes),
        medals: Math.min(prev.medals + increment(finalNumbers.medals), finalNumbers.medals),
        events: Math.min(prev.events + increment(finalNumbers.events), finalNumbers.events),
        facilities: Math.min(prev.facilities + increment(finalNumbers.facilities), finalNumbers.facilities)
      }));
    }, 50);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: Math.floor(counters.athletes),
      label: "Atlet Binaan",
      description: "Atlet yang dibina dalam berbagai cabang olahraga",
      icon: <SportIcon className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: Math.floor(counters.medals),
      label: "Medali Diraih",
      description: "Total medali yang diraih atlet Sumbar",
      icon: <MedalIcon className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: Math.floor(counters.events),
      label: "Event Diselenggarakan",
      description: "Jumlah event olahraga dan kepemudaan",
      icon: <TargetIcon className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      number: Math.floor(counters.facilities),
      label: "Fasilitas Olahraga",
      description: "Fasilitas olahraga yang dikelola",
      icon: <StadiumIcon className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    {
      title: "Juara Umum PON XX Papua 2021",
      description: "Sumatera Barat meraih posisi 10 besar dengan total 15 medali emas",
      year: "2021",
      category: "Prestasi Nasional"
    },
    {
      title: "Atlet Terbaik SEA Games 2023",
      description: "2 atlet Sumbar masuk nominasi atlet terbaik SEA Games Kamboja",
      year: "2023",
      category: "Prestasi Internasional"
    },
    {
      title: "Pengembangan PPLP Terbaik",
      description: "PPLP Sumbar dinobatkan sebagai PPLP dengan program pembinaan terbaik",
      year: "2024",
      category: "Pembinaan"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Capaian & Prestasi
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Data dan pencapaian kami dalam mengembangkan olahraga dan kepemudaan di Sumatera Barat
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 text-white`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number.toLocaleString()}+
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Prestasi Terbaru</h3>
            <p className="text-gray-300">Pencapaian gemilang yang membanggakan Sumatera Barat</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </span>
                  <span className="text-xs text-gray-300 uppercase tracking-wide">
                    {achievement.category}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2 leading-tight">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <TargetIcon className="mr-3 w-6 h-6" />
              Visi
            </h3>
            <p className="text-gray-200 leading-relaxed">
              "Terwujudnya Sumatera Barat yang unggul dalam bidang kepemudaan dan keolahragaan melalui pembinaan yang berkelanjutan dan prestasi yang membanggakan."
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <StarIcon className="mr-3 w-6 h-6" />
              Misi
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">•</span>
                <span>Mengembangkan sistem pembinaan olahraga yang terintegrasi</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">•</span>
                <span>Meningkatkan kapasitas dan karakter generasi muda</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2 mt-1">•</span>
                <span>Menciptakan prestasi olahraga yang membanggakan daerah</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
