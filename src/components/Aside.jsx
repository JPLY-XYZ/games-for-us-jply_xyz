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
      <div className=" hidden md:flex flex-col items-center">
        <Gamepad2 className="w-16 h-16 mb-2" />
        <h1 className="text-xl font-bold">GAMES FOR US</h1>
        <hr className="my-4 border-blue-600 border-1 w-[60%]" />
        <p className="text-sm">JPLY</p>
        <hr className="my-4 border-blue-600 border-2 w-[100%]" />
      </div>

      <div className="grid md:grid-cols-1 grid-cols-4 md:grid-rows-4 gap-4">
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none">
          <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
            <Home />
            <span className="hidden sm:inline ml-2">Home</span>
          </div>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none">
        <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
          <Search />
          <span className="hidden sm:inline">Buscador</span>
          </div>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none">
        <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
          <ListChecks />
          <span className="hidden sm:inline">Lista A</span>
          </div>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none">
        <div className="flex items-center justify-center mx-auto md:mx-0 gap-2">
          <CalendarClock />
          <span className="hidden sm:inline">Lista B</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default Aside;
