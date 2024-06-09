import React from 'react';
import "../styles/Contador.css";


export function Contador({count}) {
    return (
        <div className='containerContador'>
            <p>{count}</p>
        </div>
    )
}