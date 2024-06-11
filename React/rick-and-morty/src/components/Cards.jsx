// Cards.jsx
import React from "react";

const Card = ({ characters, alterEgo }) => {
  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <img src={alterEgo[character.id]} alt={`${character.name} Alter Ego`} />
        </div>
      ))}
    </div>
  );
};

export default Card;
