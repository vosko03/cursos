import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos todas nuestras páginas separadas
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/vocabulari-catala-infermeres-girona" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;