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
        Input: Ingresar número: 543
        Output: 345
*/


const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function ReverseNumber(){
    let numero = prompt("Ingresar número: ");//Almacena el número ingresado
    if(Number(numero)){
        let separar = numero.split(""); //Separa por caracter el número ingresado
        let invertir = separar.reverse() //Invierte las posiciones
        let unir = invertir.join("")//Vuelve a unir el numero ingresado
        console.log(unir); 
}
    else {
        console.log("Ingresa un número")
        ReverseNumber()
    }
}
ReverseNumber()
