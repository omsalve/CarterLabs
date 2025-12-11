'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, ThumbsUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF5E6] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Film Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulance type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      />
      
      {/* Retro Starburst Background - Vegas Style */}
      <div 
        className="absolute top-10 right-10 w-64 h-64 opacity-[0.06]"
        style={{
          background: 'repeating-conic-gradient(from 0deg, #FF7A1A 0deg 10deg, transparent 10deg 20deg)',
        }}
      />
      
      {/* Dotted Pattern */}
      <div 
        className="absolute bottom-10 left-10 w-48 h-48 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E65353 2px, transparent 2px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Trust Badge - Vegas Marquee Style */}
          <div 
            className={`transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="inline-block bg-[#E65353] text-white border-4 border-[#101828] px-6 py-3 relative shadow-[4px_4px_0px_0px_rgba(16,24,40,1)]">
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
              <span className="text-xs font-black tracking-wider uppercase">Founded by seasoned brand strategists from the grassroots of Bandra</span>
            </div>
          </div>

          {/* Main Heading - Vegas Sign Typography */}
          <div className="space-y-4">
            <h1 
              className={`text-6xl md:text-7xl font-bold leading-tight transition-all duration-700 delay-100 font-[family-name:var(--font-onyx)] tracking-wide ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                textShadow: '3px 3px 0px #FF7A1A, 6px 6px 0px rgba(16,24,40,0.3)',
              }}
            >
              <span className="text-[#101828]">GOOD CONTENT</span>
              <span className="relative inline-flex items-center ml-3">
                <div className="w-16 h-16 bg-[#F4C43A] border-4 border-[#101828] inline-flex items-center justify-center transform rotate-12 p-2 shadow-[3px_3px_0px_0px_rgba(16,24,40,1)]">
                  <Image src="/Logos/CarterLabsShort.png" alt="Carter Labs" width={48} height={48} className="w-full h-full object-contain" />
                </div>
              </span>
            </h1>
            <h2 
              className={`text-6xl md:text-7xl font-bold transition-all duration-700 delay-200 tracking-wide ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[#101828] font-[family-name:var(--font-onyx)]" style={{
                textShadow: '3px 3px 0px #FF7A1A, 6px 6px 0px rgba(16,24,40,0.3)',
              }}>DONE </span>
              <span 
                style={{ 
                  fontFamily: 'var(--font-edwardian-script)',
                  textShadow: '2px 2px 0px #FF7A1A, 4px 4px 0px #E65353, 6px 6px 0px rgba(16,24,40,0.2)',
                }} 
                className="text-[#E65353] text-7xl md:text-8xl ml-2"
              >
               Right.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p 
            className={`text-xl text-[#101828] max-w-lg transition-all duration-700 delay-300 font-medium ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Strong hooks, clear storytelling, and visuals that make your brand feel alive — crafted for businesses that want real engagement, not noise.
          </p>

          {/* CTA Button - Vegas Marquee Button */}
          <div 
            className={`space-y-3 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="group relative bg-gradient-to-r from-[#E65353] to-[#FF7A1A] text-white px-8 py-4 text-lg font-black flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:translate-y-1 uppercase tracking-wider border-4 border-[#101828] shadow-[6px_6px_0px_0px_rgba(16,24,40,1)] hover:shadow-[8px_8px_0px_0px_rgba(16,24,40,1)]">
              {/* Corner lights */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              Book a Call
              <span className="w-10 h-10 bg-[#F4C43A] border-3 border-[#101828] flex items-center justify-center rotate-0 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-[#101828]" />
              </span>
            </button>
            <p className="text-sm text-[#101828] ml-1 font-bold">★ No pressure, just possibilities ★</p>
          </div>
        </div>

        {/* Right Content - Testimonial Cards Vegas Style */}
        <div className="relative h-[500px]">
          {/* First Testimonial Card */}
          <div 
            className={`absolute top-0 right-0 bg-white p-6 w-80 border-4 border-[#101828] transition-all duration-700 delay-500 shadow-[6px_6px_0px_0px_rgba(16,24,40,1)] ${
              mounted ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-6'
            }`}
            style={{
              animation: mounted ? 'float 3s ease-in-out infinite' : 'none'
            }}
          >
            {/* Corner Bulbs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A1A] to-[#E65353] flex-shrink-0 border-3 border-[#101828] shadow-[3px_3px_0px_0px_rgba(16,24,40,1)]"></div>
              <div className="flex-1">
                <div className="font-black text-[#101828] tracking-tight">@tomas</div>
                <div className="text-[#E65353] font-bold mt-1 text-sm">★ Bestest Edit in 48 hours</div>
                <div className="flex items-center gap-4 mt-4">
                  <ThumbsUp className="w-5 h-5 text-gray-400" />
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <button className="ml-auto bg-[#101828] text-white px-4 py-1.5 text-xs font-black uppercase tracking-wide hover:bg-[#FF7A1A] transition-all duration-300 border-2 border-[#101828] shadow-[2px_2px_0px_0px_rgba(16,24,40,1)]">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial Card */}
          <div 
            className={`absolute bottom-0 right-12 bg-white p-6 w-80 border-4 border-[#101828] transition-all duration-700 delay-700 shadow-[6px_6px_0px_0px_rgba(16,24,40,1)] ${
              mounted ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 -rotate-6'
            }`}
            style={{
              animation: mounted ? 'float 3s ease-in-out 1.5s infinite' : 'none'
            }}
          >
            {/* Corner Bulbs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828]"></div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E65353] to-[#FF7A1A] flex-shrink-0 border-3 border-[#101828] shadow-[3px_3px_0px_0px_rgba(16,24,40,1)]"></div>
              <div className="flex-1">
                <div className="font-black text-[#101828] tracking-tight">@mark_locus</div>
                <div className="text-[#E65353] font-bold mt-1 text-sm">
                  ★ Boosted retention by 35%!
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <ThumbsUp className="w-5 h-5 text-gray-400" />
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <button className="ml-auto bg-[#101828] text-white px-4 py-1.5 text-xs font-black uppercase tracking-wide hover:bg-[#E65353] transition-all duration-300 border-2 border-[#101828] shadow-[2px_2px_0px_0px_rgba(16,24,40,1)]">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Stars */}
          <div className="absolute top-1/4 left-0 text-3xl text-[#FF7A1A] animate-pulse" style={{ textShadow: '2px 2px 0px #101828' }}>★</div>
          <div className="absolute bottom-1/4 left-1/4 text-2xl text-[#E65353] animate-pulse" style={{ animationDelay: '0.5s', textShadow: '2px 2px 0px #101828' }}>★</div>
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