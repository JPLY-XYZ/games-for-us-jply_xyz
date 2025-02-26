import {
  CalendarClock,
  Gamepad2,
  Home,
  ListChecks,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthHeaderButton from "./auth/AuthHeaderButton";

function Aside() {
  return (
    <>
    <div className="flex flex-col justify-between h-full items-center">
      <div>
      <div className=" hidden md:flex flex-col items-center">
        <Gamepad2 className="w-16 h-16 mb-2" />
        <h1 className="text-4xl font-bold sigmar-regular">GAMES FOR US</h1>
        <hr className="my-4 dark:border-blue-600 border-blue-950 border-1 w-[60%]" />
        <p className="text-md phudu-uniquifier font-bold">POWERED BY JPLY</p>
        <hr className="my-4 dark:border-blue-600 border-blue-950 border-2 w-[100%]" />
      </div>

      <div className="grid md:grid-cols-1 grid-cols-5 md:grid-rows-5 gap-4">
        <Link
          className="flex items-center gap-2 p-2 rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-300  dark:bg-slate-500 dark:hover:bg-slate-600 transition"
          to="/"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
            <Home />
            <span className="hidden sm:inline ml-2">Home</span>
          </div>
        </Link>
        <Link
          className="flex items-center gap-2 p-2 rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-300  dark:bg-slate-500 dark:hover:bg-slate-600 transition"
          to="/buscador"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <Search />
            <span className="hidden sm:inline">Buscador</span>
          </div>
        </Link>
        <Link
          className="flex items-center gap-2 p-2 rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-300  dark:bg-slate-500 dark:hover:bg-slate-600 transition"
          to="/juegos-favoritos"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <ListChecks />
            <span className="hidden sm:inline">Juegos Favoritos</span>
          </div>
        </Link>
        <Link
          className="flex items-center gap-2 p-2 rounded-xl cursor-pointer bg-gray-400 hover:bg-gray-300  dark:bg-slate-500 dark:hover:bg-slate-600 transition"
          to="/juegos-pendientes"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <CalendarClock />
            <span className="hidden sm:inline">Juegos Guardados</span>
          </div>
        </Link>
        <div className="block md:hidden"><AuthHeaderButton /></div>
      </div>
      </div>
      <div className="hidden md:block"><AuthHeaderButton /></div>
      </div>
        
    
    </>
  );
}

export default Aside;
