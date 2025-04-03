let myArray = [1,2,3,4];

let person = {
    name: "Shakir",
    apellido: "Chaya",
    edad: 20,
}

let myValue = myArray[1];

let myName = person.name;


// Desestructuración

// Sintaxis Arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis de arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray;
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);



// Sintaxis objetos

let {name,apellido,edad} = person;
console.log(name);
console.log(apellido);
console.log(edad);

// Sintaxis objetos con valores predeterminados

let {name2, apellido2, edad2, email = "shakirchaya2005@gmail.com"} = person;
console.log(name2);
console.log(apellido2);
console.log(edad2);
console.log(email);

// En los objetos es obligatorio usar el nombre de la key para igualar datos


// Sintaxis objetos con nuevos nombres de variables

let {name: name3 , apellido: apellido3, edad: edad3} = person;
console.log(name3);
console.log(apellido3);
console.log(edad3);


// Objetos anidados

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

let { name: name4, job: {name: jobName} } = person5;

console.log(name4);
console.log(jobName);


// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray];

let myArray3 = [...myArray, 5, 6];

console.log(myArray2);
console.log(myArray3);

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3];

console.log(myArray4)


// Sintaxis para objetos

let person6 = {...person, email: "shakirchaya2005@gmail.com" };

console.log(person6);

