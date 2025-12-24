"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Ensure you have lucide-react installed

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Parallax for the background text
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Red Glow */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* The Question */}
        <motion.div style={{ y }} className="mb-16">
          <h2 className="font-heading text-8xl md:text-[10rem] leading-[0.8] text-zinc-800 select-none opacity-50">
            ARE YOU
          </h2>
          <h2 className="font-script text-9xl md:text-[12rem] text-red-600 relative -mt-8 md:-mt-16 z-20">
            Bandra?
          </h2>
        </motion.div>

        {/* The Interaction */}
        <div className="relative z-30">
          
          <MagneticButton>
            <a 
              href="mailto:hello@carterlabs.com" 
              className="relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black transition-all hover:bg-zinc-200"
            >
              <span className="font-body font-medium text-xl tracking-tight">
                Let's Talk.
              </span>
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------
// Sub-Component: Magnetic Button Effect
// -------------------------------------------------------------

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 is the magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.div>
  );
}