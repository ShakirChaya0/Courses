let user = {
  id: 1,
  name: 'Perro',
  age: 10,
};

for (let prop in user) {
  console.log(prop, '=', user[prop]);
}

let animales = ['Perro', 'Gato', 'Dragon'];
for (let indice in animales) {
  console.log(indice, '=', animales[indice]);
}