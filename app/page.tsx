'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import BusinessGrid from './components/BusinessGrid';
import BandraFocus from './components/BandraFocus';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CuratedReveal from './components/CuratedReveal';

type VisibilityMap = Record<string, boolean>;

export default function CarterLabsWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<VisibilityMap>({});
  const observerRefs = useRef<(HTMLElement | null)[]>([]);

  /* Scroll */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
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
    <div className="bg-white text-black overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <Manifesto
  isVisible={isVisible}
  refEl={(el: HTMLElement | null) => {
    observerRefs.current[0] = el;
  }}
/>
      <CuratedReveal />

      <CTA />
      <Footer />
    </div>
  );
}
