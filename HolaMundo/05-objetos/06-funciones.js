function Usuario(nombre) {
  this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Shakir');

console.log(user);

function of(FN, arg) {
  return new FN(arg);
}

let user1 = of(Usuario, 'Nico');
console.log(user1);

function returned() {
  return function () {
    console.log('Hola Mundo');
  };
}

let saludo = returned();
saludo();