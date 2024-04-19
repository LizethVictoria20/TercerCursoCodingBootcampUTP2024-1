// Fecha y Hora de publicación: [20 de Abril de 2024 8:20am]
// Versión de su código: [1.0]
// Autores: Ing(c) [Victoria, Lizeth, Ándres, Santiago, Camilo y Andrea]
// Nombre del lenguaje utilizado: JavaScript 
// Versión del lenguaje utilizado: [6.0]
// Universidad Tecnológica de Pereira
// Programa de Ingeniería de Sistemas y Computación
// Un descriptivo de qué hace el programa:
// Este programa imprime un patrón de letras 'P' en la consola, utilizando bucles anidados para controlar la cantidad de espacios en blanco y letras 'P' en cada fila. 
//La cantidad de columnas en el patrón está determinada por el parámetro columnas.
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
