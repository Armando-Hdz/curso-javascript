// Declarar la funcion
function miFuncion(a,b) {
    return a+b;
}

// Llamar la funcion
let resultado = miFuncion(5,3);

console.log(resultado);


/* ------------------------------        -----------------------------*/
// FUNCION TIPO EXPRESION
let sumar = function(a,b){return a+b};

resultado = sumar(2,3);

console.log(resultado);
