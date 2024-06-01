import { UseGatito } from "./useGatito.js";
import { useFact } from "./useFact.js";
import { Button } from "./button.jsx";


function App() {

  const  { gatitos } = UseGatito('https://api.thecatapi.com/v1/images/search');
  const { facts } = useFact('https://catfact.ninja/fact');
  return (
    <div className="App">
      <h1>Little cats</h1>
      <div>{ gatitos?.map((gatito) => <img src={gatito.url} key={gatito.id} alt="" />)}</div>
      <p>{facts.fact}</p>
      <Button  text='Update'/>
    </div>
  );
}

export default App;
