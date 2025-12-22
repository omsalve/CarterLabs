'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'work across cities',
  'scale indiscriminately',
  'chase volume',
];

export default function WeDontRotate() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="text-2xl md:text-3xl font-medium text-white flex items-baseline gap-2">
        <span>We don’t</span>

        <span className="relative inline-block h-[1.2em] overflow-hidden">
          <span key={index} className="block font-semibold rotate-word">
            {PHRASES[index]}
          </span>
        </span>
        
      </p>

      {/* Component-scoped animation */}
      <style jsx>{`
        .rotate-word {
          animation: rotateUp 2s ease-in-out;
        }

        @keyframes rotateUp {
          0% {
            opacity: 0;
            transform: translateY(0.6em);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-0.4em);
          }
        }
      `}</style>
    </>
  );
}
