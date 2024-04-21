
function Test(){
    let array = [[2, 4, "Hola"], [8, 7,"Bye", true]]

    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++){
            console.log(array[i][j])
        }
    }
}

Test()

