import { useEffect, useState } from "react";
import GameButtons from "./Buttons";
import PlatformsIcons from "./PlatformsIcons";

function Card({
  id,
  mediaQuery,
  title,
  releaseDate,
  imgUrl,
  platforms,
  images = [imgUrl],
  btnStatus = { liked: false, saved: false },
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <article
      className={
        "cursor-pointer flex flex-col items-center rounded-xl bg-[var(--aside-card-background)] p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 " +
        mediaQuery
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden text-lg rounded-xl w-full">
        <img
          className="object-cover w-full h-full aspect-[19/12]"
          src={
            isHovered
              ? images[currentImageIndex] ||
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? new URL(
                      "../../assets/ImagenJuegoNotFound-oscuro.jpg",
                      import.meta.url
                    ).href
                  : new URL(
                      "../../assets/ImagenJuegoNotFound-claro.jpg",
                      import.meta.url
                    ).href)
              : imgUrl ||
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? new URL(
                      "../../assets/ImagenJuegoNotFound-oscuro.jpg",
                      import.meta.url
                    ).href
                  : new URL(
                      "../../assets/ImagenJuegoNotFound-claro.jpg",
                      import.meta.url
                    ).href)
          }
          alt={title}
        />
      </div>

      <PlatformsIcons platforms={platforms} />

      <div className="flex flex-col flex-grow p-2 w-full">
        <h2 className="dark:text-slate-300 text-gray-700 font-bold uppercase">
          {title}
        </h2>
        <p className="mt-1 text-sm  dark:text-slate-200">{releaseDate}</p>

        <div className="mt-auto">
          <GameButtons gameId={id} btnStatus={btnStatus} />
        </div>
      </div>
    </article>
  );
}

export default Card;
