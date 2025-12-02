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
*/

let isActive = true;

if (isActive === true) console.log("El usuario está activo");
if (isActive == true) console.log("El usuario está activo");

if (isActive === true) {
    console.log("El usuario está activo");
} else {
    console.log("El usuario no está activo");
}

if (isActive) {
    console.log("El usuario está activo"); 
}

// Bloque de código
{
    let firtsName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;

    console.log(firtsName,lastName,alias); 
    { 
        let firtsName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firtsName,lastName,alias, age); 
    }

    console.log(firtsName,lastName,alias, age); 
}
console.log(alias); 

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
*/
const checkTemperature = (temperature) => {
    let message = "";
  if (temperature > 30) {
    message = "Hace calor";
  } else if (temperature >= 15 && temperature <= 30) {
    message ="Temperatura agradable";
  } else if (temperature < 15 && temperature >= 0) {
    message ="Hace frío";
  } else {
    message ="Hace mucho frío";
  }
  return message;
};


// Operadores AND y OR
console.log( true && false ); 
console.log( true && "Usando corto circuito "); 
console.log( "false" && "Mi mente sigue de vacaciones"); 
console.log( 0 && "Chau, chau"); 
console.log( "" && "Chau, chau"); 
console.log( false && "Chau, chau"); 

console.log( true || false ); 
console.log( true || "Usando corto circuito "); 
console.log( "false" || "Mi mente sigue de vacaciones"); 
console.log( 0 || "Chau, chau"); 
console.log( "" || "Chau, chau"); 
console.log( false || "Chau, chau"); 
console.log( false || undefined ); 

console.log( "Activado" && undefined ); 

const isLoggedIn = true;
if(isLoggedIn) {
    console.log("El usuario está logueado");
}  else {
    console.log("El usuario no está logueado");    
}

console.log( isLoggedIn && "El usuario está logueado" || "El usuario no está logueado" ); 


/*
 Realizar una función que reciba un código(weatherCode)
*/
const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
}

console.log(getWeather(88));


//--------------- Condicional Switch-case --------------------------

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":                   
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};


/**
 * Switch case con Early Return
 */
const getAccessLevelWithEarlyReturn = ( role ) => {
    switch ( role ) {
        case "super_admin":                   
        case "admin":
            return "Acceso completo al sistema";      
        case "editor":
           return "Acceso para editar contenido";           
        case "viewer":
            return "Acceso solo para ver contenido";           
        default:
            return "Acceso denegado";
    }    
};

console.log( getAccessLevel("admin") );
console.log( getAccessLevel("super_admin") );
console.log( getAccessLevel("editor") );
console.log( getAccessLevel("customer") );


/*
 Refactorizar getWeather con switch-case
*/
const getWeatherSwitch=(codigo)=>{
    let message;
    switch ( codigo){
       case 0 :
           message="Clear Sky";
           break
       case 1:
       case 2:
       case 3:
           message="Mainly clear, partly cloudy, and overcast";
           break;
       case 45:
       case 48: 
           message="Fog and depositing rime fog";
           break
       default :
           message="no definido";
    }
    return message;  
} 

console.log (getWeatherSwitch(45));

const getWeatherSwitch2=(codigo)=>{
    switch ( codigo){
       case 0 :
           return "Clear Sky";
       case 1:
       case 2:
       case 3:
           return "Mainly clear, partly cloudy, and overcast";
       case 45:
       case 48: 
           return "Fog and depositing rime fog";
       default :
           return "no definido";
    } 
}
console.log (getWeatherSwitch2(0));


// ==========================================================

function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
}
  
console.log(clasificarNumeroIfElse(-5));   
console.log(clasificarNumeroIfElse(0));    
console.log(clasificarNumeroIfElse(50));   
console.log(clasificarNumeroIfElse(100));  


function evaluarElNumeroSwitch(numero) {
    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); 
console.log(evaluarElNumeroSwitch(0) ); 
console.log(evaluarElNumeroSwitch(45) ); 
console.log(evaluarElNumeroSwitch(100) ); 


// ------------------------ Operador ternario --------------------------

const votingEligibility = (age) => {
    return age >= 18 ? "Puede votar" : "No puede votar";
}

console.log(votingEligibility(20)); 
console.log(votingEligibility(16)); 


const numerosPar = (num) => {
    return num%2 === 0 ? "El número es par ;)" : "No es par :v";
}
console.log(numerosPar(14));
