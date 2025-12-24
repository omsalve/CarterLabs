"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react"; // Make sure you have: npm install lucide-react

export default function BandraFocus() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll (0 to 1) to horizontal movement (-1% to -75%)
  // Adjust the -75% based on how many items you have.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Horizontal Moving Track */}
        <motion.div style={{ x }} className="flex gap-20 pl-20 md:pl-40">
          
          {/* Card 1: The Intro */}
          <div className="relative h-[60vh] w-[80vw] md:w-[60vw] flex flex-col justify-center shrink-0">
            <h2 className="font-heading text-[12vw] md:text-[8rem] leading-none text-white/20">
              THE <br /> MODEL
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white max-w-md font-body">
              A lean ecosystem means we don't scale by adding more clients. We scale by adding more value.
            </p>
          </div>

          {/* Card 2: Fewer Clients */}
          <Card 
            number="01" 
            title="FEWER CLIENTS" 
            desc="We cap our active roster. This isn't scarcity marketing. It's the only way to guarantee obsession." 
          />

          {/* Card 3: Deeper Involvement */}
          <Card 
            number="02" 
            title="DEEPER ROOTS" 
            desc="We don't just run ads. We consult on menus, interiors, and culture. We are in the building." 
          />

          {/* Card 4: The CTA (The Reveal) */}
          <div className="relative h-[60vh] w-[80vw] md:w-[40vw] flex flex-col justify-center items-start shrink-0">
             <div className="border-l border-white/10 pl-12 h-full flex flex-col justify-center">
                <span className="font-heading text-6xl text-red-600 mb-6">READY?</span>
                <button className="group relative px-8 py-4 bg-white text-black font-body font-bold text-lg hover:bg-red-600 hover:text-white transition-colors duration-500 flex items-center gap-4">
                  ENTER THE LAB
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-6 text-white/40 text-sm">
                  Applications for Q1 2025 are currently open.
                </p>
             </div>
          </div>

        </motion.div>

        {/* Optional: Progress Bar at bottom */}
        <div className="absolute bottom-10 left-10 right-10 h-[1px] bg-white/10">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-red-600 origin-left" 
          />
        </div>

      </div>
    </section>
  );
}

// Sub-component for clean code
const Card = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="relative h-[60vh] w-[80vw] md:w-[45vw] flex flex-col justify-center shrink-0 border-l border-white/10 pl-12">
    <span className="font-heading text-9xl text-neutral-800 absolute -top-10 left-10 z-0 select-none">
      {number}
    </span>
    <h3 className="relative z-10 font-body font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">
      {title}
    </h3>
    <p className="relative z-10 text-lg md:text-xl text-neutral-400 max-w-sm leading-relaxed">
      {desc}
    </p>
  </div>
);