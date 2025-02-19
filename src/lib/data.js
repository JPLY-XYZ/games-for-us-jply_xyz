

async function getTop5OfWeek(){

    const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/games/top5",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_CLIENT_API_KEY,
          }
        }
      );
  
      if (!response.ok) {
        console.error("Error en la solicitud:", response.status);
        return error;
      }

      const { body } = await response.json();
      const data = JSON.parse(body);

    return data;
}