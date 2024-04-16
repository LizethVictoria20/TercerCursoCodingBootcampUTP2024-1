function Fibonacci(){
    let FirstPos = 0; //Guarda el primer valor de Fibonacci
    let SecodPos = 1; //Guarda el segundo valor de Fibonacci
    let suma = 1;//Guardará el resultado de la suma de FirstPos y SecodPos
  
    for(let i = 0; i < 21; i++){
        console.log(FirstPos)
        if(FirstPos < 10000){
            suma = FirstPos + SecodPos;//Se sobreescriben los valores iniciales
            FirstPos = SecodPos; //Se sobreescriben los valores iniciales
            SecodPos = suma;//Se sobreescriben los valores iniciales
        }
        else{
            console.log("Terminó")
        }
       
    } 
}
Fibonacci()
