const evaluarTemperatura = (temperatura) => {
  if (temperatura > 25) {
    return "Hace calor";
  } else {
    return "Hace frío";
  }
};

const obtenerDescripcionClima = (weatherCode) => {
  if (weatherCode === 0) {
    return "Clear sky";
  } 
  
  if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
    return "Mainly clear, partly cloudy, and overcast";
  }

  if (weatherCode === 45 || weatherCode === 48) {
    return "Fog and depositing rime fog";
  }

  return "Código no reconocido";
};

// Ejemplos de uso:
console.log(obtenerDescripcionClima(0));   // Clear sky
console.log(obtenerDescripcionClima(2));   // Mainly clear, partly cloudy, and overcast
console.log(obtenerDescripcionClima(48));  // Fog and depositing rime fog

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("editor") ); // Acceso para editar contenido


/* Refactorizar la función getWeather usando switch-case */
const getWeatherSwitch = (codigo) => {
    let message;

    switch (codigo) {
        case 0:
            message = "Clear Sky";
            break;

        case 1:
        case 2:
        case 3:
            message = "Mainly clear, partly cloudy, and overcast";
            break;

        case 45:
        case 48:
            message = "Fog and depositing rime fog";
            break;

        default:
            message = "no definido";
    }

    return message;
};


/* Realizar una función que reciba un número y retorne "Par" si el número es par o "Impar" si el número es impar. Usar el operador ternario. */
const esParOImpar = (numero) => {
    return numero % 2 === 0 ? "Par" : "Impar";
};
