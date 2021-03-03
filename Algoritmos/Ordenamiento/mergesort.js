//Importa testArray
import {testArray } from './common.js';

//Función merge 
function merge(leftArray, rightArray) {
    let array = [];
    
    while (leftArray.length && rightArray.length) {
         
        if (leftArray[0] < rightArray[0]) {
            array.push(leftArray.shift())  
        } else {
            array.push(rightArray.shift()) 
        }
    }
    
    //Regresa los dos arraay y los concatena
    array = array.concat(leftArray).concat(rightArray);
    return array;
}

//Función mergeSort para dividir los arreglos
function mergeSort(array) {
    if(array.length === 1){
        return array;
    }

    let mediumArray = Math.trunc(array.length / 2);
    let leftArray = array.splice(0, mediumArray)
    let rightArray = array;
    let mergeLeft = mergeSort(leftArray)
    let mergeRight = mergeSort(rightArray)

    //Regresa el intercambio de merge
    return merge(mergeLeft, mergeRight)
    
}
//Imprime el resultado de mergeSort en base al arreglo testArray
console.log(mergeSort(testArray));

