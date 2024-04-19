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
    Imprimir una piramide hueca de Z
     Output:                 z
                            z z
                           z   z
                          z     z
                         z       z
                        z         z
                       z           z
                      z             z
                     z               z
                    z                 z
*/

function MostrarZs() {

    let contadorFilas = 10
    let contadorColumnas = 20
    let condZizquierda = 10
    let condZderecha = 10

    while (contadorFilas > 0) {
        contadorFilas --

        contadorColumnas = 1
        while(contadorColumnas < 20){

            if (condZizquierda == contadorColumnas || condZderecha == contadorColumnas){
                process.stdout.write('z')
            }
            else {
                process.stdout.write(' ')
            }
            
        contadorColumnas ++
        
    }
        console.log('')

        condZderecha --
        condZizquierda ++
    
    }
    condZizquierda ++
    condZderecha --

    let iaux = 0

}

MostrarZs()
