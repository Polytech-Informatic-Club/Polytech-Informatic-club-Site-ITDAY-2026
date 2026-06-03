import { motion } from 'framer-motion';
import { 
  Award, Quote, ArrowRight, ShieldCheck, Cpu, 
  Cloud, Globe, Terminal, Code2, Server 
} from 'lucide-react';

export default function Marraine() {
  
  // Solutions matching the real interview focus areas
  const focusAreas = [
    {
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      title: "Infrastructures 100% Propres",
      desc: "Contrairement aux revendeurs de solutions tierces, Systalink possède et gère ses propres infrastructures physiques hébergées localement."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: "Cybersécurité Native",
      desc: "Une sécurité en amont : les données sont sécurisées avant d'être hébergées, soutenue par une veille technologique proactive pour déjouer les attaques."
    },
    {
      icon: <Globe className="w-5 h-5 text-sky-500" />,
      title: "Souveraineté Numérique",
      desc: "Lutter contre la dépendance : 90% des données africaines sont hébergées hors du continent. Systalink propose des solutions locales résilientes."
    },
    {
      icon: <Cloud className="w-5 h-5 text-violet-500" />,
      title: "Démocratisation & Devises Locales",
      desc: "Casser les prix de la technologie pour propulser les entreprises africaines et leur permettre de consommer localement avec des devises africaines."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Subtle Background Glow specific to the Sponsoring presentation */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header section */}
      <div className="text-center mb-16">
        <span className="flex items-center justify-center gap-2 text-xs font-bold text-neonGreen tracking-widest uppercase mb-3">
          <Award className="w-4 h-4 animate-pulse" />
          Entreprise Marraine Officielle
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Présentation de <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonGreen via-neonBlue to-neonPurple">Systalink</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Découvrez la vision d'indépendance technologique et l'infrastructure Cloud souveraine de Systalink, marraine d'honneur de l'IT DAY 2026.
        </p>
      </div>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Systalink Corporate Identity & Core Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="glass-panel border-slate-200/40 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-md shadow-indigo-950/[0.01]">
            <div>
              {/* Brand Logo & Tag */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white border border-slate-200/50 rounded-2xl w-44 h-14 flex items-center justify-center shadow-sm">
                  <img 
                    src="/photos_site_selectionnees/marraine_systalink_logo.png" 
                    alt="Systalink Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="h-8 w-[1px] bg-slate-200" />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Marraine IT DAY 2026
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-4 leading-tight">
                L'infrastructure numérique africaine pour les Africains
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Systalink s'est donné pour mission de redonner le contrôle des données aux entreprises et d'assurer une totale souveraineté numérique. En concevant son propre écosystème cloud hautement sécurisé, l'entreprise brise la dépendance extérieure pour offrir une technologie locale performante et accessible.
              </p>

              {/* Grid of Solutions & Real pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 mt-0.5 shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">{area.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-1 font-light leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Link Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-light flex items-center gap-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Continuité de Service à 99,9%
              </span>
              <a 
                href="https://systalink.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-neonBlue font-semibold flex items-center gap-1 hover:translate-x-1 transition-transform duration-300 pointer-events-auto"
              >
                Visiter la plateforme souveraine <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: CEO Portrait & Real Mot du CEO (Inspired by Interview) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel border-slate-200/40 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden group glowing-border shadow-md shadow-indigo-950/[0.01]">
            {/* Top Premium Color Gradient Bar */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-neonGreen via-neonBlue to-neonPurple" />

            <div>
              {/* Photo Box */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-slate-200/40 bg-slate-100 shadow-sm">
                <img 
                  src="/photos_site_selectionnees/marraine_pdg_yonas_palomino.jpg" 
                  alt="Yonas Palomino PDG Systalink" 
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.98]"
                  loading="lazy"
                />
                
                {/* CEO Badge */}
                <div className="absolute bottom-4 left-4 p-2 bg-slate-900/60 rounded-xl backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase">
                  <Quote className="w-3.5 h-3.5 text-neonGreen" />
                  <span>Le Mot du PDG</span>
                </div>
              </div>

              {/* Name Details */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
                  Yonas Palomino
                </h3>
                <span className="text-xs font-bold text-neonBlue uppercase tracking-widest block mt-0.5">
                  Président Directeur Général, Systalink
                </span>
              </div>
            </div>

            {/* Inspiring CEO Quote - Real words from interview */}
            <div className="relative mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
              <Quote className="w-8 h-8 text-emerald-500/10 absolute -top-1 -left-2 rotate-180 pointer-events-none" />
              
              <div className="text-slate-500 text-xs sm:text-sm font-light italic leading-relaxed relative z-10 pl-6 space-y-3">
                <p>
                  "Aujourd'hui, 90% des données africaines sont hébergées à l'étranger. Si on coupe le robinet, nous sommes tous dans le noir. Il est important d'avoir des infrastructures qui nous appartiennent."
                </p>
                <p className="text-[11px] text-slate-450 border-l border-slate-200 pl-3.5 pt-0.5 mt-2 not-italic">
                  Conseil aux futurs ingénieurs de l'EPT : <span className="font-medium text-slate-600">"Pour se lancer, la combinaison idéale n'existe pas. Sortez de votre zone de confort, ayez une vision pour rester motivés et acceptez de démarrer avec ce que vous avez."</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
