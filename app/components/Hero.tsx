"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// ─── Magnetic Button ──────────────────────────────────────────────────────────

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

type Props = {
  scrollY: number;
};

export default function Hero({ scrollY }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Ghost word parallax — moves slower than everything else
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const ghostX = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  // Bleed layers shift at slightly different rates for depth
  const bleedY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bleedY2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
    >

      {/* ── Directional mood bleeds ─────────────────────────────────── */}

      {/* Primary: bottom-left burn — the main source of light */}
      <motion.div
        style={{ y: bleedY1 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 0% 100%, rgba(220,38,38,0.22) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      {/* Secondary: top-right ember — counters the primary, creates tension */}
      <motion.div
        style={{ y: bleedY2 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 100% 0%, rgba(220,38,38,0.10) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Tertiary: centre-bottom — lifts the floor slightly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 30% at 50% 100%, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* ── Film grain ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden
      />

      {/* ── Ghost word — BANDRA bleeds behind everything ─────────────── */}
      <motion.div
        style={{ y: ghostY, x: ghostX }}
        className="absolute bottom-[-6%] left-[-2%] pointer-events-none select-none z-[2] leading-none"
        aria-hidden
      >
        <span className="font-heading text-[28vw] text-white/[0.025] whitespace-nowrap">
          BANDRA
        </span>
      </motion.div>

      {/* ── Top-left film ID strip ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        className="absolute top-8 left-8 z-20 flex flex-col gap-1"
      >
        <span className="font-mono text-[9px] text-zinc-600 tracking-[0.3em] uppercase">
          CL-001 // Hero
        </span>
        <span className="font-mono text-[9px] text-red-800 tracking-[0.25em] uppercase">
          Est. 2026 — Bandra, Mumbai
        </span>
      </motion.div>

      {/* ── Top-right frame counter ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
        className="absolute top-8 right-8 z-20 flex items-center gap-3"
      >
        <span className="font-mono text-[9px] text-zinc-700 tracking-[0.3em] uppercase">
          Frame 0001
        </span>
        <span className="w-6 h-[1px] bg-red-700/50" />
      </motion.div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo typography */}
        <div className="flex flex-col items-center leading-none select-none">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-white text-[15vw] md:text-[12rem] tracking-tighter"
          >
            CARTER//
          </motion.span>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 -mt-4 md:-mt-12"
          >
            {/* Left rule — animates in from left */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-12 md:w-32 bg-red-600 origin-right block"
            />
            <span className="font-script text-red-600 text-6xl md:text-9xl relative top-2">
              Labs
            </span>
            {/* Right rule — animates in from right */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-12 md:w-32 bg-red-600 origin-left block"
            />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12 text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.35em] uppercase"
        >
          Elevating Ventures in{" "}
          <span className="text-zinc-300 border-b border-red-700/60 pb-[1px]">
            Bandra
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <motion.a
            href="mailto:hello@carterlabs.in"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase overflow-hidden"
          >
            {/* Red sweep — slides in from left on hover */}
            <motion.span
              className="absolute inset-0 bg-red-600 rounded-full"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Red dot accent */}
            <span className="relative z-10 w-[5px] h-[5px] rounded-full bg-red-600 group-hover:bg-white transition-colors duration-200 shrink-0" />

            {/* Label */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-200">
              Enter the Lab
            </span>

            {/* Trailing red dash */}
            <motion.span
              className="relative z-10 w-4 h-[1px] bg-red-600 group-hover:bg-white group-hover:w-6 transition-all duration-300 shrink-0"
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Bottom scroll indicator — film-language style ────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-4"
      >
        {/* Thin line that pulses */}
        <motion.span
          animate={{ scaleX: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-8 h-[1px] bg-red-700/60 origin-right block"
        />
        <span className="font-mono text-[9px] text-zinc-600 tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ scaleX: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 1.2 }}
          className="w-8 h-[1px] bg-red-700/60 origin-left block"
        />
      </motion.div>

    </section>
  );
}