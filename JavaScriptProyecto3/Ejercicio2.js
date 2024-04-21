function CodigoQR(){
    //1 represente un pixel negro
    //1 represente un pixel blanco
    let matriz = [];
    let rows = 30;
    let columns = 30;
    let max = 2;
     
    //Se crean las filas y columnas
    for(let i = 0; i < rows; i++){
        matriz[i] = [] //Agrega las 30 filas
        for(let j = 0; j < columns; j++){
            matriz[i][j] = Math.floor(Math.random() * max)
        }
    }


    //Agregando la periferia
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i === 0 && i === rows - 1 && j === 0 && columns - 1)
            {
                matriz[i][j] = 0;
            }
        }
    }

    //Reemplaza los valores de 0 y 1 por el codigo ASCII 219 y 32
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] == 1){
                 process.stdout.write("█");
            }
            else {
             process.stdout.write(" ");
            }
            
        }
        process.stdout.write("\n");
 
    }

}
CodigoQR();



