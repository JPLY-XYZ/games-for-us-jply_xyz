
import GameButtons from "./Buttons";
import PlatformsIcons from "./PlatformsIcons";

function Card({ mediaQuery, title, releaseDate, imgUrl }) {
  return (
    <article
      className={
        "items-center rounded-xl  bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 " +
        mediaQuery
      }
    >
      <div className="relative overflow-hidden rounded-xl">
        <img className="object-cover w-full h-full" src={imgUrl} alt={title} />
      </div>
      <PlatformsIcons />
      <div className="mx-auto p-2">
        <h2 className="text-slate-700 text-2xl font-bold uppercase">{title}</h2>
        <p className="mt-1 text-sm text-slate-400">{releaseDate}</p>

        <GameButtons />
      </div>
    </article>
  );
}

export default Card;
