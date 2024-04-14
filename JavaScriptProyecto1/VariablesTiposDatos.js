/*
- Fecha de publicación: 13.04.2023
- Hora de publicación: 1:30am
- Versión de su código: 5
- Autores: Ing(c): Lizeth Victoria Franco - Andrea Zapata Bolivar
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
  Para realizar este proyecto instalamos prompt-sync de Node para asi poder recibir y almacenar datos que ingresa 
  el usuario por medio del teclado.
  Este programa contiene 5 funciones:
    1. Función que convierte grados Celsius a Fahrenheit teniendo en cuenta la fórmula: 
      (9/5 * C°) + 32. Donde el dato de C° se le pide ingresarlo al usuario.
      Input: 32
      Output: 32C° son 89.6 grados Fahrenheit
    2. Función que calcula el Indece de Masa Corporal (IMC) teniendo en cuenta la fórmula:
      peso/(altura)^2. Donde peso es pedido en kilogramos y altura en metros y se le pide ingresarlo al usuario.
      Input: 70
            1.75
      Output: Tu indice de masa corporal (IMC) es 22.86
    3. Función que genera un nombre de usuario concatenando los datos de nombre, apellido y año de nacimiento.
      Estos datos se le pide ingresarlo al usuario.
      Input: Liz
            Victoria
            2002
      Output: LizVictoria2002
    4. Función que retorna el n-ésimo número de Fibonacci ingresado por el usuario.
      Input: 7
      Output: 8
    5. Función que crea un Menú en la consola con 5 opciones que se pueden seleccionar escribiendo el número
      de la opcíon. Cada opción le corresponde a cada una de las funciones descritas anteriormente.
      Este menú solo se deja de mostrar al usuario cuando se selecciona la opción 5. 
*/



const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function Convertion(){
  console.log("Convertir Celsius a Fahrenheit");
  let  celcius = prompt("Por favor digite los centigrados a convertir a Fahrenheit: "); //Almacena el valor de celcius que el usuario ingresa usuario
  let fahrenheit = (9 / 5 * celcius) + 32; //Guarda el resultado de la operación que hace la conversión de C° a F°
  console.log(`${celcius}C° son ${fahrenheit} grados Fahrenheit`);
}

function IndiceMasaCorporal(){
  console.log("Calcula el Indice de Masa Corporal");
  let kilogramos = prompt("Por favor, ingresa tu peso en kilogramos: "); //Pide al usuario el peso en kilogramos
  let altura = prompt("Por favor, ingresa tu altura en metros: "); //Pide al usuario la altura en metros
  let TotalCalculoMasaCorporal = kilogramos /( altura ** 2); //Guarda el resultado de la operación que calcula el IMC
  let DecimalesCalculoMasaCorporal = TotalCalculoMasaCorporal.toFixed(2) // Guarda el valor de IMC pero solo mostrado con 2 numeros décimales
  console.log(`Tu indice de masa corporal (IMC) es: ${DecimalesCalculoMasaCorporal}`)
}

function GeneradorNombreUsuario(){
  console.log ("Generardor nombre de usuario");
  let nombre = prompt("Nombre: "); //Pide al usuario el nombre
  let apellido = prompt("Apellido: ");//Pide al usuario el apellido
  let AnioNacimiento = prompt("Año de nacimiento: ");//Pide al usuario el año de nacimiento
  let NombreUsuario = nombre + apellido + AnioNacimiento ; //Guarda el valor concatenado de nombre, apellido y AnioNacimiento
  console.log(`Nombre de usuario combinado: ${NombreUsuario}`);
}

function Fibonacci(){
  let PosicionFibonacci = prompt('Ingrese el valor de n: ')//Pide al usuario la posición que quiere conocer de los números de Fibonacci
  let FirstPos = 0; //Guarda el primer valor de Fibonacci
  let SecodPos = 1; //Guarda el segundo valor de Fibonacci
  let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos

  if(PosicionFibonacci == 1){
    console.log("La primera posición es igual a 0")
  }
  else {
    for(let i = 2; i < PosicionFibonacci; i++){
      suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
      FirstPos = SecodPos; //Se sobreescriben los valores iniciales
      SecodPos = suma;//Se sobreescriben los valores iniciales
    }
    console.log(`El ${PosicionFibonacci}-ésimo número de Fibonacci es ${suma}`);
  }
}


function Menu(){
  console.log("\nMenú:");
  console.log("1. Convertir Celsius a Fahrenheit ");
  console.log("2. Calcular Indice de Masa Corporal (IMC) ");
  console.log("3. Generar nombre de usuario");
  console.log("4. Generar número Fibonacci");
  console.log("5. Salir");
  let option = prompt("Seleccione una opción: "); //Pide al usuario la opción que quiere ejecutar del menú.

  console.log(typeof option)
  switch(option) {
    case "1":
      Convertion();
      return Menu();
    case "2":
      IndiceMasaCorporal();
      return Menu();
    case "3":
      GeneradorNombreUsuario();
      return Menu();
    case "4":
      Fibonacci();
      return Menu();
    case "5":
      break;
    default:
      console.log("\nPor favor ingresa una opción válida")
      return Menu();
  }
}

Menu()
