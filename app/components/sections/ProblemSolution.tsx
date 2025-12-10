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
    "Fast turnaround",
    "You record. We handle the rest.",
    "Cinematic, clean, and branded.",
    "Burned-in, style-matched captions."
  ];

  return (
    <div className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Our Solution Badge */}
        <div 
          className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-gray-700 font-medium">Our Solution</span>
        </div>

        {/* Main Heading */}
        <h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Why Most Creators Burn Out
        </h2>

        {/* Subheading */}
        <p 
          className={`text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A quick side-by-side of the struggles you shouldn't have to deal with and how we make sure you don't.
        </p>

        {/* Two Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Creators Problem */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Creators Problem
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  style={{
                    animation: mounted ? `fadeInLeft 0.5s ease-out ${0.4 + index * 0.1}s both` : 'none'
                  }}
                >
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-medium">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Our Solution */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-8 text-center">
              Our Solution
            </h3>
            <div className="bg-gray-900 rounded-3xl p-6 space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors duration-300"
                  style={{
                    animation: mounted ? `fadeInRight 0.5s ease-out ${0.5 + index * 0.1}s both` : 'none'
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}