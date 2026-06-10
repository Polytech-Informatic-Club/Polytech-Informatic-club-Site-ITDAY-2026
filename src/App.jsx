import { useState, useEffect, useRef } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Marraine from './components/Marraine';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import { Mail, Shield, Code2, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Accueil', hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold', accent: 'green' },
  { id: 'bento', label: 'Thématiques', hoverColor: 'hover:text-neonPurple', activeColor: 'text-neonPurple font-bold', accent: 'purple' },
  { id: 'marraine', label: 'Marraine', hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold', accent: 'green' },
  { id: 'timeline', label: 'Chronogramme', hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold', accent: 'green' },
  { id: 'gallery', label: 'Souvenirs', hoverColor: 'hover:text-neonPurple', activeColor: 'text-neonPurple font-bold', accent: 'purple' },
  { id: 'partners', label: 'Partenaires', hoverColor: 'hover:text-neonBlue', activeColor: 'text-neonBlue font-bold', accent: 'blue' },
];

const accentBg = (accent) =>
  accent === 'purple' ? 'bg-neonPurple' : accent === 'blue' ? 'bg-neonBlue' : 'bg-neonGreen';

export default function App() {
  const timelineRef = useRef(null);
  const bentoRef = useRef(null);
  const marraineRef = useRef(null);
  const galleryRef = useRef(null);
  const partnersRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const refs = {
    home: null,
    bento: bentoRef,
    marraine: marraineRef,
    timeline: timelineRef,
    gallery: galleryRef,
    partners: partnersRef,
  };

  const scrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      refs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = [
      { id: 'bento', el: bentoRef.current },
      { id: 'marraine', el: marraineRef.current },
      { id: 'timeline', el: timelineRef.current },
      { id: 'gallery', el: galleryRef.current },
      { id: 'partners', el: partnersRef.current },
    ].filter((s) => s.el);

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = sections.find((s) => s.el === entry.target)?.id;
          if (!id) return;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        if (visible.size === 0) {
          setActiveSection((prev) => (prev !== 'home' ? 'home' : prev));
          return;
        }

        const order = ['bento', 'marraine', 'timeline', 'gallery', 'partners'];
        let best = 'home';
        let bestRatio = 0;
        for (const id of order) {
          const ratio = visible.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        setActiveSection((prev) => (prev !== best ? best : prev));
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 overflow-x-hidden font-sans">
      {/* 1. Immersive background light visual effects */}
      <BackgroundGlow />

      {/* 2. Floating modern Header Navbar (Glassmorphic on desktop, solid on mobile) */}
      <header className="fixed top-4 inset-x-4 max-w-6xl mx-auto h-16 rounded-2xl bg-white border border-slate-200/60 md:bg-white/75 md:backdrop-blur-xl px-6 sm:px-8 flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { scrollTo('home'); setIsMobileMenuOpen(false); }}>
          <Code2 className="w-5 h-5 text-neonGreen animate-pulse" />
          <span className="font-extrabold tracking-wider text-sm sm:text-base uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-neonGreen">
            IT DAY <span className="text-neonGreen">2026</span>
          </span>
        </div>

        {/* Navigation jump links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative py-1.5 transition-colors duration-300 ${
                  isActive ? item.activeColor : 'text-slate-500 ' + item.hoverColor
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${accentBg(item.accent)}`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* EPT/PIC label badge & Mobile menu trigger button */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/60 text-[10px] font-bold tracking-widest uppercase text-slate-600 select-none">
            <Globe className="w-3.5 h-3.5 text-neonBlue animate-spin [animation-duration:8s]" />
            <span>EPT Thiès</span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 z-40 lg:hidden rounded-2xl bg-white border border-slate-200/60 p-6 shadow-xl flex flex-col gap-4"
            style={{ top: '82px' }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full py-3 px-4 rounded-xl text-left text-sm font-semibold uppercase tracking-widest transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-100/80 text-slate-900 border-l-4 border-l-neonGreen pl-3'
                      : 'text-slate-500 hover:bg-slate-50/50 hover:text-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className={`w-1.5 h-1.5 rounded-full ${accentBg(item.accent)}`} />
                  )}
                </button>
              );
            })}

            {/* Mobile EPT Badge inside drawer */}
            <div className="flex sm:hidden items-center justify-center gap-2 mt-2 p-3 rounded-xl bg-slate-50/60 border border-slate-200/50 text-[10px] font-bold tracking-widest uppercase text-slate-600 select-none">
              <Globe className="w-4 h-4 text-neonBlue animate-spin [animation-duration:8s]" />
              <span>EPT Thiès</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main layout sections */}
      <main className="relative z-10">
        {/* Hero Section + Countdown */}
        <Hero onExploreClick={() => scrollTo('timeline')} />

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bento Grid: Speakers and Themes */}
        <div ref={bentoRef}>
          <BentoGrid />
        </div>

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Standalone Sponsoring Sponsoring presentation: Systalink */}
        <div ref={marraineRef}>
          <Marraine />
        </div>

        {/* Scroll-driven interactive chronogramme timeline */}
        <div ref={timelineRef}>
          <Timeline />
        </div>

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Souvenirs / Gallery of last year (2025) */}
        <div ref={galleryRef}>
          <Gallery />
        </div>

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Partners Marquees */}
        <div ref={partnersRef}>
          <Partners />
        </div>
      </main>

      {/* 4. Elegant Clean Light Footer */}
      <footer className="relative border-t border-slate-200/65 bg-slate-50/70 z-20 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Col 1: Branding info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-neonGreen" />
              <span className="font-extrabold tracking-wider uppercase text-sm sm:text-base text-slate-800">
                POLYTECH INFORMATIQUE CLUB
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Association d'étudiants ingénieurs en informatique de l'École Polytechnique de Thiès (EPT), engagés dans la promotion de l'innovation technologique et de l'IA en Afrique.
            </p>
          </div>

          {/* Col 2: Quick navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-neonBlue mb-5">
              Accès Rapide
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="hover:text-slate-800 transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contacts */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-neonPurple mb-5">
              Nous Contacter
            </h4>
            <p className="text-slate-500 text-xs font-light mb-4">
              Des questions ou une proposition de partenariat ? Écrivez-nous directement.
            </p>

            <a
              href="mailto:pic@ept.sn"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/60 hover:border-neonGreen/30 transition-all duration-300 shadow-sm group animate-pulse-slow"
            >
              <Mail className="w-4 h-4 text-neonGreen" />
              <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                pic@ept.sn
              </span>
            </a>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Polytech Informatique Club • Tous droits réservés.</span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-neonBlue" />
            <span>Souveraineté Numérique Africaine</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
