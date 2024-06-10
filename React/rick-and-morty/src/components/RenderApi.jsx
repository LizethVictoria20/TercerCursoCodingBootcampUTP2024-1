import { useEffect, useState } from "react";
import AlterEgo from "./AlterEgoRender.jsx";
import Card from "./Cards.jsx";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);
  const apiCharacters = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const characters = res.results;
        // eslint-disable-next-line array-callback-return
        characters.map((data) => {
          const splitName = data.name.split(" ")[0];

          const urlAlterEgo = `${apiCharacters}?name=${splitName}`;

          fetch(urlAlterEgo)
            .then((res) => res.json())
            .then((res) => {});
        });

        setCharacters(res.results);
      })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch: ${error.message}`);
      });
  };

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
