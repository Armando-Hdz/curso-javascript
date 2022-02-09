let persona = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    email: '12345a@gmail.com',
    edad: 28,

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Acceder a las propiedades de un OBJETO
console.log(persona.nombre);

console.log(persona['apellido']);

for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}

//IMPRIMIR UN OBJETO
let personaArray = Object.values(persona);
console.log(personaArray);

//UTILIZANDO JSON
let personaString = JSON.stringify(persona);
console.log(personaString);