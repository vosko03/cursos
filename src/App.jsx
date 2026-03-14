import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';

// Este es el componente de tu nueva página principal
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Benvinguts a <span className="text-indigo-600">cursos.cat</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10">
          La plataforma d'immersió lingüística impulsada per IA.
        </p>
        
        {/* Aquí está el link que lleva al Dashboard */}
        <Link 
          to="/dash" 
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Veure Mapa Estratègic
        </Link>
      </div>
    </div>
  );
};

// Este es el enrutador que decide qué página mostrar
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta para el mapa estratégico */}
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;