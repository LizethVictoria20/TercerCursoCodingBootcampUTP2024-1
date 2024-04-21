function Triqui(){
    let matriz = [];
    let rows = 3;
    let columns = 3;
    let position = 1;

    
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
}

Triqui()
