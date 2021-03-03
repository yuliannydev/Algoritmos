/**
 * Algoritmo de busqueda binaria
 */

//Funcion para indicar pos min, pos max y pivote
const binarySearch = (array, toFind) => {
    let min = 0;
    let max = array.length - 1;
    let pivot;

//Ciclo while para buscar el numero en el arreglo
    while (min <= max) {
        pivot = Math.floor((min + max) / 2);
        const num = array[pivot];

        if (toFind === num) {
            return pivot;
        }

        if (toFind < num){
            max --;
        }
        
        if (toFind > num){
            min ++;
        }
    }

};

//Arreglo ordenado
const testArray = [3, 5, 9, 10, 15, 23, 36, 64, 73, 91],

//Número a buscar
search = 36;

//Indice del número a buscar
const index = binarySearch(testArray, search);

//Resultado
console.log("El número búscado es %s y está en la posición %d", search, index);
