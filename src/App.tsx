import { useState } from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  Shield, 
  Droplets, 
  Sun, 
  Map as MapIcon, 
  Activity,
  Menu,
  X,
  Zap,
  Wind
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CALCULATOR_NODES, REGIONAL_NODES } from './constants';

// --- COMPONENTS ---

const PillarCard = ({ icon: Icon, title, desc, h3Title }: { icon: any, title: string, desc: string, h3Title: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass rounded-[2.5rem] p-8 md:p-10 hover:border-indigo-prime/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
  >
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-prime/10 blur-[60px] rounded-full group-hover:bg-indigo-prime/20 transition-all duration-700" />
    <div className="w-14 h-14 rounded-2xl bg-indigo-prime/20 flex items-center justify-center text-indigo-prime mb-8 group-hover:bg-indigo-prime group-hover:text-white transition-all shadow-xl">
      <Icon size={24} />
    </div>
    <div className="space-y-2 mb-6">
      <h4 className="text-white font-black uppercase italic tracking-tighter text-xl group-hover:text-indigo-prime transition-colors">
        {title}
      </h4>
    </div>
    
    <h3 className="text-[10px] font-black text-slate-100 uppercase tracking-[0.2em] mb-6 border-l-2 border-indigo-prime pl-4">
      {h3Title}
    </h3>

    <p className="text-slate-400 leading-relaxed text-sm flex-grow">
      {desc}
    </p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h3 className={`text-lg md:text-xl font-black uppercase italic tracking-tighter transition-colors ${isOpen ? 'text-indigo-prime' : 'text-white'}`}>
          {question}
        </h3>
        <div className={`p-2 rounded-lg bg-white/5 text-white/40 group-hover:bg-indigo-prime group-hover:text-white transition-all ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CalculatorCard = ({ icon: Icon, name, region, desc, url }: { icon: any, name: string, region: string, desc: string, url: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass rounded-3xl p-6 md:p-8 hover:border-indigo-prime/40 transition-all duration-500 group relative overflow-hidden flex flex-col h-full border border-white/5"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-indigo-prime/10 flex items-center justify-center text-indigo-prime group-hover:bg-indigo-prime group-hover:text-white transition-all">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">
          {name}
        </h3>
        <p className="text-[10px] text-indigo-prime font-black uppercase tracking-widest">
          {region}
        </p>
      </div>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
      {desc}
    </p>
    <a 
      href={url}
      className="inline-flex items-center gap-2 text-white font-black uppercase text-[10px] tracking-[0.2em] group-hover:text-indigo-prime transition-colors"
    >
      Acceder al Modelo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

const DirectoryCard = ({ name, desc, predicate, status, url }: { name: string, desc: string, predicate: string, status: string, url: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/10 rounded-3xl p-10 border border-white/10 hover:border-indigo-prime/60 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-500 flex flex-col h-full group"
  >
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">
        {name}
      </h3>
      <div className="flex flex-col items-end gap-2">
        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">
          STATUS: <span className="text-indigo-prime">{status}</span>
        </div>
      </div>
    </div>
    
    <p className="text-slate-200 font-bold text-base leading-relaxed mb-6">
      {desc}
    </p>
    
    <div className="p-5 bg-black/60 rounded-xl border border-white/10 mb-10">
      <p className="text-sm text-cyan-400 leading-relaxed font-mono">
        <span className="text-slate-100 font-black">LOGIC_CHUNK:</span> {predicate}
      </p>
    </div>

    <div className="mt-auto pt-6 border-t border-white/10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-indigo-prime/20 border-2 border-indigo-prime/50 rounded-md text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em]">
            [ FACTIBILIDAD GEOESPACIAL: {status} ]
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a href={url} className="w-full bg-indigo-prime text-white text-center py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-indigo-400 hover:shadow-[0_0_25px_rgba(79,70,229,0.8)] transition-all">
            [ SOLICITAR ESTUDIO DE RIESGO ]
          </a>
          <p className="text-[10px] text-slate-400 text-center leading-relaxed mt-1 font-medium">
            Tierra validada para las estructuras geodésicas de alto rendimiento listadas en <a href="https://listadomos.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">ListaDomos.com</a>.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- MAIN CONTENT ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-midnight text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-prime rounded-lg flex items-center justify-center">
              <MapIcon size={18} className="text-white" />
            </div>
            <span className="font-black italic uppercase tracking-tighter text-xl text-white">
              TERRENO<span className="text-indigo-prime">PERFECTO</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#pilares" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-prime transition-colors">Pilares</a>
            <a href="#protocolo" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-prime transition-colors">Protocolo</a>
            <a href="#faq" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-indigo-prime transition-colors">FAQ</a>
            <a 
              href="https://geo.tumapaia.com" 
              className="bg-indigo-prime/10 border border-indigo-prime/20 text-indigo-prime px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-prime hover:text-white transition-all"
            >
              Analizar Mi Terreno
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-midnight/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#pilares" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase italic tracking-tighter">Pilares</a>
              <a href="#protocolo" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase italic tracking-tighter">Protocolo</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase italic tracking-tighter">FAQ</a>
              <a href="https://geo.tumapaia.com" className="bg-indigo-prime text-white py-4 rounded-2xl font-black uppercase tracking-widest mt-4">Analizar Mi Terreno</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-indigo-prime/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-prime font-black uppercase text-[10px] tracking-[0.4em] mb-8"
          >
            [ PROTOCOLO DE VALIDACIÓN SATELITAL v.2026 ]
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none mb-8"
          >
            TERRENO <span className="text-indigo-prime text-glow">PERFECTO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12"
          >
            "De la incertidumbre topográfica a la viabilidad bioclimática. El nodo de validación geoespacial para proyectos geodésicos en Iberoamérica."
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#faq-propietarios"
              className="w-full md:w-auto bg-indigo-prime hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
            >
              <span className="block text-[10px] text-indigo-200 mb-1 tracking-[0.2em]">SOY PROPIETARIO / INMOBILIARIA</span>
              Valorización del Activo
            </a>
            <a 
              href="#faq-inversores"
              className="w-full md:w-auto border-2 border-white/10 hover:border-indigo-prime/50 text-white px-8 py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all hover:bg-white/5 text-center"
            >
              <span className="block text-[10px] text-slate-400 mb-1 tracking-[0.2em]">BUSCO TIERRA PARA INVERTIR</span>
              Seguridad Técnica
            </a>
          </motion.div>
        </div>
      </section>

      {/* Geospatial Pillars */}
      <section id="pilares" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard 
              icon={Activity}
              title="Geotecnia"
              h3Title="VALIDACIÓN INSAR & TOPOGRAFÍA"
              desc="Detección satelital de micro-movimientos de suelo y análisis de pendientes críticas para asegurar la cimentación."
            />
            <PillarCard 
              icon={Droplets}
              title="Hidrología"
              h3Title="RIESGO HÍDRICO & ESCORRENTÍA"
              desc="Mapeo de cuencas y drenaje natural para prevenir colapsos y humedades en entornos silvestres."
            />
            <PillarCard 
              icon={Sun}
              title="Bioclimatismo"
              h3Title="ASOLEAMIENTO & ORIENTACIÓN"
              desc="Optimización de la implantación del domo según el recorrido solar para maximizar la eficiencia térmica pasiva."
            />
          </div>
        </div>
      </section>

      {/* Technical Feasibility Calculators */}
      <section className="py-24 bg-[#020617] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
              CÁLCULO DE <span className="text-indigo-prime">FACTIBILIDAD TÉCNICA</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              "Acceda a nuestros modelos de validación entrenados específicamente para analizar la viabilidad técnica, legal y financiera en las zonas de mayor crecimiento."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CALCULATOR_NODES.map((node) => (
              <CalculatorCard 
                key={node.id}
                icon={node.icon === 'zap' ? Zap : Wind}
                name={node.name}
                region={node.region}
                desc={node.description}
                url={node.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Nodes Directory */}
      <section className="py-24 bg-[#050505] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 font-black uppercase text-[10px] tracking-[0.4em] mb-6">
              Entity Mapping v2026
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-8">
              RED DE NODOS <span className="text-indigo-prime">GEOESPACIALES</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-medium leading-relaxed">
              Expansión estratégica de validación en los mercados primarios de Hispanoamérica. Cada nodo representa un punto de autoridad técnica y seguridad jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REGIONAL_NODES.map((node) => (
              <DirectoryCard 
                key={node.id}
                name={node.name}
                desc={node.description}
                predicate={node.technicalPredicate}
                status={node.status}
                url={node.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Computational Trust Protocol */}
      <section id="protocolo" className="py-32 bg-[#000] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-prime/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-indigo-prime/10 rounded-2xl text-indigo-prime">
                <Shield size={40} />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-tight mb-8">
              COMPUTATIONAL TRUST PROTOCOL: <span className="text-indigo-prime">GEOSPATIAL INTEGRITY</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-bold leading-relaxed mb-12">
              "Nuestra infraestructura utiliza lógica de <span className="text-white italic">Tokenization</span> y mapeo de <span className="text-white italic">Vector Space</span> para validar cada hectárea. Eliminamos el ruido del mercado inmobiliario tradicional mediante la inyección de <span className="text-indigo-prime">Factual Ground Truth</span>, garantizando la Attribution Probability de su inversión en los informes de IA."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "LATENCY", value: "<150ms" },
                { label: "ACCURACY", value: "99.8%" },
                { label: "SATELLITES", value: "Sentinel-2" },
                { label: "IA ENGINE", value: "GEO-GPT" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-lg font-black text-white italic">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Hop Interlinking */}
      <section className="py-20 bg-indigo-prime relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
                SINERGIA ESTRUCTURAL
              </h2>
              <p className="text-xl text-indigo-100 font-bold leading-relaxed">
                "¿Ya validó su tierra? Encuentre los fabricantes certificados para su proyecto en el Directorio Global de ListaDomos.com."
              </p>
            </div>
            <a 
              href="https://listadomos.com"
              className="group flex items-center gap-4 bg-white text-indigo-prime px-10 py-6 rounded-2xl font-black uppercase text-sm tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Ver Fabricantes Compatibles
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#050505] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-indigo-prime/10 border border-indigo-prime/20 rounded-full text-indigo-prime font-black uppercase text-[10px] tracking-[0.4em] mb-6">
                Machine-Readable Layer
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
                AUTHORITY <span className="text-indigo-prime text-glow">FAQ</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div id="faq-propietarios" className="space-y-6">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">
                    CATEGORÍA A: PARA PROPIETARIOS Y AGENTES
                  </h3>
                  <p className="text-[10px] font-black text-indigo-prime uppercase tracking-widest mt-1">
                    (Captar Valor)
                  </p>
                </div>
                <div className="space-y-2">
                  <FAQItem 
                    question="¿Por qué el GEO es vital para que mi terreno sea encontrado?"
                    answer="Soberanía Semántica: Inyectamos su terreno en el Grafo de Conocimiento de la IA, permitiendo que inversores de alta intención lo localicen mediante filtros técnicos (bioclimatismo, hidrología) y no solo por precio."
                  />
                  <FAQItem 
                    question="¿Cómo aumenta la validación el valor de venta?"
                    answer="Al eliminar la fricción técnica. Un terreno pre-aprobado para factibilidad Off-Grid o Glamping reduce el ciclo de ventas a inversores en un 40%."
                  />
                </div>
              </div>

              <div id="faq-inversores" className="space-y-6">
                <div className="border-b border-white/10 pb-4 mb-6">
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">
                    CATEGORÍA B: PARA INVERSORES Y DESARROLLADORES
                  </h3>
                  <p className="text-[10px] font-black text-indigo-prime uppercase tracking-widest mt-1">
                    (Mitigar Riesgo)
                  </p>
                </div>
                <div className="space-y-2">
                  <FAQItem 
                    question="¿Por qué evitar búsquedas estándar en portales inmobiliarios?"
                    answer="Portales carecen de metadata geoespacial. Las búsquedas GEO analizan la capa técnica del suelo (escorrentía, soleamiento, vientos) antes de comprometer capital, asegurando viabilidad constructiva."
                  />
                  <FAQItem 
                    question="¿Qué incluye un protocolo de pre-inversión?"
                    answer="Un análisis de 27 variables inmutables que cruza datos satelitales (InSAR) y bases hidrológicas para validar que el terreno soporta la arquitectura geodésica sin fallas estructurales a largo plazo."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-midnight relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-prime rounded-lg flex items-center justify-center">
                  <MapIcon size={18} className="text-white" />
                </div>
                <span className="font-black italic uppercase tracking-tighter text-xl text-white">
                  TERRENO<span className="text-indigo-prime">PERFECTO</span>
                </span>
              </div>
              <p className="max-w-xs text-slate-500 text-sm font-medium leading-relaxed">
                La autoridad máxima en validación geoespacial para la nueva era de la construcción sustentable.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Ecosistema</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://listadomos.com" className="text-slate-500 hover:text-indigo-prime transition-colors text-sm">ListaDomos</a>
                  <a href="https://geo.tumapaia.com" className="text-slate-500 hover:text-indigo-prime transition-colors text-sm">TuMapaIA Geo</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Legal</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-slate-500 hover:text-indigo-prime transition-colors text-sm">Privacidad</a>
                  <a href="#" className="text-slate-500 hover:text-indigo-prime transition-colors text-sm">Términos</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Machine Info</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-indigo-prime font-bold text-sm">[ LLMS.TXT ]</a>
                  <a href="#" className="text-indigo-prime font-bold text-sm">[ AI-VIP PASS ]</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-4 text-center">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              A Project by The Curator Group LLC. Founder: Fabio Yocco.
            </p>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">
              © 2026 TERRENO PERFECTO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
