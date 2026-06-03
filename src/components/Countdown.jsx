import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Separate animated single card component
const TimeCard = ({ value, label, neonColorClass = "group-hover:border-neonGreen/30 border-slate-200/50" }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center group">
      <div className={`relative glass-panel rounded-2xl w-16 h-20 sm:w-24 sm:h-28 flex items-center justify-center overflow-hidden border shadow-lg shadow-indigo-950/[0.03] transition-colors duration-500 ${neonColorClass}`}>
        
        {/* Subtle light reflect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-40 pointer-events-none" />
        
        {/* Vertical center fold line for realism */}
        <div className="absolute w-full h-[1px] bg-slate-200 top-1/2 left-0 z-10" />

        {/* Dynamic sliding digit transition */}
        <div className="relative h-12 sm:h-16 w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.span
              key={formattedValue}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute text-3xl sm:text-5xl font-extrabold font-mono tracking-wider text-slate-800"
            >
              {formattedValue}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Top/bottom edge reflections */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200/30 to-transparent" />
      </div>
      
      {/* Unit description label */}
      <span className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
};

export default function Countdown({ targetDate = "2027-04-12T08:30:00" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isCompleted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel border-neonGreen/30 rounded-3xl p-6 text-center max-w-md mx-auto shadow-md"
      >
        <span className="text-neonGreen text-xl font-bold uppercase tracking-wider block mb-1">
          L'Événement a commencé !
        </span>
        <p className="text-slate-500 text-sm">
          Rejoignez-nous en direct à l'École Polytechnique de Thiès.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex items-center gap-3 sm:gap-6 justify-center">
      <TimeCard value={timeLeft.days} label="Jours" neonColorClass="border-emerald-200/50 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/[0.02]" />
      
      <div className="text-2xl sm:text-4xl font-extrabold text-slate-300 pb-5 select-none">:</div>
      
      <TimeCard value={timeLeft.hours} label="Heures" neonColorClass="border-sky-200/50 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/[0.02]" />
      
      <div className="text-2xl sm:text-4xl font-extrabold text-slate-300 pb-5 select-none">:</div>
      
      <TimeCard value={timeLeft.minutes} label="Minutes" neonColorClass="border-violet-200/50 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/[0.02]" />
      
      <div className="text-2xl sm:text-4xl font-extrabold text-slate-300 pb-5 select-none">:</div>
      
      <TimeCard value={timeLeft.seconds} label="Secondes" neonColorClass="border-emerald-200/50 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/[0.02]" />
    </div>
  );
}
