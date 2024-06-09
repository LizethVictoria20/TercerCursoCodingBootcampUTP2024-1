import React from 'react';
import '../styles/Button.css';


export function Button({ text, manejarClick, queBoton }) {
    return (
      <div>
        <button className = {queBoton ? 'Click' : 'Reset'}
          onClick={manejarClick}>
          {text}
        </button>
      </div>
    );
}
