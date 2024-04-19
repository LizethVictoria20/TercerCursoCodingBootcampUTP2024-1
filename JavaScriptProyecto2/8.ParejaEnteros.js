/*
- Fecha de publicación: 16.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 64
- Autores: Ing(c):   Luisa Victoria, Lizeth Victoria, Andrea Zapata, Juan Manuel Hurtado, Santiago Castaño, Andres Jaramillo, Camilo
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
    Utilizando ciclos anidados que generen las siguientes parejas de enteros
        Output:0 1
              1 1
              2 2
              3 2
              4 3
              5 3
              6 4
              7 4
              8 5
              9 5
*/

function ParejaEnteros(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
          console.log(i * 2 + j, i + 1);
        }
      }
}
ParejaEnteros()
