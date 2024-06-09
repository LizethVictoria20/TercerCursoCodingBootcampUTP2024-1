import { Button } from "./components/Button.jsx";
import { Contador } from "./components/Contador.jsx";
import { useState } from 'react';

function App() {
  const [count, setCounter] = useState(0)
  
  const aumentarContador = () => {
    setCounter(count + 1)
  }
  const resetContador = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <Contador count={count} />
      <Button text='Click' manejarClick={aumentarContador} queBoton={true}/>
      <Button text='Reset' manejarClick={resetContador} queBoton={false}/>
    </div>
  );
}

export default App;


