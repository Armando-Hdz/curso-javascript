// SUMAR TODOS LOS ARGUMENTOS

let resultado = sumarTodo(5, 4, 13, 15, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // Es igual a: suma = suma + arguments[i]
    }
    return suma;

}