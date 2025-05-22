// Testing

// Tipos de testing

// Pruebas unitarias: Verifican que funciones o componentes individuales del código funcionen correctamente de forma aislada.

function sum(a, b) {
    return a + b
}

module.exports = sum

console.log(sum(3, 5) === 8)

// Pruebas de integración: Evalúan cómo interactúan entre sí varios componentes o módulos del sistema.

// Pruebas end-to-end (E2E): Simulan escenarios reales para comprobar que todo el sistema funciona correctamente desde el inicio hasta el fin del proceso.