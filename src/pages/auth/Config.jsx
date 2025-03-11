import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Config() {

  useEffect(() =>{
    document.title= `Configuración del perfil`;
 }, [])  
  const {isAuthenticated, updateEmail, updateNickName, updateFullName, updatePassword, updateOrSyncSteamGames } = useAuth();
  const navigate = useNavigate(); // hook para navegar
  if (!isAuthenticated
  ) {
    navigate('/');
   }

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newFullName, setNewFullName] = useState("");
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [newNickName, setNewNickName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [steamId64, setSteamId64] = useState("");

  const getUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/auth/config",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
          },
          body: JSON.stringify(user),
        }
      );

      const { body } = await response.json();
      const data = JSON.parse(body);
      setUserData(data);

      // Inicializa los estados con los datos del usuario
      setNewFullName(data.fullName || "");
      setNewAvatarUrl(data.avatar_url || "");
      setNewNickName(data.nickName || "");
      setNewEmail(data.email || "");
      setSteamId64(data.steamId64 || "")
    } catch (error) {
      console.error("Error fetching config:", error);
      setError(error);
      toast.error("Error al cargar los datos del usuario.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    toast.promise(
      updateEmail(newEmail),
       {
         loading: 'Actualizando',
         success: <b>Actualizado !</b>,
         error: <b>No se puede Actualizar.</b>,
       }
     );
    
  };
  const handleUpdateNickName = async (e) => {
    e.preventDefault();
    toast.promise(
      updateNickName(newNickName),
       {
         loading: 'Actualizando',
         success: <b>Actualizado !</b>,
         error: <b>No se puede Actualizar.</b>,
       }
     );
    
  };

  const handleUpdateFullName = async (e) => {
    e.preventDefault();
    toast.promise(
      updateFullName(newFullName),
       {
         loading: 'Actualizando',
         success: <b>Actualizado !</b>,
         error: <b>No se puede Actualizar.</b>,
       }
     );
    
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    toast.promise(
      updatePassword(newPassword),
       {
         loading: 'Actualizando',
         success: <b>Actualizado !</b>,
         error: <b>No se puede Actualizar.</b>,
       }
     );

     setNewPassword('');
     setConfirmNewPassword('');
    
  };

  const handleSteamConnect = async (e) => {

    console.log("actualizando con steamid: " + steamId64);

    e.preventDefault();
    toast.promise(
      updateOrSyncSteamGames(steamId64),
       {
         loading: 'Sincronizando biblioteca, esto puede tardar varios minutos!',
         success: <b>Actualizado !</b>,
         error: <b>No se puede Actualizar.</b>,
       }
     );
  };

  return (
    <>
      <div className="flex sm:flex-row max-w-[600px] flex-col items-center my-auto justify-center sm:gap-20 gap-2.5 bg-gray-500 dark:bg-gray-800 rounded-lg shadow-md sm:p-6 p-4">
        <div>
          <img
            src={newAvatarUrl}
            alt="Logo"
            className="w-32 h-32 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Hola, {newFullName}
          </h2>
          <hr className="my-4 border-blue-600 border-2 w-full" />
        </div>
        <div>
          <h3 className="text-left">Actualizar Email</h3>
          <form
            className="flex items-center justify-between"
            onSubmit={handleUpdateEmail}
          >
            <input
              placeholder="Email address"
              className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button
              className=" cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              <RefreshCw />
            </button>
          </form>
          <hr className="my-4 border-blue-600 border-1 w-full" />
          <h3 className="text-left">Actualizar Nombre</h3>
          <form className="flex items-center justify-between" onSubmit={handleUpdateFullName}>
            <input
              placeholder="Nombre completo"
              className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              maxLength={15}
              value={newFullName}
              onChange={(e) => setNewFullName(e.target.value)}
            />
            <button
              className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              <RefreshCw />
            </button>
          </form>
          <hr className="my-4 border-blue-600 border-1 w-full" />
          <h3 className="text-left">Actualizar NickName</h3>
          <form className="flex items-center justify-between" onSubmit={handleUpdateNickName}>
            <input
              placeholder="NickName"
              className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              maxLength={15}
              value={newNickName}
              onChange={(e) => setNewNickName(e.target.value)}
            />
            <button
              className=" cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              <RefreshCw />
            </button>
          </form>
          <hr className="my-4 border-blue-600 border-1 w-full" />
          <h3 className="text-left">Actualizar Contraseña</h3>
          <form className="flex items-center justify-between" onSubmit={handleUpdatePassword}>
            <div className="flex flex-col gap-3 items-center justify-between">
              <input
                placeholder="Nueva contraseña"
                className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                placeholder="Repetir nueva contraseña"
                className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <button
              className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              <RefreshCw />
            </button>
          </form>
          <hr className="my-4 border-blue-600 border-1 w-full" />
          <h3 className="text-left">Sincronizar con Steam</h3>
          <form className="flex items-center justify-between" onSubmit={handleSteamConnect}>
            <div className="flex flex-col gap-3 items-center justify-between">
              <input
                placeholder="XXXXXXXXXXXXXXXXX"
                className="flex-grow bg-gray-700 text-gray-200 border-0 rounded-md p-2 mr-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                value={steamId64}
                onChange={(e) => setSteamId64(e.target.value)}
              />
              
            </div>
            <button
              className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              <RefreshCw />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


export default Config;
