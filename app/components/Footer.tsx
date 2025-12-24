"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react"; 

export default function Footer() {
  const [time, setTime] = useState("");

  // Live Bandra Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-10 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-32">
          
          {/* Column 1: Brand Context */}
          <div className="md:col-span-2 space-y-8">
            {/* LOGO UPDATE: Replaced text with SVG */}
            <img 
              src="/logos/CarterLabsWhite.svg" 
              alt="Carter Labs" 
              className="w-48 md:w-64"
            />
            
            <p className="font-body text-zinc-500 max-w-sm leading-relaxed">
              We build digital infrastructure for the ventures that shape our neighborhood.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              BANDRA, MUMBAI — {time} IST
            </div>
          </div>

          {/* Column 2: SITEMAP */}
          <div>
            <h4 className="font-mono text-xs text-red-600 uppercase tracking-widest mb-6">Sitemap</h4>
            <ul className="space-y-4 font-body text-zinc-400">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="#">Manifesto</FooterLink></li>
              <li><FooterLink href="#">Ventures</FooterLink></li>
              <li><FooterLink href="#">Private Access</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: SOCIALS */}
          <div>
            <h4 className="font-mono text-xs text-red-600 uppercase tracking-widest mb-6">Socials</h4>
            <ul className="space-y-4 font-body text-zinc-400">
              <li><FooterLink href="#">Instagram</FooterLink></li>
              <li><FooterLink href="#">Twitter / X</FooterLink></li>
              <li><FooterLink href="#">LinkedIn</FooterLink></li>
              <li><FooterLink href="mailto:hello@carterlabs.in">Email Us</FooterLink></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: The Massive Signature */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            © 2025 Carter Labs Pvt Ltd.
          </span>
          
          {/* Huge decorative text - Kept as Typography for artistic background effect */}
          <h1 className="font-heading text-[15vw] leading-[0.8] text-white/5 select-none pointer-events-none absolute bottom-[-5%] right-[-2%] z-0">
            CARTER
          </h1>
        </div>

      </div>
    </footer>
  );
}

// -------------------------------------------------------------
// Sub-component: Hover Link
// -------------------------------------------------------------

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="group flex items-center gap-2 hover:text-white transition-colors duration-300"
    >
      <span>{children}</span>
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" />
    </a>
  );
}