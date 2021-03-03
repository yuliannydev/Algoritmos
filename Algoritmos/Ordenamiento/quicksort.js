/*
*Algoritmo de ordenamiento quicksort
* 
*/
//Función que hace el quicksort
function quickSort(array) {
    if (array.length == 0) { 
        return [] 
    } 
    let medium = Math.floor(array.length/2)

    let pivot = array[medium];

    let leftArray = [];
    let rightArray = [];

    for (let index = 0; index < array.length; index++) {
        if (index != medium) {
        
        if (array[index] > pivot) {
            rightArray.push(array[index])
        }
        else {
            leftArray.push(array[index])
        }
        }
    }
    //Arreglo izquiero ordenado
    leftArray = quickSort(leftArray)

    //Arreglo derecho ordenado
    rightArray = quickSort(rightArray)

    //regresa la concatenación de los dos arreglos ordenados
    return leftArray.concat(pivot).concat(rightArray);
}

//Array original
let array = [5, -1, 4, 2, 1, -7, 0, -14, 14]

console.log("El arreglo ordenado es:" + quickSort(array));

