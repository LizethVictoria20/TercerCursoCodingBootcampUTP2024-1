import { Button } from "./components/Button.jsx";
import { Contador } from "./components/Contador.jsx";
import { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);

  const aumentarContador = () => {
    setCounter(count + 1);
  };

  const disminirContador = () => {
    setCounter(count - 1);
  };

  const resetContador = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Contador count={count} />
      <div>
        <Button text="+" manejarClick={aumentarContador} queBoton={true} />
        <Button text="-" manejarClick={disminirContador} queBoton={true} />
      </div>
      <Button text="Reset" manejarClick={resetContador} queBoton={false} />
    </div>
  );
}

export default App;
