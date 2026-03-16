import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  GraduationCap,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const BlogPost = () => {
  const articleTitle = "Vocabulari de Supervivència per a Infermeres a Girona: De \"Nena\" a \"Tirita\"";

  useEffect(() => {
    document.title = `${articleTitle} - Cursos.cat`;
  }, []);

  const handleBack = () => console.log("Tornant a l'índex del blog...");

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Mini Navegación superior */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/blog" onClick={handleBack} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Tornar al Blog
          </a>
          <div className="flex items-center gap-4">
             <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Bookmark size={18}/></button>
             <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors"><Share2 size={18}/></button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          
          {/* Cabecera del Artículo */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-100">
              Sector Sanitari • SEO Local
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-8">
              {articleTitle}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm font-medium">
              <div className="flex items-center gap-1.5"><Calendar size={14} /> 12 Març, 2024</div>
              <div className="flex items-center gap-1.5"><Clock size={14} /> 4 min de lectura</div>
            </div>
          </header>

          {/* Imagen Destacada */}
          <figure className="mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1700299926955-d68c16ba107b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM2MDJ8MHwxfGFsbHx8fHx8fHx8fDE3NzM1MjQ2MTZ8&ixlib=rb-4.1.0&q=80&w=1200" 
              alt="Girona Onyar Houses" 
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </figure>

          {/* Cuerpo del Contenido */}
          <div className="prose prose-zinc prose-lg mx-auto">
            <p className="text-xl text-zinc-600 leading-relaxed mb-8 font-medium">
              Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió, el teu títol flamant, i de sobte, un avi et diu: <span className="text-zinc-900 font-bold italic">"Nena, em fa mal el panxell i vull una tirita"</span>. Pànic? Zero.
            </p>
            
            <p className="text-zinc-600 leading-relaxed mb-8">
              Girona té una màgia especial, i el seu vocabulari als passadissos d'hospital també. No n'hi ha prou amb saber com posar una via o extreure sang; cal entendre què et demana el pacient per curar-lo i connectar-hi humanament.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">1</div>
              El teu kit d'emergència lingüística
            </h2>

            <div className="space-y-4 mb-12">
              {[
                { term: 'Panxell', desc: 'No és una panxa petita. És el bessó de la cama. Si els fa mal, pensa en problemes de circulació.' },
                { term: 'Tirita / Tireta', desc: 'Un clàssic. L\'apòsit o tireta de tota la vida que necessites per a qualsevol ferida petita.' },
                { term: 'Sofraja', desc: 'La part del darrere del genoll. Si sents això i saps què vol dir, ja ets pràcticament gironina d\'adopció.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex gap-4 items-start group hover:border-blue-200 transition-colors">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-lg">{item.term}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-zinc-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap size={120} />
               </div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <Sparkles className="text-blue-400" /> Aprèn català amb context real
                 </h3>
                 <p className="text-zinc-400 mb-8 leading-relaxed">
                   A <strong>cursos.cat</strong> sabem que l'empatia comença per parlar l'idioma del pacient. El nostre Tutor IA et prepara per a aquestes situacions reals amb simulacions interactives.
                 </p>
                 <a href="#" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                   Prova el Tutor IA <ChevronRight size={18} />
                 </a>
               </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="py-12 border-t border-zinc-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-900 font-bold">
            <GraduationCap size={20} className="text-blue-600" />
            <span>cursos.cat</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400 font-medium">
             <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
