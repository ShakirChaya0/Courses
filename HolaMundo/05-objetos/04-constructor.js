function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    console.log('Recuperando');
  };
};

let usuario = new Usuario();

console.log(usuario);