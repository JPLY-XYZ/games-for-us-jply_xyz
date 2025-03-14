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
  if (error) return <p className="text-2xl mt-10">Error: RAWG API LIMIT REACHED</p>;
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
            imgUrl={
              window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? new URL("../../assets/ImagenJuegoNotFound-oscuro.jpg", import.meta.url).href
                : new URL("../../assets/ImagenJuegoNotFound-claro.jpg", import.meta.url).href
            }
            mediaQuery="hidden sm:flex md:flex xl:flex 2xl:hidden"
          />
          <Card
            title="Proximamente"
            releaseDate="Proximamente"
            imgUrl={
              window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? new URL("../../assets/ImagenJuegoNotFound-oscuro.jpg", import.meta.url).href
                : new URL("../../assets/ImagenJuegoNotFound-claro.jpg", import.meta.url).href
            }
            mediaQuery="hidden sm:hidden md:hidden xl:flex 2xl:hidden"
          />
          <Card
            title="Proximamente"
            releaseDate="Proximamente"
            imgUrl={
              window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? new URL("../../assets/ImagenJuegoNotFound-oscuro.jpg", import.meta.url).href
                : new URL("../../assets/ImagenJuegoNotFound-claro.jpg", import.meta.url).href
            }
            mediaQuery="hidden sm:hidden md:hidden xl:flex 2xl:hidden"
          />
        </>
      )}
    </div>
  );
}

export default List;
