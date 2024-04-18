function TablasMultiplicar(){
    let multiplicacion;
    for(let i = 1; i < 11; i++){
        for(let j = 1; j < 11; j++){
            multiplicacion = i * j
            console.log(`${i} x ${j} = ${multiplicacion}`)
        }
    }
}

TablasMultiplicar()