import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";


function BaseLayout({ children }) {
  return (
    <>
      <header className="fixed top-0 z-10 left-0 w-full  bg-gray-900 text-white px-6 py-2 ">
        <Header />
      </header>
      
      <div className="md:grid w-full md:grid-cols-[256px_auto] overflow-hidden">
      <aside className=" md:relative fixed bottom-0 left-0 w-full h-auto bg-gray-800 text-white p-6 md:h-screen md:w-64 z-10 md:order-first ">
       <Aside />
      </aside>      
      <main className="flex items-center justify-center w-full order-first md:order-none z-0 md:pb-15 pb-25 pt-20 md:pt-20 mx-auto overflow-y-auto h-screen " >
        {children}
        </main>  
        <footer className="hidden md:block w-full bg-gray-900 text-white px-6 py-2 fixed bottom-0 left-0 mt-16 md:mt-4">
        esto es el footer holaaaa
      </footer>
      </div>   
      
    </>
  );
}

export default BaseLayout;  
