import { motion } from 'framer-motion';
import { Cpu, BookOpen, UserCheck, Terminal } from 'lucide-react';

const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-panel border-slate-200/40 rounded-3xl relative overflow-hidden group glowing-border ${className}`}
    >
      {/* Background radial gradient glow active on card hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var,_50%_var(--y,_50%),rgba(99,102,241,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      {/* Dynamic diagonal shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-950/[0.005] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10 pointer-events-none" />

      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export default function BentoGrid() {
  
  // Custom mouse move effect handler for local grid lighting
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold text-neonBlue tracking-widest uppercase mb-3 block">
          Acteurs Majeurs
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Acteurs & <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonPurple to-neonBlue">Thématiques</span> Clés
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light">
          Découvrez la synergie entre le monde académique d'élite et les géants du secteur technologique africain.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Entreprise Marraine (Large 2 Cols Wide - Split Layout with Image) */}
        <BentoCard 
          className="col-span-1 md:col-span-2 row-span-1 min-h-[320px] shadow-md shadow-indigo-950/[0.01]"
          delay={0.1}
        >
          <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0" />
          
          <div className="flex flex-col sm:flex-row h-full">
            {/* Text Side (60%) */}
            <div className="p-6 sm:p-8 sm:w-[60%] flex flex-col justify-between relative z-20 pointer-events-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-xs font-bold text-neonGreen tracking-widest uppercase">
                    <UserCheck className="w-4 h-4" />
                    Entreprise Marraine
                  </span>
                  <span className="text-[10px] bg-neonGreen/10 border border-neonGreen/20 px-2.5 py-0.5 rounded-full text-neonGreen font-semibold">
                    Partenaire Or
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="p-2 bg-white border border-slate-200/50 rounded-2xl w-24 h-10 flex items-center justify-center shadow-sm">
                    <img 
                      src="/photos_site_selectionnees/partenaire_1_systalink.png" 
                      alt="Systalink Logo" 
                      className="w-full h-full object-contain filter brightness-95"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">Systalink</h3>
                    <span className="text-xs text-slate-400 font-medium">Hébergement Cloud & Cybersécurité</span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mt-4">
                  Sponsor officiel et marraine technologique de l'IT DAY 2026, engagée à redonner le contrôle des données aux entreprises et à bâtir un écosystème cloud souverain local pour l'Afrique.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400 block">Président Directeur Général</span>
                  <span className="text-[10px] font-bold text-slate-700">Yonas PALOMINO</span>
                </div>
                <span className="text-xs text-neonBlue font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                  Découvrir &rarr;
                </span>
              </div>
            </div>

            {/* Visual Side (40%) */}
            <div className="sm:w-[40%] h-48 sm:h-auto relative border-t sm:border-t-0 sm:border-l border-slate-200/40 overflow-hidden">
              <img 
                src="/photos_site_selectionnees/bento_systalink_illustration.jpg" 
                alt="Systalink Innovation" 
                className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-750 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-indigo-950/[0.005] to-transparent pointer-events-none" />
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Alternance GIT (1 Col - With Top Image Visual) */}
        <BentoCard 
          className="col-span-1 row-span-1 min-h-[320px] shadow-md shadow-indigo-950/[0.01]"
          delay={0.2}
        >
          <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0" />
          
          <div className="flex flex-col h-full justify-between">
            {/* Top Visual Section */}
            <div className="h-32 relative overflow-hidden border-b border-slate-200/40">
              <img 
                src="/photos_site_selectionnees/bento_alternance_illustration.jpg" 
                alt="Formation GIT Alternance" 
                className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col justify-between pointer-events-none">
              <div>
                <span className="flex items-center gap-2 text-xs font-bold text-neonBlue tracking-widest uppercase mb-2">
                  <BookOpen className="w-4 h-4" />
                  Formation EPT
                </span>
                <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-neonBlue transition-colors duration-300">
                  Modèle d'Alternance
                </h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Présentation du modèle pionnier d'alternance du GIT, alliant excellence scientifique de l'école et immersion professionnelle.
                </p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400 block">Présenté par</span>
                  <span className="text-[10px] font-bold text-slate-700">M. GUISSE</span>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: GIT Research Projects (1 Col - With Top Image Visual) */}
        <BentoCard 
          className="col-span-1 row-span-1 min-h-[320px] shadow-md shadow-indigo-950/[0.01]"
          delay={0.3}
        >
          <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0" />
          
          <div className="flex flex-col h-full justify-between">
            {/* Top Visual Section */}
            <div className="h-32 relative overflow-hidden border-b border-slate-200/40">
              <img 
                src="/photos_site_selectionnees/bento_recherche_illustration.jpg" 
                alt="Projets de recherche GIT" 
                className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col justify-between pointer-events-none">
              <div>
                <span className="flex items-center gap-2 text-xs font-bold text-neonPurple tracking-widest uppercase mb-2">
                  <Terminal className="w-4 h-4" />
                  R&D & Innovation
                </span>
                <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-neonPurple transition-colors duration-300">
                  Recherche & Projets
                </h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  Valorisation académique des travaux de recherche appliquée et d'innovation portés par les enseignants-chercheurs du GIT.
                </p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400 block">Porté par</span>
                  <span className="text-[10px] font-bold text-slate-700">Département GIT</span>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Panel Central IT DAY (Large 2 Cols Wide - Split Layout with Image) */}
        <BentoCard 
          className="col-span-1 md:col-span-2 row-span-1 min-h-[320px] shadow-md shadow-indigo-950/[0.01]"
          delay={0.4}
        >
          <div onMouseMove={handleMouseMove} className="absolute inset-0 z-0" />
          
          <div className="flex flex-col sm:flex-row h-full">
            
            {/* Visual Side (40%) */}
            <div className="sm:w-[40%] h-48 sm:h-auto relative border-b sm:border-b-0 sm:border-r border-slate-200/40 overflow-hidden">
              <img 
                src="/photos_site_selectionnees/bento_panel_illustration.jpg" 
                alt="Panel Débat IA Souveraineté" 
                className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-750 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-indigo-950/[0.005] to-transparent pointer-events-none" />
            </div>

            {/* Text Side (60%) */}
            <div className="p-6 sm:p-8 sm:w-[60%] flex flex-col justify-between relative z-20 pointer-events-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-xs font-bold text-neonPurple tracking-widest uppercase">
                    <Cpu className="w-4 h-4" />
                    Panel Thématique
                  </span>
                  <span className="text-[10px] bg-neonPurple/10 border border-neonPurple/20 px-2.5 py-0.5 rounded-full text-neonPurple font-semibold">
                    Débat Central
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-extrabold text-slate-800 mt-4 leading-snug group-hover:text-neonPurple transition-colors duration-300">
                  "Propulser le futur du travail par l'IA : Compétences de demain et défis d'une transformation technologique de confiance"
                </h3>
                
                {/* 3 Angles list */}
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Compétences", desc: "Quelles aptitudes dans un environnement augmenté ?" },
                    { label: "Productivité", desc: "Renforcer l'employabilité et la compétitivité locale." },
                    { label: "Souveraineté", desc: "Données, éthique et maîtrise locale des technologies." }
                  ].map((angle, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-left">
                      <span className="text-[9px] bg-sky-50 border border-sky-100 px-1.5 py-0.5 rounded-md text-neonBlue font-extrabold shrink-0">{angle.label}</span>
                      <span className="text-[10px] text-slate-400 font-light leading-none pt-1">{angle.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400 block mb-2">
                  Intervenants pressentis
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Mme Fama SARR", "Pr Oumar NIANG", "Pr Abdoul Aziz CISS", "Pr Ndiaye DIA", "M. Mouhamet TALL"].map((pName, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md text-slate-600 font-bold"
                    >
                      {pName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </BentoCard>

      </div>
    </section>
  );
}
