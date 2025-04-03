// Map  (Key => Value)

//Declaración

let myMap = new Map();


// Inicialización

myMap = new Map([
    ["name", "Shakir"],
    ["apellido", "Chaya"],
    ["edad", 20],
]
);


// Métodos comunes y propiedad

// set

myMap.set("mail", "shakirchaya2005@gmail.com");
myMap.set("mail", "shakirchaya2005@gmail.com"); // No se pueden repetir


// get

console.log(myMap.get("name"));
console.log(myMap.get("alias"));

// has

console.log(myMap.has("alias"));
console.log(myMap.has("edad"));

// delete

myMap.delete("mail");

// keys

console.log(myMap.keys());

// values

console.log(myMap.values());

// entries

console.log(myMap.entries());

// size

console.log(myMap.size);

// clear 

myMap.clear()

