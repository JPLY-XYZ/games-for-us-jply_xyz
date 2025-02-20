import {
  Accessibility,
  AlignVerticalDistributeStart,
  Apple,
} from "lucide-react";

function Card({ mediaQuery, title, releaseDate, imgUrl }) {
  return (
    <article className={"items-center rounded-xl  bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 " + mediaQuery}
    >
      
        <div className="relative overflow-hidden rounded-xl">
          <img className="object-cover w-full h-full" src={imgUrl} alt={title} />
        </div>

        <div className="mx-auto mt-1 p-2">
          <h2 className="text-slate-700">{title}</h2>
          <p className="mt-1 text-sm text-slate-400">{releaseDate}</p>
          <div className="flex py-3 text-black">
            <Accessibility />
            <Accessibility />
            <Accessibility />
            <Accessibility />
            <Accessibility />
          </div>
          <div className=" flex justify-center items-end gap-2 sm:justify-end">
            <div className="p-2 bg-amber-100">
              <AlignVerticalDistributeStart />
            </div>
            <div className="p-2 bg-amber-100">
              <Apple />
            </div>
          </div>
        </div>
      
    </article>
  );
}

export default Card;
