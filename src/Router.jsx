import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa tus componentes
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Config from './pages/auth/Config';
import Home from './pages/Home';


function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/configure" element={<Config />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
