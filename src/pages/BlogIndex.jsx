import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Clock,
  Search
} from 'lucide-react';

const BlogIndex = () => {
  // Simulación de navegación (en un entorno real usarías react-router)
  const handleBackHome = () => console.log("Navigating to home...");

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header / Nav (Consistent with Home.jsx) */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" onClick={handleBackHome} className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-lg">
            <GraduationCap size={20} className="text-blue-400" />
            <span className="font-bold text-lg tracking-tight">cursos<span className="text-blue-400">.cat</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
               <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
               <input 
                 type="text" 
                 placeholder="Cerca articles..." 
                 className="bg-zinc-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
               />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Blog Hero Header */}
          <header className="mb-16">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <BookOpen size={14} /> El nostre coneixement
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
              Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">cursos.cat</span>
            </h1>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              Consells pràctics, guies de vocabulari i estratègies d'integració impulsades per IA per a la teva nova vida a Catalunya.
            </p>
          </header>

          {/* Featured Post / Article List */}
          <div className="grid grid-cols-1 gap-12">
            <article className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
              {/* Image side */}
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599478585030-22b62e038962?q=80&w=8000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Vista de Girona" 
                  className="h-full w-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Sector Sanitari
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                    <Calendar size={14} /> 12 Març, 2026
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  <a href="/blog/vocabulari-catala-infermeres-girona">
                    Vocabulari de Supervivència per a Infermeres a Girona: De "Nena" a "Tirita"
                  </a>
                </h2>
                
                <p className="text-zinc-500 mb-8 leading-relaxed line-clamp-3">
                  Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió? Descobreix com la parla local gironina pot ser la teva millor eina de cura.
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <a href="/blog/vocabulari-catala-infermeres-girona" className="inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-blue-600 transition-colors group/link">
                    Llegir l'article <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
                    <Clock size={14} /> 4 min de lectura
                  </div>
                </div>
              </div>
            </article>

            {/* Placeholder for more articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[1, 2].map(i => (
                 <div key={i} className="p-8 rounded-[2rem] border border-zinc-100 bg-zinc-50/50 flex flex-col items-center justify-center text-center py-20 border-dashed">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-300 mb-4">
                      <BookOpen size={24} />
                    </div>
                    <p className="text-zinc-400 font-medium text-sm tracking-wide uppercase">Pròximament</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter simple */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Vols rebre nous vocabularis?</h2>
          <p className="text-zinc-400 mb-8">T'enviem un resum setmanal amb els millors consells d'integració.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="El teu correu electrònic" 
              className="flex-1 bg-white/5 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-500/50 outline-none"
            />
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all">
              Subscriure'm
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-900 font-bold">
            <GraduationCap size={20} className="text-blue-600" />
            <span>cursos.cat</span>
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Cursos.cat. Contingut generat per experts i revisat per IA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndex;
