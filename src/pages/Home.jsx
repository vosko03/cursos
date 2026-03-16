import React from 'react';
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

// --- Sub-components for better organization ---

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
  // Navigation handler (simulating routing as per environment constraints)
  const handleBlogClick = (e) => {
    // In a real app with react-router: navigate('/blog')
    console.log("Navigating to blog...");
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
            <a href="#metodologia" className="hover:text-zinc-900 transition-colors">Metodologia</a>
            <a href="#serveis" className="hover:text-zinc-900 transition-colors">Serveis</a>
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
            <Sparkles size={14} /> La revolució del català ja és aquí
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Domina el català amb la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">potència de la IA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            La primera plataforma d'immersió lingüística a Catalunya impulsada 100% per Intel·ligència Artificial. Aprèn, practica i certifica la teva fluïdesa sense barreres.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-2 group">
              Comença gratis <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="/blog" 
              onClick={handleBlogClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={20} /> Llegir el Blog
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-zinc-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">Tecnologia d'última generació</p>
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
                Dissenyat per a la integració real
              </h2>
              <p className="text-zinc-500 text-lg">
                Hem eliminat els mètodes avorrits per crear un ecosistema on la llengua es viu, no només s'estudia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Bot}
              title="Tutor IA 24/7"
              description="Un acompanyant pacient que simula situacions reals: des d'anar al metge fins a una entrevista de feina. Parla sense por."
              colorClass="bg-blue-50 text-blue-600"
            />
            <FeatureCard 
              icon={Globe}
              title="Plataforma Immersiva"
              description="Contingut que s'adapta al teu ritme. Generació de lliçons personalitzades segons els teus interessos professionals."
              colorClass="bg-emerald-50 text-emerald-600"
            />
            <FeatureCard 
              icon={Briefcase}
              title="Solucions B2B"
              description="Formació corporativa escalable per a empreses que volen garantir un servei d'atenció al client excel·lent en català."
              colorClass="bg-zinc-100 text-zinc-900"
            />
            <FeatureCard 
              icon={Award}
              title="Certificació Digital"
              description="Obtén un certificat de fluïdesa avaluat per IA, llest per compartir a LinkedIn i reconegut per empreses locals."
              colorClass="bg-amber-50 text-amber-600"
            />
            <FeatureCard 
              icon={Sparkles}
              title="SEO Programàtic"
              description="Trobem el que necessites exactament quan ho busques. Contingut d'aprenentatge de nínxol per a cada professió."
              colorClass="bg-purple-50 text-purple-600"
            />
            <FeatureCard 
              icon={BookOpen}
              title="Comunitat & Tàndem"
              description="Connecta amb altres aprenents i nadius per practicar el que has après amb la IA en un entorn humà i segur."
              colorClass="bg-rose-50 text-rose-600"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            L'accelerador de la teva integració
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Uneix-te a la llista d'espera i sigues el primer a provar la tecnologia que està canviant el futur del català.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
              Registra't ara
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
            <a href="/blog" onClick={handleBlogClick} className="hover:text-zinc-900 transition-colors">Blog</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacitat</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Contacte</a>
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Cursos.cat. Tots els drets reservats.
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
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
};

export default Home;
