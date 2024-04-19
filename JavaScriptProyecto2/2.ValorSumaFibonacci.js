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
    Imprima el valor de la suma de los elementos de la serie de Fibonacci entre 0 y 100.
        Output: 1,2,3,5,8,13,21,34,55,89 y su suma es: 232
*/

function Fibonacci(){
    let FirstPos = 0; //Guarda el primer valor de Fibonacci
    let SecodPos = 1; //Guarda el segundo valor de Fibonacci
    let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos
    let lista = [];
    let functionReduce;
    let sumaTotal = 0
    if(FirstPos < 100){
        for(let i = 1; i < 11; i++){
            suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
            FirstPos = SecodPos; //Se sobreescriben los valores iniciales
            SecodPos = suma;//Se sobreescriben los valores iniciales
            lista.push(suma);
        }
    }
    else {
            console.log("Terminó")
        }
    
    functionReduce = lista.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        sumaTotal,
      );
    console.log(`${lista.toString()} y su suma es: ${functionReduce + 1}` )
}
Fibonacci()
