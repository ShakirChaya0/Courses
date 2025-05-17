/*---------- Arrays Avanzados ----------*/ 

// Métodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach(number => console.log(number))

// map: Crear un nuevo array aplicando la función que sea a cada elemento

let doubled = numbers.map(number => number * 2)
console.log(doubled)

// filter: Crear un nuevo array filtrando los elemento que cumplan la condición

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce: Retorna un número que va a ser el resultado de la función

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// Manipulación

// flat: Retorna un array Aplanando la cantidad de dimensiones que se le indique a otro

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1) 
console.log(flatArray)
flatArray = nestedArray.flat(2) 
console.log(flatArray)
flatArray = nestedArray.flat(3) 
console.log(flatArray)

// flatMap: Retorna un array siguiendo un criterio

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)


// Ordenación

// sort: Ordena un array según el criterio que se le indique, por defecto ordena por alfabeto

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b) 

console.log(sorted)

// reverse: Da vuelta un array

sorted.reverse()
console.log(sorted)


// Búsqueda

// includes: Retorna true o false

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find: Retorna el primer elemento que cumpla la condición o undefined

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex: Retorna la posición del elemento que cumpla la condición o -1

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)




/* ---------- Sets Avanzados ---------- */ 

// Set a Array

console.log([...setA])

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)] // Crea un array sin duplicados utilizando el operador spread
console.log(numbersArray)

// Operaciones de conjuntos

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB]) // Une 2 sets usando operador spread sin duplicados
console.log(union)

// Intersección 

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection) // Crea un set con los elementos que comparten ambos sets

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference) // Crea un set con los elementos de un set que no comparte con el otro


// Iteración

// forEach

setA.forEach(element => console.log(element))




/*---------- Maps Avanzados ----------*/ 

let myMap = new Map([
    ["name", "Shakir"],
    ["age", 20]
])

// Iteración

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)