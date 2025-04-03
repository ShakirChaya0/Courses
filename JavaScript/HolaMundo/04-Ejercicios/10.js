/**
 * Crear array de longitud N, y que sus elementos sean numeros de 1 hasta N.
 */

// Mi resolución

function crearArray(n) {
  i = 0;
  let array = []
  if (n > 0) {
    while (i < n) {
      array[i] = i + 1;
      i++;
    }
  }
  return array;
}

let resultado = crearArray(12);
console.log(resultado);

// Resolución de HolaMundo

function crearArray1(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

let resultado1 = crearArray1(10);
console.log(resultado1);
