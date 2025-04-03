/** 
 * Crear algoritmo que devuelva el precio del producto más impuesto
 */

// Mi resolución

function precioCompleto(precio, impuesto) {
  let precio_final = precio + (precio * impuesto);
  return precio_final;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);

// Resolución HolaMundo

function precioCompleto1(precio, impuesto) {
  return precio_final = precio + (precio * impuesto);
}

let resultado1 = precioCompleto1(19.90, 0.15);
console.log(resultado1);
