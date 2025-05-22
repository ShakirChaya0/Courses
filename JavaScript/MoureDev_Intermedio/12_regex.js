// Expresiones regulares

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
// regex101.com


// Sintaxis

const regex = /abc/
const regex2 = RegExp("abc")
const text = "Hola abc JavaScript"

// test: verifica coincidencia con true o false

console.log(regex.test(text)) 
console.log(regex2.test(text))

const text2 = "Mi edad es 37"
const regex3 = /\d/ // Busca cualquier dígito entre 0 y 9
const regex4 = /[4-6]/ // Busca dígitos en el rango indicado
console.log(regex3.test(text2))
console.log(regex4.test(text2))

// replace: reemplaza el texto que coincide con el patrón

const regex5 = /JavaScript/
const regex6 = /\d/g // Busca de manera global
console.log("Hola JavaScript".replace(regex5, "JS"))
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex6, "[número]")) 

// exec: retorna detalles de la coincidencia

console.log(regex6.exec(text3))

while ((match = regex6.exec(text3)) !== null) {
    console.log(match)
}