import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function NotFound() {
  useEffect(() =>{
      document.title= `Página no encontrada`;
   }, []) 
  return (
    <div className="not-found-container">
      <img src="/src/assets/404.png" alt="Gif de un astronauta perdido" />
      <h1 className="not-found-title text-3xl font-bold text-white">Página no encontrada</h1>
      <p className="not-found-message text-xl text-white">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className=" cursor-pointer not-found-link text-2xl font-semibold text-white hover:underline">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
