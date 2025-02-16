import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



function AuthHeaderButton() {

  const { isAuthenticated, user, login, logout } = useAuth();
    
  if (isAuthenticated) {
    return (<div className="flex justify-end"><button onClick={logout} className="px-4 py-2 text-sm font-medium text-black bg-black rounded-md hover:bg-gray-900" >Cerrar sesion</button></div>);
  } else {
    return (
      <div className="flex justify-end">
        <Link
          className="px-4 py-2 text-sm font-medium text-black bg-black rounded-md hover:bg-gray-900"
          to="/register"
        >
          Crear cuenta
        </Link>
        <Link
          className="px-4 py-2 text-sm font-medium text-black bg-black rounded-md hover:bg-gray-900"
          to="/login"
        >
          Iniciar sesion
        </Link>
      </div>
    );
  }
}

export default AuthHeaderButton;
