// Strings

let myName = "Shakir";
let greeting = "Hola" + myName + "!";

// Longitud

console.log(greeting.length); 

// Acceso a caracteres 

console.log(greeting[0]);
console.log(greeting[11]);

// Métodos comunes

console.log(greeting.toUpperCase);
console.log(greeting.toLowerCase);
console.log(greeting.indexOf["Shakir"]); // Donde está? -1 si no está
console.log(greeting.includes); // Existe?
console.log(greeting.slice(0, 10)); // Retornar una parte
console.log(greeting.replace("Shakir", "Lucas")); //Remplaza una palabra por otra

// Plantillas literales

 let message = `Hola, 
 este es el curso 
 de JavaScript`;

console.log(`Hola, ${myName}`);

