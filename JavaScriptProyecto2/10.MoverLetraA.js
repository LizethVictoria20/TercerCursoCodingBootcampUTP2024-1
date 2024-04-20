/*
- Fecha de publicación: 16.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 64
- Autores: Ing(c):   Luisa Victoria, Lizeth Victoria, Andrea Zapata, Juan Manuel Hurtado, Santiago Castaño, Andres Jaramillo, Camilo
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
    Mueve las letras A de los extrremos al medio
        Output: A      A
                A     A
                A    A
                A   A
                A  A
                A A
                AA
*/

let linea = ["","","","","","","","",""];

function valores(){
    let i = -1;

    const darValores = setInterval(() => {// le damos un timpo entre cada ciclo
        linea[i + 1] = "A";
        linea[7 - i] = "B";

        let inv = linea.join(" ");// le decimos que separador tiene 
        console.clear();
        console.log(inv);
        linea[i + 1] = "";
        linea[7 - i] = "";
        i++;// aumentamos 1 cada ciclo
        if (i > 4) {
            clearInterval(darValores);

        }else if (i == 4){
            console.clear();
            console.log("    AA    ");// mensaje de fin
            // clearInterval(darValores);
        }
    }, 500);
}

valores();