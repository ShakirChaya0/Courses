// Personaje de TV
let nombre = "Goku";
let serie = "DBZ";
let edad = 40;

let personaje = {
  nombre: "Goku",
  serie: "DBZ",
  edad: 40,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje[serie]);

personaje.edad = 30
personaje['edad'] = 30

delete personaje.edad

console.log(personaje);
