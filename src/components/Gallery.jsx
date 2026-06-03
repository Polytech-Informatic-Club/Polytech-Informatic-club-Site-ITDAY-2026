import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin } from 'lucide-react';

const PHOTOS_DATA = [
  { 
    id: 1, 
    src: "/photos_site_selectionnees/IMG_9105.jpg", 
    category: "Accueil",
    title: "Le Calme avant l'Effervescence", 
    story: "08h15, le soleil se lève doucement sur l'auditorium de l'EPT. Les premiers thermos de café chaud arrivent alors que les membres du PIC peaufinent les badges et testent les micros. C'est l'instant suspendu où toute l'organisation se met en marche." 
  },
  { 
    id: 2, 
    src: "/photos_site_selectionnees/IMG_9109.jpg", 
    category: "Cérémonie",
    title: "Le Signal du Départ", 
    story: "L'amphithéâtre affiche complet pour le début des allocutions. Sous les projecteurs, les interventions protocolaires se succèdent. Les mots inspirants de la Direction résonnent comme un appel à relever le défi de la souveraineté technologique." 
  },
  { 
    id: 3, 
    src: "/photos_site_selectionnees/IMG_9116.jpg", 
    category: "Immersion",
    title: "Dialogue d'Avenir", 
    story: "Dans les couloirs, les discussions s'animent entre enseignants et partenaires industriels. C'est ici que se dessinent les contours des stages de demain et que s'ajuste le programme d'alternance pour coller aux réalités du marché." 
  },
  { 
    id: 4, 
    src: "/photos_site_selectionnees/IMG_9120.jpg", 
    category: "Partenariat",
    title: "L'Impulsion Fintech", 
    story: "Le stand d'InTouch ne désemplit pas. Les ingénieurs de la fintech partagent leur quotidien sur l'agrégation de paiement en Afrique. Une démonstration d'agilité technologique qui suscite de nombreuses vocations." 
  },
  { 
    id: 5, 
    src: "/photos_site_selectionnees/IMG_9127.jpg", 
    category: "Hackathon",
    title: "L'Épreuve du Feu", 
    story: "3 minutes chrono pour convaincre un jury d'experts. Sur scène, les claviers se taisent et les démos s'enchaînent. Les cœurs battent la chamade, chaque ligne de code est pesée. C'est l'instant crucial de la présentation finale." 
  },
  { 
    id: 6, 
    src: "/photos_site_selectionnees/IMG_9130.jpg", 
    category: "R&D",
    title: "L'IA Parlant nos Langues", 
    story: "Le projet Sunuchat capte toutes les attentions. Une démonstration bluffante d'un modèle de traitement automatique du Wolof et du Sérère. La preuve tangible que l'intelligence artificielle peut et doit s'adapter à nos cultures." 
  },
  { 
    id: 7, 
    src: "/photos_site_selectionnees/IMG_9145.jpg", 
    category: "Débats",
    title: "Penser la Souveraineté", 
    story: "Le panel thématique donne lieu à des échanges enflammés. Autour de la table, experts et étudiants s'accordent sur un point : l'Afrique ne doit pas être une simple consommatrice d'algorithmes, mais l'architecte de ses propres solutions." 
  },
  { 
    id: 8, 
    src: "/photos_site_selectionnees/IMG_9150.jpg", 
    category: "Hackathon",
    title: "La Consécration", 
    story: "Les sourires de soulagement après 24 heures de code non-stop. Ce moment précis immortalise l'annonce des grands vainqueurs du Hackathon. Les applaudissements nourris de l'amphithéâtre saluent des nuits blanches de créativité." 
  },
  { 
    id: 9, 
    src: "/photos_site_selectionnees/IMG_9163.jpg", 
    category: "Réseautage",
    title: "Les Ponts Professionnels", 
    story: "Autour d'un cocktail, les barrières tombent. Les étudiants échangent de manière informelle avec des directeurs techniques et des alumni. C'est souvent lors de ces discussions spontanées que naissent les plus belles opportunités." 
  },
  { 
    id: 10, 
    src: "/photos_site_selectionnees/IMG_9173.jpg", 
    category: "Clôture",
    title: "Fierté Collective", 
    story: "Le clap de fin d'une aventure humaine intense. Une photo de famille qui scelle des mois de préparation. Épuisés mais immensément fiers, les membres du Polytech Informatique Club célèbrent la réussite de cette édition." 
  },
  { 
    id: 11, 
    src: "/photos_site_selectionnees/IMG_9214.jpg", 
    category: "Banquet",
    title: "Partage et Convivialité", 
    story: "Les échanges se prolongent autour du déjeuner officiel au restaurant SAES. Les débats de la matinée font place à des rires et à des partages d'anecdotes entre parrains de promo et jeunes ingénieurs." 
  },
  { 
    id: 12, 
    src: "/photos_site_selectionnees/IMG_9242.jpg", 
    category: "Élites",
    title: "La Relève EPT", 
    story: "Unis par la même passion de l'excellence, les élèves-ingénieurs posent fièrement. Ils incarnent cette nouvelle génération de bâtisseurs du numérique, prêts à concevoir les infrastructures souveraines de demain." 
  }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {PHOTOS_DATA.slice(0, visibleCount).map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-panel border-slate-200/40 rounded-3xl overflow-hidden group shadow-md shadow-indigo-950/[0.015] hover:shadow-xl hover:shadow-indigo-950/[0.03] transition-[border-color,box-shadow,background-color] duration-300 relative flex flex-col bg-white/60 glowing-border"
            >
              {/* Card Header metadata */}
              <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-white/40">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-neonPurple/10 border border-neonPurple/20 text-neonPurple">
                  {photo.category}
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  IT DAY 2025
                </span>
              </div>

              {/* Photo Box */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-100 bg-slate-50">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98]"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>

              {/* Story Details Block */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-800 text-sm sm:text-base font-extrabold tracking-tight mb-2 group-hover:text-neonPurple transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {photo.story}
                  </p>
                </div>
                
                {/* Decorative card footer line */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[8px] uppercase tracking-wider font-bold text-slate-400 select-none">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neonBlue" />
                    Thiès, Sénégal
                  </span>
                  <span className="text-neonBlue">Instantané &bull;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Gallery Expand Button */}
      <div className="text-center mt-12">
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
