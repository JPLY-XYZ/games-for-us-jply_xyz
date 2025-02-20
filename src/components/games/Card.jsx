
import { useEffect, useState } from "react";
import GameButtons from "./Buttons";
import PlatformsIcons from "./PlatformsIcons";

function Card({ mediaQuery, title, releaseDate, imgUrl, platforms, images = [imgUrl] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Cambia la imagen cada 2 segundos
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <article
      className={
        "items-center rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 " +
        mediaQuery
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl w-full" >
        <img
          className="object-cover w-full h-full aspect-[19/12]"
          src={isHovered ? images[currentImageIndex] : imgUrl}
          alt={title}
        />
      </div>
      <PlatformsIcons platforms={platforms} />
      <div className="mx-auto p-2">
        <h2 className="text-slate-700 text-2xl font-bold uppercase">{title}</h2>
        <p className="mt-1 text-sm text-slate-400">{releaseDate}</p>
        <GameButtons />
      </div>
    </article>
  );
}

export default Card;

