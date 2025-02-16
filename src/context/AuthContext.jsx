import React, { createContext, useState, useContext, useEffect } from "react";
import CryptoJS from "crypto-js";

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
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password, remember) => {
    // Crear el objeto de datos del usuario
    const userData = {
      email: email,
      password: password,
    };
    const userDataString = JSON.stringify(userData);
    const encrypted = CryptoJS.AES.encrypt(
      userDataString,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    ).toString();

    console.log("Encrypted data:", encrypted);

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
      },
      body: JSON.stringify({ data: encrypted })
    });

    if (!response.ok) {
      console.log("Error en la solicitud:", response.status);
    }

    if (response.ok) {
      // const {data} = await response.json();
      // const decryptedData = CryptoJS.AES.decrypt(
      //   data.data,
      //   import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
      // ).toString(CryptoJS.enc.Utf8);
      // console.log("Decrypted data:", decryptedData);
      // const userData = JSON.parse(decryptedData);

      // console.log("User data:", userData);

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
