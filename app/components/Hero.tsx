"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  scrollY: number; // We can use the prop you passed, or built-in hooks
};

export default function Hero({ scrollY }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create internal scroll hooks for smoother parallax independent of parent state
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Animated Typography Logo */}
        <div className="flex flex-col items-center leading-none select-none">
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-white text-[15vw] md:text-[12rem] tracking-tighter"
          >
            CARTER//
          </motion.span>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-4 -mt-4 md:-mt-12"
          >
            <span className="h-[1px] w-12 md:w-32 bg-red-600/50" />
            <span className="font-script text-red-600 text-6xl md:text-9xl relative top-2">
              Labs
            </span>
            <span className="h-[1px] w-12 md:w-32 bg-red-600/50" />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-zinc-400 font-body text-sm md:text-lg tracking-widest uppercase"
        >
          Elevating Ventures in <span className="text-white border-b border-red-600">Bandra</span>
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-zinc-600 text-xs tracking-widest uppercase"
      >
        Scroll to Enter
      </motion.div>
    </section>
  );
}