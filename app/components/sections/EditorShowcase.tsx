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
    <div className="w-full bg-white py-16 px-4 relative overflow-hidden">
      {/* Film Grain */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      />

      {/* Starburst Decorations */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 opacity-[0.05]"
        style={{
          background: 'repeating-conic-gradient(from 0deg, #FF7A1A 0deg 10deg, transparent 10deg 20deg)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Marquee - Vegas Style */}
        <div className="relative overflow-hidden mb-12 border-y-4 border-[#101828] py-4 bg-gradient-to-r from-[#E65353] to-[#FF7A1A] shadow-[0_4px_0px_0px_rgba(16,24,40,1)]">
          {/* Corner Bulbs */}
          <div className="absolute top-0 left-4 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
          <div className="absolute top-0 right-4 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-0 left-12 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-12 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
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
                className="flex items-center gap-2 text-white whitespace-nowrap text-sm font-black uppercase tracking-wider"
                style={{
                  textShadow: '2px 2px 0px rgba(16,24,40,0.5)'
                }}
              >
                <span className="text-[#F4C43A]">{stat.icon}</span>
                <span>{stat.text}</span>
                <span className="mx-2 text-[#F4C43A]">★</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Video Showcase */}
        <div 
          className={`relative bg-gradient-to-br from-gray-900 to-black overflow-hidden border-4 border-[#101828] shadow-[8px_8px_0px_0px_rgba(16,24,40,1)] transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Corner Marquee Lights */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] z-20 animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] z-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] z-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] z-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

          {/* YouTube Header - Vegas Style */}
          <div className="bg-black/90 backdrop-blur-sm px-6 py-4 flex items-center gap-4 border-b-4 border-[#101828]">
            <Menu className="w-6 h-6 text-white" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E65353] flex items-center justify-center border-3 border-white shadow-[2px_2px_0px_0px_rgba(16,24,40,1)]">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-white font-black text-lg tracking-wider uppercase" style={{ textShadow: '2px 2px 0px #E65353' }}>Youtube</span>
            </div>
          </div>

          {/* Video Content Area */}
          <div className="relative aspect-video bg-gradient-to-br from-yellow-400/20 via-teal-500/20 to-emerald-400/20">
            {/* Editor at Desk */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Background gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                
                {/* Monitor Screens - Vegas Retro */}
                <div className="absolute left-1/4 top-1/3 w-48 h-32 bg-gray-800/90 border-4 border-gray-600 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  {/* Corner bulbs on monitor */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#F4C43A] rounded-full border border-black"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#F4C43A] rounded-full border border-black"></div>
                  
                  <div className="p-2 space-y-1">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-[#E65353] border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F4C43A] border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black"></div>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="h-2 bg-gray-600 w-3/4"></div>
                      <div className="h-2 bg-gray-600 w-full"></div>
                      <div className="h-2 bg-gray-600 w-2/3"></div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#F4C43A] to-orange-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-1/4 top-1/2 w-40 h-28 bg-gray-800/90 border-4 border-gray-600 transform rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  {/* Corner bulbs */}
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#F4C43A] rounded-full border border-black"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#F4C43A] rounded-full border border-black"></div>
                  
                  <div className="p-2">
                    <div className="h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border-2 border-gray-700">
                      <Play className="w-8 h-8 text-white/50" />
                    </div>
                  </div>
                </div>

                {/* Person Silhouette */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-96 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-full opacity-60"></div>
              </div>
            </div>

            {/* Floating Like Icons - Vegas Marquee Style */}
            <div 
              className={`absolute top-20 right-20 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{
                animation: mounted ? 'float 4s ease-in-out infinite' : 'none'
              }}
            >
              <div className="relative">
                {/* Corner Bulbs */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border-4 border-[#101828]">
                  <Heart className="w-10 h-10 text-white fill-white" />
                </div>
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
                {/* Corner Bulbs */}
                <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
                <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] border-4 border-[#101828]">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Vegas Stars */}
            <div 
              className="absolute top-1/4 left-1/4 text-3xl text-[#F4C43A] animate-pulse" 
              style={{ 
                textShadow: '2px 2px 0px #101828',
                animationDelay: '0.3s'
              }}
            >★</div>
            <div 
              className="absolute top-1/3 right-1/3 text-2xl text-[#FF7A1A] animate-pulse" 
              style={{ 
                textShadow: '2px 2px 0px #101828',
                animationDelay: '0.8s'
              }}
            >★</div>
            <div 
              className="absolute bottom-1/4 right-1/4 text-3xl text-[#E65353] animate-pulse" 
              style={{ 
                textShadow: '2px 2px 0px #101828',
                animationDelay: '1.3s'
              }}
            >★</div>
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