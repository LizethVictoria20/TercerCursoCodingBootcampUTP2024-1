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
    Utilizando ciclos anidados; presentar todas las tablas de multiplicar del 1 al 10.
        Output: 1 x 1 = 1
                1 x 2 = 2
                1 x 3 = 3
                1 x 4 = 4
                1 x 5 = 5
                1 x 6 = 6
                1 x 7 = 7
                1 x 8 = 8
                1 x 9 = 9
                1 x 10 = 10
                ...
*/

function TablasMultiplicar(){
    for(let i = 1; i < 11; i++){
        for(let j = 1; j < 11; j++){
            let multiplicacion = i * j //Almacen el total de la multiplicación
            console.log(`${i} x ${j} = ${multiplicacion}`)
        }
    }
}

TablasMultiplicar()