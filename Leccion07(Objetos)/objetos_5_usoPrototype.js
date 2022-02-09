function Persona(nombre, apellido, email){
    this.nombre = nombre;  
    this.apellido = apellido;
    this.email = email;
    //PARA AGREGAR UN METODO Y SE APLIQUE A TODOS LOS OBJETOS PUEDE INCLUIRSE DENTRO DE LAS PROPIEDADES DEL OBJETO.
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '';


let padre = new Persona('Armando', 'Hernandez', 'ahernandez@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());
// CAMBIAR VALOR DE VARIABLE CON PROTOTYPE
padre.tel = '5544223311';
console.log(padre.tel);

let madre = new Persona('Mauricia', 'Lopez', 'mau123@gmail.com'); 
console.log(madre);
console.log(madre.nombreCompleto());