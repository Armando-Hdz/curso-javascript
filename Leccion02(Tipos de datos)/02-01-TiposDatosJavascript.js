var nombre = "Vicente";
console.log(nombre);

var numero = 150;
console.log(numero);

//Tipo de Dato objeto
var objeto = {
    nombre : "Armando",
    apellido : "Hernandez",
    telefono : "5544332211"
}
console.log(objeto);

// Tipo Boleano
var dato = true;
console.log(typeof dato);

// Tipo Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

// Tipo Clase es Funcion
class Persona {
    constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo Indefinido
var variable;
console.log(variable);

//Tipo Null
var variableX = null;
console.log(variableX); 


//Tipo ARRAY
var autos = ['BMW', 'Chevrolet', 'Nissan'];
console.log(autos);
