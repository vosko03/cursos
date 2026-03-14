import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

const BlogIndex = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans selection:bg-indigo-200">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Tornar a l'inici
          </Link>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              El Blog de <span className="text-indigo-600">cursos.cat</span>
            </h1>
            <p className="text-xl text-slate-600">
              Consells, vocabulari i notícies per a la teva integració a Catalunya.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.unsplash.com/photo-1700299926955-d68c16ba107b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTM2MDJ8MHwxfGFsbHx8fHx8fHx8fDE3NzM1MjQ2MTZ8&ixlib=rb-4.1.0&q=80&w=600" 
                  alt="Vista de Girona" 
                  className="h-full w-full object-cover min-h-[250px]"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 uppercase w-max">
                  Sector Sanitari • SEO Local
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-indigo-600 transition-colors">
                  <Link to="/blog/vocabulari-catala-infermeres-girona">
                    Vocabulari de Supervivència per a Infermeres a Girona: De "Nena" a "Tirita"
                  </Link>
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  Has arribat a l'Hospital Trueta o al Santa Caterina amb tota la il·lusió, el teu títol flamant, i de sobte, un avi et diu: "Nena, em fa mal el panxell i vull una tirita". Pànic? Zero. Descobreix el teu kit d'emergència lingüística.
                </p>
                <Link to="/blog/vocabulari-catala-infermeres-girona" className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors mt-auto">
                  Llegir l'article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
};

export default BlogIndex;