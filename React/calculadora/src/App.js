import React from 'react'
import './App.css';
import { Button } from "./components/Button.jsx";
import { Screen } from "./components/Screen.jsx";
import Logo from './img/logoCute.png';
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [num, setNum] = useState('')


  const addValue = (value) => {
    setNum(num + value)
  }

  const operation = () => {
    setNum(evaluate(num))
  }

  const Reset = () => {
    setNum('')
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={Logo}
          className='logo'
          alt='Logo muy bonito' />
      </div>

      <div className='container'>
        <Screen index={num} />
        <div className='rows'>
          <Button agregarNum={addValue}>1</Button>
          <Button agregarNum={addValue}>2</Button>
          <Button agregarNum={addValue}>3</Button>
          <Button agregarNum={addValue}>+</Button>
        </div>
        <div className='rows'>
          <Button agregarNum={addValue}>4</Button>
          <Button agregarNum={addValue}>5</Button>
          <Button agregarNum={addValue}>6</Button>
          <Button agregarNum={addValue}>-</Button>
        </div>
        <div className='rows'>
          <Button agregarNum={addValue}>7</Button>
          <Button agregarNum={addValue}>8</Button>
          <Button agregarNum={addValue}>9</Button>
          <Button agregarNum={addValue}>*</Button>
        </div>
        <div className='rows'>
          <Button agregarNum={operation}>=</Button>
          <Button agregarNum={addValue}>0</Button>
          <Button agregarNum={addValue}>.</Button>
          <Button agregarNum={addValue}>/</Button>
        </div>
        <div className='rows'>
          <Button agregarNum={Reset}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
