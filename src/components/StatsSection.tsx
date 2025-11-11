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
  }, [finalNumbers.athletes, finalNumbers.medals, finalNumbers.events, finalNumbers.facilities]);

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
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
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
              <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 shadow-lg flex flex-col h-full w-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 text-white`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                  {stat.number.toLocaleString()}+
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 min-h-[3.5rem] flex items-center">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievements */}
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 mb-16 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Prestasi Terbaru</h3>
            <p className="text-gray-600">Pencapaian gemilang yang membanggakan Sumatera Barat</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold inline-block w-fit">
                    {achievement.year}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {achievement.category}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-3 leading-tight text-gray-800">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <TargetIcon className="mr-3 w-6 h-6 text-red-600" />
              Visi
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              &quot;Terwujudnya Sumatera Barat yang unggul dalam bidang kepemudaan dan keolahragaan melalui pembinaan yang berkelanjutan dan prestasi yang membanggakan.&quot;
            </p>
          </div>
          
          <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-xl p-8 border border-gray-200 hover:bg-opacity-100 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <StarIcon className="mr-3 w-6 h-6 text-red-600" />
              Misi
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 text-lg">•</span>
                <span className="text-base leading-relaxed">Mengembangkan sistem pembinaan olahraga yang terintegrasi</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 text-lg">•</span>
                <span className="text-base leading-relaxed">Meningkatkan kapasitas dan karakter generasi muda</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1 text-lg">•</span>
                <span className="text-base leading-relaxed">Menciptakan prestasi olahraga yang membanggakan daerah</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
