import { RenderAPI } from "./apiFetch.jsx";
import { Information } from "./Information.jsx";
import "../styles/cards.css";

export function Cards({ props }) {
  const { character } = RenderAPI(
    "https://stand-by-me.herokuapp.com/api/v1/characters"
  );
  const urlImg = "https://jojos-bizarre-api.netlify.app/assets/";

  return (
    <div className="container">
      {character?.map((data) => (
        <div className="card" key={data.id}>
          <h3 className="character-name" id={data.id}>
            {data.name}
          </h3>
          <p>{data.japaneseName}</p>
          <img src={urlImg + data.image} alt="Imagen personaje" />
        </div>
      ))}
    </div>
  );
}
