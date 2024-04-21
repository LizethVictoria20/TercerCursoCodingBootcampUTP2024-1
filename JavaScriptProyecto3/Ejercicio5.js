const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt


function Triqui(){
    let matriz = [];
    let rows = 3;
    let columns = 3;
    let position = 1;
    let jugadaJugador1 = "X"
    let jugadaJugador2 = "O"

    
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