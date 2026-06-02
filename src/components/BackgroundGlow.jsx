import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BackgroundGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 200); // Offset by half of glow width (400px)
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Ambient Light Base Layer */}
      <div className="absolute inset-0 bg-[#F8FAFC] z-0" />

      {/* Cyber Grid Lines (subtle slate lines) */}
      <div className="absolute inset-0 cyber-grid opacity-50 z-0" />
      <div className="absolute inset-0 cyber-grid-fine opacity-30 z-0" />

      {/* Interactive Cursor Spotlight - Soft indigo/mint halo */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] bg-gradient-to-r from-neonGreen-muted via-indigo-400 to-neonBlue-muted pointer-events-none"
        style={{
          left: glowX,
          top: glowY,
        }}
      />

      {/* Floating Organic Blob 1 - Soft Emerald (Growth/Africa) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.05] bg-emerald-300 top-[-10%] left-[-10%]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Organic Blob 2 - Soft Lavender/Tech Violet */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.05] bg-violet-200 bottom-[-15%] right-[-10%]"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle Radial Vignette overlay to anchor the page */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(248,250,252,0.6)_95%)] z-0" />
    </div>
  );
}
