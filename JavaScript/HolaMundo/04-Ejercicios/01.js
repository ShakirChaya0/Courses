// Mi resolución
function cualEsMayor1(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Son iguales";
  }
}

let mayor1 = cualEsMayor1(4, 8);

console.log(mayor1);

// La resolución de HolaMundo

function cualEsMayor2(a, b) {
  return (a > b) ? a : b;
}

let mayor2 = cualEsMayor2(2, 6);

console.log(mayor2);