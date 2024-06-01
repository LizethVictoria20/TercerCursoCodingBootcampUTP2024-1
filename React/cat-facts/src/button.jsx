import { useEffect, useState } from "react";
import { UseGatito } from "./useGatito";


export const Button = (props) => {
    const { gatito, fetchGatito } = UseGatito();

//     const handleClick = () => {
//         fetchGatito();
//     }
//     useEffect(() => {
//     fetchGatito(); // Opcional: Llamar fetchGatito al montar el componente para obtener una imagen inicial
//   }, []);


//     return (
//         <div>
//             <button onClick={handleClick}>{props.text}</button>
//         </div>
//     )
}
