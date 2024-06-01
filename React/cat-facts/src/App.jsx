import React from 'react';
import './App.css'
import { UseGatito } from "./components/useGatito.js";
import { useFact } from "./components/useFact.js";
import { Button } from "./components/button.jsx";

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
      <div className="img_cat">
        {gatitos?.map((gatito) => <img src={gatito.url} key={gatito.id} alt="" />)}
      </div>
      <p className="fact_cat">{fact}</p>
      <div>
        <Button onClick={handleClick} text="Reload" />
      </div>
    </div>
    
  );
}

export default App;