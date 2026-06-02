import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

const PHOTOS_DATA = [
  { id: 1, src: "/photos_site_selectionnees/IMG_9105.jpg", title: "Accueil & Enregistrement", desc: "Mise en place de la journée et accueil des premiers officiels." },
  { id: 2, src: "/photos_site_selectionnees/IMG_9109.jpg", title: "Cérémonie d'Ouverture", desc: "Allocution d'ouverture devant l'amphithéâtre de l'EPT." },
  { id: 3, src: "/photos_site_selectionnees/IMG_9116.jpg", title: "Partenariat EPT / GIT", desc: "Discussions et partages d'expériences sur la formation en alternance." },
  { id: 4, src: "/photos_site_selectionnees/IMG_9120.jpg", title: "Présentation InTouch", desc: "Échanges interactifs sur les innovations Fintech d'InTouch." },
  { id: 5, src: "/photos_site_selectionnees/IMG_9127.jpg", title: "Pitch Hackathon", desc: "Les équipes présentent leurs prototypes innovants devant le jury." },
  { id: 6, src: "/photos_site_selectionnees/IMG_9130.jpg", title: "Projet Sunuchat", desc: "Démonstrations en direct du modèle R&D de traitement des langues locales." },
  { id: 7, src: "/photos_site_selectionnees/IMG_9145.jpg", title: "Panel Débats", desc: "Échanges passionnants sur la souveraineté numérique en Afrique." },
  { id: 8, src: "/photos_site_selectionnees/IMG_9150.jpg", title: "Lauréats Hackathon", desc: "Remise des prix aux étudiants lauréats pour leurs solutions technologiques." },
  { id: 9, src: "/photos_site_selectionnees/IMG_9163.jpg", title: "Réseautage EPT", desc: "Échanges conviviaux entre étudiants, diplômés et cadres d'entreprises." },
  { id: 10, src: "/photos_site_selectionnees/IMG_9173.jpg", title: "Clôture de l'Édition", desc: "Photo de famille du bureau PIC et des marraines de la promotion." },
  { id: 11, src: "/photos_site_selectionnees/IMG_9214.jpg", title: "Banquet Réseautage", desc: "Déjeuner officiel et poursuite des échanges au restaurant SAES." },
  { id: 12, src: "/photos_site_selectionnees/IMG_9242.jpg", title: "Élites Polytech", desc: "Ingénieurs EPT réunis pour célébrer l'innovation et l'excellence numérique." }
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowToggle = () => {
    if (visibleCount >= PHOTOS_DATA.length) {
      setVisibleCount(6);
    } else {
      setVisibleCount(PHOTOS_DATA.length);
    }
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-16">
        <span className="flex items-center justify-center gap-2 text-xs font-bold text-neonPurple tracking-widest uppercase mb-3">
          <Camera className="w-4 h-4" />
          Retour en Images
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Souvenirs de l'édition <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonPurple to-neonBlue">2025</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light">
          Revivez les moments forts de l'année précédente : pitchs enflammés, panels captivants et synergie étudiants-partenaires.
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <motion.div 
        layout="position"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {PHOTOS_DATA.slice(0, visibleCount).map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="glass-panel border-slate-200/40 rounded-3xl overflow-hidden group shadow-md shadow-indigo-950/[0.015] hover:shadow-xl hover:shadow-indigo-950/[0.03] transition-all duration-500 relative aspect-[4/3] glowing-border"
            >
              {/* Photo Image asset */}
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98]"
                loading="lazy"
              />

              {/* Glassmorphic Hover Info Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20 backdrop-blur-[2px]">
                <h3 className="text-white text-base sm:text-lg font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.title}
                </h3>
                <p className="text-white/80 text-xs font-light mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {photo.desc}
                </p>
              </div>

              {/* Edge shine lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Gallery Expand Button */}
      <motion.div 
        layout="position"
        className="text-center mt-12"
      >
        <button
          onClick={handleShowToggle}
          className="px-6 py-3 rounded-full font-bold glass-panel border-slate-200/60 text-slate-700 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm"
        >
          {visibleCount >= PHOTOS_DATA.length ? "Voir moins de photos" : "Afficher plus de photos"}
        </button>
      </motion.div>



    </section>
  );
}
