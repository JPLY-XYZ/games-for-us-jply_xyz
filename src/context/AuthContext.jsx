import React, { createContext, useState, useContext, useEffect } from "react";
import { encryptJSON } from "../lib/cryptoUtils";

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Estado para saber si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Aquí puedes verificar la autenticación, por ejemplo, usando cookies o localStorage
    const savedUser = localStorage.getItem("user");
    console.log(savedUser);
    if (savedUser) {
      fetch(import.meta.env.VITE_API_URL + "/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: savedUser,
      })
      .then(response => {
        if (response.ok) {
          console.log("Autenticación exitosa");
          setUser(savedUser);
          setIsAuthenticated(true);
          console.log("Login exitoso");
        }
      })
      .catch(error => {
        console.error("Error en la autenticación:", error);
      });
    }
  }, []);

  const login = async (email, password, remember) => {
    // Crear el objeto de datos del usuario
    const userData = {
      email: email,
      password: password,
    };

    console.log("User data:", userData);
    console.log("Client API Key:", import.meta.env.VITE_ENCRYPTION_CLIENT_KEY);

    const encryptedResult = encryptJSON(
      userData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    console.log("IV:", encryptedResult.iv);
    console.log("Encrypted Data:", encryptedResult.encryptedData);

    const response = await fetch(import.meta.env.VITE_API_URL + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
      },
      body: JSON.stringify(encryptedResult),
    });

    if (!response.ok) {
      console.log("Error en la solicitud:", response.status);
    }

    if (response.ok) {
      const {body} = await response.json();

      setUser(body);
      setIsAuthenticated(true);
      localStorage.setItem("user", body); // Crear el item en el localStorage

      console.log("Login exitoso");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Limpiar el localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Crear un hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
