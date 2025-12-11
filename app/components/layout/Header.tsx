'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Works', href: '#works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <Image 
              src="/Logos/CarterLabs.png" 
              alt="Carter Labs" 
              width={400}
              height={400}
              className="h-50 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#FF7A1A] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A1A] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group bg-[#101828] hover:bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-[#101828]" />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-[#101828]"></span>
            <span className="w-6 h-0.5 bg-[#101828]"></span>
            <span className="w-6 h-0.5 bg-[#101828]"></span>
          </button>
        </div>
      </div>
    </header>
  );
}