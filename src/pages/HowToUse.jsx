function HowToUse() {
  return (
    <div className="flex flex-col flex-initial grow self-start mx-6 mt-6">
  <h2 className="text-3xl font-bold  border-b-2 border-blue-500 pb-2">
    Cómo Usar la Web
  </h2>

  <div className="space-y-6 mt-4">

    <section className="p-6 bg-[var(--aside-card-background)] shadow-md rounded-lg">
      <p className=" text-lg">
        Esta web está pensada para buscar y guardar los juegos actuales o antiguos que más te gusten.
      </p>
    </section>

    <section className="p-6 bg-[var(--aside-card-background)] shadow-md rounded-lg">
      <h3 className="text-2xl font-bold ">HOME</h3>
      <p className="text-lg">En este apartado, tenemos disponibles los juegos destacados de la semana, del mes y del año.</p>
      <p className="text-lg mb-4"> Si pasamos el raton sobre un juego se mostraran imagenes de dicho juego en caso de que existan.</p>
      <img className="sm:w-[80%] w-[95%] mx-auto rounded-lg shadow-md" src="/screenshots/home.png" alt="Home Screenshot" />
    </section>


    <section className="p-6 bg-[var(--aside-card-background)] shadow-md rounded-lg">
      <h3 className="text-2xl font-bold">BUSCADOR</h3>
      <p className="text-lg mb-4" >En este apartado de la web, tenemos disponible un buscador para encontrar la mayoria de juegos disponibles en el momento.</p>
      <img className="sm:w-[80%] w-[95%] mx-auto rounded-lg shadow-md" src="/screenshots/search.png" alt="Search Screenshot" />
    </section>


    <section className="p-6 bg-[var(--aside-card-background)] shadow-md rounded-lg">
      <h3 className="text-2xl font-bold ">JUEGOS FAVORITOS</h3>
      <p className="text-lg" >En este apartado de la web, tenemos el listado de juegos añadidos a favoritos.</p>
      <p className="text-lg mb-4" >Para añadirlo a favoritos solo tenemos que dar al boton favorito en el juego seleccionado.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <img className="w-[60%] rounded-lg shadow-md" src="/screenshots/liked.png" alt="Liked Games" />
        <img className="w-[20%] rounded-lg shadow-md" src="/screenshots/likedGame.png" alt="Liked Game" />
      </div>
    </section>


    <section className="p-6 bg-[var(--aside-card-background)] shadow-md rounded-lg">
      <h3 className="text-2xl font-bold ">JUEGOS GUARDADOS</h3>
      <p className="text-lg" >En este apartado de la web, tenemos el listado de juegos guardados.</p>
      <p className="text-lg" >Para añadirlo a guardados solo tenemos que dar al boton guardar en el juego seleccionado.</p>
      <p className="text-lg mb-4" >Tambien podemos sincronizar nuestra biblioteca de steam, dando al boton sincronizar con Steam.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <img className="sm:w-[80%] w-[95%] rounded-lg shadow-md" src="/screenshots/saved.png" alt="Saved Games" />
        <p className="text-lg my-4" >Debemos añadir nuestro Steamid64 y pulsar en el simbolo de sincronizar.</p>
        <img className="sm:w-[80%] w-[95%] rounded-lg shadow-md" src="/screenshots/savedConfig.png" alt="Saved Config" />
        <p className="text-lg my-4" >Para obtener nuestro Steamid64 simplemente debemos ir al perfil y copiar el numero que aparece en la url.</p>
        <img className="sm:w-[80%] w-[95%] rounded-lg shadow-md" src="/screenshots/steamid64.png" alt="Steam ID" />
      </div>
    </section>
  </div>
</div>

  
  );
}

export default HowToUse;
