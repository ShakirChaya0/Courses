/** 
 * Crear algoritmo qye tome un array de objetos y devuelva un array de pares
*/

let array = [{
  id: 1,
  name: 'Nicolas',
}, {
  id: 2,
  name: 'Joaquín',
}, {
  id: 3,
  name: 'Jose',
}];

// Mi resolución 

function toPairs(arr) {
  let pares = [];
  for (idx in arr) {
    pares[idx] = [arr[idx].id, arr[idx]];
  }
  return pares;
}

let resultado = toPairs(array);
console.log(resultado);


// Resolución de HolaMundo

function toPairs1(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado1 = toPairs1(array);
console.log(resultado1);
