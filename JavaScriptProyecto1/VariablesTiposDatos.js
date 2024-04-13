const prompt = require('prompt-sync')();


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
