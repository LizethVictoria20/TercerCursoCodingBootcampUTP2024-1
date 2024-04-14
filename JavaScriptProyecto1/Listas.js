
function ListaNumeros(){
    let lista = [2, 3, 7, 14, 4, 4];
    let max = [0];
    let min = [0];
    for(number of lista){
        // min = min < number ? min : number;
        // max = max > number ? max : number;
        console.log(number)
    }
    console.log(max, min)
//     for(let i = 0; i < lista.length; i++){
//          if(max <= lista[i]) {
//              max = lista[i];
//          }
//     }
//     console.log(max)
//     for(let i = 0; i < lista.length; i++){
//         if(min > lista[i]) {
//             min = lista[i]
//         }
//    }
//    console.log(min)
}


function ConcatenarListar(){
    let lista1 = [4, 9, 2]
    let lista2 = [7, 5, 1]
    let ListasConcatenadas = lista1.concat(lista2)
    let OrdenarLista = ListasConcatenadas.sort()
    console.log(lista1)
    console.log(lista2)
    console.log("Lista concatenada y ordenada")
    console.log(OrdenarLista)

}
ConcatenarListar()


function InvertirLista(){
    let lista = [2, 3, 7, 4, 1, 9];
    let reverseList = [...lista].reverse();
    console.log(typeof(reverseList))
    console.log(`Lista original [${lista}]`)
    console.log(`Lista invertida [${reverseList}]`)
}
