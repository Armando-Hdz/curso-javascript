let a = 10;

if (a%2 == 0) {
    console.log("Es un numero par");
}else{
    console.log("No es número par");
}

//  EJERCICIO DE MAYOR DE EDAD
let edad = 20, adulto=18;

if(edad >= adulto){
    console.log("Es un adulto!");
}else{
    console.log("No es adulto!");
}

// EJERCICIO DE OPERADOR AND
let b = 5;
let valMin = 0, valMax = 10;
if (b >= valMin && b <= valMax ) {
    console.log("Estas dentro del rango");
} else {
    console.log("Estas fuera del rango");
}


//EJEMPLO DE OPERADOR OR
let vacaciones =false, diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("El papá puede asistir al juego del morro");
} else {
    console.log("El papá anda ocupado");
}


//EJEMPLO OPERADOR TERNARIO 
let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
let resultado1 = (numero % 2 == 0) ? "Es numero par" : "Es numero impar";
console.log(resultado1);