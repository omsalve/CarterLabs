"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import clsx from 'clsx';

// Data Structure
const MANIFEST_ITEMS = [
  {
    id: "01",
    label: "THE APPROACH",
    content: "Curated collaborations. Measurable growth.",
    isHeading: true
  },
  {
    id: "02",
    label: "THE SHIFT",
    content: "When you work with Carter Labs, you’re not hiring an agency. You’re entering a small, curated ecosystem.",
  },
  {
    id: "03",
    label: "THE MODEL",
    content: "A lean business model means fewer clients, deeper involvement, and absolute priority.",
    highlight: ["fewer clients", "deeper involvement", "absolute priority"] 
  },
  {
    id: "04",
    label: "THE OUTCOME",
    content: "There’s security in knowing your agency isn’t stretched thin. There’s confidence in knowing your growth is being shaped, not rushed.",
  }
];

export default function CuratedReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] text-white py-32 min-h-screen flex justify-center">
      <div className="w-full max-w-5xl px-6">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-white/10 pb-6 flex justify-between items-end">
          <span className="font-heading text-4xl text-white/20">MANIFESTO</span>
          <span className="font-mono text-xs text-red-600 uppercase tracking-widest">[ Read Only ]</span>
        </div>

        {/* The List */}
        <div className="flex flex-col">
          {MANIFEST_ITEMS.map((item, index) => (
            <RevealItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// Sub-Component: The Row
// ------------------------------------------------------------------

function RevealItem({ item, index }: { item: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll for THIS specific item
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"], // Reveals as it enters the "reading zone"
  });

  // 1. Border Glow Effect
  const borderScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="group relative grid md:grid-cols-[200px_1fr] gap-8 py-16 border-b border-white/5">
      
      {/* Animated Red Border (The "Progress" Line) */}
      <motion.div 
        style={{ scaleX: borderScale, opacity: borderOpacity }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600 origin-left z-10" 
      />

      {/* Left Column: Label / ID */}
      <div className="flex flex-row md:flex-col justify-between md:justify-start gap-4">
        <span className="font-mono text-xs text-red-600/70 tracking-widest">
          {item.id} //
        </span>
        <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-widest">
          {item.label}
        </h3>
      </div>

      {/* Right Column: The Content Reveal */}
      <div className="relative">
        {item.isHeading ? (
          <HeadingReveal text={item.content} progress={scrollYProgress} />
        ) : (
          <BodyReveal 
            text={item.content} 
            highlights={item.highlight} 
            progress={scrollYProgress} 
          />
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-Component: Heading Reveal (Bold & Big)
// ------------------------------------------------------------------

function HeadingReveal({ text, progress }: { text: string, progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.5], [0.1, 1]);
  const y = useTransform(progress, [0, 0.5], [20, 0]);

  return (
    <motion.h2 
      style={{ opacity, y }}
      className="font-heading text-6xl md:text-8xl leading-[0.85] text-white"
    >
      {text}
    </motion.h2>
  );
}

// ------------------------------------------------------------------
// Sub-Component: Body Reveal (Word by Word)
// ------------------------------------------------------------------

function BodyReveal({ text, highlights = [], progress }: { text: string, highlights?: string[], progress: MotionValue<number> }) {
  const words = text.split(" ");
  
  return (
    <p className="font-body text-xl md:text-3xl leading-relaxed text-zinc-500 flex flex-wrap gap-x-2.5">
      {words.map((word, i) => {
        // Stagger the reveal of words based on scroll progress
        const start = i / words.length; 
        const end = start + (1 / words.length);
        
        // Is this word a keyword? (Simple check, creates the "Red" pop)
        const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
        const isHighlight = highlights.some(h => h.includes(cleanWord));

        return (
          <Word 
            key={i} 
            progress={progress} 
            range={[start * 0.5, 0.2 + (end * 0.5)]} // Tuning the speed
            isHighlight={isHighlight}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range, isHighlight }: { children: string, progress: MotionValue<number>, range: [number, number], isHighlight: boolean }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [10, 0]);
  const blur = useTransform(progress, range, ["4px", "0px"]);
  
  // If highlighted, it turns White or Red instead of Zinc
  const color = isHighlight ? "#dc2626" : "#e4e4e7"; // red-600 : zinc-200

  return (
    <motion.span 
      style={{ opacity, y, filter: blur, color: isHighlight ? color : undefined }} 
      className={clsx("inline-block", isHighlight && "font-medium")}
    >
      {children}
    </motion.span>
  );
}