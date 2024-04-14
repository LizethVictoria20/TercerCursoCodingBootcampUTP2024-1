const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt


function AdivinarNumero(){

    let randomNumber = Math.floor(Math.random() * 100); //Genera un número entero entre 0 y 100
    let randomNumberUser = prompt('Ingrese un número: ')//Pide el número al usuario
    console.log(randomNumber);
    if(randomNumber == randomNumberUser){
        console.log("Acertaste, los números son iguales");
    }
    else if(randomNumber > randomNumberUser){
        console.log("El número que debes adivinar es más alto");
    }
    else {
        console.log("El número que debes adivinar es más bajo");

    }
}

function CalculadoraFactorial(){
    let LimiteFactorial = prompt("Ingrese un número para calcular el factorial: ");//Pide el dato al usuario
    let factorial = 1; //Va a acumular el valor del factorial

    if(LimiteFactorial == 0){
        console.log("El factorial de 0 es 1");
    }
    else {
        for(let i = LimiteFactorial; i > 0; i--){
            factorial = factorial * i;
        }
        console.log(`El factorial de ${LimiteFactorial} es: ${factorial}`); 
    }
}



/*Salvedad: La función no evalua si es letra mayuscula o minuscula.
           No reconoce vocales con tildes.
*/
function ContadorVocales(){
    let frase = prompt("Ingrese la frase: ");
    let vocalA = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalE = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalI = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalO = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalU = 0 //Almacena el total de vocales que encuentre en la frase.

    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a"){
            vocalA += 1
        }
        else if(frase[i] == "e"){
            vocalE += 1
        }
        else if(frase[i] == "i"){
            vocalI += 1
        }
        else if(frase[i] == "o"){
            vocalO += 1
        }
        else if(frase[i] == "u"){
            vocalU += 1
        }


    }
    console.log(`El total de la vocal a es: ${vocalA}`)
    console.log(`El total de la vocal e es: ${vocalE}`)
    console.log(`El total de la vocal i es: ${vocalI}`)
    console.log(`El total de la vocal o es: ${vocalO}`)
    console.log(`El total de la vocal u es: ${vocalU}`)
    
}

function Menu(){
    console.log("\nMenú:");
    console.log("1. Adivinar número");
    console.log("2. Calcular el factorial de un número");
    console.log("3. Conocer el total de vocales de una frase");
    console.log("5. Salir");
    let option = prompt("Seleccione una opción: "); //Pide al usuario la opción que quiere ejecutar del menú.
  
    switch(option) {
      case "1":
        AdivinarNumero();
        return Menu();
      case "2":
        CalculadoraFactorial();
        return Menu();
      case "3":
        ContadorVocales();
        return Menu();
      case "5":
        break;
      default:
        console.log("\nPor favor ingresa una opción válida")
        return Menu();
    }
  }
  
  Menu()
  