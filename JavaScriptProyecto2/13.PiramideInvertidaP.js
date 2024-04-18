function ImprimirP(){
    let filas = 13
    let espacios;
    let patrones;
    let espacios34 = 0

  
        for (let i = 0; i < filas; i++) {
            espacios = ' ';
            for (let j = 0; j < i; j++) {
                espacios += ' ';
                
            }
            patrones = '';
            for (let k = 0; k < filas - i - 2; k++) {
                while (espacios34 < 34){
                    process.stdout.write(" ")
                    espacios34++
                }
                patrones += 'P ';
            }
            console.log(espacios + patrones);
        }
    

    
}
ImprimirP();



// P P P P P P P P
//  P P P P P P
//   P P P P
//    P P P
//     P P
//     P
