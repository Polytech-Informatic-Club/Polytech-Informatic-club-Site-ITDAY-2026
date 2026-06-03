import { useState, useEffect, useRef } from 'react';
import BackgroundGlow from './components/BackgroundGlow';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Marraine from './components/Marraine';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import { Mail, Shield, Send, Code2, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const timelineRef = useRef(null);
  const bentoRef = useRef(null);
  const marraineRef = useRef(null);
  const galleryRef = useRef(null);
  const partnersRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBento = () => {
    bentoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMarraine = () => {
    marraineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPartners = () => {
    partnersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      
      const bento = bentoRef.current?.offsetTop || 0;
      const marraine = marraineRef.current?.offsetTop || 0;
      const gallery = galleryRef.current?.offsetTop || 0;
      const timeline = timelineRef.current?.offsetTop || 0;
      const partners = partnersRef.current?.offsetTop || 0;

      let current = 'home';
      if (scrollPos >= partners) {
        current = 'partners';
      } else if (scrollPos >= timeline) {
        current = 'timeline';
      } else if (scrollPos >= gallery) {
        current = 'gallery';
      } else if (scrollPos >= marraine) {
        current = 'marraine';
      } else if (scrollPos >= bento) {
        current = 'bento';
      }

      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 overflow-x-hidden font-sans">
      {/* 1. Immersive background light visual effects */}
      <BackgroundGlow />

      {/* 2. Floating modern Glassmorphic Header Navbar */}
      <header className="fixed top-4 inset-x-4 max-w-6xl mx-auto h-16 rounded-2xl glass-header border-slate-200/50 px-6 sm:px-8 flex items-center justify-between z-50 shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}>
          <Code2 className="w-5 h-5 text-neonGreen animate-pulse" />
          <span className="font-extrabold tracking-wider text-sm sm:text-base uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-neonGreen">
            IT DAY <span className="text-neonGreen">2026</span>
          </span>
        </div>
        
        {/* Navigation jump links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
          {[
            { id: 'home', label: 'Accueil', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }), hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold' },
            { id: 'bento', label: 'Thématiques', action: scrollToBento, hoverColor: 'hover:text-neonPurple', activeColor: 'text-neonPurple font-bold' },
            { id: 'marraine', label: 'Marraine', action: scrollToMarraine, hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold' },
            { id: 'gallery', label: 'Souvenirs', action: scrollToGallery, hoverColor: 'hover:text-neonPurple', activeColor: 'text-neonPurple font-bold' },
            { id: 'timeline', label: 'Chronogramme', action: scrollToTimeline, hoverColor: 'hover:text-neonGreen', activeColor: 'text-neonGreen font-bold' },
            { id: 'partners', label: 'Partenaires', action: scrollToPartners, hoverColor: 'hover:text-neonBlue', activeColor: 'text-neonBlue font-bold' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className={`relative py-1.5 transition-colors duration-300 ${
                  isActive ? item.activeColor : 'text-slate-500 ' + item.hoverColor
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navbarActiveIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      item.id === 'bento' || item.id === 'gallery'
                        ? 'bg-neonPurple'
                        : item.id === 'partners'
                        ? 'bg-neonBlue'
                        : 'bg-neonGreen'
                    }`}
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
            className="fixed inset-x-4 z-40 lg:hidden rounded-2xl glass-header border-slate-200/50 p-6 shadow-xl flex flex-col gap-4 backdrop-blur-xl"
            style={{ top: '82px' }}
          >
            {[
              { id: 'home', label: 'Accueil', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }), hoverColor: 'hover:text-neonGreen' },
              { id: 'bento', label: 'Thématiques', action: scrollToBento, hoverColor: 'hover:text-neonPurple' },
              { id: 'marraine', label: 'Marraine', action: scrollToMarraine, hoverColor: 'hover:text-neonGreen' },
              { id: 'gallery', label: 'Souvenirs', action: scrollToGallery, hoverColor: 'hover:text-neonPurple' },
              { id: 'timeline', label: 'Chronogramme', action: scrollToTimeline, hoverColor: 'hover:text-neonGreen' },
              { id: 'partners', label: 'Partenaires', action: scrollToPartners, hoverColor: 'hover:text-neonBlue' },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
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
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      item.id === 'bento' || item.id === 'gallery'
                        ? 'bg-neonPurple'
                        : item.id === 'partners'
                        ? 'bg-neonBlue'
                        : 'bg-neonGreen'
                    }`} />
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
        <Hero onExploreClick={scrollToTimeline} />

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

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Souvenirs / Gallery of last year (2025) */}
        <div ref={galleryRef}>
          <Gallery />
        </div>

        {/* Separator line */}
        <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Scroll-driven interactive chronogramme timeline */}
        <div ref={timelineRef}>
          <Timeline />
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
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Haut de page
              </button>
              <button onClick={scrollToBento} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Speakers & Thématiques
              </button>
              <button onClick={scrollToMarraine} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Marraine Systalink
              </button>
              <button onClick={scrollToGallery} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Galerie Souvenirs
              </button>
              <button onClick={scrollToTimeline} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Chronogramme
              </button>
              <button onClick={scrollToPartners} className="hover:text-slate-800 transition-colors duration-300 text-left">
                Partenaires Officiels
              </button>
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
