let persona1 = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Simon',
    apellido: 'Perez'
}

// USO DE CALL Para usar el metodo persona1.nombreCompleto y ARGUMENTOS con los datos de persona 2
console.log(persona1.nombreCompleto('Lic ', '555555555'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '5533221144'));