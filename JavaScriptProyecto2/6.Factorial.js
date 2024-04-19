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
    Leer un número e imprima su factorial
        Input: 5
        Output: El factorial de 5 es: 120
*/

const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function CalculadoraFactorial(){
    let LimiteFactorial = prompt("Ingrese un número para calcular el factorial: ");//Pide el dato al usuario
    let factorial = 1; //Va a acumular el valor del factorial

    if(LimiteFactorial >= 0){
        if(LimiteFactorial == 0){
            console.log("El factorial de 0 es 1");
        }
        else {
            for(let i = LimiteFactorial; i > 0; i--){
                factorial = factorial * i;
            }
            console.log(`El factorial de ${LimiteFactorial} es: ${factorial}`); 
        }
    }
    else {
        console.log("Ingrese un número positivo");
        return CalculadoraFactorial()
    }
}
CalculadoraFactorial()
