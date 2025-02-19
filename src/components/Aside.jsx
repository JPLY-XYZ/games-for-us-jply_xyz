import {
  CalendarClock,
  Gamepad2,
  Home,
  ListChecks,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <>
      <div className=" hidden md:flex flex-col items-center">
        <Gamepad2 className="w-16 h-16 mb-2" />
        <h1 className="text-xl font-bold">GAMES FOR US</h1>
        <hr className="my-4 border-blue-600 border-1 w-[60%]" />
        <p className="text-sm">JPLY</p>
        <hr className="my-4 border-blue-600 border-2 w-[100%]" />
      </div>

      <div className="grid md:grid-cols-1 grid-cols-4 md:grid-rows-4 gap-4">
        <Link
          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          to="/"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
            <Home />
            <span className="hidden sm:inline ml-2">Home</span>
          </div>
        </Link>
        <Link
          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          to="/buscador"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <Search />
            <span className="hidden sm:inline">Buscador</span>
          </div>
        </Link>
        <Link
          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          to="/juegos-favoritos"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <ListChecks />
            <span className="hidden sm:inline">Juegos Favoritos</span>
          </div>
        </Link>
        <Link
          className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          to="/juegos-pendientes"
        >
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-4">
            <CalendarClock />
            <span className="hidden sm:inline">Juegos Pendientes</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Aside;
