/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

let isActive = true;

if (isActive === true) console.log("El usuario está activo");
if (isActive == true) console.log("El usuario está activo");

if (isActive === true) {
    console.log("El usuario está activo");
}

if (isActive) {
    console.log("El usuario está activo"); 
}

// Bloque de código: 
// Conjunto de sentencias agrupadas entre llaves { ... }
{
    let firtsName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;

    console.log(firtsName,lastName,alias); //Juan Pérez Juampi
    { // Bloque anidado
        let firtsName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firtsName,lastName,alias, age); //Sergio Torres Serch 28 
    }

    console.log(firtsName,lastName,alias, age); // Juan Pérez Serchmo 28
}
// console.log(firtsName,lastName,alias, age); firtsName is not defined
console.log(alias); // Serchmo