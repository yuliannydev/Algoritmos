//Importa la Función swap y el testArray
import {swap, testArray } from './common.js';

//Función burbuja que realiza el intercambio
function bubbleSort(array) {
   
    //Crea las condiciones
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                 swap(array, i, j);
            }
        }
    }
    //regresa el array después de que se cierra el ciclo condicional
    return array;
}
    //Imprime el arreglo ordenado en la consola
    console.log("Arrelo ordenado: " + bubbleSort(testArray));


   