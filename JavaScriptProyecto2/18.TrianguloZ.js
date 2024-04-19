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
