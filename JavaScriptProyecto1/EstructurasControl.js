const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt


function AdivinarNumero(){

    let randomNumber = Math.floor(Math.random() * 101); //Genera un número entero entre 0 y 100
    let randomNumberUser = prompt('Ingrese un número: ')//Pide el número al usuario
    console.log(randomNumber);
    if(randomNumber == randomNumberUser){
        console.log("Acertaste, los números son iguales")
    }
    else if(randomNumber > randomNumberUser){
        console.log("El número que debes adivinar es más alto")
    }
    else {
        console.log("El número que debes adivinar es más bajo")

    }
}
