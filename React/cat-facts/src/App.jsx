import React from 'react';
import { UseGatito } from "./useGatito.js";
import { useFact } from "./useFact.js";
import { Button } from "./button.jsx";

function App() {
  const { gatitos, fetchGatitos } = UseGatito('https://api.thecatapi.com/v1/images/search');
  const { fact, fetchFact } = useFact('https://catfact.ninja/fact');

  const handleClick = () => {
    fetchGatitos();
    fetchFact();
  };

  return (
    <div className="App">
      <h1>Little cats</h1>
      <div>{gatitos?.map((gatito) => <img src={gatito.url} key={gatito.id} alt="" />)}</div>
      <p>{fact}</p>
      <div>
        <Button onClick={handleClick} text="Press" />
      </div>
    </div>
  );
}

export default App;