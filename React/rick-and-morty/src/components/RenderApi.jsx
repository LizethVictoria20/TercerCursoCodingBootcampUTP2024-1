import { useEffect, useState } from "react";
import Card from "./Cards.jsx";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);

  const apiCharacters = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
      })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch: ${error.message}`);
      });
  };

  const alterEgo = () => {};
  //Tomando iinformacion del alter ego
  // eslint-disable-next-line array-callback-return
  characters.map((character) => {
    const splitName = character.name.split(" ")[0];
    const urlAlter = `${apiCharacters}?name=${splitName}`;
    console.log(urlAlter);
  });

  //Le decimos que se renderice una unica vez
  useEffect(() => {
    fetchCharacters(apiCharacters);
  }, []);

  return (
    <>
      <Card characters={characters} />
    </>
  );
}

export default RenderAPI;
