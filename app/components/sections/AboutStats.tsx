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

    // Animate Videos Counter
    const videosInterval = setInterval(() => {
      setVideosCount(prev => {
        if (prev >= 1200) {
          clearInterval(videosInterval);
          return 1200;
        }
        return prev + 40;
      });
    }, 30);

    // Animate Creators Counter
    const creatorsInterval = setInterval(() => {
      setCreatorsCount(prev => {
        if (prev >= 300) {
          clearInterval(creatorsInterval);
          return 300;
        }
        return prev + 10;
      });
    }, 30);

    // Animate Views Counter
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
    <div ref={sectionRef} className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Badge */}
        <div 
          className={`flex items-center justify-center gap-2 mb-12 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">About</span>
        </div>

        {/* Main Heading */}
        <h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-16 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-gray-900">We're the Editing Partners Behind the</span>
          <br />
          <span className="text-gray-900">Creators Who Actually Grow with</span>
          <br />
          <span className="text-gray-900">Results. </span>
          <span className="text-orange-500">Fast</span>
          <span className="text-gray-900">, </span>
          <span className="text-red-500">Reliable</span>
          <span className="text-gray-900"> and </span>
          <span className="text-red-600">Obsessed</span>
          <span className="text-red-600">.</span>
        </h2>

        {/* Stats - No Cards */}
        <div className="flex flex-wrap justify-center items-start gap-16 md:gap-24 max-w-4xl mx-auto">
          {/* Videos Delivered */}
          <div 
            className={`text-center transition-all duration-500 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              {isVisible ? `${videosCount.toLocaleString()}+` : '0+'}
            </div>
            <div className="text-gray-900 font-medium text-base">
              Videos Delivered
            </div>
          </div>

          {/* Creators Served */}
          <div 
            className={`text-center transition-all duration-500 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              {isVisible ? `${creatorsCount.toLocaleString()}+` : '0+'}
            </div>
            <div className="text-gray-900 font-medium text-base">
              Creators Served
            </div>
          </div>

          {/* Total Views */}
          <div 
            className={`text-center transition-all duration-500 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
              {isVisible ? `${viewsCount.toLocaleString()}M+` : '0M+'}
            </div>
            <div className="text-gray-900 font-medium text-base">
              Total Views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}