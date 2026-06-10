import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Ambient Light Base Layer */}
      <div className="absolute inset-0 bg-[#F8FAFC] z-0" />

      {/* Cyber Grid Lines (subtle slate lines) */}
      <div className="absolute inset-0 cyber-grid opacity-0 sm:opacity-50 z-0" />
      <div className="absolute inset-0 cyber-grid-fine opacity-0 sm:opacity-30 z-0" />

      {/* Floating Organic Blob 1 - Static Soft Emerald */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.04] bg-emerald-300 top-[-10%] left-[-10%] hidden sm:block transform-gpu" />

      {/* Floating Organic Blob 2 - Static Soft Tech Violet */}
      <div className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.04] bg-violet-200 bottom-[-15%] right-[-10%] hidden sm:block transform-gpu" />

      {/* Subtle Radial Vignette overlay to anchor the page */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(248,250,252,0.6)_95%)] z-0" />
    </div>
  );
}
