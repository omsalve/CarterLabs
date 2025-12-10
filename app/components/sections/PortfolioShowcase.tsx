'use client';

import React, { useEffect, useState } from 'react';
import { Play, TrendingUp, Zap } from 'lucide-react';

export default function PortfolioShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      id: 1,
      creator: 'Framer',
      views: '2M Views',
      title: "The Launch in Motion: Framer's Big Day, Perfectly Edited",
      description: 'From tech reviews to gameplay breakdowns — here\'s a glimpse of how we turn raw footage into binge-worthy content that resonates.',
      thumbnail: 'nature-framer',
      featured: true
    },
    {
      id: 2,
      creator: 'GeorgeTech',
      views: '1.2M Views',
      title: 'Master Framer Fast: Core Concepts in Motion',
      description: 'From tech reviews to gameplay breakdowns.',
      thumbnail: 'person-tech',
      featured: false
    },
    {
      id: 3,
      creator: 'Smith Will',
      views: '4.2M Views',
      title: 'Meet the Creator Micro 2, Small Size, Big Impact',
      description: 'From tech reviews to gameplay breakdowns.',
      thumbnail: 'product-micro',
      featured: false
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hall of Fame Badge */}
        <div 
          className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Hall of Fame</span>
        </div>

        {/* Main Heading */}
        <h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Our Recent Edits in Action
        </h2>

        {/* Subheading */}
        <p 
          className={`text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          From tech reviews to gameplay breakdowns — here's a glimpse of how we turn raw footage.
        </p>

        {/* Featured Video */}
        <div 
          className={`mb-12 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-green-400 via-blue-500 to-blue-700 overflow-hidden">
              {/* Simulated nature/grass imagery */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-400/30 to-blue-600/30"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-600/40 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-gray-900 fill-gray-900 ml-1" />
                  </div>
                  <div className="absolute inset-0 bg-white/50 rounded-2xl blur-xl"></div>
                </div>
              </div>

              {/* Decorative grass blade effect */}
              <div className="absolute left-1/3 bottom-0 w-64 h-48 bg-gradient-to-t from-green-700 via-green-600 to-transparent opacity-60 transform -skew-x-12"></div>
            </div>

            {/* Video Info */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-gray-900" />
                  <span className="text-gray-900 font-semibold">{projects[0].creator}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{projects[0].views}</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {projects[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {projects[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Grid of Other Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video Card 1 */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
                {/* Simulated person/tech review imagery */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-64 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-full opacity-40"></div>
                  </div>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <span className="text-gray-900 font-semibold">GeorgeTech</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">1.2M Views</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Master Framer Fast: Core Concepts in Motion
                </h3>
                <p className="text-gray-600">
                  From tech reviews to gameplay breakdowns.
                </p>
              </div>
            </div>
          </div>

          {/* Video Card 2 */}
          <div 
            className={`transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative group cursor-pointer overflow-hidden rounded-3xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-black overflow-hidden">
                {/* Simulated product imagery */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="text-white text-4xl font-bold">Creator Micro 2</div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-blue-500 rounded-full blur-sm"></div>
                  </div>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Smith Will</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">4.2M Views</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Meet the Creator Micro 2, Small Size, Big Impact
                </h3>
                <p className="text-gray-600">
                  From tech reviews to gameplay breakdowns.
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}