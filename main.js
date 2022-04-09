//--------------------------------------------------Ejercicio 3 salack-----------------------------------------------

// 1- Evaluar una calificacion
// -Solicitar una calificacion al usuario de 0 a 100
// -Evaluemos con un if si su calificacions es A, B, C, D, E, etc
// -Mostremos con un switch su calificacion.

//--------------Ejercicio Ivan clase JS----------------------------------------------------------------07/04/22------
let a = prompt("Ingresa calficacion del 0 al 100");


function calificacion (A){
    if( A >= 100 ){
        console.log("su calificacion es", "A");
    } else if ( A >= 90){
        console.log("su calificacion es", "B");
    }else if ( A >= 80 ){
        console.log("su calificacion es", "C");
    }else if ( A >= 70){
        console.log("su calificacion es", "D");
    }else if ( A >= 60){
        console.log("su calificacion es", "F");
    } else {
        console.log("Reprobado");
    }
}

calificacion (a);


switch (calificacion){
    case "F":
        console.log("Estas reprobado" + calificacion);
        case "D":
            console.log("Estas reprobado" + calificacion);
            case "C":
            console.log("Estas Aprobado" + calificacion);
            case "B":
            console.log("Aprovado" + calificacion);
            case "A":
            console.log("Excelente" + calificacion);
}

//------------------------------Pendiente de Termino Ejercicio 2------------------------------------------------------------------------------------------------------------------
// 2- Casa de cambio

// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo: 

// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA

// salida de la funcion: '$1500MXN (moneda local elegida por el usuario) equivale a $750USD(moneda del pais ingresado por el usuario)'

// Considerar minimo 4 tipo de monedas

// output:  '100 MXN equivale a 50 USD'.