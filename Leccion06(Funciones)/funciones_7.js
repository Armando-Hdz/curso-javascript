// PASO POR VALOR
let x = 10; // Dato primitivo

function cambiarValor(a){
    a = 20; // Solo se ejecuta dentro del metodo
}

cambiarValor(x);
console.log(x); // Se mantiene el valor de 10 de la variable "x"
//console.log(a);

/* ----------------- PASO POR REFERENCIA ----------------------- */

const persona = {
    nombre: 'Armando',
    apellido: 'Hernandez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Fernandez';
}

//Paso por referencia (Referencia en memoria)
cambiarValorObjeto(persona);
console.log(persona);