'use client';

import React, { useEffect, useState } from 'react';
import { Menu, Play, Heart, Star, Zap, Video, TrendingUp, Award } from 'lucide-react';

export default function EditorShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: <Video className="w-4 h-4" />, text: "10 years on industry" },
    { icon: <Zap className="w-4 h-4" />, text: "Fast Delivery" },
    { icon: <Play className="w-4 h-4" />, text: "500+ Videos Delivered" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "2x Engagement Boost" },
    { icon: <Star className="w-4 h-4" />, text: "4.9 Stars Rating" },
    { icon: <Award className="w-4 h-4" />, text: "Top Rated Editors On Fiverr" },
    { icon: <Video className="w-4 h-4" />, text: "10 years on industry" },
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Marquee */}
        <div className="relative overflow-hidden mb-12">
          <div 
            className={`flex gap-8 transition-opacity duration-1000 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              animation: mounted ? 'scroll 30s linear infinite' : 'none'
            }}
          >
            {[...stats, ...stats].map((stat, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-gray-600 whitespace-nowrap text-sm font-medium"
              >
                <span className="text-[#FF7A1A]">{stat.icon}</span>
                <span>{stat.text}</span>
                <span className="mx-2 text-[#FF7A1A]">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Video Showcase */}
        <div 
          className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* YouTube Header */}
          <div className="bg-black/90 backdrop-blur-sm px-6 py-4 flex items-center gap-4 border-b border-gray-800">
            <Menu className="w-6 h-6 text-white" />
            <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E65353] rounded flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-white font-semibold text-lg">Youtube</span>
            </div>
          </div>

          {/* Video Content Area */}
          <div className="relative aspect-video bg-gradient-to-br from-yellow-400/20 via-teal-500/20 to-emerald-400/20">
            {/* Editor at Desk Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simulated Editor Setup */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                
                {/* Monitor Screens */}
                <div className="absolute left-1/4 top-1/3 w-48 h-32 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 transform -rotate-2">
                  <div className="p-2 space-y-1">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#E65353]"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-600 rounded w-full"></div>
                      <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E65353] to-[#FF7A1A]"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-1/4 top-1/2 w-40 h-28 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600 transform rotate-3">
                  <div className="p-2">
                    <div className="h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded flex items-center justify-center">
                      <Play className="w-8 h-8 text-white/50" />
                    </div>
                  </div>
                </div>

                {/* Person Silhouette */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-96 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-full opacity-60"></div>
              </div>
            </div>

            {/* Floating Like Icons */}
            <div 
              className={`absolute top-20 right-20 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{
                animation: mounted ? 'float 4s ease-in-out infinite' : 'none'
              }}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] rounded-3xl transform rotate-45 flex items-center justify-center shadow-2xl">
                  <Heart className="w-10 h-10 text-white fill-white transform -rotate-45" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] rounded-3xl blur-xl opacity-50"></div>
              </div>
            </div>

            <div 
              className={`absolute bottom-32 left-20 transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                animation: mounted ? 'float 3s ease-in-out 1s infinite' : 'none'
              }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] rounded-2xl transform rotate-45 flex items-center justify-center shadow-2xl">
                  <Heart className="w-8 h-8 text-white fill-white transform -rotate-45" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>

            {/* Animated Sparkles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF7A1A] rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#E65353] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#F4C43A] rounded-full animate-ping"></div>
          </div>

          
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}