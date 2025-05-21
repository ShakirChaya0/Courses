// ---------- Clases avanzadas ----------

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Shakir", 20)
person.greet()

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()



// ---------- Clases Abstractas ----------

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}
/* Error
 const animal = new Animal("Mou")
 console.log(animal)
*/ 



// ---------- Polimorfismo ---------- (Capacidad de que el mismo método tenga comportamientos distintos)

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("ShakaCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("ShakaDog")
console.log(dog)
dog.makeSound()



// ---------- Mixins ---------- (Otra forma de establecer herencia, ayuda a no reescribir líneas de código)

const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }
class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("ShakaBird")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("ShakaDragon")
console.log(dragon.name)
dragon.fly()



// ---------- Patrón Singleton ---------- (Patrón que asegura que una clase se pueda instanciar una única vez)

class Session {

    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Shakir Chaya")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("Shakir Lucas Chaya")
console.log(session3.name)
console.log(session2 === session3)



// ---------- Symbol ---------- (Identificador único e inmutable)
// Forma antigua de definir propiedades privadas

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random() 
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user.name)
console.log(user.ID)
console.log(user.getId())



// ---------- instanceof ---------- (Sirve para comprobar si un objeto es instancia de una clase)

class Car { }

const car = new Car()

console.log(car instanceof Car)



// ---------- create ---------- (Otra forma de crear una instancia de un objeto)

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)



// ---------- Proxy ---------- (Sirve para interceptar y personalizar el comportamiento de clases)
// Puede servir para seguridad

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error
// account.balance = -10 