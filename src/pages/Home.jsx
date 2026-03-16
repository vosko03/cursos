import React, { useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Bot, 
  Globe, 
  Briefcase, 
  Award, 
  GraduationCap, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

// --- Sub-components para una mejor organización ---

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
  useEffect(() => {
    document.title = "Cursos.cat: la primera plataforma d'integració lingüística de Catalunya impulsada 100% per IA.";
  }, []);

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
            <a href="#metodologia" className="hover:text-zinc-900 transition-colors">Metodología</a>
            <a href="#serveis" className="hover:text-zinc-900 transition-colors">Servicios</a>
            <a href="/blog" onClick={handleBlogClick} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              Blog <BookOpen size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100 animate-fade-in">
            <Sparkles size={14} /> La revolución del catalán ya está aquí
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Domina el catalán con la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">potencia de la IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            La primera plataforma de inmersión lingüística en Cataluña impulsada 100% por Inteligencia Artificial. Aprende, practica y certifica tu fluidez sin barreras.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-2 group">
              Empieza gratis <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/blog" 
              onClick={handleBlogClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={20} /> Leer el Blog
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-zinc-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">Tecnología de última generación</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 font-bold text-xl"><Zap className="text-amber-500" /> Proyecto Aina</div>
             <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="text-blue-500" /> BSC-CNS</div>
             <div className="flex items-center gap-2 font-bold text-xl font-mono">Gemini Pro</div>
             <div className="flex items-center gap-2 font-bold text-xl">Next.js</div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default Home;
