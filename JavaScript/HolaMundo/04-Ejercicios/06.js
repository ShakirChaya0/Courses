/**
 * Crear algoritmo que devuelva la cantidad de números positivos de un array
 */

// Mi resolución

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos1(arr) {
  let positivos = 0
  for (let num of arr) {
    positivos = num > 0 ? positivos + 1 : positivos
  }
  return positivos
}

let resultado1 = cuantosPositivos1(array);
console.log(resultado1);

// Resolución de HolaMundo

function cuantosPositivos2(arr) {
  let cantidad = 0;
  for (let num of arr) {
    if (num > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let resultado2 = cuantosPositivos2(array);
console.log(resultado2);
