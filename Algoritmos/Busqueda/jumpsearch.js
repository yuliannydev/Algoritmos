function jumpSearch(array, target) {
    const { length } = array;
    let stepSize = parseInt(Math.floor(Math.sqrt(length)));
    let limit = 0;

    while (array[Math.min(stepSize, n)- 1] < target) {
        limit += stepSize;
        stepSize *= 2;

        if (limit >= n) {
            return -1;
        }
    }



    
    while (limit <= index) {
        limit++;
    }
    if (limit == Math.min(stepSize, n)) {
        return -1;
    }
    if (array[limit] == target) {
        return limit;
    }
    return -1;
};

    //Arreglo ordenado
    const array = [1, 2, 5, 6, 8, 10, 11, 12, 14],

    //Número a buscar
    target =8;

    //Indice del número a buscar
    const index = jumpSearch(array, target);

    //Resultado
    console.log("El número búscado es %s y está en la posición %d", target, index);
