import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Sparkles, Pin, Bookmark, Star } from 'lucide-react';

const PHOTOS_DATA = [
  { 
    id: 1, 
    src: "/photos_site_selectionnees/IMG_9105.jpg", 
    category: "Accueil",
    title: "Accueil des participants", 
    story: "Dès 8h15, l'équipe organisatrice du PIC s'est mobilisée à l'auditorium de l'EPT pour accueillir les premiers invités, finaliser les badges et préparer les derniers détails techniques.",
    shapeClass: "rounded-[40%_60%_70%_30%_/_40%_40%_60%_50%]",
    rotateClass: "-rotate-3 group-hover:rotate-0",
    borderColorClass: "border-emerald-300",
    sticker: <Pin className="w-5 h-5 text-emerald-500 -rotate-45" />
  },
  { 
    id: 2, 
    src: "/photos_site_selectionnees/IMG_9109.jpg", 
    category: "Cérémonie",
    title: "Cérémonie d'ouverture", 
    story: "L'amphithéâtre de l'EPT était plein pour le lancement officiel de la journée. Les discours de la direction de l'école et du chef de département ont rappelé l'importance de l'innovation numérique en Afrique.",
    shapeClass: "rounded-t-[120px] rounded-b-[25px]",
    rotateClass: "rotate-2 group-hover:rotate-0",
    borderColorClass: "border-sky-300",
    sticker: <Bookmark className="w-5 h-5 text-sky-500" />
  },
  { 
    id: 3, 
    src: "/photos_site_selectionnees/IMG_9116.jpg", 
    category: "Immersion",
    title: "Échanges et opportunités", 
    story: "Les pauses et moments de pause ont permis aux étudiants de discuter directement avec les enseignants et les partenaires de l'industrie pour aborder les opportunités de stages et d'alternances.",
    shapeClass: "rounded-[100px_30px_100px_30px]",
    rotateClass: "-rotate-2 group-hover:rotate-0",
    borderColorClass: "border-indigo-300",
    sticker: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
  },
  { 
    id: 4, 
    src: "/photos_site_selectionnees/IMG_9120.jpg", 
    category: "Partenariat",
    title: "Présentation des partenaires", 
    story: "Sur le stand d'InTouch, les étudiants ont pu découvrir les technologies d'agrégation de paiement utilisées par la fintech en Afrique et échanger sur les métiers du secteur.",
    shapeClass: "rounded-[20px_100px_20px_100px]",
    rotateClass: "rotate-3 group-hover:rotate-0",
    borderColorClass: "border-emerald-300",
    sticker: <Pin className="w-5 h-5 text-neonGreen -rotate-45" />
  },
  { 
    id: 5, 
    src: "/photos_site_selectionnees/IMG_9127.jpg", 
    category: "Hackathon",
    title: "Pitchs du Hackathon", 
    story: "Les équipes finalistes ont présenté leurs projets devant le jury. Chaque groupe disposait de 3 minutes pour faire sa démonstration technique et convaincre les experts.",
    shapeClass: "rounded-[100px_20px_100px_20px]",
    rotateClass: "-rotate-2 group-hover:rotate-0",
    borderColorClass: "border-sky-300",
    sticker: <Bookmark className="w-5 h-5 text-indigo-500" />
  },
  { 
    id: 6, 
    src: "/photos_site_selectionnees/IMG_9130.jpg", 
    category: "R&D",
    title: "Valorisation de la R&D", 
    story: "Présentation de projets de recherche innovants, comme Sunuchat, un modèle d'IA développé pour le traitement des langues locales (Wolof et Sérère).",
    shapeClass: "rounded-[30%_70%_40%_60%_/_50%_60%_40%_50%]",
    rotateClass: "rotate-2 group-hover:rotate-0",
    borderColorClass: "border-indigo-300",
    sticker: <Star className="w-5 h-5 text-amber-500 fill-amber-500 animate-pulse" />
  },
  { 
    id: 7, 
    src: "/photos_site_selectionnees/IMG_9145.jpg", 
    category: "Débats",
    title: "Panel thématique", 
    story: "Un débat constructif sur la souveraineté numérique en Afrique. Les intervenants ont souligné l'importance pour notre continent de concevoir ses propres solutions technologiques.",
    shapeClass: "rounded-b-[120px] rounded-t-[25px]",
    rotateClass: "-rotate-3 group-hover:rotate-0",
    borderColorClass: "border-emerald-300",
    sticker: <Pin className="w-5 h-5 text-emerald-500 -rotate-12" />
  },
  { 
    id: 8, 
    src: "/photos_site_selectionnees/IMG_9150.jpg", 
    category: "Hackathon",
    title: "Remise des prix", 
    story: "Après 24 heures de développement intensif, l'annonce des vainqueurs du Hackathon a récompensé les projets les plus créatifs et viables techniquement.",
    shapeClass: "rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%]",
    rotateClass: "rotate-2 group-hover:rotate-0",
    borderColorClass: "border-sky-300",
    sticker: <Star className="w-5 h-5 text-sky-400 fill-sky-400" />
  },
  { 
    id: 9, 
    src: "/photos_site_selectionnees/IMG_9163.jpg", 
    category: "Réseautage",
    title: "Networking & Réseautage", 
    story: "Le cocktail de networking a facilité les contacts directs entre les étudiants et les professionnels présents, favorisant l'insertion professionnelle de nos futurs diplômés.",
    shapeClass: "rounded-[80px_80px_20px_20px]",
    rotateClass: "-rotate-2 group-hover:rotate-0",
    borderColorClass: "border-indigo-300",
    sticker: <Pin className="w-5 h-5 text-indigo-400 -rotate-45" />
  },
  { 
    id: 10, 
    src: "/photos_site_selectionnees/IMG_9173.jpg", 
    category: "Clôture",
    title: "L'équipe organisatrice", 
    story: "Photo de groupe de l'équipe du Polytech Informatique Club (PIC) à la fin de cette journée. Une belle réussite collective fruit de plusieurs mois de travail.",
    shapeClass: "rounded-[20px_20px_80px_80px]",
    rotateClass: "rotate-3 group-hover:rotate-0",
    borderColorClass: "border-emerald-300",
    sticker: <Bookmark className="w-5 h-5 text-emerald-500" />
  },
  { 
    id: 11, 
    src: "/photos_site_selectionnees/IMG_9214.jpg", 
    category: "Banquet",
    title: "Déjeuner officiel", 
    story: "Un moment de détente et de partage au restaurant universitaire, permettant de poursuivre les discussions de la matinée dans un cadre convivial.",
    shapeClass: "rounded-[70%_30%_50%_50%_/_50%_50%_50%_50%]",
    rotateClass: "-rotate-2 group-hover:rotate-0",
    borderColorClass: "border-sky-300",
    sticker: <Star className="w-5 h-5 text-amber-400 fill-amber-400 animate-spin [animation-duration:15s]" />
  },
  { 
    id: 12, 
    src: "/photos_site_selectionnees/IMG_9242.jpg", 
    category: "Élites",
    title: "Les étudiants du GIT", 
    story: "Les élèves-ingénieurs du département GIT réunis pour l'événement. Ils représentent les futurs talents du numérique formés à l'EPT Thiès.",
    shapeClass: "rounded-[40px_40px_40px_40px]",
    rotateClass: "rotate-2 group-hover:rotate-0",
    borderColorClass: "border-indigo-300",
    sticker: <Pin className="w-5 h-5 text-sky-500 -rotate-12" />
  }
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    setHasHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  const handleShowToggle = () => {
    if (visibleCount >= PHOTOS_DATA.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(PHOTOS_DATA.length);
    }
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-24">
        <span className="flex items-center justify-center gap-2 text-xs font-bold text-neonPurple tracking-widest uppercase mb-3">
          <Camera className="w-4 h-4" />
          Rétrospective
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Retour en <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonPurple to-neonBlue">Images</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light">
          Revivez les moments forts et découvrez les coulisses de l'édition précédente.
        </p>
      </div>

      {/* Succession Staggered Collage Layout */}
      <div className="space-y-24 sm:space-y-32 relative">
        
        {/* Fine vertical dashed line through the middle (visual timeline connector) */}
        <div className="absolute left-1/2 top-10 bottom-10 w-[1px] border-l border-dashed border-slate-200 -translate-x-1/2 z-0 hidden md:block" />

        <AnimatePresence>
          {PHOTOS_DATA.slice(0, visibleCount).map((photo, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16 lg:gap-24 relative`}
              >
                
                {/* SVG Curve Connector (desktop only) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-44 h-20 z-0 ${
                  isEven ? 'left-[42%]' : 'right-[42%]'
                }`}>
                  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-200">
                    <path 
                      d={isEven ? "M10 10 C 50 40, 80 40, 90 25" : "M90 10 C 50 40, 20 40, 10 25"} 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />
                    <circle cx={isEven ? "90" : "10"} cy="25" r="3.5" fill="currentColor" className="text-neonPurple/40" />
                  </svg>
                </div>

                {/* Left/Right Column: Organic Photo Sticker Frame */}
                <div className="w-full md:w-1/2 flex justify-center z-10">
                  <div className="relative group">
                    
                    {/* Floating Canva sticker decal */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-md select-none transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                      {photo.sticker}
                    </div>

                    {/* Image Container with Organic Border Radius and white paper contours */}
                    <motion.div 
                      whileHover={hasHover ? { scale: 1.03, rotate: 0 } : {}}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`p-3 bg-white border border-slate-200/50 shadow-xl shadow-slate-900/[0.04] transition-[border-color,box-shadow,background-color] duration-500 ${photo.shapeClass} ${photo.rotateClass.split(' ')[0]}`}
                    >
                      <div className={`relative overflow-hidden aspect-[4/3] ${photo.shapeClass} w-[280px] sm:w-[325px]`}>
                        <img 
                          src={photo.src} 
                          alt={photo.title}
                          className="w-full h-full object-cover filter brightness-[0.98] md:group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Left/Right Column: Text Caption (positioned completely outside the photo frame) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10 px-4">
                  <div className="max-w-md mx-auto md:mx-0 flex flex-col items-center md:items-start">
                    
                    {/* Category Label Tag */}
                    <span className="flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-neonPurple mb-3 bg-purple-50 border border-purple-100/60 px-3.5 py-1 rounded-full shadow-2xs">
                      <Sparkles className="w-3 h-3 text-neonPurple" />
                      {photo.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-3 tracking-tight">
                      {photo.title}
                    </h3>

                    {/* Petite Histoire description */}
                    <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {photo.story}
                    </p>

                    {/* Location detail */}
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-neonBlue shrink-0" />
                      <span>Thiès, EPT • IT DAY 2025</span>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Gallery Expand Button */}
      <div className="text-center mt-16">
        <button
          onClick={handleShowToggle}
          className="px-6 py-3 rounded-full font-bold glass-panel border-slate-200/60 text-slate-700 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm"
        >
          {visibleCount >= PHOTOS_DATA.length ? "Voir moins de photos" : "Afficher plus de photos"}
        </button>
      </div>

    </section>
  );
}
