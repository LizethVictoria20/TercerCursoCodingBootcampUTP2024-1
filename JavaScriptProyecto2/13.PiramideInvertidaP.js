function ImprimirP(){
    let i = -1
    let iAux;
    let j = 14
    let jAux = 14
    let k = 0 //Número de filas
    let o34Espacios = 0

    while (i < 6) {
        //aqui se ponen los espacios reiniciar variable
        o34Espacios = 0
        while (o34Espacios < 34){
            process.stdout.write(" ")
            o34Espacios++
        }

        i ++ 
        iAux = i

        while ( iAux > 0) {
            process.stdout.write(" ") //Crea los espacios hacia la derecha
            iAux--
        }

        j = jAux -= 2

        while (j >= 0){
        process.stdout.write("P")
        j--
        }
        console.log(' ')//Crea los espacios hacia la izquierda
        k++
    }
    jAux--
}
ImprimirP();



// P P P P P P P P
//  P P P P P P
//   P P P P
//    P P P
//     P P
//     P


