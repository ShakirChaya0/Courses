/**
 * indice validar que no sea menor a cero y que el  elemento exista en el array
 */

//  Mi resolución

function getbyIdx1(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return 'El elemento no existe en el array';
  } else {
    return arr[idx]
  }
}

let resultado1 = getbyIdx1([1, 2, 3], 2);
console.log(resultado1);

// La resolución de HolaMundo

function getbyIdx2(arr, idx) {
  if (idx < 0 || idx >= arr.length) {
    return 'El elemento no existe en el array';
  } 
  return arr[idx]
}

let resultado2 = getbyIdx2([1, 2, 3], 2);
console.log(resultado2);
