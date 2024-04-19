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
  Presenta la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
    Output: 1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765
*/


function Fibonacci(){
    let FirstPos = 0; //Guarda el primer valor de Fibonacci
    let SecodPos = 1; //Guarda el segundo valor de Fibonacci
    let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos
    let array = [];
    for(let i = 0; i < 19; i++){
        if(FirstPos < 10000){
            suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
            FirstPos = SecodPos; //Se sobreescriben los valores iniciales
            SecodPos = suma;//Se sobreescriben los valores iniciales
            array.push(suma)
        }
        else {
            console.log("Terminó")
        }
    }
    console.log(array.toString())
}
Fibonacci()
