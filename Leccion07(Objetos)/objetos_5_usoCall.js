let persona1 = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Simon',
    apellido: 'Perez'
}

// USO DE CALL Para usar el metodo persona1.nombreCompleto con los datos de persona 2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));