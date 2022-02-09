let persona = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    email: '12345a@gmail.com',
    edad: 28,
    idioma: 'es',
    /* OTIGINAL
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }*/
    get lenguaje(){
        return this.idioma.toUpperCase(); //Existe LA FUNCION
    },
    set lenguaje(lenguaje){
        this.idioma = lenguaje.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

// IMPRIMIR GET
console.log(persona.nombreCompleto);

//IMPRIMIR SET
console.log(persona.lenguaje);

persona.lenguaje = 'en';

console.log(persona.lenguaje);
console.log(persona.idioma);