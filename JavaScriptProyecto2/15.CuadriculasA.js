/*
- Fecha de publicación: 16.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 31
- Autores: Ing(c):   Luisa Victoria, Lizeth Victoria, Andrea Zapata, Juan Manuel Hurtado, Santiago Castaño, Andres Jaramillo, Camilo
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
    Este programa imprime un patrón de letras 'P' en la consola, utilizando bucles anidados para controlar.
    El codigo se divide en 4 partes, izquierda, derecha, izquierda abajo y derecha abajo
    Imagine que el patron se dividio en cuartos.
    la cantidad de espacios en blanco y letras 'P' en cada fila.
     Output:P P P P P P P P P P P P P
             P P P P P P P P P P P
               P P P P P P P P P
                P P P P P P P
                  P P P P P
                   P P P
                     P
- Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo
*/

function MostrarAs() {
    let contadorLineas = 0
    let contadorEspacios = 0
    //contador  de ciclo para imprimir A por la izquierda
    let iaux = 0
    //contador de ciclo para imprimir A por la derecha
    let jaux = 0
    let contadorMitadDs = 6
    let contadorMitadDs2 = 6
    let o28Espacios = 1

    while (contadorLineas <= 2) {
        //Mover a la derecha 28 espacios
         o28Espacios = 1
            while (o28Espacios < 28){
                process.stdout.write(" ")
                o28Espacios++
            }

        contadorLineas ++

        iaux ++
        i = iaux
        //imprimir as por la izquierda
            while (i > 0){
                process.stdout.write('A ')
                i--
        }
                //espacios
                contadorMitadDs2 -= 2
                contadorMitadDs = contadorMitadDs2
                while (contadorMitadDs >= 0) {
                    process.stdout.write('  ')
                    contadorMitadDs --
                    
                    //salto de linea
                if (contadorMitadDs < 0) {
                    //imprimir a por la derecha
            jaux ++
            j = jaux
            while (j > 0){
                process.stdout.write('A ')
                j --
        }
                    console.log(' ')
                }

                }
            //console.log('')
        contadorEspacios  ++    
    }

    //IMPRIMIR MITAD
    //Mover a la derecha 28 espacios
    o28Espacios = 1
    while (o28Espacios < 28){
        process.stdout.write(" ")
        o28Espacios++
    }
    for (mitad = 0 ; mitad < 7 ; mitad ++ ) {
        process.stdout.write('A ')
    }
    console.log(' ')

    //PARTE DE ABAJO

    let contadorLineas2 = 0
    let contadorEspacios2 = 0
    let iaux2 = 4
    let jaux2 = 4
    let contadorMitadDs3 = 0
    let contadorMitadDs23 = -2



    while (contadorLineas2 <= 2) {
        contadorLineas2 ++

        //Mover a la derecha 28 espacios
        o28Espacios = 1
        while (o28Espacios < 28){
            process.stdout.write(" ")
            o28Espacios++
        }

        iaux2 --
        i2 = iaux2
        //imprimir as por la izquierda ABAJO
        
        while (i2 > 0){
            process.stdout.write('A ')
            i2--
        }
                //espacios ABAJO
        contadorMitadDs23 += 2
        contadorMitadDs3 = contadorMitadDs23
        while (contadorMitadDs3 >= 0) {
            process.stdout.write('  ')
            contadorMitadDs3 --
            
                //salto de linea ABAJO
            if (contadorMitadDs3 < 0) {
                //imprimir a por la derecha ABAJO
                jaux2 --
                j2 = jaux2
                while (j2 > 0){
                    process.stdout.write('A ')
                    j2 --
                }
                console.log(' ')
            }
        }
        contadorEspacios2  ++    
    }
}
MostrarAs()
