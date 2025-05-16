// Objects

// Sintaxis

let person = {
    name: "Shakir",
    apellido: "Chaya",
    edad: 20,
}


// Acceso a propiedades

// Notación punto (Recomendada)

console.log(person.name);

// Notación de []

console.log(person["name"]);

// Modificación de propiedades

person.name = "Shakir Lucas";

console.log(person.name);

console.log(typeof person.edad);

person.edad = "20";

console.log(person.edad);

console.log(typeof person.edad);

// Eliminación de propiedades

delete person.edad;

console.log(person);

// Agregar propiedades

person.mail = "shakirchaya2005@gmail.com";

person.edad = 20;

console.log(person);

// Métodos en un objeto

let person2 = {
    name: "Shakir",
    apellido: "Chaya",
    edad: 20,
    walk: function() {
        console.log("La persona camina.");
    },

}
 
person2.walk();

// Anidación de objetos

let person3 = {
    name: "Shakir",
    apellido: "Chaya",
    edad: 20,
    walk: function() {
        console.log("La persona camina.");
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function() {
            console.log(`La persona de trabaja.`);
        },
    }
}

console.log(person3);

console.log(person3.job);

console.log(person3.job.name);

person3.job.work();

// Igualdad de objetos

let person4 = {
    name: "Shakir Lucas",
    apellido: "Chaya",
    edad: 20,
}

console.log(person == person4);
console.log(person === person4); // Se compara la dirección de memoria y no los valores

console.log(person.name == person4.name)

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key]);
}

// Acceso a un valor dentro de un mismo objeto

let person5 = {
    name: "Shakir",
    apellido: "Chaya",
    edad: 20,
    walk: function() {
        console.log("La persona camina.");
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia trabaja de ${this.name}.`);
        },
    }
}

person5.work();

