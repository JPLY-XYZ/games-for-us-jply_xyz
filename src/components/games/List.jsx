import { useEffect, useState } from "react";
import Card from "./Card";

function List({ apiEndpoint, isOnlyFive, search }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading state
      const savedUser = localStorage.getItem("user");
  
      const method = savedUser ? "POST" : "GET";
      const body = savedUser ? savedUser : undefined;
  
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}${apiEndpoint}?search=${search}`,
          {
            method,
            headers: {
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.VITE_CLIENT_API_KEY
            },
            body,
          }
        );
  
        if (!response.ok) {
          throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };
  
    fetchData();
  }, [apiEndpoint]);
  

  

  if (loading) return <p className="text-2xl mt-10">Cargando...</p>;
  if (error) return <p className="text-2xl mt-10">Error: {error}</p>;
  if (items.length === 0) return <p className="text-2xl mt-10">No se encontraron resultados.</p>;

  return (
    <div className=" mx-auto grid disenio grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.name}
          releaseDate={item.released}
          imgUrl={item.background_image}
          platforms={item.platforms}
          images={item.images}
          btnStatus={item.btnStatus}
        />
      ))}
      {isOnlyFive && (
        <>
          <Card
            title="Proximamente"
            releaseDate="Proximamente"
            imgUrl="https://img.pixers.pics/pho_wat(s3:700/FO/33/64/42/00/1/700_FO336442001_0f7a342e186113500b5232b8d116a614,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/fotomurales-gadget-iconos-vector-patron-sin-fisuras-dibujado-a-mano-doodle-articulos-de-juegos-de-ordenador-videojuegos-de-fondo.jpg.jpg"
            mediaQuery="hidden sm:flex md:flex xl:flex 2xl:hidden"
          />
          <Card
            title="Proximamente"
            releaseDate="Proximamente"
            imgUrl="https://img.pixers.pics/pho_wat(s3:700/FO/33/64/42/00/1/700_FO336442001_0f7a342e186113500b5232b8d116a614,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/fotomurales-gadget-iconos-vector-patron-sin-fisuras-dibujado-a-mano-doodle-articulos-de-juegos-de-ordenador-videojuegos-de-fondo.jpg.jpg"
            mediaQuery="hidden sm:hidden md:hidden xl:flex 2xl:hidden"
          />
          <Card
            title="Proximamente"
            releaseDate="Proximamente"
            imgUrl="https://img.pixers.pics/pho_wat(s3:700/FO/33/64/42/00/1/700_FO336442001_0f7a342e186113500b5232b8d116a614,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/fotomurales-gadget-iconos-vector-patron-sin-fisuras-dibujado-a-mano-doodle-articulos-de-juegos-de-ordenador-videojuegos-de-fondo.jpg.jpg"
            mediaQuery="hidden sm:hidden md:hidden xl:flex 2xl:hidden"
          />
        </>
      )}
    </div>
  );
}

export default List;
