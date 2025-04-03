// if, else if and else

let age = 20;
let 

if (age > 18){
    console.log("Es Mayor");
} else if (age == 18) {
    console.log("Es Mayor");
}
else {
    console.log("Es Menor");
}


// Operador ternario (if and else)

age >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");


// Switch 

let day = 0;
let dayName;

switch (day) {
    case 0: 
        dayName = "Lunes";
        break
    case 1:
        dayName ="Martes";
        break
    case 2:
        dayName ="Miercoles";
        break
    case 3:
        dayName ="jueves";
        break
    case 4:
        dayName ="Viernes";
        break
    case 5:
        dayName ="Sabado";
        break
    case 6:
        dayName ="Domingo";
        break
    default: 
        dayName = "Día incorrecto";
        
}
