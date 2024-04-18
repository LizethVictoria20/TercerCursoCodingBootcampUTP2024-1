const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function IdentificadorDeNumero(){
    let listaDeNumeros = [];
    let max = 0;
    let min = Infinity;
    let mayoresA150 = [];
    let nueva = [];
    for(let i = 1; i < 4; i++){
        let entrada = Number(prompt(`Ingrese el ${i} número: ` ));
        if(entrada > 150){
            mayoresA150.push(entrada)
        }
        nueva.push(entrada)
        for(number of nueva){
            if(number > max) {
                max = number;
            }
            if(number < min) {
                min = number;
            }
        }
        
    }
    
    console.log(`Hay ${mayoresA150.length} número mayores a 150.`)
    console.log(`Este es el número maximo de la lista ${max}`)
    console.log(`Este es el número minimo de la lista ${min}`)

}
IdentificadorDeNumero();
