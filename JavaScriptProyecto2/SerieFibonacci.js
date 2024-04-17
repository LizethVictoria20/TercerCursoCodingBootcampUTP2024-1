function Fibonacci(){
    let FirstPos = 0; //Guarda el primer valor de Fibonacci
    let SecodPos = 1; //Guarda el segundo valor de Fibonacci
    let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos
    let array = [];
    for(let i = 0; i < 19; i++){
        console.log(FirstPos)
        if(FirstPos < 10000){
            suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
            FirstPos = SecodPos; //Se sobreescriben los valores iniciales
            SecodPos = suma;//Se sobreescriben los valores iniciales
            array.push(suma)
            console.log(array)

        }
        else{
            console.log("Terminó")
        }
       
    } 
}
Fibonacci()
