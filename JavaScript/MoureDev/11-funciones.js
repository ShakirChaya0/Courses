// Funciones


// Simple

function myFunc() {
    console.log("Hola, función");
}
myFunc();

// Con parametros

function myFuncWithParams(name){
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Shakir");


// Funciones anónimas

const myFunc2 = function(name){
    console.log(`Hola, ${name}`)
}

myFunc2("Shakir");

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("Shakir");
myFunc4("Shakir");


// Parámetros

function sum(a,b){
    console.log(a+b);
}

sum(5,10);
sum(5);
sum();

function defaultSum(a = 0 , b = 0){
    console.log(a+b);
}

defaultSum();
defaultSum(5);
defaultSum(5,10);
defaultSum(5,10);
defaultSum(b = 5);


// Retorno de valores

function mult(a, b){
    return a * b;
}

let result = mult(6,10);

console.log(result);

// Funciones anidadas

function extern(){
    console.log("Función externa");
    function intern() {
        console.log("Función interna");
    }
    intern();
}

extern();
// intern(); Error: fuera del scope (alcance)


// Funciones de orden superior

function applyFunc(func, param) {
    func(param);
}

applyFunc(myFunc4,"Función de orden superior");


// foreach 

let myArray = [1,2,3,4];

let mySet = new Set(["Shakir","Chaya",20]);

let myMap = new Map([
    ["nombre", "Shakir"],
    ["apellido","Chaya"],
    ["edad",20],
])

let myString = "Shakir Chaya";

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));

myArray.forEach(function(value){
    console.log(value);
})

