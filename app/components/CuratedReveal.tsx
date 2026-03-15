"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';
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
    content: "When you work with Carter Labs, you're not hiring an agency. You're entering a small, curated ecosystem.",
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
    content: "There's security in knowing your agency isn't stretched thin. There's confidence in knowing your growth is being shaped, not rushed.",
  }
];

export default function CuratedReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080808] text-white py-24 md:py-40 min-h-screen flex justify-center overflow-hidden"
    >
      {/* Background red mood wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(220,38,38,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Section-wide film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6">

        {/* Section Header — matches Showreel/Manifesto */}
        <SectionHeader />

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

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="mb-16 md:mb-24">
      {/* Red-bleed top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[1px] origin-left mb-8"
        style={{
          background:
            "linear-gradient(to right, #dc2626 0%, #dc2626 15%, rgba(255,255,255,0.08) 60%, transparent 100%)",
        }}
      />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs text-red-600 tracking-[0.3em] uppercase block mb-4"
          >
            001 // Manifesto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[12vw] md:text-[7rem] leading-none text-white"
          >
            THE
            <br />
            <span className="text-zinc-700">MANIFESTO.</span>
          </motion.h2>
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-mono text-xs text-red-600 uppercase tracking-widest md:mb-2"
        >
          [ Read Only ]
        </motion.span>
      </div>
    </div>
  );
}

// ─── Reveal Item ──────────────────────────────────────────────────────────────

function RevealItem({ item, index }: { item: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });

  const borderScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="group relative grid md:grid-cols-[200px_1fr] gap-8 py-16 border-b border-white/5">
      
      {/* Animated red border */}
      <motion.div 
        style={{ scaleX: borderScale, opacity: borderOpacity }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600 origin-left z-10" 
      />

      {/* Left Column */}
      <div className="flex flex-row md:flex-col justify-between md:justify-start gap-4">
        <span className="font-mono text-xs text-red-600/70 tracking-widest">
          {item.id} //
        </span>
        <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-widest">
          {item.label}
        </h3>
      </div>

      {/* Right Column */}
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

// ─── Heading Reveal ───────────────────────────────────────────────────────────

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

// ─── Body Reveal ──────────────────────────────────────────────────────────────

function BodyReveal({ text, highlights = [], progress }: { text: string, highlights?: string[], progress: MotionValue<number> }) {
  const words = text.split(" ");
  
  return (
    <p className="font-body text-xl md:text-3xl leading-relaxed text-zinc-500 flex flex-wrap gap-x-2.5">
      {words.map((word, i) => {
        const start = i / words.length; 
        const end = start + (1 / words.length);
        const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
        const isHighlight = highlights.some(h => h.includes(cleanWord));

        return (
          <Word 
            key={i} 
            progress={progress} 
            range={[start * 0.5, 0.2 + (end * 0.5)]}
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
  const color = isHighlight ? "#dc2626" : "#e4e4e7";

  return (
    <motion.span 
      style={{ opacity, y, filter: blur, color: isHighlight ? color : undefined }} 
      className={clsx("inline-block", isHighlight && "font-medium")}
    >
      {children}
    </motion.span>
  );
}