"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const WORKS = [
  {
    id: "01",
    client: "The Smokehouse Deli",
    type: "Brand Film",
    tags: ["Cinematic", "F&B", "Brand Identity"],
    year: "2024",
    aspect: "wide", // 16:9 feel
    accentOpacity: 0.18,
  },
  {
    id: "02",
    client: "Khar Social",
    type: "Social Content",
    tags: ["Reels", "Nightlife", "Editorial"],
    year: "2024",
    aspect: "portrait", // 4:5 feel
    accentOpacity: 0.12,
  },
  {
    id: "03",
    client: "Bandra Gym Co.",
    type: "Campaign",
    tags: ["Fitness", "Motion", "Series"],
    year: "2023",
    aspect: "wide",
    accentOpacity: 0.2,
  },
  {
    id: "04",
    client: "Café Zoe",
    type: "Visual Identity",
    tags: ["Lifestyle", "F&B", "Photography"],
    year: "2023",
    aspect: "portrait",
    accentOpacity: 0.14,
  },
  {
    id: "05",
    client: "Bombay Bicycle Club",
    type: "Brand Film",
    tags: ["Cinematic", "Bar", "Narrative"],
    year: "2024",
    aspect: "wide",
    accentOpacity: 0.16,
  },
];

// ─── Film Frame Card ──────────────────────────────────────────────────────────

function WorkCard({
  work,
  index,
}: {
  work: (typeof WORKS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  const isWide = work.aspect === "wide";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group cursor-pointer ${
        isWide ? "col-span-2" : "col-span-1"
      }`}
    >
      {/* Film frame outer border */}
      <div className="relative overflow-hidden border border-white/[0.06]">
        
        {/* Letterbox sprocket holes — top */}
        <div className="absolute top-0 left-0 right-0 h-[18px] z-20 flex items-center px-3 gap-[6px] bg-black/90 border-b border-white/[0.04]">
          {Array.from({ length: isWide ? 18 : 9 }).map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[8px] rounded-[1px] bg-zinc-800 shrink-0"
            />
          ))}
        </div>

        {/* Letterbox sprocket holes — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[18px] z-20 flex items-center px-3 gap-[6px] bg-black/90 border-t border-white/[0.04]">
          {Array.from({ length: isWide ? 18 : 9 }).map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[8px] rounded-[1px] bg-zinc-800 shrink-0"
            />
          ))}
        </div>

        {/* The "screen" area */}
        <div
          className={`relative overflow-hidden ${
            isWide ? "aspect-[16/9]" : "aspect-[4/5]"
          }`}
        >
          {/* Placeholder dark fill — replace with <Image> or <video> */}
          <div className="absolute inset-0 bg-zinc-950" />

          {/* Red mood bleed — aggressive, cinematic */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 20% 80%, rgba(220,38,38,${work.accentOpacity}) 0%, transparent 70%)`,
            }}
            animate={hovered ? { opacity: 1.6 } : { opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Top-right corner red bleed */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 50% 40% at 85% 10%, rgba(220,38,38,${work.accentOpacity * 0.7}) 0%, transparent 60%)`,
            }}
            animate={hovered ? { opacity: 1.4 } : { opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

          {/* Film grain texture — heavy, visible */}
          <div
            className="absolute inset-0 z-10 pointer-events-none opacity-[0.55] mix-blend-overlay"
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
                "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)",
            }}
          />

          {/* Hover reveal: project title overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 60%)",
                }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-500 border border-red-600/40 px-2 py-[3px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-3xl md:text-5xl text-white leading-none">
                    {work.client}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-2 tracking-widest uppercase">
                    {work.type} — {work.year}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Always-visible bottom ID strip */}
          <div className="absolute bottom-[18px] left-0 right-0 z-20 px-4 py-2 flex items-center justify-between pointer-events-none">
            <span
              className={`font-mono text-[10px] tracking-[0.25em] transition-colors duration-500 ${
                hovered ? "text-zinc-600" : "text-zinc-700"
              }`}
            >
              CL-{work.id} / {work.year}
            </span>
            <span
              className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                hovered ? "text-zinc-600" : "text-zinc-700"
              }`}
            >
              {work.type}
            </span>
          </div>
        </div>
      </div>

      {/* Below-card label — always visible */}
      <div className="mt-3 px-1 flex items-start justify-between">
        <div>
          <motion.h4
            className="font-body text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-500"
          >
            {work.client}
          </motion.h4>
        </div>
        <motion.span
          className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase mt-1 group-hover:text-red-600 transition-colors duration-500"
        >
          {work.id}
        </motion.span>
      </div>
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className="mb-16 md:mb-24">
      {/* Top rule with red bleed */}
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
            003 // Selected Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[12vw] md:text-[7rem] leading-none text-white"
          >
            THE
            <br />
            <span className="text-zinc-700">WORK.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-body text-sm text-zinc-500 max-w-xs leading-relaxed md:text-right md:mb-2"
        >
          Every frame is intentional.
          <br />
          Every brand, a story worth telling.
        </motion.p>
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the section background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808] text-white py-24 md:py-40 px-6 overflow-hidden"
    >
      {/* Background red mood wash — very subtle, atmospheric */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(220,38,38,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 30% at 5% 20%, rgba(220,38,38,0.05) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Section-wide film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content — centred, max-w-5xl to match Manifesto */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <SectionHeader />

        {/* Work grid — asymmetric, cinematic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {WORKS.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
            {WORKS.length} Projects — Bandra, Mumbai — 2023–2024
          </span>
          <a
            href="mailto:hello@carterlabs.in"
            className="group inline-flex items-center gap-3 font-body text-sm text-zinc-400 hover:text-white transition-colors duration-500"
          >
            <span className="w-8 h-[1px] bg-red-600 group-hover:w-16 transition-all duration-500" />
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}