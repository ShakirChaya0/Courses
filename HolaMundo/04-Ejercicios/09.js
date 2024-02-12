/** 
 * Array de objetos en base a pares
*/

let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Joaquín" }],
  [3, { name: "Santiago" }],
];

// Mi resolución

function toCollection(arr) {
  array = [];
  i = 0;
  for (elemento of arr) {
    elemento[1].id = elemento[0];
    array[i] = elemento[1];
    i++;
  }
  return array;
}

let resultado = toCollection(pairs);
console.log(resultado);


// Resolución HolaMundo

function toCollection1(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    elemento[1].id = elemento[0];
    collection[idx] = elemento[1];
  }
  return collection;
}

let resultado1 = toCollection1(pairs);
console.log(resultado1);
