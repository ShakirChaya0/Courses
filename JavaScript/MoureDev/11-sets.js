// Set

let mySet = new Set();


mySet = new Set(["Shakir", "Chaya", 20]);



// Métodos comunes

// add

mySet.add("shakirchaya2005@gmail.com");

console.log(mySet);

// delete

mySet.delete("shakirchaya2005@gmail.com");

console.log(mySet);

// has

mySet.has("Shakir") // true
mySet.has("shakirchaya2005@gmail.com") // false

// size

console.log(mySet.size);

// Convertir un set a array

let myArray = Array.from(mySet);

// Convertir un array a set

mySet = new Set(myArray);


// Principal diferencia entre Set y Array

mySet.add("Shakir")
mySet.add("Shakir")
mySet.add("Shakir") // No admite duplicados mientras que el array si



