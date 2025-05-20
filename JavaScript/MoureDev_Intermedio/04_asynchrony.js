/* Event Loop (Bucle de eventos)

// Components of the Event Loop:
    1. Call Stack:  JavaScript ejecuta el código aquí, paso a paso.
    2. Web APIs or Node.js APIs:  Realizan tareas en segundo plano (como temporizadores o búsquedas). 
    3. Queues: 
        - Microtask Queue:  Para promesas (se ejecuta primero).
        - Task Queue: Para setTimeout y eventos (se ejecuta después).

// Flujo del Event Loop:
    1. Call Stack
    2. Operaciones asíncronas -> Web APIs o Node.js
    3. Operación termina -> La coloca en Task Queue o Microtask Queue
    4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
    5. El proceso se repite

*/



// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 100000000; i++) { }

console.log("Fin")

// Código asíncrono

// Callbacks: Mecanismo básico para usar asincronía

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

console.log("Fin")

// Problema: Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// Promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = false
        if (ok) {
            resolve("Operación exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
     .finally(always => {
        console.log("Se ejecuta siempre")
    })


// Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })

// Async - Await: Forma más común y moderna. Se encuentra en varios lenguajes

function wait(ms) { // Función para simular el tiempo
    return new Promise(resolve => setTimeout(resolve, ms))
} 

async function process() {

    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(1000)
    console.log("Proceso después de 1 segundo")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()