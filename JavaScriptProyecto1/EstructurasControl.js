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

function CalculadoraFactorial(){
    let LimiteFactorial = prompt("Ingrese un número para calcular el factorial: ")//Pide el dato al usuario
    let factorial = 1; //Va a acumular el valor del factorial

    if(LimiteFactorial == 0){
        console.log("El factorial de 0 es 1")
    }
    else {
        for(let i = LimiteFactorial; i > 0; i--){
            factorial *= i;
        }
        console.log(`El factorial de ${LimiteFactorial} es: ${factorial}`);
    }
    
}
CalculadoraFactorial()

