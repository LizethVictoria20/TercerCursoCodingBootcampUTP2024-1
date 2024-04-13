const prompt = require('prompt-sync')();

function Convertion(){
  console.log("Convertir Celsius a Fahrenheit");
  let  celcius = prompt("Por favor digite los centigrados a convertir a Fahrenheit: ");
  let fahrenheit = (9 / 5 * celcius) + 32;
  console.log(`${celcius}ºC son ${fahrenheit} grados en Fahrenheit`);
}

function IndiceMasaCorporal(){
  console.log("Calcula el Indice de Masa Corporal");
  let kilogramos = prompt("Por favor, ingresa tu peso en kilogramos: ");
  let altura = prompt("Por favor, ingresa tu altura en metros: ");
  let TotalCalculoMasaCorporal = kilogramos /( altura ** 2);
  let DecimalesCalculoMasaCorporal = TotalCalculoMasaCorporal.toFixed(2)
  console.log(`Tu indice de masa corporal (IMC) es: ${DecimalesCalculoMasaCorporal}`)
}

function GeneradorNombreUsuario(){
  console.log ("Generardor nombre de usuario");
  let nombre = prompt("Nombre: ");
  let apellido = prompt("Apellido: ");
  let AnioNacimiento = prompt("Año de nacimiento: ");
  let NombreUsuario = nombre + apellido + AnioNacimiento ;
  console.log(`Nombre de usuario combinado: ${NombreUsuario}`);
}

function Menu(){
  console.log("\nMenú:");
  console.log("1. Convertir Celsius a Fahrenheit ");
  console.log("2. Calcular Indice de Masa Corporal (IMC) ");
  console.log("3. Generar nombre de usuario");
  let option = prompt("Seleccione una opción: ");

  switch(option) {
    case "1":
      Convertion();
      Menu();
    case "2":
      IndiceMasaCorporal();
      Menu();
    case "3":
      GeneradorNombreUsuario();
      Menu();
  }
}

Menu()
