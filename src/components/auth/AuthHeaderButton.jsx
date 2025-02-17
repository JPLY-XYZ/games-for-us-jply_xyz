import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { Menu, X, User, LogOut, Settings, LogIn, AtSign } from "lucide-react";

function AuthHeaderButton() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  const excludedRef = useRef(null); // Referencia al área específica que queremos excluir

  useEffect(() => {
    // Función para manejar clics globales
    const handleClickOutside = (event) => {
      if (excludedRef.current && !excludedRef.current.contains(event.target)) {
        setIsOpen(false); // Cerrar si el clic está fuera del área específica
      }
    };

    // Agregar el listener de clic global
    document.addEventListener('click', handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // El array vacío asegura que este efecto se ejecute una sola vez

  
  return (
    
    <div ref={excludedRef} className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          
          className="flex items-center gap-2 bg-gray-200 p-2 rounded-xl hover:bg-gray-300 transition"
        >
          {isAuthenticated ? (
            <>
              <img
                src={user?.avatar_url}
                alt="User"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="hidden sm:inline">{user?.nickname}</span>
            </>
          ) : (
            <>
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Iniciar sesión</span>
            </>
          )}

          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl overflow-hidden z-50">
            <ul className="text-gray-700">
              {isAuthenticated ? (
                <>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                    <Settings className="w-4 h-4" /> Configuración
                  </li>
                  <li
                    onClick={() => {logout(); setIsOpen(!isOpen);  }}

                    className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Cerrar sesión
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                      <LogIn className="w-4 h-4" />
                      Iniciar sesión
                    </li>
                  </Link>
                  <Link to="/register">
                    <li className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                      <AtSign className="w-4 h-4" />
                      Crear cuenta
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
 
  );
}

export default AuthHeaderButton;
