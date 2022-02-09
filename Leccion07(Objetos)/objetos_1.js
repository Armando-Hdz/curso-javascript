let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    email: '12345a@gmail.com',
    edad: 28,

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona); // Imprime todo el objeto

console.log(persona.nombreCompleto());


// CREAR OBJETOS CON LA PALABRA NEW

let persona2 = new Object();
persona2.nombre = 'Jose';
persona2.direccion = 'Los angeles 33';
persona2.telefono = '5544332211';

console.log(persona2.telefono);
