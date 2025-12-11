'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function AboutStats() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [videosCount, setVideosCount] = useState(0);
  const [creatorsCount, setCreatorsCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const videosInterval = setInterval(() => {
      setVideosCount(prev => {
        if (prev >= 1200) {
          clearInterval(videosInterval);
          return 1200;
        }
        return prev + 40;
      });
    }, 30);

    const creatorsInterval = setInterval(() => {
      setCreatorsCount(prev => {
        if (prev >= 300) {
          clearInterval(creatorsInterval);
          return 300;
        }
        return prev + 10;
      });
    }, 30);

    const viewsInterval = setInterval(() => {
      setViewsCount(prev => {
        if (prev >= 450) {
          clearInterval(viewsInterval);
          return 450;
        }
        return prev + 15;
      });
    }, 30);

    return () => {
      clearInterval(videosInterval);
      clearInterval(creatorsInterval);
      clearInterval(viewsInterval);
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="w-full bg-brand-cream py-24 px-4 relative overflow-hidden">
      {/* Film Grain */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      />

      {/* Starburst Decoration */}
      <div 
        className="absolute top-10 right-10 w-48 h-48 opacity-[0.05]"
        style={{
          background: 'repeating-conic-gradient(from 0deg, #FF7A1A 0deg 10deg, transparent 10deg 20deg)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* About Badge - Vegas Style */}
        <div 
          className={`flex items-center justify-center mb-12 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="relative inline-block bg-gradient-to-r from-[#E65353] to-[#FF7A1A] border-4 border-[#101828] px-8 py-3 shadow-[4px_4px_0px_0px_rgba(16,24,40,1)]">
            {/* Corner Bulbs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            <span className="text-white text-sm font-black tracking-wider uppercase">About</span>
          </div>
        </div>

        {/* Main Heading - Vegas Sign Typography */}
        <h2 
          className={`text-5xl md:text-6xl lg:text-7xl font-black text-center leading-tight mb-8 transition-all duration-700 delay-100 tracking-wide ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            textShadow: '3px 3px 0px #FF7A1A, 6px 6px 0px rgba(16,24,40,0.3)',
          }}
        >
          <span className="text-[#101828] font-[family-name:var(--font-onyx)]">WE HELP BRANDS </span>
          <span className="text-[#101828] font-[family-name:var(--font-onyx)]">AND CREATORS</span>
          <br />
          <span className="text-[#E65353] font-[family-name:var(--font-onyx)]">GROW</span>
        </h2>

        {/* Subheading */}
        <p 
          className={`text-center text-[#101828] text-xl font-bold max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 uppercase tracking-wide ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          ★ Consistent • Reliable • Dialed In ★
        </p>

        {/* Stats Cards - Vegas Marquee Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Videos Delivered */}
          <div 
            className={`relative transition-all duration-500 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#E65353] to-[#FF7A1A] border-4 border-[#101828] p-8 text-center shadow-[6px_6px_0px_0px_rgba(16,24,40,1)]">
              {/* Corner Bulbs */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="text-6xl md:text-7xl font-black text-white mb-3" style={{ textShadow: '3px 3px 0px rgba(16,24,40,0.5)' }}>
                {isVisible ? `${videosCount.toLocaleString()}+` : '0+'}
              </div>
              <div className="text-white font-black text-lg uppercase tracking-wider" style={{ textShadow: '2px 2px 0px rgba(16,24,40,0.5)' }}>
                Videos Delivered
              </div>
            </div>
          </div>

          {/* Creators Served */}
          <div 
            className={`relative transition-all duration-500 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#FF7A1A] to-[#F4C43A] border-4 border-[#101828] p-8 text-center shadow-[6px_6px_0px_0px_rgba(16,24,40,1)]">
              {/* Corner Bulbs */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="text-6xl md:text-7xl font-black text-white mb-3" style={{ textShadow: '3px 3px 0px rgba(16,24,40,0.5)' }}>
                {isVisible ? `${creatorsCount.toLocaleString()}+` : '0+'}
              </div>
              <div className="text-white font-black text-lg uppercase tracking-wider" style={{ textShadow: '2px 2px 0px rgba(16,24,40,0.5)' }}>
                Creators Served
              </div>
            </div>
          </div>

          {/* Total Views */}
          <div 
            className={`relative transition-all duration-500 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#E65353] to-[#FF7A1A] border-4 border-[#101828] p-8 text-center shadow-[6px_6px_0px_0px_rgba(16,24,40,1)]">
              {/* Corner Bulbs */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="text-6xl md:text-7xl font-black text-white mb-3" style={{ textShadow: '3px 3px 0px rgba(16,24,40,0.5)' }}>
                {isVisible ? `${viewsCount.toLocaleString()}M+` : '0M+'}
              </div>
              <div className="text-white font-black text-lg uppercase tracking-wider" style={{ textShadow: '2px 2px 0px rgba(16,24,40,0.5)' }}>
                Total Views
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Stars */}
        <div className="mt-12 text-center">
          <span className="text-4xl text-[#FF7A1A] animate-pulse inline-block mx-2" style={{ textShadow: '2px 2px 0px #101828' }}>★</span>
          <span className="text-3xl text-[#F4C43A] animate-pulse inline-block mx-2" style={{ animationDelay: '0.3s', textShadow: '2px 2px 0px #101828' }}>★</span>
          <span className="text-4xl text-[#E65353] animate-pulse inline-block mx-2" style={{ animationDelay: '0.6s', textShadow: '2px 2px 0px #101828' }}>★</span>
        </div>
      </div>
    </div>
  );
}