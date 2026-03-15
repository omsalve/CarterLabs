"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Highlight helper ─────────────────────────────────────────────────────────

const Highlight = ({ children, delay }: { children: React.ReactNode; delay?: number }) => (
  <motion.span
    initial={{ color: "#3f3f46" }}
    whileInView={{ color: "#ffffff" }}
    viewport={{ margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.span>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function Manifesto({ isVisible, refEl }: any) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-15% 0px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const ghostX = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#080808] text-white overflow-hidden"
    >
      {/* Atmospheric red bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(220,38,38,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ghost word — bleeds behind everything */}
      <motion.div
        style={{ x: ghostX }}
        className="absolute bottom-0 left-0 pointer-events-none select-none z-[2] leading-none"
        aria-hidden
      >
        <span className="font-heading text-[22vw] text-white/[0.03] whitespace-nowrap">
          GROWTH
        </span>
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 md:py-40">

        {/* Section header */}
        <div ref={headerRef} className="mb-20 md:mb-28">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[1px] origin-left mb-8"
            style={{
              background:
                "linear-gradient(to right, #dc2626 0%, #dc2626 15%, rgba(255,255,255,0.08) 60%, transparent 100%)",
            }}
          />
          <div className="flex items-end justify-between">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-xs text-red-600 tracking-[0.3em] uppercase"
            >
              002 // Growth Partners
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-xs text-zinc-600 tracking-[0.2em] uppercase"
            >
              Est. 2026
            </motion.span>
          </div>
        </div>

        {/* ── Asymmetric two-column layout ── */}
        <div className="relative grid md:grid-cols-[1fr_420px] gap-0 items-start">

          {/* LEFT: Director's statement — sticky */}
          <div className="md:sticky md:top-32 space-y-0 md:pr-16 pb-24 md:pb-0">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-heading text-[13vw] md:text-[7.5rem] leading-[0.82] text-white mb-12">
                GROWTH
                <br />
                <span className="text-red-600">PARTNERS.</span>
              </h2>
            </motion.div>

            {/* Short red rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-16 h-[1px] bg-red-600 origin-left mb-10"
            />

            {/* Copy */}
            <div className="space-y-8 font-body text-lg md:text-xl leading-relaxed max-w-md">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-zinc-500"
              >
                We don't chase volume. We work with the ecosystem that shapes the neighborhood.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <Highlight delay={0.01}>Cafés.</Highlight>
                <Highlight delay={0.1}> Bars.</Highlight>
                <Highlight delay={0.2}> Salons.</Highlight>
                <Highlight delay={0.3}> Cultural Spaces.</Highlight>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-white text-base border-l-2 border-red-600 pl-5 italic leading-relaxed"
              >
                "As long as you're Bandra,
                <br />
                you're in the conversation."
              </motion.p>
            </div>

            {/* Bottom ID strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 flex items-center gap-4"
            >
              <span className="font-mono text-[10px] text-zinc-700 tracking-[0.25em] uppercase">
                CL-002
              </span>
              <span className="w-8 h-[1px] bg-zinc-800" />
              <span className="font-mono text-[10px] text-zinc-700 tracking-[0.25em] uppercase">
                Bandra, Mumbai
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Film frame image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Film frame */}
            <div className="relative overflow-hidden border border-white/[0.06]" style={{ height: "580px" }}>

              {/* Sprocket holes — top */}
              <div className="absolute top-0 left-0 right-0 h-[18px] z-20 flex items-center px-3 gap-[6px] bg-black/90 border-b border-white/[0.04]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-[10px] h-[8px] rounded-[1px] bg-zinc-800 shrink-0" />
                ))}
              </div>

              {/* Sprocket holes — bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[18px] z-20 flex items-center px-3 gap-[6px] bg-black/90 border-t border-white/[0.04]">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-[10px] h-[8px] rounded-[1px] bg-zinc-800 shrink-0" />
                ))}
              </div>

              {/* Parallax image */}
              <motion.div
                className="absolute w-full"
                style={{ height: "120%", top: "-10%", y: imageY }}
              >
                <img
                  src="/Manifesto.jpg"
                  alt="Bandra Lifestyle"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Red mood bleed */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(220,38,38,0.15) 0%, transparent 60%)",
                }}
              />

              {/* Film grain on image */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-[0.45] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                  backgroundSize: "128px 128px",
                }}
              />

              {/* Vignette */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.8) 100%)",
                }}
              />

              {/* ID strip */}
              <div className="absolute bottom-[22px] left-0 right-0 z-20 px-4 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-700">
                  EST 2026 // MUMBAI
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-700">
                  Bandra
                </span>
              </div>
            </div>

            {/* Vertical credit text — cinematic */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3">
              <span
                className="font-mono text-[9px] text-zinc-700 tracking-[0.3em] uppercase"
                style={{ writingMode: "vertical-rl" }}
              >
                Carter Labs — Bandra 2026
              </span>
              <span className="w-[1px] h-8 bg-zinc-800" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}