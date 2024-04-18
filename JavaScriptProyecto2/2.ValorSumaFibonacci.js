function Fibonacci(){
    let FirstPos = 0; //Guarda el primer valor de Fibonacci
    let SecodPos = 1; //Guarda el segundo valor de Fibonacci
    let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos
    let lista = [];
    let functionReduce;
    let sumaTotal = 0
    if(FirstPos < 100){
        for(let i = 1; i < 11; i++){
            suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
            FirstPos = SecodPos; //Se sobreescriben los valores iniciales
            SecodPos = suma;//Se sobreescriben los valores iniciales
            lista.push(suma);
        }
    }
    else {
            console.log("Terminó")
        }
    
    functionReduce = lista.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        sumaTotal,
      );
    console.log(`${lista.toString()} y su suma es: ${functionReduce + 1}` )
}
Fibonacci()
