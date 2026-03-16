import React, { useState, useEffect } from 'react';
import { 
  Sparkles, BookOpen, Bot, Globe, Briefcase, Award, 
  GraduationCap, ChevronRight, ShieldCheck, Zap, ChevronDown 
} from 'lucide-react';

// --- CONFIGURACIÓN DE ICONOS Y ESTILOS PARA LAS TARJETAS ---
// Mantenemos esto en el frontend para no guardar componentes de React en la base de datos
const servicesConfig = [
  { icon: Bot, colorClass: "bg-blue-50 text-blue-600" },
  { icon: Globe, colorClass: "bg-emerald-50 text-emerald-600" },
  { icon: Briefcase, colorClass: "bg-zinc-100 text-zinc-900" },
  { icon: Award, colorClass: "bg-amber-50 text-amber-600" },
  { icon: Sparkles, colorClass: "bg-purple-50 text-purple-600" },
  { icon: BookOpen, colorClass: "bg-rose-50 text-rose-600" },
];

// --- TRADUCCIONES LOCALES (Fallback de Supabase) ---
// Esta es la estructura exacta que devolverá tu tabla de Supabase.
const fallbackData = {
  ca: {
    nav_methodology: "Metodologia", nav_services: "Serveis", nav_blog: "Blog",
    hero_badge: "La revolució del català ja és aquí",
    hero_title_main: "Domina el català amb la", hero_title_highlight: "potència de la IA",
    hero_subtitle: "La primera plataforma d'immersió lingüística a Catalunya impulsada 100% per Intel·ligència Artificial. Aprèn, practica i certifica la teva fluïdesa sense barreres.",
    hero_btn_start: "Comença gratis", hero_btn_blog: "Llegir el Blog",
    trust_title: "Tecnologia d'última generació",
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
  },
  es: {
    nav_methodology: "Metodología", nav_services: "Servicios", nav_blog: "Blog",
    hero_badge: "La revolución del catalán ya está aquí",
    hero_title_main: "Domina el catalán con la", hero_title_highlight: "potencia de la IA",
    hero_subtitle: "La primera plataforma de inmersión lingüística en Cataluña impulsada 100% por Inteligencia Artificial. Aprende, practica y certifica tu fluidez sin barreras.",
    hero_btn_start: "Empieza gratis", hero_btn_blog: "Leer el Blog",
    trust_title: "Tecnología de última generación",
    services_title: "Diseñado para la integración real",
    services_subtitle: "Hemos eliminado los métodos aburridos para crear un ecosistema donde la lengua se vive, no solo se estudia.",
    features: [
      { title: "Tutor IA 24/7", description: "Un acompañante paciente que simula situaciones reales: desde ir al médico hasta una entrevista de trabajo. Habla sin miedo." },
      { title: "Plataforma Inmersiva", description: "Contenido que se adapta a tu ritmo. Generación de lecciones personalizadas según tus intereses profesionales." },
      { title: "Soluciones B2B", description: "Formación corporativa escalable para empresas que quieren garantizar un servicio de atención al cliente excelente en catalán." },
      { title: "Certificación Digital", description: "Obtén un certificado de fluidez evaluado por IA, listo para compartir en LinkedIn y reconocido por empresas locales." },
      { title: "SEO Programático", description: "Encontramos lo que necesitas exactamente cuando lo buscas. Contenido de aprendizaje de nicho para cada profesión." },
      { title: "Comunidad y Tándem", description: "Conecta con otros aprendices y nativos para practicar lo que has aprendido con la IA en un entorno humano y seguro." }
    ],
    cta_title: "El acelerador de tu integración",
    cta_subtitle: "Únete a la lista de espera y sé el primero en probar la tecnología que está cambiando el futuro del catalán.",
    cta_btn: "Regístrate ahora", footer_rights: "Todos los derechos reservados."
  },
  en: {
    nav_methodology: "Methodology", nav_services: "Services", nav_blog: "Blog",
    hero_badge: "The Catalan revolution is here",
    hero_title_main: "Master Catalan with the", hero_title_highlight: "power of AI",
    hero_subtitle: "The first language immersion platform in Catalonia driven 100% by Artificial Intelligence. Learn, practice, and certify your fluency without barriers.",
    hero_btn_start: "Start for free", hero_btn_blog: "Read the Blog",
    trust_title: "Next-generation technology",
    services_title: "Designed for real integration",
    services_subtitle: "We have eliminated boring methods to create an ecosystem where the language is lived, not just studied.",
    features: [
      { title: "24/7 AI Tutor", description: "A patient companion that simulates real situations: from going to the doctor to a job interview. Speak without fear." },
      { title: "Immersive Platform", description: "Content that adapts to your pace. Generation of personalized lessons based on your professional interests." },
      { title: "B2B Solutions", description: "Scalable corporate training for companies that want to guarantee excellent customer service in Catalan." },
      { title: "Digital Certification", description: "Get a fluency certificate evaluated by AI, ready to share on LinkedIn and recognized by local companies." },
      { title: "Programmatic SEO", description: "We find what you need exactly when you look for it. Niche learning content for every profession." },
      { title: "Community & Tandem", description: "Connect with other learners and natives to practice what you have learned with AI in a safe, human environment." }
    ],
    cta_title: "The accelerator of your integration",
    cta_subtitle: "Join the waitlist and be the first to try the technology that is changing the future of Catalan.",
    cta_btn: "Register now", footer_rights: "All rights reserved."
  }
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${colorClass}`}>
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
      {title}
    </h3>
    <p className="text-zinc-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Home = () => {
  const [lang, setLang] = useState('ca');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [content, setContent] = useState(fallbackData[lang]);

  // Efecto para simular la futura carga desde Supabase
  useEffect(() => {
    // Aquí es donde realizarías el fetch real a Supabase:
    // const { data } = await supabase.from('home_content').select('*').eq('language_code', lang).single();
    // setContent(data);
    
    // Por ahora, actualizamos con el fallback local al cambiar de idioma
    setContent(fallbackData[lang]);
    document.title = `Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.`;
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
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#metodologia" className="hover:text-zinc-900 transition-colors">{content.nav_methodology}</a>
            <a href="#serveis" className="hover:text-zinc-900 transition-colors">{content.nav_services}</a>
            <a href="/blog" onClick={handleBlogClick} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              {content.nav_blog} <BookOpen size={16} />
            </a>
            
            {/* Selector de idiomas */}
            <div className="relative border-l border-zinc-200 pl-6">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
                className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors font-bold uppercase"
              >
                <Globe size={16} className="text-zinc-400" />
                {lang}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 top-full mt-4 w-32 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 animate-fade-in flex flex-col">
                  <button onClick={() => setLang('ca')} className={`px-4 py-2 text-left text-sm hover:bg-zinc-50 ${lang === 'ca' ? 'font-bold text-blue-600' : 'text-zinc-600'}`}>Català</button>
                  <button onClick={() => setLang('es')} className={`px-4 py-2 text-left text-sm hover:bg-zinc-50 ${lang === 'es' ? 'font-bold text-blue-600' : 'text-zinc-600'}`}>Español</button>
                  <button onClick={() => setLang('en')} className={`px-4 py-2 text-left text-sm hover:bg-zinc-50 ${lang === 'en' ? 'font-bold text-blue-600' : 'text-zinc-600'}`}>English</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
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

      {/* Services Grid */}
      <section id="serveis" className="py-24 px-6 bg-white">
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
            {content.features.map((feature, idx) => {
              // Combinamos los textos dinámicos con los iconos y colores fijos
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
      <section className="py-24 px-6">
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
