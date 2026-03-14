import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";

const Home = () => (
  <>
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Benvinguts a <span className="text-indigo-600">cursos.cat</span>
        </h1>
        <p className="text-xl text-slate-600">
          La primera plataforma d'immersió lingüística impulsada 100% per IA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/dash" className="px-8 py-4 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
            <Sparkles size={20} /> Mapa Estratègic
          </Link>
          <Link to="/blog" className="px-8 py-4 text-lg font-bold text-indigo-600 bg-white border-2 border-indigo-100 hover:border-indigo-300 rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
            <BookOpen size={20} /> Llegir el Blog
          </Link>
        </div>
      </div>
    </div>
    <Analytics />
  </>
);

export default Home;