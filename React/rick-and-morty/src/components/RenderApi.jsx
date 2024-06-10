import { useEffect, useState } from "react";
import Card from "./Cards.jsx";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);
  const apiCharacters = "https://rickandmortyapi.com/api/character";
  let imgAlterEgo;
  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const characters = res.results;

        // eslint-disable-next-line array-callback-return
        characters.map((data) => {
          // console.log("Img 1", data.image);

          // separando el nombre de los personajes para concatenarlo a la API
          const splitName = data.name.split(" ")[0];
          const urlAlterEgo = `${apiCharacters}?name=${splitName}`;

          //Haciendo fetch de la segunda API
          fetch(urlAlterEgo)
            .then((res) => res.json())
            .then((res) => {
              const alterEgo = res.results;
              if (alterEgo.length > 1) {
                imgAlterEgo = res.results[1].image;
              }
            });
        });

        setCharacters(characters);
      })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch: ${error.message}`);
      });
  };

  //Le decimos que se renderice una unica vez
  useEffect(() => {
    fetchCharacters(apiCharacters);
  }, []);
  console.log(imgAlterEgo);
  return (
    <>
      <Card characters={characters} alterEgo={imgAlterEgo} />
    </>
  );
}

export default RenderAPI;
