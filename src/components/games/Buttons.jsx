import { CalendarHeart, CalendarX2, Heart, HeartOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { encryptJSON } from "../../lib/cryptoUtils";

function GameButtons({ btnStatus, gameId }) {
  const { isAuthenticated } = useAuth();

  const [liked, setLiked] = useState(btnStatus.liked);
  const [saved, setSaved] = useState(btnStatus.saved);

  const navigate = useNavigate(); // hook para navegar

  const handleChangeStatus = async (change) => {
    console.log("change", change);

    if (change === "liked") {
      setLiked(!liked);

      toast.promise(setLikedStatus("/api/games/favorites", !liked), {
        loading: "Actualizando",
        success: <b>{liked ? "ELIMINADO" : "MARCADO COMO FAVORITO"}!</b>,
        error: <b>No se puede Actualizar.</b>,
      });
    }

    if (change === "saved") {
      setSaved(!saved);
      toast.promise(setLikedStatus("/api/games/saved", !liked), {
        loading: "Actualizando",
        success: <b>{saved ? "ELIMINADO" : "GUARDADO"}!</b>,
        error: <b>No se puede Actualizar.</b>,
      });
    }
  };

  const setLikedStatus = async (endpoind, status) => {
    const savedUser = localStorage.getItem("user");
    // Crear el objeto de datos del usuario

    const newUpdatedData = {
      gameId: gameId,
      status,
      usuarioId: savedUser,
    };
    const encryptedResult = encryptJSON(
      newUpdatedData,
      import.meta.env.VITE_ENCRYPTION_CLIENT_KEY
    );

    const response = await fetch(import.meta.env.VITE_API_URL + endpoind, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
      },
      body: JSON.stringify(encryptedResult),
    });

    if (!response.ok) {
      console.error("Error en la solicitud:", response.status);
      return error;
    }

    if (response.ok) {
      console.log("Actualizacion exitosa");
    }
  };

  return (
    <div className=" flex pt-3 flex-row sm:flex-col sm:gap-2 gap-0.5 justify-center grow">
      <div
        className=" text-white  cursor-pointer flex justify-center gap-2 p-3 bg-[var(--butons-color)] hover:bg-[var(--butons-color-hover)] rounded-lg "
        onClick={() => {
          isAuthenticated ? handleChangeStatus("liked") : navigate("/login");
        }}
      >
        {liked ? <Heart className="text-red-500 animate-pulse" /> : <Heart />}
        {liked ? <p className="">ELIMINAR</p> : <p>FAVORITO</p>}
      </div>
      <div
        className="flex cursor-pointer text-white justify-center gap-2 p-3 bg-[var(--butons-color)] hover:bg-[var(--butons-color-hover)] rounded-lg"
        onClick={() => {
          isAuthenticated ? handleChangeStatus("saved") : navigate("/login");
        }}
      >
        {saved ? (
          <CalendarX2 className="text-red-500 animate-pulse" />
        ) : (
          <CalendarHeart />
        )}
        {saved ? <p className="">ELIMINAR</p> : <p>GUARDAR</p>}
      </div>
    </div>
  );
}

export default GameButtons;
