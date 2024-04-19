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
    Este programa imprime un patrón de letras 'P' en la consola, utilizando bucles anidados para controlar 
    la cantidad de espacios en blanco y letras 'P' en cada fila.
     Output:P P P P P P P P P P P P P
             P P P P P P P P P P P
               P P P P P P P P P
                P P P P P P P
                  P P P P P
                   P P P
                     P
*/

function letraColumna(columnas) {
    let fila, espacio, letra;
    for (fila = 0; fila < columnas; fila++) {
      for (espacio = 0; espacio < fila; espacio++) {
        process.stdout.write("  ");
      }
      for (letra = 0; letra < columnas - fila - fila; letra++) {
        process.stdout.write("P ");
      }
      if (letra > 1) {
        console.log();
      }
    }
  }
letraColumna(13);
