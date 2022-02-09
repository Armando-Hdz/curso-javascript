// Funcion Tipo SELF INVOKING

(function (){
    console.log("Ejecutando la funcion");
})();


//CON PARAMETROS
(function (x,y){
    console.log("Ejecutando la funcion: La suma es = " + (x+y) );
    console.log(arguments.length);
})(10,20);

/*---------------------- FUNCION COMO OBJETO -------------------------*/

