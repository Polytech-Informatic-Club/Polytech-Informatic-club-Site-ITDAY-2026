import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { Calendar, MapPin, Sparkles, ChevronDown, Camera } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Configured target date for IT DAY 2026 (June 24, 2026 at 09h00)
  const targetEventDate = "2026-06-24T09:00:00";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 z-10 max-w-6xl mx-auto">
      
      {/* Upper Grid Layout split on large screens */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
        
        {/* Left Side: Headlines & Action Buttons (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
          
          {/* Upper Badge EPT / PIC */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-slate-200/60 text-xs font-semibold tracking-wide text-slate-600 mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-neonGreen animate-pulse" />
            <span>POLYTECH INFORMATIQUE CLUB (PIC) • EPT THIÈS</span>
          </motion.div>

          {/* Main EPT and PIC logo headers side-by-side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-neonBlue/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/img/ept.png" 
                alt="Logo EPT" 
                className="w-12 h-12 rounded-full object-cover border border-slate-200/50 relative z-10 glass-panel bg-white/60 p-0.5 shadow-sm"
              />
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div className="relative group">
              <div className="absolute inset-0 bg-neonGreen/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/img/pic.jpg" 
                alt="Logo PIC" 
                className="w-12 h-12 rounded-full object-cover border border-slate-200/50 relative z-10 glass-panel bg-white/60 p-0.5 shadow-sm"
              />
            </div>
            <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
              École Polytechnique de Thiès
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-slate-900"
          >
            IT DAY <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonGreen via-neonBlue to-neonPurple">2026</span>
          </motion.h1>

          {/* Dynamic Theme Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-lg sm:text-2xl font-bold tracking-wide text-slate-700 uppercase">
              Le futur du travail et l'intelligence artificielle :
            </p>
            <p className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-neonBlue mt-1">
              compétences, productivité et nouveaux modèles de collaboration
            </p>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl font-light leading-relaxed">
              Explorez l'évolution des compétences de l'ingénieur, l'impact sur l'organisation du travail et les opportunités d'innovation souveraine lors de cette journée d'échange exceptionnelle portée par les élites de l'EPT.
            </p>
          </motion.div>

          {/* Info Grid (Date and Venue) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 text-xs sm:text-sm text-slate-700 font-medium font-sans"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/40 border border-slate-200/50 shadow-sm">
              <Calendar className="w-4 h-4 text-neonGreen" />
              <span>Mercredi 24 Juin 2026 à 09h00</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/40 border border-slate-200/50 shadow-sm">
              <MapPin className="w-4 h-4 text-neonBlue" />
              <span>Auditorium de l'EPT</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full sm:w-auto"
          >
            <button 
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-neonGreen hover:bg-neonGreen/90 text-white hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-2"
            >
              Explorer le programme
            </button>
          </motion.div>
        </div>

        {/* Right Side: Ticking Countdown Card & Dynamic Polaroid Stack (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center gap-10 w-full">
          
          {/* Layered Polaroid Cards Stack - WOW Factor displaying EPT student life */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-[320px] sm:max-w-[360px] h-[260px] sm:h-[300px] flex items-center justify-center select-none"
          >
            {/* Back Polaroid Card (IMG_9173 Clôture - rotated left) */}
            <motion.div 
              animate={{ x: -48, y: -8, rotate: -8, scale: 0.93 }}
              whileHover={hasHover ? { x: -48, y: -8, rotate: -2, scale: 1, zIndex: 40 } : {}}
              className="absolute w-[180px] h-[220px] sm:w-[200px] sm:h-[250px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/40 p-2 bg-white transition-shadow"
            >
              <img src="/photos_site_selectionnees/hero_polaroid_derriere.jpg" className="w-full h-[78%] object-cover rounded-xl" loading="eager" fetchpriority="high" width="200" height="195" alt="Souvenir IT DAY 2025" />
              <div className="flex items-center justify-center gap-1 mt-2 text-slate-500">
                <Camera className="w-3 h-3 text-neonPurple" />
                <span className="text-[9px] font-bold uppercase tracking-widest font-sans">PIC 2025</span>
              </div>
            </motion.div>
            
            {/* Front Polaroid Card (IMG_9242 Élites EPT - rotated right) */}
            <motion.div 
              animate={{ x: 48, y: 8, rotate: 6, scale: 1 }}
              whileHover={hasHover ? { x: 48, y: 8, rotate: 1, scale: 1.05, zIndex: 40 } : {}}
              className="absolute w-[190px] h-[230px] sm:w-[210px] sm:h-[260px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/50 p-2 bg-white z-20 transition-shadow"
            >
              <img src="/photos_site_selectionnees/hero_polaroid_devant.jpg" className="w-full h-[78%] object-cover rounded-xl" loading="eager" fetchpriority="high" width="210" height="203" alt="Élites EPT - IT DAY 2025" />
              <div className="flex items-center justify-center gap-1 mt-2 text-slate-700">
                <Camera className="w-3 h-3 text-neonGreen" />
                <span className="text-[9px] font-bold uppercase tracking-widest font-sans">Élites EPT</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Countdown Timer glass card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.6 }}
            className="w-full max-w-sm px-5 py-6 rounded-3xl glass-panel relative border-slate-200/50 shadow-xl shadow-indigo-950/[0.015]"
          >
            {/* Subtle light glowing light inside glass countdown */}
            <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-1/2 h-1/3 bg-emerald-500/5 blur-2xl rounded-full pointer-events-none" />
            
            <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neonGreen animate-ping" />
              Lancement de l'IT DAY 2026
            </h3>
            
            <Countdown targetDate={targetEventDate} />
          </motion.div>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={onExploreClick}
        className="absolute bottom-4 cursor-pointer flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors duration-300 hidden lg:flex"
      >
        <span className="text-[9px] uppercase tracking-widest font-bold">Défiler</span>
        <ChevronDown className="w-3 h-3 text-neonGreen" />
      </motion.div>
    </section>
  );
}
