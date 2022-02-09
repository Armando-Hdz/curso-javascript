// let autos = new Array('BMW','Mercedes Benz','Volvo'); VERSION ANTIGUA

const autos = ['BMW','Mercedes Benz','Volvo'];

console.log(autos);

console.log(autos[0]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}


//MODIFICAR VALORES DE UN ARREGLO: ES NECESARIO ESPECIFICAR EL INDICE
autos[2] = 'Audi';
console.log(autos[2]);

autos.push('Chevrolet');
console.log(autos);

// AGREGAR MAS ELEMENTOS A UN ARREGLO:
console.log(autos.length);

//autos (autos.length) = 'Nissan';

console.log(autos);

autos[6] = 'Porche';
console.log(autos);