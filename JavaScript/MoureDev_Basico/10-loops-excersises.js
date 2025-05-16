/*

// 1-

for (let i = 1; i < 21; i++) {
    console.log(`${i}`);
}

// 2- 

let contador = 0;

for (let i = 0; i < 100; i++){
    contador += i; 
    if (i == 99){
        console.log(`${contador}`);
    }
}

// 3- 

for (let i = 1; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(`${i}`);
    }
}

// 4-

let nombres = ["Juan", "Pedro", "Jose"]

for (let nombre of nombres){
    console.log(`${nombre}`);
}

// 5- 

let cadena = "Este texto tiene 10 vocales";
let vocal = 0;
cadena = cadena.toLowerCase();
for (let caracter of cadena){
    if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        vocal += 1;        
    }
}
console.log(vocal);

// 6-

let numeros = [2,3,5,7,10];
let valor = 1;
for (let numero of numeros){
    valor *= numero;
}   
console.log(valor);

// 7- 

for (let i = 1; i <= 10; i++){
    console.log(i * 5);
}

*/

// 8-

let normal = "Shakir";
let invertida = "";
for (let i = normal.length - 1; i >= 0; i--){
    invertida += normal[i];
    console.log(invertida);
}

// 9 -

let num1 = 0;
let num2 = 1;
let nextNum;

for (let i = 0; i < 10 ; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
}