import React, { useEffect, useState } from "react";
import List from "../components/games/List";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

function Guardados() {
  useEffect(() =>{
      document.title= `Guardados`;
   }, []) 
  
  const [search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    setSearchParam(search);
  };

  return (
    <div className="flex flex-col h-full flex-initial grow self-start mx-6 overflow-hidden">
      <div>
        <div className="m bg-[var(--header-footer-background)] px-6 py-2">
          <form
            class="flex items-center max-w-lg ml-auto"
            onSubmit={handleSubmit}
          >
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Gamepad2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                required=""
                placeholder="Buscar..."
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="voice-search"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                class="absolute inset-y-0 end-0 flex items-center pe-3"
                type="button"
              ></button>
            </div>
            <button
              class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-4 me-2"
              >
                <path
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="overflow-auto h-screen">
        <div className=" mx-auto">
          <List
            key={searchParam}
            apiEndpoint="/api/games/saved/get"
            search={searchParam}
          />
        </div>
      </div>
    </div>
  );
}

export default Guardados;
