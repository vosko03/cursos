import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next";

const BlogPost = () => {
  useEffect(() => {
    document.title = "Vocabulari per a Infermeres a Girona | cursos.cat";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = "Aprèn el vocabulari clau per treballar d'infermera a Girona. De 'panxell' a 'sofraja', comunica't millor amb els pacients.";
  }, []);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 font-sans selection:bg-rose-200">
      <Link to="/blog" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Tornar al blog
      </Link>
      
      <header className="mb-10 text-center">
        <div className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide mb-4 uppercase">
          Sector Sanitari • SEO Local
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
          Vocabulari de Supervivència per a Infermeres a Girona: De "Nena" a "Tirita"
        </h1>
        <p className="text-slate-500 font-medium">Temps de lectura: 2 minuts</p>
      </header>

      <figure className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
        <img 
          src="https://images.unsplash.com/photo-1657983060174-ce54947f9001?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Cases de l'Onyar a Girona, reflexades a l'aigua" 
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
        />
        <figcaption className="text-center text-sm text-slate-400 mt-2 pb-3 italic">
          Preparada per entendre tots els pacients de les comarques gironines?
        </figcaption>
      </figure>

      <div className="prose prose-lg prose-indigo mx-auto text-slate-700 leading-relaxed space-y-6">
        <p className="text-xl font-medium text-slate-800">
          Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió, el teu títol flamant, i de sobte, un avi et diu: <span className="italic font-bold">"Nena, em fa mal el panxell i vull una tirita"</span>. Pànic? Zero.
        </p>
        <p>
          Girona té una màgia especial, i el seu vocabulari als passadissos d'hospital també. No n'hi ha prou amb saber com posar una via o extreure sang; cal entendre què et demana el pacient per curar-lo i connectar-hi humanament.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">El teu kit d'emergència lingüística:</h2>
        <ul className="bg-slate-50 rounded-xl p-6 space-y-4 border border-slate-100 list-none">
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Panxell"</strong>
              <span>No és una panxa petita. És el <b>bessó de la cama</b>. Si els fa mal, pensa en problemes de circulació, no en digestions pesades!</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Tirita" / "Tireta"</strong>
              <span>Un clàssic. L'apòsit o tireta de tota la vida.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-rose-500 font-bold">👉</span>
            <div>
              <strong className="text-slate-900 block">"Fer mal a la sofraja"</strong>
              <span>La part del darrere del genoll. Si sents això i saps què vol dir, ja ets pràcticament gironina d'adopció.</span>
            </div>
          </li>
        </ul>

        <p className="mt-8 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-indigo-900 shadow-inner">
          A <strong>cursos.cat</strong> sabem que l'empatia comença per parlar l'idioma del pacient. Per això, el nostre Tutor IA et prepara per a aquestes situacions reals amb pacients virtuals simulats.
        </p>

        <div className="text-center mt-10">
          <Link to="/dash" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-800 transition-colors shadow-lg">
            Vols practicar? Prova l'estratègia
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
