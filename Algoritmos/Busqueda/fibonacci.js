/**
 * Algoritmo Fibonacci
 */

//Función Fibonacci que inicializa en 1
function fibonacciSearch(n) {
    var fibonacci = [1, 1];
    for (var index = 2; index < n; index++) {
        fibonacci[index] = fibonacci[index - 1]+ fibonacci[index - 2];
    }
    return fibonacci[index -1];
}

//Ejecuta la función y pide el número de la pos 4
console.log(fibonacciSearch(4));

/**
 * El número de la posición 4
 * del arreglo[ 1, 1, 2, 3 ] = 3
 * 
 */
