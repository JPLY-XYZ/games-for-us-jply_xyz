import React, { createContext, useState, useContext, useEffect } from "react";
import { encryptJSON } from "../lib/cryptoUtils";
import toast from "react-hot-toast";

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
      fetch(import.meta.env.VITE_API_URL + "/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: savedUser,
      })
        .then((response) => response.json()) // ✅ Resolvemos la promesa
        .then(({body}) => {
          setUser(JSON.parse(body));
          setIsAuthenticated(true);
          console.log("Login exitoso");
        })
        .catch((error) => {
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

    const encryptedResult = encryptJSON(
      userData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      const { body } = await response.json();

      setUser(JSON.parse(body.userData));
      setIsAuthenticated(true);
      localStorage.setItem("user", body.loginToken); // Crear el item en el localStorage

      console.log("Login exitoso");
    }
  };

  const register = async (email, password, fullName, nickName) => {
    // Crear el objeto de datos del usuario
    const newUserData = {
      email: email,
      password: password,
      fullName: fullName,
      nickName: nickName
    };

      const encryptedResult = encryptJSON(
      newUserData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (response.status == 406) {
      throw new Error("El correo ya está en uso");
    }
    

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    

    if (response.ok) {
      const { body } = await response.json();

      setUser(JSON.parse(body.userData));
      setIsAuthenticated(true);
      localStorage.setItem("user", body.loginToken); // Crear el item en el localStorage

      console.log("Registro exitoso");
    }
  };

  //Atualizar  datos usuario

  const updateEmail = async (email) => {
    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario
    const newUpdatedData = {
      email: email,
      usuarioId: savedUser
    };

    console.log("User data:", newUpdatedData);

    const encryptedResult = encryptJSON(
      newUpdatedData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/config/mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  }; 

  const updateNickName = async (nickName) => {
    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario
    const newUpdatedData = {
      nickName,
      usuarioId: savedUser
    };

    const encryptedResult = encryptJSON(
      newUpdatedData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/config/nickName",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  }; 


  const updateFullName = async (fullName) => {
    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario
    const newUpdatedData = {
      fullName,
      usuarioId: savedUser
    };


    const encryptedResult = encryptJSON(
      newUpdatedData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/config/fullName",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  }; 

  const updatePassword = async (password) => {
    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario
    const newUpdatedData = {
      password,
      usuarioId: savedUser
    };

    const encryptedResult = encryptJSON(
      newUpdatedData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/config/passwd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: JSON.stringify(encryptedResult),
      }
    );

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  }; 

  const updateOrSyncSteamGames = async (steamId64) => {



    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300000); 

    
 
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/games/moreInfo?steamId64="+steamId64,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
        },
        body: savedUser,  
        signal: controller.signal, // Agregar el `signal` del AbortController
      }
    );
    clearTimeout(timeoutId);
    if (!response.ok) {
      return error;
  }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  }; 

  const logout = () => {
    setUser(null);
    toast(<b>Sesion cerrada!</b>, {
      icon: '👋',
    });
    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Limpiar el localStorage
  };



  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register, updateEmail, updateNickName, updateFullName, updatePassword,updateOrSyncSteamGames}}>
      {children}
    </AuthContext.Provider>
  );
};

// Crear un hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
