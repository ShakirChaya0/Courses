// ---------- Manejo del DOM ---------- (Document Object Model)
// Representación en forma de árbol del contenido HTML de una página web, que el navegador crea en memoria para poder leer, modificar y manipular ese contenido con JavaScript.
console.log(document)



// ---------- Selección de elementos ----------

// ---------- Métodos básicos ---------- (selector HTML)

const myElementById = document.getElementById("id") // evuelve el único elemento con el atributo id="id", por ejemplo: <div id="caja">.

const myElementsByClass = document.getElementsByClassName("class") // Devuelve todos los elementos que tienen la clase "class", como <div class="rojo">, <p class="rojo">.

const myElementsByTag = document.getElementsByTagName("tag") // Devuelve todos los elementos con esa etiqueta HTML, por ejemplo: "div", "p", "span", etc.



// ---------- Métodos más modernos ---------- (selector CSS)

// Devuelve el primer elemento que coincide con el selector CSS dados
// Sirven para seleccionar por clase, id, etiqueta, atributos y combinaciones
document.querySelector(".paragraph") 
document.querySelector("#titulo")
document.querySelector("p")
document.querySelector("div.rojo")
document.querySelector("ul li.activo")

// Devuelve todos los elementos que coinciden con el selector CSS dado.
document.querySelectorAll(".paragraph") 



// ---------- Manipulación de elementos ----------

const title = document.getElementById("title")
title.textContent = "Hola JavaScript"

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>"



// ---------- Modificación de atributos ----------

// Obtención del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href")

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo
const hasTarget = link.hasAttribute("target")

// Eliminación de atributos
link.removeAttribute("target")


