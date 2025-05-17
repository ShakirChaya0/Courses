// Objetos avanzados


// Prototipos --> Se usaba antes de que existieran las clases

let person = {
    name: "Shakir",
    age: 20,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()


// Herencia a partir del prototipo

let programmer = Object.create(person) // Crear un objeto a partir de otro
programmer.language = "JavaScript"
programmer.name = "Shakir Lucas"

console.log(person.name)
console.log(person.language)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
programmer.greet()
programmer.sayAge()


// Métodos estáticos y de instancia a partir del prototipo

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()


// Métodos avanzados

// assign

let personCore = { name: "Brais" }
let personDetails = { age: 37, alias: "MoureDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))

