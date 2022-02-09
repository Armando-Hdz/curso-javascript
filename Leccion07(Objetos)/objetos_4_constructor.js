//Funcion CONSTRUCTOR de objetos de tipo PERSONA
function Persona(nombre, apellido, email){
    this.nombre = nombre;  
    this.apellido = apellido;
    this.email = email;
    //PARA AGREGAR UN METODO Y SE APLIQUE A TODOS LOS OBJETOS PUEDE INCLUIRSE DENTRO DE LAS PROPIEDADES DEL OBJETO.
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }

}

let padre = new Persona('Armando', 'Hernandez', 'ahernandez@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Mauricia', 'Lopez', 'mau123@gmail.com'); 
console.log(madre);
console.log(madre.nombreCompleto());

/* -------------------------------- FORMAS DE CREAR OBJETOS ------------------------------------------*/
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena = new String('Hola');
let miCadena2 =  'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean (true);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};