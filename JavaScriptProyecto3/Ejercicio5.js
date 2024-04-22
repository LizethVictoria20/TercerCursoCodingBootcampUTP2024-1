/*
- Fecha de publicación: 20.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 74
- Autores: Ing(c):  Lizeth Victoria
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
  O y X se  marcan en los espacios de un tablero de 3×3 alternadamente dependiendo 
  del la posicion que escoja el jugador.
    Output: 1|2|3|
            -+-+-+
            4|5|6|
            -+-+-+
            7|8|9|
            -+-+-+
        Jugador 1
        Ingrese el número de la casilla:
        Jugador 2
        Ingrese el número de la casilla      
*/



const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt


function Triqui(){
    let matriz = []; //Almacena los datos que se crearán 
    let rows = 3; // Dice cuantas filas se crearán
    let columns = 3; // Dice cuantas columnas se crearán
    let position = 1; //Variable que ayudará a llenar los espacios de los arrays
    let jugadaJugador1 = "X" //Identificador del jugador 1
    let jugadaJugador2 = "O" //Identificador del jugador 2

    
        for(let i = 0; i < rows; i++){
            matriz[i] = [];
            for(let j = 0; j < columns; j++){
                matriz[i][j] = position++
            }
        }
        
        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz[i].length; j++) {
                process.stdout.write(matriz[i][j].toString());
                    process.stdout.write("|");
            }
            process.stdout.write("\n");
            process.stdout.write("-+-+-+");
            // process.stdout.write("+");
            process.stdout.write("\n");
        }

    console.log("Jugador 1")
    let jugador1 = parseInt(prompt("Ingrese el número de la casilla: "));

    console.log("Jugador 2")
    let jugador2 = parseInt(prompt("Ingrese el número de la casilla: "));


    for(let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++) {
            if(jugador1 === matriz[i][j] && jugador2 === matriz[i][j]){
                console.log("Ingrese una casilla diferente")
                return Triqui()
            }
            if(jugador1 === matriz[i][j]){
                matriz[i][j] = jugadaJugador1
                Triqui()
            }
            if(jugador2 === matriz[i][j]){
                matriz[i][j] = jugadaJugador2
                console.log(matriz)
                Triqui()
            } 
        }
    }
    
}

Triqui()
