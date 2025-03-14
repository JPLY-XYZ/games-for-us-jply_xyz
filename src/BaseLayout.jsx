import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import { Link } from "react-router-dom";

function BaseLayout({ children }) {
  return (
    <>
    
      <div className="md:grid w-full md:grid-cols-[256px_auto] overflow-hidden">
        <aside className=" md:relative fixed bottom-0 left-0 w-full h-auto bg-[var(--aside-card-background)] p-6 md:h-screen md:w-64 z-10 md:order-first ">
          <Aside />
        </aside>
        <main className="flex items-center justify-center w-full order-first md:order-none z-0 md:pb-15 pb-25 mx-auto overflow-y-auto h-screen">
          {children}
          <Link
            to={"/howtouse"}
            className="fixed sm:bottom-15 sm:right-3 bottom-25 right-3 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg text-lg hover:bg-blue-600 transition"
          >
            ?
          </Link>
        </main>

        <footer className="hidden text-end md:block w-full bg-[var(--header-footer-background)] px-6 py-2 fixed bottom-0 left-0 mt-16 md:mt-4">
          <a
            className="text-sm hover:underline"
            href="https://github.com/JPLY-XYZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2025 JPLY 
          </a>
          | Todos los derechos reservados | GAMES FOR US V-1.5.3
        </footer>
      </div>
    </>
  );
}

export default BaseLayout;
