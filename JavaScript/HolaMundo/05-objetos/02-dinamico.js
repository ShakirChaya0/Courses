const user = { id: 1 };

user.name = 'Nicolas';
user.guardar = function () {
  console.log('Guardando', user.name)
};
console.log(user)


// Borra propiedades
delete user.name;
delete user.guardar;
console.log(user)


// No se pueden agregar propiedades ni cambiar sus valores
const user1 = Object.freeze({ id: 2 }); 
user1.name = 'Nico';
user1.id = 3;
console.log(user1);


// No se pueden agregar propiedades pero se pueden cambiar los valores de las que ya tiene 
const user2 = Object.seal({ id: 3 }); 
user2.name = 'Nico'; 
user2.id = 4;
console.log(user2);