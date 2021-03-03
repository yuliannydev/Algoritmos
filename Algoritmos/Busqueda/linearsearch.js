/**
 * Algoritmo de busqueda lineal
 */

//Función para buscar un numero
function linearSearch(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] == target){
            return index;
        }     
    }
    return -1;
};

//Arreglo ordenado
const array = [4, 2, 5, 1, 9, 6],

//Número a buscar
target =12;

//Indice del número a buscar
const index = linearSearch(array, target);

//Resultado
console.log("El número búscado es %s y está en la posición %d", target, index);
