import { useEffect, useState } from "react";
import Card  from "./Cards.jsx";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch: ${error.message}`);
      });
  };

  //Le decimos que se renderice una unica vez
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
        <Card characters={characters} />
        <div>Hlis</div>
    </div>
  )
}

export default RenderAPI;
