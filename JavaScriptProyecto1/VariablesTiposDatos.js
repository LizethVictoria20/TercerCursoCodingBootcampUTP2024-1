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


function Menu(){
  console.log("\nMenú:");
  console.log("1. Convertir Celsius a Fahrenheit ");
  console.log("2. Calcular Indice de Masa Corporal (IMC) ");
  let option = prompt("Seleccione una opción: ");

  switch(option) {
    case "1":
      Convertion();
      break;
    case "2":
      IndiceMasaCorporal()
  }
}

Menu()
