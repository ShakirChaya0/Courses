// Operadores Aritméticos


let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b); // Modulo
console.log(a ** b); // Exponente

a++; //Incremento
b--; //Decremento


// Operadores de asignación

let c = 2;

c += 2;
c -= 2;
c /= 2;
c *= 2;
c %= 2;
c **= 2;


// Operadores de comparación

console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a); // Igualdad por valor
console.log(a === a); // Igualdad por identidad (Tipo y valor)
console.log(a === 6); // Igualdad por identidad (Tipo y valor)
console.log(a === "6"); // Igualdad por identidad (Tipo y valor)
console.log(a != 6); 
console.log(a !== "6"); 
console.log(0 == false); // True
console.log(1 == false); // False
console.log(2 == false); // False
console.log(0 == ""); // True
console.log(0 == " "); // True
console.log(0 == ''); // True
console.log(0 == "Hola"); // False
console.log(0 === ""); // False
console.log(undefined == null); // True
console.log(undefined === null); // False

/* Valores verdares 
    - Todos los numeros positivos y negativos menos el cero
    - Todas las cadenas menos las  vacías
    - Booleans true
*/

/* Valores falsos
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - Boolean false
    - Cadenas vacías
*/



// Operadores Lógicos

console.log(5 > 10 && 15 > 20); // false
console.log(5 > 10 || 15 > 20); // true
console.log(!true); // false


// Operadores ternarios 

const isRaining = true;

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");