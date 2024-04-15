const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt





  


function Menu(){
    console.log("\nMenú:");
    console.log("1. Para hacer conver de C a F")
    console.log("2. Indice de masa corporal")
    console.log("3. Salir")

    let option = prompt("Seleccione una opción: ");

    

    switch(option) {
        case "1":
            console.log("Seleccionaste 1")
            Convertion()
            Menu()
        case "2":
            console.log("Indice de masa corporal")
            IndiceMasaCorporal()
            Menu()
        case "3":
            break;
        default:
            console.log("no soy nignuno")
    }
  
   
}
 Menu()
  