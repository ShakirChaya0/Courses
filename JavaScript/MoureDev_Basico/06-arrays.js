// Arrays


let myArray = []; //Recomendada
let myArray2 = new Array();


myArray = [1] // Agrega el 1 a la lista
myArray2 = new Array(4); // Reserva espacios en la lista


myArray = [1, 2, 3 , 4];
myArray2[0] = 1;
myArray2[1] = 2;
myArray2[2] = 3;
myArray2[3] = 4;


// Métodos comunes de los arrays

myArray = [];


myArray.push("Shakir"); // Agrega elementos al array
myArray.push("Chaya");
myArray.push(20);

myArray.pop();  // Elimina el último elemento del array
myArray.pop();


myArray.shift(); // Elimina el primer elemnto del array

myArray.unshift("Shakir", "Chaya"); // Agrega un elemento al principio del array

console.log(myArray.length) // Cuantos elementos tiene el array}

myArray.slice(1, 3) // Copia los elementos entre 1 y 3 sin contar el 3


