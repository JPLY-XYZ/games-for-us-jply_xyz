import {
  CalendarClock,
  Gamepad2,
  Home,
  ListChecks,
  Search,
} from "lucide-react";

function Aside() {
  return (
    <>
      <div className=" hidden sm:flex flex-col items-center">
        <Gamepad2 className="w-16 h-16 mb-2" />
        <h1 className="text-xl font-bold">GAMES FOR US</h1>
        <hr className="my-4 border-blue-600 border-1 w-[60%]" />
        <p className="text-sm">JPLY</p>
        <hr className="my-4 border-blue-600 border-2 w-[100%]" />
      </div>

      <div className="grid sm:grid-cols-1 grid-cols-4 md:grid-rows-4 gap-4">
        <button className="flex items-center  px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none gap-2">
          <Home />
          <span className="hidden md:inline">Home</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none gap-2">
          <Search />
          <span className="hidden md:inline">Buscador</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none gap-2">
          <ListChecks />
          <span className="hidden md:inline">Lista A</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none gap-2">
          <CalendarClock />
          <span className="hidden md:inline">Lista B</span>
        </button>
      </div>
    </>
  );
}

export default Aside;
