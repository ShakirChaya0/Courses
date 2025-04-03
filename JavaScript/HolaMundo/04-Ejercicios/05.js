/**
 * Crear algoritmo que decuelva el número mayor y menor de un array
 */

// Mi resolución 

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor1(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  for (let num of arr) {
    if (num > mayor) {
      mayor = num;
    } else if (num < menor) {
      menor = num;
    }
  }
  let resultado = [menor, mayor];
  return resultado;
}

let numeros1 = getMenorMayor1(array)
console.log(numeros1)

// Resolución de HolaMundo

function getMenorMayor2(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  let resultado = [menor, mayor];
  return resultado;
}

let numeros2 = getMenorMayor2(array)
console.log(numeros2)

