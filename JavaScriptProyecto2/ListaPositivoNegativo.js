const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function IdentificadorDeNumero(){
    let listaDeNumeros = [];
    let max;
    let min;
    for(let i = 1; i < 15; i++){
        let entrada = Number(prompt(`Ingrese el ${i} número: ` ));

        console.log(typeof entrada)
        if(entrada != 0){
            listaDeNumeros.push(entrada);
            max = listaDeNumeros[0];//Almacena por defecto el primer valor de la lista
            min = listaDeNumeros[0];
            for(number of listaDeNumeros){
                if(number > max) {
                    max = number;
                }
                if(number < min) {
                    min = number;
                }
            }
        }
        else {
            console.log("\nEmpieza a ingresar los datos de nuevo y evita ingresar el número cero.");
            return IdentificadorDeNumero();
        }
    }
    console.log(`El número maximo es: ${max}`);
    console.log(`El número menor es: ${min}`);
}
IdentificadorDeNumero();