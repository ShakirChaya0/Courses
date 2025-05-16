// Loopa o bucles 

// for

for (let i = 0; i < 5; i++) {

    console.log(`Esta es la iteración ${i}`);

}

const numbers = [1,2,3,4,5,6,7,8];

for (let i = 0; i < numbers.length; i++) {

    console.log(`Elemento ${numbers[i]}`);

}

// while

let i = 0;

while (i < 5) {

    console.log(`Esta es la iteración ${i}`);   
    i++;

}


// do while: Se ejecuta como mínimo una vez

i = 6;

do {

    console.log(`Esta es la iteración ${i}`);   
    i++;

} while(i < 5)


// for or

let myArray = [1,2,3,4];

let mySet = new Set(["Shakir","Chaya",20]);

let myMap = new Map([
    ["nombre", "Shakir"],
    ["apellido","Chaya"],
    ["edad",20],
])

let myString = "Shakir Chaya";

for (let valor of myArray) {
    console.log(valor);
}

for (let valor of mySet) {
    console.log(valor);
}

for (let valor of myMap) {
    console.log(valor);
}

for (let valor of myString) {
    console.log(valor);
}



// Buenas Prácticas

// break y continue

for (i = 0; i < 10; i++) {
    
    if (i = 5){
        continue; // Sigue con la proxima iteración
    } else {
        if (i == 6){
            break; // Termina el bucle
        }
    }
    console.log(`Iteración número ${i}`);

}




