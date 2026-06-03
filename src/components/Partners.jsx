import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Award, Users } from 'lucide-react';

const PARTNERS = [
  {
    name: "Systalink",
    logo: "/photos_site_selectionnees/partenaire_1_systalink.png",
    role: "Hébergement Cloud & Infrastructures",
    desc: "Fournisseur d'infrastructures Cloud souveraines et de solutions VPS haute performance, marraine d'honneur et partenaire technologique majeur de l'IT DAY 2026.",
    website: "https://systalink.com/"
  },
  {
    name: "Sonatel",
    logo: "/photos_site_selectionnees/partenaire_2_sonatel.jpg",
    role: "Télécommunications & Connectivité",
    desc: "Premier opérateur de télécommunications au Sénégal, leader de l'infrastructure numérique et de la connectivité mobile, engagé activement dans l'émergence technologique.",
    website: "https://www.sonatel.sn/"
  },
  {
    name: "Atos",
    logo: "/photos_site_selectionnees/partenaire_3_atos.jpg",
    role: "Intégration Cloud & Supercalcul",
    desc: "Leader international du numérique, fournissant des solutions de calcul haute performance, de cybersécurité et de cloud pour accompagner la transformation digitale.",
    website: "https://atos.net/"
  },
  {
    name: "InTouch",
    logo: "/photos_site_selectionnees/partenaire_4_intouch.png",
    role: "Agrégation de Paiement & Fintech",
    desc: "Pionnier panafricain des services financiers digitaux, simplifiant et unifiant les transactions pour des millions d'utilisateurs sur l'ensemble du continent.",
    website: "https://www.intouchgroup.net/"
  },
  {
    name: "Galsen AI",
    logo: "/photos_site_selectionnees/partenaire_5_galsenai.jpg",
    role: "Communauté IA & Démocratisation",
    desc: "La communauté phare d'intelligence artificielle au Sénégal, réunissant experts et passionnés pour démocratiser l'apprentissage et l'application pratique de l'IA.",
    website: "https://galsen.ai/"
  },
  {
    name: "AI Hub Senegal",
    logo: "/photos_site_selectionnees/partenaire_6_ai_hub_senegal.png",
    role: "Innovation & Incubation Technologique",
    desc: "Centre d'incubation stratégique dédié au développement et au déploiement de solutions d'intelligence artificielle adaptées aux enjeux socio-économiques locaux.",
    website: "https://www.facebook.com/AIHubSenegal/"
  }
];

export default function Partners() {
  const [hasHover, setHasHover] = useState(false);
  useEffect(() => {
    setHasHover(window.matchMedia('(hover: hover)').matches);
  }, []);
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Background radial soft light blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="flex items-center justify-center gap-2 text-xs font-bold text-neonBlue tracking-widest uppercase mb-3">
          <Briefcase className="w-4 h-4 animate-pulse" />
          Synergie Industrielle
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonGreen via-neonBlue to-neonPurple">Partenaires</span> Officiels
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
          Les institutions technologiques majeures qui soutiennent activement le Polytech Informatique Club pour faire de l'IT DAY 2026 un succès.
        </p>
      </div>

      {/* Grid of Partners Cards (3 columns on large screens for a perfectly balanced 3x2 grid of 6 partners) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-center">
        {PARTNERS.map((partner, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={hasHover ? { scale: 1.02 } : {}}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel border-slate-200/40 rounded-3xl p-6 flex flex-col justify-between hover:border-neonGreen/30 hover:shadow-xl hover:shadow-emerald-500/[0.015] transition-[border-color,box-shadow,background-color] duration-300 relative overflow-hidden group shadow-md shadow-indigo-950/[0.008] bg-white/60"
          >
            {/* Top decorative gradient border hover accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonGreen via-neonBlue to-neonPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              {/* Logo Box Container */}
              <div className="w-full h-24 rounded-2xl bg-white border border-slate-100 p-4 mb-5 flex items-center justify-center shadow-xs overflow-hidden select-none">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`} 
                  className="w-full h-full object-contain filter md:group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title & Info */}
              <div>
                <h3 className="text-base font-extrabold text-slate-800 tracking-tight flex items-center gap-1.5 justify-between">
                  {partner.name}
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-neonBlue transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </h3>
                <span className="text-[10px] font-bold text-neonBlue uppercase tracking-wider block mt-1">
                  {partner.role}
                </span>
                
                {/* Short Description */}
                <p className="text-slate-500 text-xs font-light leading-relaxed mt-4">
                  {partner.desc}
                </p>
              </div>
            </div>

            {/* Micro interactivity details at the bottom of card */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] uppercase tracking-wider font-bold text-slate-400 select-none">
              <span>{partner.name === "Systalink" ? "Marraine & Partenaire" : "Partenaire 2026"}</span>
              <span className="text-neonGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Actif &bull;
              </span>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Separator */}
      <div className="my-16 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Special Thanks / Parrainage & Alumni Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Parrains de l'édition */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel border-slate-200/40 rounded-3xl p-6 flex items-start gap-4 shadow-sm bg-white/50"
        >
          <div className="p-3 bg-neonGreen/10 border border-neonGreen/20 rounded-2xl text-neonGreen shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Parrains de l'Édition</h4>
            <h5 className="text-sm font-bold text-slate-800 mt-1">Promotions GIT 46 & GIT 47</h5>
            <p className="text-[11px] text-slate-500 font-light leading-relaxed mt-2">
              Les promotions 46 et 47 du département Génie Informatique & Télécommunications parrainent fièrement cette édition de l'IT DAY 2026.
            </p>
          </div>
        </motion.div>

        {/* Réseau Alumni & Mentorat */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel border-slate-200/40 rounded-3xl p-6 flex items-start gap-4 shadow-sm bg-white/50"
        >
          <div className="p-3 bg-neonBlue/10 border border-neonBlue/20 rounded-2xl text-neonBlue shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">Réseau & Mentorat</h4>
            <h5 className="text-sm font-bold text-slate-800 mt-1">Alumni & Professionnels du Numérique</h5>
            <p className="text-[11px] text-slate-500 font-light leading-relaxed mt-2">
              Les diplômés ingénieurs du GIT soutiennent activement l'événement à travers des sessions de mentorat et l'accompagnement des projets du Hackathon.
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
