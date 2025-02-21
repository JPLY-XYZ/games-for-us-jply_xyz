import { CalendarHeart, CalendarX2, Heart, HeartOff } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function GameButtons({btnStatus}) {

  const { isAuthenticated } = useAuth();

  const [liked, setLiked] = useState(btnStatus.liked);
  const [saved, setSaved] = useState(btnStatus.saved);


  return (
    <div className=" flex pt-3 flex-row sm:flex-col sm:gap-2 gap-0.5 justify-center grow">
      <div
        className=" text-white  cursor-pointer flex justify-center gap-2 p-3 bg-[var(--butons-color)] hover:bg-[var(--butons-color-hover)] rounded-lg "
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <Heart className="text-red-500 animate-pulse" />
        ) : (
          <Heart />
        )}
        {liked ? (
          <p className="">ELIMINAR</p>
        ) : (
          <p>FAVORITO</p>
        )}
      </div>
      <div
        className="flex cursor-pointer text-white justify-center gap-2 p-3 bg-[var(--butons-color)] hover:bg-[var(--butons-color-hover)] rounded-lg"
        onClick={() => setSaved(!saved)}
      >
        {saved ? (
          <CalendarX2 className="text-red-500 animate-pulse" />
        ) : (
          <CalendarHeart />
        )}
        {saved ? (
          <p className="">ELIMINAR</p>
        ) : (
          <p>GUARDAR</p>
        )}
      </div>
    </div>
  );
}

export default GameButtons;
