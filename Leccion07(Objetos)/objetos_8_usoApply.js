let persona1 = {
    nombre: 'Armando',
    apellido: 'Hernandez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido ;
    }
}

let persona2 = {
    nombre: 'Simon',
    apellido: 'Perez'
}

// USO DE CALL Para usar el metodo persona1.nombreCompleto con los datos de persona 2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

/* ---------------------------- CON PARAMETROS -------------------------------*/

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

// SE DEBE DECLRAR UN ARREGLO Y DENTRO LOS VALORES PARA LOS PARAMETROS DEL METODO A UTILIZAR
let arreglo = ['Doc', '7971112031'];
console.log(persona1.nombreCompleto.call(persona2, arreglo));