const prompt = require('prompt-sync')();

function Convertion(){
  console.log("Convertir Celsius a Fahrenheit");
  let  celcius = prompt("Por favor digite los centigrados a convertir a Fahrenheit: ");
  let fahrenheit = (9 / 5 * celcius) + 32;
  console.log(`${celcius}ºC son ${fahrenheit} grados en Fahrenheit`);
}

function Menu(){
  console.log("\nMenú:");
  console.log("1. Convertir Celsius a Fahrenheit ");
  console.log("2. Calcular IMC ");
  let option = prompt("Seleccione una opción: ")
  console.log(typeof(option))
  switch(option) {
    case "1":
      Convertion()
  }
}

Menu()
