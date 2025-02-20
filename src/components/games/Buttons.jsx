import { CalendarHeart, CalendarX2, Heart, HeartOff } from "lucide-react";
import { useState } from "react";

function GameButtons() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className=" flex pt-3 flex-row sm:flex-col sm:gap-2 gap-0.5 justify-center ">
      <div
        className="flex justify-center gap-2 p-2 bg-black"
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <HeartOff className="text-red-500 animate-pulse" />
        ) : (
          <Heart />
        )}
        {liked ? (
          <p className="line-through text-red-500">FAVORITOS</p>
        ) : (
          <p>FAVORITO</p>
        )}
      </div>
      <div
        className="flex justify-center gap-2 p-2 bg-black"
        onClick={() => setSaved(!saved)}
      >
        {saved ? (
          <CalendarX2 className="text-red-500 animate-pulse" />
        ) : (
          <CalendarHeart />
        )}
        {saved ? (
          <p className="line-through text-red-500">GUARDADOS</p>
        ) : (
          <p>GUARDAR</p>
        )}
      </div>
    </div>
  );
}

export default GameButtons;
