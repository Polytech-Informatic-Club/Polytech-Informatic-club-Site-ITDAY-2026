import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, MapPin, Award, BookOpen, Users, Compass, CheckCircle } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 1,
    time: "08h30 - 09h00",
    title: "Accueil et installation",
    category: "accueil",
    icon: Compass,
    image: "/photos_site_selectionnees/c1.jpg",
    details: "Mise en place des invités, des élèves-ingénieurs, des enseignants-chercheurs, des partenaires et des membres du jury au niveau du hall principal."
  },
  {
    id: 2,
    time: "09h00 - 09h45",
    title: "Ouverture institutionnelle",
    category: "accueil",
    icon: Users,
    image: "/photos_site_selectionnees/c2.jpg",
    details: "Série d'allocutions protocolaires de la Direction de l'école, du Chef de département GIT, et du bureau du Polytech Informatique Club.",
    speakers: [
      { name: "Pr Mamadou Wade", role: "Directeur de l'École Polytechnique de Thiès (EPT)" },
      { name: "Pr Mamadou Diallo Diouf", role: "Chef du département Génie Informatique & Télécommunications (GIT)" },
      { name: "Murtada Kamara", role: "Président du Bureau Des Élèves (BDE)" },
      { name: "Algassimou BAH", role: "Président du Polytech Informatique Club (PIC)" }
    ]
  },
  {
    id: 3,
    time: "09h45 - 10h15",
    title: "Formation en alternance du GIT",
    category: "tech",
    icon: BookOpen,
    image: "/photos_site_selectionnees/c3.jpg",
    details: "Présentation détaillée du modèle de formation en alternance pionnier du département GIT, de ses apports pédagogiques et de son impact sur l'employabilité.",
    speakers: [
      { name: "M. Guisse", role: "Directeur des études, EPT" }
    ]
  },
  {
    id: 4,
    time: "10h15 - 11h00",
    title: "Présentation de SYSTALINK",
    category: "tech",
    icon: Award,
    image: "/photos_site_selectionnees/c4.webp",
    details: "Présentation de l'entreprise marraine SYSTALINK, de son infrastructure de cloud souverain, de son expertise en cybersécurité et des opportunités de collaboration avec le GIT.",
    speakers: [
      { name: "Yonas Palomino", role: "Président Directeur Général, Systalink" }
    ]
  },
  {
    id: 5,
    time: "11h00 - 11h30",
    title: "Projets de recherche GIT",
    category: "tech",
    icon: BookOpen,
    image: "/photos_site_selectionnees/c5.jpg",
    details: "Valorisation académique des projets de recherche appliquée, d'IA et d'innovation technologique portés par les enseignants-chercheurs du département GIT.",
    speakers: [
      { name: "Enseignants-chercheurs", role: "Département GIT, EPT" }
    ]
  },
  {
    id: 6,
    time: "11h30 - 12h30",
    title: "Pitchs Hackathon",
    category: "hackathon",
    icon: Award,
    image: "/photos_site_selectionnees/c6.jpg",
    details: "Démonstrations et présentations flash des projets finalistes du Hackathon IT DAY Hack 2026 devant le jury d'évaluation d'experts.",
  },
  {
    id: 7,
    time: "12h30 - 13h30",
    title: "Panel thématique",
    category: "tech",
    icon: Users,
    image: "/photos_site_selectionnees/c7.jpg",
    details: "Discussion ouverte autour du thème : 'Le futur du travail et l'intelligence artificielle : compétences, productivité et nouveaux modèles de collaboration'.",
    speakers: [
      { 
        name: "Pr Oumar NIANG", 
        role: "Enseignant-chercheur, EPT",
        initials: "ON",
        photo: "/photos_site_selectionnees/panelist_oumar_niang.jpg"
      },
      { 
        name: "Pr Abdou Aziz CISS", 
        role: "Enseignant-chercheur EPT",
        initials: "AC",
        photo: "/photos_site_selectionnees/panelist_abdou_aziz_ciss.png"
      },
      { 
        name: "Pr Ndiaye DIA", 
        role: "Head of Data - Analytics & AI ｜ Dakar 2026",
        initials: "ND",
        photo: "/photos_site_selectionnees/panelist_ndiaye_dia.jpeg"
      },
      { 
        name: "M. Mohamed TALL", 
        role: "Ingénieur IA chez Systalink",
        initials: "MT",
        photo: "/photos_site_selectionnees/panelist_mohamed_tall.jpg"
      }
    ],
    moderator: {
      name: "Mme Fama SARR",
      role: "Modératrice",
      initials: "FS",
      photo: "/photos_site_selectionnees/panelist_fama_sarr.jpeg"
    }
  },
  {
    id: 8,
    time: "13h30 - 14h00",
    title: "Remise des prix & Clôture",
    category: "hackathon",
    icon: Award,
    image: "/photos_site_selectionnees/c8.jpg",
    details: "Annonce officielle des lauréats du Hackathon, remise des récompenses aux équipes gagnantes et cadeaux aux invités d'honneur."
  },
  {
    id: 9,
    time: "14h00",
    title: "Déjeuner officiel & Réseautage",
    category: "accueil",
    icon: CheckCircle,
    image: "/photos_site_selectionnees/chronogramme_9_dejeuner.jpg",
    details: "Banquet et moment de convivialité au restaurant SAES / Restaurant GIT, favorisant le réseautage et les échanges avec les entreprises partenaires."
  }
];

const CATEGORIES = [
  { id: 'all', name: 'Tout le Programme' },
  { id: 'accueil', name: 'Cérémonies & Accueil' },
  { id: 'tech', name: 'Conférences & Panels' },
  { id: 'hackathon', name: 'Hackathon & Prix' }
];

export default function Timeline() {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);

  // Scroll-driven line fill computation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const filteredEvents = activeCategory === 'all'
    ? EVENTS_DATA
    : EVENTS_DATA.filter(event => event.category === activeCategory);

  return (
    <section ref={containerRef} className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Chronogramme
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light">
          Filtrez les étapes clés de la journée et suivez en images le déroulement de notre programme.
        </p>
      </div>

      {/* Tabs Filter Container */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 z-10 focus:outline-none"
              style={{
                color: isActive ? '#FFFFFF' : '#64748B'
              }}
            >
              {/* Active Slide highlight using layoutId */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neonGreen rounded-full -z-10 shadow-md shadow-emerald-600/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative">
        
        {/* Neon central line path (base light track) */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-slate-200/80 -translate-x-[1px]" />

        {/* Luminous dynamic scale line filling up as we scroll */}
        <motion.div 
          className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-neonGreen via-neonBlue to-neonPurple origin-top hidden md:block"
          style={{ scaleY: lineScaleY, x: -1 }}
        />

        {/* Timeline Events List */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => {
              const IconComponent = event.icon;
              // Alternate alignments (left/right on sm screens, left-aligned on mobile)
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100, 
                    damping: 20
                  }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative w-full ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Neon Dot indicator in the center track */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full glass-panel border-slate-200/50 flex items-center justify-center -translate-x-1/2 z-20 bg-[#F8FAFC] shadow-sm transition-all duration-300 hover:border-neonGreen/40">
                    <IconComponent className="w-3.5 h-3.5 text-neonGreen" />
                  </div>

                  {/* Left Column Spacer / Time Block */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12 flex ${
                    isEven ? 'sm:justify-start' : 'sm:justify-end'
                  } mb-2 sm:mb-0`}>
                    <div 
                      className="flex items-center gap-2 text-neonBlue text-sm sm:text-base font-bold bg-sky-50 border border-sky-100 px-3 py-1 rounded-lg shadow-sm"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Right Column / Actual Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12">
                    <div
                      className="glass-panel border-slate-200/40 rounded-3xl overflow-hidden hover:border-neonGreen/30 hover:shadow-xl hover:shadow-indigo-950/[0.02] transition-[border-color,box-shadow,background-color] duration-300 relative group shadow-md shadow-indigo-950/[0.015]"
                    >
                      {/* Split card structure with visual and text elements */}
                      <div className="flex flex-col md:flex-row">
                        
                        {/* Event Photo block */}
                        {event.image && (
                          <div className="md:w-[35%] relative h-44 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-slate-200/40">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            {/* Visual shine mask */}
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-indigo-950/[0.005] to-transparent pointer-events-none" />
                          </div>
                        )}

                        {/* Event content details block */}
                        <div className={`p-6 ${event.image ? 'md:w-[65%]' : 'w-full'} flex flex-col justify-between`}>
                          <div>
                            {/* Interactive top light line */}
                            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-neonGreen/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <h4 className="text-base sm:text-lg font-extrabold text-slate-800 mb-2.5 group-hover:text-neonGreen transition-colors duration-300">
                              {event.title}
                            </h4>
                            
                            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-4">
                              {event.details}
                            </p>
                          </div>

                          {/* Display speakers list if present */}
                          {event.speakers && (
                            <div className="border-t border-slate-100 pt-3 mt-1 space-y-2">
                              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block mb-2">
                                Intervenants
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {event.speakers.map((speaker, sIdx) => (
                                  <div key={sIdx} className="flex items-center gap-3">
                                    {speaker.initials || speaker.photo ? (
                                      <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-slate-100 to-indigo-50 border border-slate-200/60 flex items-center justify-center shadow-inner">
                                        {speaker.initials && (
                                          <span className="text-[10px] font-extrabold text-slate-500 tracking-wider">
                                            {speaker.initials}
                                          </span>
                                        )}
                                        {speaker.photo && (
                                          <img
                                            src={speaker.photo}
                                            alt={speaker.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={(e) => {
                                              e.target.style.display = 'none';
                                            }}
                                          />
                                        )}
                                      </div>
                                    ) : (
                                      <div className="w-1.5 h-1.5 rounded-full bg-neonGreen flex-shrink-0" />
                                    )}
                                    <div className="flex flex-col min-w-0">
                                      <span className="text-xs font-bold text-slate-700 truncate leading-snug">{speaker.name}</span>
                                      <span className="text-[10px] text-slate-400 font-light truncate leading-none mt-0.5">{speaker.role}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Displays panelist / moderator specific sections */}
                          {event.moderator && (
                            <div className="border-t border-slate-100 pt-3 mt-3">
                              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block mb-2">
                                Modérateur
                              </span>
                              {typeof event.moderator === 'object' ? (
                                <div className="flex items-center gap-3">
                                  <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-slate-100 to-indigo-50 border border-slate-200/60 flex items-center justify-center shadow-inner">
                                    {event.moderator.initials && (
                                      <span className="text-[10px] font-extrabold text-slate-500 tracking-wider">
                                        {event.moderator.initials}
                                      </span>
                                    )}
                                    {event.moderator.photo && (
                                      <img
                                        src={event.moderator.photo}
                                        alt={event.moderator.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        onError={(e) => {
                                          e.target.style.display = 'none';
                                        }}
                                      />
                                    )}
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-bold text-neonBlue truncate leading-snug">{event.moderator.name}</span>
                                    <span className="text-[10px] text-slate-400 font-light truncate leading-none mt-0.5">{event.moderator.role}</span>
                                  </div>
                                </div>
                              ) : (
                                <span className="text-xs font-bold text-neonBlue">{event.moderator}</span>
                              )}
                            </div>
                          )}
                        </div>

                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
