function crearUsuario(name, email) {
    return {
      name,
      email,
      activo: true,
      recuperarClave: function () {
        console.log('Recuperando clave...');
      },
    };
}

let user1 = crearUsuario('Nicolas', 'Nicolas@gmail.com');
let user2 = crearUsuario('Joaquin', 'Joaquin@gmail.com');

console.log(user1, user2);