/*
- Fecha de publicación: 13.04.2023
- Hora de publicación: 1:30am
- Versión de su código: 26
- Autores: Ing(c): Lizeth Victoria Franco - Andrea Zapata Bolivar
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
  Para realizar este proyecto instalamos prompt-sync de Node para asi poder recibir y almacenar datos que ingresa 
  el usuario por medio del teclado.
  Este programa contiene 4 funciones:
    1. Función que genera números enteros random entre 0 y 100 (0 incluido y 100 sin incluir),cada 
        vez que se ejecute la función generará un nuevo número. Se le pide al usuario ingresar un número y saber 
        si logró adivinarlo. Tiene 3 posibles outputs.
        Input: 43
        Output: 1. Acertaste, los números son iguales
                2. El número que debes adivinar es más alto
                3. El número que debes adivinar es más bajo
    2.Función que retorna el factoria del número dado por el usuario.
        Ejemplo de como funciona el factorial. 3! = 1 * 2 * 3 = 6 
        Input: 3
        Output: El factorial de 3 es: 6
    3.Función que  pide al usuario ingresar una frase y lleva un conteo de cada una de las vocales que encuentra
        y retorna el total que se encontraron de cada una.
        Input: Hola mundo
        Output: El total de la vocal a es: 1
                El total de la vocal e es: 0
                El total de la vocal i es: 0
                El total de la vocal o es: 2
                El total de la vocal u es: 1
    5. Función que crea un Menú en la consola con 5 opciones que se pueden seleccionar escribiendo el número
        de la opcíon. Cada opción le corresponde a cada una de las funciones descritas anteriormente.
        Este menú solo se deja de mostrar al usuario cuando se selecciona la opción 5. 
*/


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
    let frase = prompt("Ingrese la frase: "); //Guarda la frase que ingresa el usuario
    let vocalA = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalE = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalI = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalO = 0 //Almacena el total de vocales que encuentre en la frase.
    let vocalU = 0 //Almacena el total de vocales que encuentre en la frase.

    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a"){
            vocalA += 1;
        }
        else if(frase[i] == "e"){
            vocalE += 1;
        }
        else if(frase[i] == "i"){
            vocalI += 1;
        }
        else if(frase[i] == "o"){
            vocalO += 1;
        }
        else if(frase[i] == "u"){
            vocalU += 1;
        }


    }
    console.log(`El total de la vocal a es: ${vocalA}`);
    console.log(`El total de la vocal e es: ${vocalE}`);
    console.log(`El total de la vocal i es: ${vocalI}`);
    console.log(`El total de la vocal o es: ${vocalO}`);
    console.log(`El total de la vocal u es: ${vocalU}`);
    
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
        console.log("\nPor favor ingresa una opción válida");
        return Menu();
    }
  }
  
  Menu()
  