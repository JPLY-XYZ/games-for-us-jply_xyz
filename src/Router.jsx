import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa tus componentes
import NotFound from './pages/NotFound';


function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>about</h1>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
