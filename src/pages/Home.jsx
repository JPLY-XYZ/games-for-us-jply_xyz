import React from "react";
import List from "../components/games/List";



function Home() {
 
   

  return (
    <div className="flex flex-col flex-initial grow self-start mx-6">
      <p className="text-2xl font-bold">Top 5 juegos de la semana</p>
      <div>
       <List apiEndpoint="/api/games/top5/semana" isOnlyFive={true} />
        <p className="text-2xl font-bold py-4">Top 5 juegos del mes</p>
        <List apiEndpoint="/api/games/top5/mes" isOnlyFive={true} />
        <p className="text-2xl font-bold py-4">Top 5 juegos del año</p>
        <List apiEndpoint="/api/games/top5/anio" isOnlyFive={true} />     
      </div>
    </div>
  );
  
}

export default Home;


