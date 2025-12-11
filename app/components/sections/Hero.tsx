'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, ThumbsUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF5E6] flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Trust Badge - Text Only */}
          <div 
            className={`transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="text-sm text-gray-700 font-medium">Founded by seasoned brand strategists from the grassroots of Bandra West.</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 
              className={`text-6xl md:text-7xl font-bold leading-tight transition-all duration-700 delay-100 font-[family-name:var(--font-onyx)] tracking-wide ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[#101828]">GOOD CONTENT</span>
              <span className="relative inline-flex items-center ml-3">
                
                <div className="w-16 h-16 rounded-2xl inline-flex items-center justify-center transform rotate-12 p-2">
                  <Image src="/Logos/CarterLabsShort.png" alt="Carter Labs" width={48} height={48} className="w-full h-full object-contain" />
                </div>
              </span>
            </h1>
            <h2 
              className={`text-6xl md:text-7xl font-bold transition-all duration-700 delay-200 tracking-wide ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[#101828] font-[family-name:var(--font-onyx)]">DONE </span>
              <span style={{ fontFamily: 'var(--font-edwardian-script)' }} className="bg-gradient-to-r from-[#E65353] via-[#FF7A1A] to-[#F4C43A] bg-clip-text text-transparent text-7xl md:text-8xl ml-2">
               Right.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p 
            className={`text-xl text-gray-600 max-w-lg transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Strong hooks, clear storytelling, and visuals that make your brand feel alive — crafted for businesses that want real engagement, not noise.
          </p>

          {/* CTA Button */}
          <div 
            className={`space-y-3 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="group bg-[#101828] hover:bg-black text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Book a Call
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-[#101828]" />
              </span>
            </button>
            <p className="text-sm text-gray-500 ml-1">No pressure, just possibilities.</p>
          </div>
        </div>

        {/* Right Content - Testimonial Cards */}
        <div className="relative h-[500px]">
          {/* First Testimonial Card */}
          <div 
            className={`absolute top-0 right-0 bg-white rounded-3xl shadow-2xl p-6 w-80 border border-gray-100 transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-6'
            }`}
            style={{
              animation: mounted ? 'float 3s ease-in-out infinite' : 'none'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A1A] to-[#E65353] flex-shrink-0"></div>
              <div className="flex-1">
                <div className="font-semibold text-[#101828]">@tomas</div>
                <div className="text-[#FF7A1A] font-medium mt-1">Bestest Edit in 48 hours</div>
                <div className="flex items-center gap-4 mt-3">
                  <ThumbsUp className="w-5 h-5 text-gray-400" />
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <button className="ml-auto bg-gradient-to-r from-[#FF7A1A] to-[#E65353] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial Card */}
          <div 
            className={`absolute bottom-0 right-12 bg-white rounded-3xl shadow-2xl p-6 w-80 border border-gray-100 transition-all duration-700 delay-700 ${
              mounted ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 -rotate-6'
            }`}
            style={{
              animation: mounted ? 'float 3s ease-in-out 1.5s infinite' : 'none'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7A1A] to-[#E65353] flex-shrink-0"></div>
              <div className="flex-1">
                <div className="font-semibold text-[#101828]">@mark_locus</div>
                <div className="text-[#FF7A1A] font-medium mt-1">
                  This edit boosted my retention rate by 35%!
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <ThumbsUp className="w-5 h-5 text-gray-400" />
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <button className="ml-auto bg-gradient-to-r from-[#FF7A1A] to-[#E65353] text-white px-4 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Sparkles */}
          <div className="absolute top-1/4 left-0 w-4 h-4 bg-[#FF7A1A] rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#E65353] rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}