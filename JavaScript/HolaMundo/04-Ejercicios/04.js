// Algoritmo que imprima números impares 

// Mi resolución

function impares1(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 1) {
      console.log('N° impar:', i);
    }
  }
}

let resultado = impares1(0, 10);
console.log(resultado);

// Resolución de HolaMundo

let i = 0;
while (i <= 10) {
  if (i % 2 === 1) {
    console.log('N° impar:', i);
  }
  i++;
}