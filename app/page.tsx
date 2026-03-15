'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import CuratedReveal from './components/CuratedReveal';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CinematicGrain from './components/CinematicGrain';
import Showreel from './components/ShowReel';

type VisibilityMap = Record<string, boolean>;

export default function CarterLabsWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<VisibilityMap>({});
  const observerRefs = useRef<(HTMLElement | null)[]>([]);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = (entry.target as HTMLElement).dataset.section;
          if (!section) return;
          setIsVisible((prev) => ({
            ...prev,
            [section]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    observerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // Changed from bg-white to bg-[#080808] — unified dark ground
    <div className="bg-[#080808] text-white overflow-x-hidden">

      {/* Living film grain — sits over everything */}
      <CinematicGrain />

      <Hero scrollY={scrollY} />

      <Manifesto
        isVisible={isVisible}
        refEl={(el: HTMLElement | null) => {
          observerRefs.current[0] = el;
        }}
      />

      <CuratedReveal />

      {/* ✦ The new Showreel section */}
      <Showreel />

      <CTA />
      <Footer />
    </div>
  );
}