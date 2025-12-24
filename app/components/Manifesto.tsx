"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // Optimization

// Helper component for highlighting text
const Highlight = ({ children, delay }: { children: React.ReactNode, delay?: number }) => (
  <motion.span
    initial={{ color: "#3f3f46" }} // zinc-700
    whileInView={{ color: "#ffffff" }}
    viewport={{ margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.span>
);

export default function Manifesto({ isVisible, refEl }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Parallax for image

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] bg-zinc-950 text-zinc-300 py-24 flex justify-center"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: Sticky Text */}
        <div className="h-fit md:sticky md:top-32 space-y-12">
          <h2 className="font-heading text-6xl md:text-8xl leading-[0.85] text-white">
            GROWTH <br />
            <span className="text-red-600">PARTNERS.</span>
          </h2>
          
          <div className="font-body text-xl md:text-2xl leading-relaxed space-y-8 max-w-lg">
            <p className="text-zinc-500">
              We don't chase volume. <br />We work with the ecosystem that shapes the neighborhood.
            </p>
            
            <p>
              <Highlight>Cafés.</Highlight> <Highlight delay={0.1}>Bars.</Highlight>{" "}
              <Highlight delay={0.2}>Salons.</Highlight>{" "}
              <Highlight delay={0.3}>Cultural Spaces.</Highlight>
            </p>

            <p className="text-white text-lg border-l-2 border-red-600 pl-6 italic">
              "As long as you’re Bandra, you’re in the conversation."
            </p>
          </div>
        </div>

        {/* RIGHT: Parallax Image */}
        <div className="relative h-[600px] w-full md:w-[90%] md:ml-auto overflow-hidden rounded-sm">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
             {/* Note: Ensure /Manifesto.jpg is high res */}
             <img 
               src="/Manifesto.jpg" 
               alt="Bandra Lifestyle" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </motion.div>
          
          {/* Caption Overlay */}
          <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">
            <p className="font-heading text-2xl text-white tracking-wide">EST 2024 // MUMBAI</p>
          </div>
        </div>

      </div>
    </section>
  );
}