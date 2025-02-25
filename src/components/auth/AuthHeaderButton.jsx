import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { User, LogOut, Settings, LogIn, AtSign } from "lucide-react";

function AuthHeaderButton() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);


  const excludedRef = useRef(null); 

  useEffect(() => {
   
    const handleClickOutside = (event) => {
      if (excludedRef.current && !excludedRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

 
    document.addEventListener('click', handleClickOutside);

  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); 

  
  return (
    
    <div ref={excludedRef} className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          
          className="flex items-center gap-2 p-2 rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-300  dark:bg-gray-700 dark:hover:bg-gray-800 transition"
        >
          {isAuthenticated ? (
            <>
              <img
                src={user?.avatar_url}
                alt="User"
                className="w-8 h-8 rounded-full "
              />
              <span className="hidden sm:inline">{user?.nickName}</span>
            </>
          ) : (
            <>
              <User className="w-8 h-8" />
              <span className="hidden sm:inline">Iniciar sesión</span>
            </>
          )}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 dark:bg-gray-800  bg-white shadow-lg rounded-xl overflow-hidden z-50">
            <ul>
              {isAuthenticated ? (
                <>
                <Link to="/configure">
                  <li className="p-3 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                    <Settings className="w-4 h-4" /> Configuración
                  </li>
                </Link>
                  <li
                    onClick={() => {logout(); setIsOpen(!isOpen);  }}

                    className="p-3 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Cerrar sesión
                  </li>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="p-3  hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
                      <LogIn className="w-4 h-4" />
                      Iniciar sesión
                    </li>
                  </Link>
                  <Link to="/register">
                    <li className="p-3 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
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
