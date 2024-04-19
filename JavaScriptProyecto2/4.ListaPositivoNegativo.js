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
    Lee por medio del teclado un grupo de 15 números, diferentes a cero, haciendo 4 válidaciones.
    1. Cantidad de números Mayores a 150
    2.Número mayor y número menor encontrado en el grupo
    3.Cantidad de Números negativos encontrados
    4.Promedio de los Positivos Encontrados.
        Input: Ingrese el n número: 3 (n - 15 veces)
        Output: Hay 0 número mayores a 150.
            Este es el número maximo de la lista 5
            Este es el número minimo de la lista 3
*/


const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function IdentificadorDeNumero(){
    let listaDeNumeros = [];
    let mayoresA150 = [];
    let max = 0;
    let min = Infinity;
    let sumaTotalPromedio = 0;
    let promedio;
    let largo;


    for(let i = 1; i < 15; i++){
        let entrada = Number(prompt(`Ingrese el ${i} número: ` ));
        if(entrada > 150){
            mayoresA150.push(entrada);
        }
        listaDeNumeros.push(entrada)
        for(number of listaDeNumeros){
            if(number > max) {
                max = number;
            }
            if(number < min) {
                min = number;
            }

            console.log(listaDeNumeros[number])
        }
    }
    console.log(`Hay ${mayoresA150.length} número mayores a 150.`);
    console.log(`Este es el número maximo de la lista ${max}`);
    console.log(`Este es el número minimo de la lista ${min}`);

}
IdentificadorDeNumero();
