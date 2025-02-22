import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Importa tus componentes
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Config from './pages/auth/Config';
import Home from './pages/Home';
import Buscador from './pages/Buscador';
import Favorites from './pages/Favorites';
import Guardados from './pages/Guardados';
import { useAuth } from './context/AuthContext';


function Router() {
  const { isAuthenticated } = useAuth();
  
    const navigate = useNavigate(); // hook para navegar
    

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buscador" element={<Buscador />} />
      <Route path="/juegos-favoritos" element={isAuthenticated ? <Favorites /> : <Login />} />
      <Route path="/juegos-pendientes" element={isAuthenticated ? <Guardados /> :<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/configure" element={isAuthenticated ? <Config /> : <Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
