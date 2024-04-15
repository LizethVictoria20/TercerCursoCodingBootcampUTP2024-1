/*
- Fecha de publicación: 13.04.2023
- Hora de publicación: 1:30am
- Versión de su código: 25
- Autores: Ing(c): Lizeth Victoria Franco - Andrea Zapata Bolivar
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa:
  Este programa contiene 4 funciones:
    1. Función que encuentra el número mayor y número menor de una lista.
        Output: Número mayor 14
                Número menor 3
    2.Función que concatena dos listas y las ordena una vez unidas.
        Output:  [4, 9, 2]
                [7, 5, 1]
                Lista concatenada y ordenada [ 2, 3, 7, 4, 1, 9 ]
    3.Funcion que invierte los valores de una lista y retorna lalista original y la lista invertirda.
        Output: Lista original [2,3,7,4,1,9]
                Lista invertida [9,1,4,7,3,2]
*/

function EncontrarNumMayorMenor(){
    let lista = [6, 3, 7, 14, 4, 4];
    let max = lista[0];//Almacena por defecto el primer valor de la lista
    let min = lista[0];//Almacena por defecto el primer valor de la lista
    for(number of lista){
        if(number > max) {
            max = number;
        }
        if(number < min) {
            min = number;
        }
    }
    console.log("Número mayor:", max);
    console.log("Número menor:", min);

}

function ConcatenarListar(){
    let lista1 = [4, 9, 2]; //Contiene la primer lista a operar
    let lista2 = [7, 5, 1]; //Contiene la primer lista a operar
    let ListasConcatenadas = lista1.concat(lista2);//Almacena los valores concatenados de ambas listas
    let OrdenarLista = ListasConcatenadas.sort();//Ordena los datos de la nueva lista
    console.log(lista1);
    console.log(lista2);
    console.log("Lista concatenada y ordenada");
    console.log(OrdenarLista);

}

function InvertirLista(){
    let lista = [2, 3, 7, 4, 1, 9];//Almacena una lista
    let reverseList = [...lista].reverse();//spread operator
    console.log(`Lista original [${lista}]`);
    console.log(`Lista invertida [${reverseList}]`);
}
