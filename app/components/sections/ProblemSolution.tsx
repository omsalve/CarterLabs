'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const problems = [
    "Editing takes me forever.",
    "I miss uploads trying to finish videos.",
    "I hate editing. I just want to record.",
    "My videos don't look pro enough.",
    "Captions are a pain to add."
  ];

  const solutions = [
    "Done-for-you edits, always on time.",
    "Fast turnaround, zero stress.",
    "You record. We handle everything else.",
    "Cinematic, clean, and branded edits.",
    "Burned-in, style-matched captions."
  ];

  return (
    <div className="relative w-full bg-brand-cream py-28 px-4 overflow-hidden">

      {/* GRAIN OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      {/* STARBURST */}
      <div
        className="absolute top-10 left-10 w-72 h-72 opacity-[0.06]"
        style={{
          background:
            'repeating-conic-gradient(from 0deg, #FF7A1A 0deg 10deg, transparent 10deg 20deg)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* BADGE — VEGAS MARQUEE */}
        <div
          className={`flex items-center justify-center mb-12 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="relative inline-block bg-gradient-to-r from-[#FF7A1A] to-[#E65353] border-4 border-[#101828] px-8 py-3 shadow-[4px_4px_0px_#101828] rounded-xl">
            
            {/* BULBS */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{animationDelay:"0.5s"}}></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{animationDelay:"1s"}}></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{animationDelay:"1.5s"}}></div>

            <span className="text-white text-sm font-black tracking-wider uppercase">
              Our Solution
            </span>
          </div>
        </div>

        {/* HEADING */}
        <h2
          className={`text-center text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-700 delay-100 font-[family-name:var(--font-onyx)] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow:
              "3px 3px 0px #FF7A1A, 6px 6px 0px rgba(16,24,40,0.3)",
          }}
        >
          WHY MOST CREATORS BURN OUT.
        </h2>

        {/* SUB */}
        <p
          className={`text-center text-[#101828] text-lg max-w-2xl mx-auto mb-20 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          And how we make sure you never do.
        </p>

        {/* TWO-COLUMN GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* LEFT — PROBLEMS */}
          <div
            className={`transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3
              className="text-3xl text-center font-black text-[#101828] mb-6"
              style={{ textShadow: "2px 2px 0px #F4C43A" }}
            >
              What Creators Struggle With
            </h3>

            <div className="space-y-5">
              {problems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white border-4 border-[#101828] rounded-2xl p-5 shadow-[4px_4px_0px_#101828] flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                  }}
                >
                  {/* corner bulbs */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#E65353] rounded-full border-2 border-[#101828] animate-pulse" style={{animationDelay:"0.6s"}}></div>

                  <X className="w-6 h-6 text-[#E65353] flex-shrink-0 mt-0.5" />
                  <span className="text-[#101828] font-semibold text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — SOLUTIONS */}
          <div
            className={`transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3
              className="text-3xl text-center font-black text-[#E65353] mb-6"
              style={{ textShadow: "2px 2px 0px #101828" }}
            >
              What We Do Instead
            </h3>

            <div className="bg-brand-navy border-4 border-[#101828] rounded-3xl p-6 shadow-[6px_6px_0px_#101828] space-y-5">

              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#1a2235] border-2 border-[#101828] p-5 rounded-2xl shadow-lg flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${500 + index * 100}ms`,
                  }}
                >
                  {/* bulbs */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>

                  <CheckCircle className="w-6 h-6 text-[#FF7A1A] flex-shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-lg">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* DECORATIVE STARS */}
        <div className="mt-20 text-center">
          <span className="text-4xl text-[#FF7A1A] animate-pulse inline-block mx-2" style={{ textShadow: "2px 2px 0px #101828" }}>★</span>
          <span className="text-3xl text-[#F4C43A] animate-pulse inline-block mx-2" style={{ animationDelay: "0.3s", textShadow: "2px 2px 0px #101828" }}>★</span>
          <span className="text-4xl text-[#E65353] animate-pulse inline-block mx-2" style={{ animationDelay: "0.6s", textShadow: "2px 2px 0px #101828" }}>★</span>
        </div>

      </div>
    </div>
  );
}
