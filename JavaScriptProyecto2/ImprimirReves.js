const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function ReverseNumber(){
    let numero = prompt("Ingresar número: ");
    let separar = numero.split("");
    let invertir = separar.reverse()
    let unir = invertir.join("")
    console.log(unir);
}
ReverseNumber()
