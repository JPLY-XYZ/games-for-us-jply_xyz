import React from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
function BaseLayout({ children }) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white px-6 py-2 ">
        <Header />
      </header>
      <aside className="fixed bottom-0 left-0 w-full h-auto bg-gray-800 text-white p-6 md:top-0 md:left-0 md:h-screen md:w-64 md:order-first ">
       <Aside />
      </aside>      
      <main className="h-full md:ml-64 order-first md:order-none z-0" style={{marginTop: '4rem', marginBottom: '5rem'}}>
        {children}
      </main>     
      <footer className="hidden md:block w-full bg-gray-900 text-white px-6 py-2 fixed bottom-0 left-0 mt-16 md:mt-4">
        esto es el footer holaaaa
      </footer>
    </>
  );
}

export default BaseLayout;
