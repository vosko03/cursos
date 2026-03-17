import React, { useState, useEffect } from 'react';
import { 
  Sparkles, BookOpen, Bot, Globe, Briefcase, Award, 
  GraduationCap, ChevronRight, ShieldCheck, Zap, ChevronDown, Menu, X,
  Network, Mic, RefreshCw
} from 'lucide-react';

import { createClient } from '@supabase/supabase-js';

// Obtenemos las variables. Añadimos un fallback vacío ('') por si fallan en Vercel.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT || '';

// Inicializa el cliente real SOLO si ambas variables existen. 
// Esto evita el error fatal que deja la pantalla en blanco.
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// --- CONFIGURACIÓN DE ICONOS Y ESTILOS PARA LAS TARJETAS ---
const servicesConfig = [
  { icon: Bot, colorClass: "bg-blue-50 text-blue-600" },
  { icon: Globe, colorClass: "bg-emerald-50 text-emerald-600" },
  { icon: Briefcase, colorClass: "bg-zinc-100 text-zinc-900" },
  { icon: Award, colorClass: "bg-amber-50 text-amber-600" },
  { icon: Sparkles, colorClass: "bg-purple-50 text-purple-600" },
  { icon: BookOpen, colorClass: "bg-rose-50 text-rose-600" },
];

const methodologyConfig = [
  { icon: Network, colorClass: "bg-blue-100 text-blue-600" },
  { icon: Mic, colorClass: "bg-indigo-100 text-indigo-600" },
  { icon: RefreshCw, colorClass: "bg-emerald-100 text-emerald-600" }
];

// --- TRADUCCIONES LOCALES (Fallback de Supabase - SOLO CATALÁN) ---
const fallbackData = {
  ca: {
    page_title: "Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.",
    nav_methodology: "Metodologia", nav_services: "Serveis", nav_blog: "Blog",
    hero_badge: "La revolució del català ja és aquí",
    hero_title_main: "Domina el català amb la", hero_title_highlight: "potència de la IA",
    hero_subtitle: "La primera plataforma d'immersió lingüística a Catalunya impulsada 100% per Intel·ligència Artificial. Aprèn, practica i certifica la teva fluïdesa sense barreres.",
    hero_btn_start: "Comença gratis", hero_btn_blog: "Llegir el Blog",
    trust_title: "Tecnologia d'última generació",
    methodology_title: "Com funciona la nostra IA?",
    methodology_subtitle: "Un sistema d'aprenentatge viu, dissenyat amb arquitectura multiagent per adaptar-se a tu en temps real.",
    methodology_steps: [
      { title: "Arquitectura Multiagent", description: "Diferents IA treballen juntes: una avalua el teu nivell, una altra genera el context de la conversa i una tercera actua com el teu tutor." },
      { title: "Interacció per Veu Real", description: "Parla i escolta amb fluïdesa. El nostre sistema entén els teus matisos i et respon amb un accent català natural." },
      { title: "Aprenentatge Continuat", description: "Cada interacció retroalimenta el teu perfil. La dificultat i el vocabulari s'ajusten automàticament sessió rere sessió." }
    ],
    services_title: "Dissenyat per a la integració real",
    services_subtitle: "Hem eliminat els mètodes avorrits per crear un ecosistema on la llengua es viu, no només s'estudia.",
    features: [
      { title: "Tutor IA 24/7", description: "Un acompanyant pacient que simula situacions reals: des d'anar al metge fins a una entrevista de feina. Parla sense por." },
      { title: "Plataforma Immersiva", description: "Contingut que s'adapta al teu ritme. Generació de lliçons personalitzades segons els teus interessos professionals." },
      { title: "Solucions B2B", description: "Formació corporativa escalable per a empreses que volen garantir un servei d'atenció al client excel·lent en català." },
      { title: "Certificació Digital", description: "Obtén un certificat de fluïdesa avaluat per IA, llest per compartir a LinkedIn i reconegut per empreses locals." },
      { title: "SEO Programàtic", description: "Trobem el que necessites exactament quan ho busques. Contingut d'aprenentatge de nínxol per a cada professió." },
      { title: "Comunitat & Tàndem", description: "Connecta amb altres aprenents i nadius per practicar el que has après amb la IA en un entorn humà i segur." }
    ],
    cta_title: "L'accelerador de la teva integració",
    cta_subtitle: "Uneix-te a la llista d'espera i sigues el primer a provar la tecnologia que està canviant el futur del català.",
    cta_btn: "Registra't ara", footer_rights: "Tots els drets reservats."
  }
};

const languageConfig = {
  ca: { name: 'Català', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/es-ct.svg' },
  de: { name: 'Deutsch', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/de.svg' },
  es: { name: 'Español', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/es.svg' },
  eu: { name: 'Euskara', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/es-pv.svg' },
  en: { name: 'English', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/gb.svg' },
  fr: { name: 'Français', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/fr.svg' },
  gl: { name: 'Galego', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/es-ga.svg' },
  gn: { name: 'Avañeʼẽ', flagUrl: 'https://flagicons.lipis.dev/flags/4x3/py.svg' }
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorClass}`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
    </div>
    <p className="text-zinc-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Home = () => {
  const [lang, setLang] = useState('ca');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [content, setContent] = useState(fallbackData['ca']);
  const [isLoading, setIsLoading] = useState(false);

  // Efecto para actualizar el título de la página dinámicamente cuando el contenido cambia
  useEffect(() => {
    if (content?.page_title) {
      document.title = content.page_title;
    }
  }, [content]);
  
  // --- LÓGICA DE CONEXIÓN A SUPABASE ---
  useEffect(() => {
    const fetchContent = async () => {
      // Como estamos en un entorno de previsualización (o sin credenciales),
      // cargamos la información local (si no existe el idioma, forzamos catalán)
      if (!supabase) {
        setIsLoading(true);
        setTimeout(() => {
          setContent(fallbackData[lang] || fallbackData['ca']);
          setIsLoading(false);
        }, 300);
        return;
      }

      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('home_content')
          .select('*')
          .eq('language_code', lang)
          .single();

        if (error) throw error;
        if (data) setContent(data);
      } catch (error) {
        console.error("Error cargando idioma desde Supabase:", error.message);
        setContent(fallbackData[lang] || fallbackData['ca']);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [lang]);

  const handleBlogClick = (e) => {
    console.log("Navegando al blog...");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-lg">
            <GraduationCap size={20} className="text-blue-400" />
            <span className="font-bold text-lg tracking-tight">cursos<span className="text-blue-400">.cat</span></span>
          </div>
          
          <div className="flex items-center h-full">
            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 pr-6 border-r border-zinc-200 h-8">
              <a href="#metodologia" className="hover:text-zinc-900 transition-colors">{content.nav_methodology}</a>
              <a href="#serveis" className="hover:text-zinc-900 transition-colors">{content.nav_services}</a>
              <a href="/blog" onClick={handleBlogClick} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                {content.nav_blog} <BookOpen size={16} />
              </a>
            </div>

            {/* Botón menú hamburguesa (Móvil) */}
            <div className="md:hidden pr-4 border-r border-zinc-200 h-8 flex items-center">
              <button 
                className="p-1 text-zinc-600 hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
            {/* Selector de idiomas */}
            <div className="relative pl-4 md:pl-6 flex items-center">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
                className={`flex items-center gap-2 hover:text-zinc-900 transition-all font-bold uppercase text-sm ${isLoading ? 'opacity-50' : 'opacity-100'}`}
                disabled={isLoading}
              >
                <img 
                  src={languageConfig[lang]?.flagUrl || languageConfig['ca'].flagUrl} 
                  alt={`${lang} flag`} 
                  className="w-5 h-auto rounded-[2px] shadow-sm border border-zinc-200/50" 
                />
                {lang}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-6 w-44 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 animate-fade-in flex flex-col z-50 overflow-hidden">
                  {Object.entries(languageConfig).map(([code, { name, flagUrl }]) => (
                    <button 
                      key={code}
                      onClick={() => setLang(code)} 
                      className={`px-4 py-2 text-left text-sm hover:bg-zinc-50 flex items-center gap-3 ${lang === code ? 'font-bold text-blue-600' : 'text-zinc-600'}`}
                    >
                      <img 
                        src={flagUrl} 
                        alt={`${code} flag`} 
                        className="w-5 h-auto rounded-[2px] shadow-sm border border-zinc-200/50" 
                      />
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable (Solo Enlaces) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-xl flex flex-col p-6 gap-6 animate-fade-in z-40">
            <div className="flex flex-col gap-4">
              <a href="#metodologia" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                {content.nav_methodology}
              </a>
              <a href="#serveis" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                {content.nav_services}
              </a>
              <a href="/blog" onClick={(e) => { handleBlogClick(e); setIsMobileMenuOpen(false); }} className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                {content.nav_blog} <BookOpen size={18} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 transition-opacity duration-300" style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100 animate-fade-in">
            <Sparkles size={14} /> {content.hero_badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {content.hero_title_main} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">{content.hero_title_highlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {content.hero_subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-2 group">
              {content.hero_btn_start} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/blog" 
              onClick={handleBlogClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={20} /> {content.hero_btn_blog}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-zinc-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">{content.trust_title}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl"><Zap className="text-amber-500" /> Projecte Aina</div>
             <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="text-blue-500" /> BSC-CNS</div>
             <div className="flex items-center gap-2 font-bold text-xl font-mono">Gemini Pro</div>
             <div className="flex items-center gap-2 font-bold text-xl">Next.js</div>
          </div>
        </div>
      </section>

      {/* Metodologia Section (NOVA) */}
      <section id="metodologia" className="py-24 px-6 bg-zinc-50 border-b border-zinc-200 transition-opacity duration-300" style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              {content.methodology_title}
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              {content.methodology_subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.methodology_steps?.map((step, idx) => {
              const config = methodologyConfig[idx];
              const Icon = config.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${config.colorClass}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="serveis" className="py-24 px-6 bg-white transition-opacity duration-300" style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
                {content.services_title}
              </h2>
              <p className="text-zinc-500 text-lg">
                {content.services_subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features?.map((feature, idx) => {
              const config = servicesConfig[idx];
              return (
                <FeatureCard 
                  key={idx}
                  icon={config.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={config.colorClass}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 transition-opacity duration-300" style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            {content.cta_title}
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            {content.cta_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
              {content.cta_btn}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-900 font-bold">
            <GraduationCap size={20} className="text-blue-600" />
            <span>cursos.cat</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500 font-medium">
            <a href="/blog" onClick={handleBlogClick} className="hover:text-zinc-900 transition-colors">{content.nav_blog}</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacitat</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Contacte</a>
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Cursos.cat. {content.footer_rights}
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default Home;
