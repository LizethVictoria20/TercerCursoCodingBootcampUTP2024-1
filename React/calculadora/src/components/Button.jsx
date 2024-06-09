import React from 'react';
import '../styles/Button.css';

export function Button(props) {
    return (
      // Recibe una función dentro de otra funcion para poder ir acumulando valores que se la pasan por medio de parametros
      <button onClick={() => props.agregarNum(props.children)}>{props.children}</button>
    );
}