"use client";

import { useEffect, useRef } from "react";

/**
 * CinematicGrain
 *
 * Replaces the old GrainOverlay. Uses an animated canvas for living,
 * flickering film grain — the kind that breathes rather than sits still.
 * Opacity is cranked up to actually be felt.
 */
export default function CinematicGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      // Use reduced resolution for perf — grain doesn't need to be sharp
      canvas.width = Math.round(w * 0.6);
      canvas.height = Math.round(h * 0.6);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Random luminance per pixel
        const v = (Math.random() * 255) | 0;
        data[i] = v;       // R
        data[i + 1] = v;   // G
        data[i + 2] = v;   // B
        // Alpha: keep grain sparse and punchy
        data[i + 3] = (Math.random() * 38) | 0;
      }

      ctx.putImageData(imageData, 0, 0);
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{
        mixBlendMode: "overlay",
        opacity: 0.18,
        // Scale up from reduced resolution — adds softness
        imageRendering: "pixelated",
      }}
    />
  );
}