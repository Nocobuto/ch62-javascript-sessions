console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo.
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
- Evitar efectos secundarios: Una función no debe modificar variables externas.
*/


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration)

Hoisting: las funciones declaradas se cargan en memoria antes de ejecutarse.
*/

console.log( saludar("Johan") ); // undefined porque la función no retorna nada

function saludar(nombre){
    console.log(`Hola ${nombre}, qué vas a comer hoy?`);
}


/*
 ------------ Funciones expresadas -----------------------
(function expressions)
No tienen hoisting porque no se cargan en memoria hasta ejecutarse.
*/

/**
 * Función que recibe nombre y apellido y retorna el nombre completo
 */
const printFullName = function (firstName, lastName) {
  return `${firstName} ${lastName} estudiante de la Ch62`;
};

console.log( printFullName("Johan", "Gonzalez") );


/*
 ------------ Funciones flecha -----------------------
(arrow functions)
*/

const nombreCompleto = (nombre, apellido) => 
  `${nombre} ${apellido} estudiante de la Ch62`;


/*
 ------------ Parámetros por defecto -----------------------
(default parameters)
*/

// Versión final correcta de makeCoffe
const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;

console.log( makeCoffe("Latte") );
console.log( makeCoffe() );

// Área de rectángulo con parámetros por defecto
const AreaRectangulo = (largo = 3, ancho = 2) => largo * ancho;


/*
 Pase de datos:
 - Por valor: Se crea una copia y el original NO cambia.
 - Por referencia: Se pasa la dirección de memoria y el original SÍ cambia.
*/


/*
 ------------ Funciones de Callback -----------------------
 Es una función que se pasa como argumento a otra.
*/

// Ejemplo de mal diseño
const calculateBad = (a, b, type) => {
  if (type === "sum") return a + b;
  if (type === "subtract") return a - b;
};

// Ejemplos
console.log( calculateBad(5, 3, "sum") );      
console.log( calculateBad(5, 3, "subtract") );


// Función principal "cerrada" usando callbacks
const calculate = (a, b, operationFunction) => {
  return operationFunction(a, b);
};


// Operaciones básicas
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;
const divide = (a, b) => a / b;

// Uso
console.log(`Restando: ${calculate(5, 3, subtract)}`);
console.log(`Multiplicando: ${calculate(5, 3, multiply)}`);
console.log(`Sumando: ${calculate(5, 3, sum)}`);
console.log(`Dividiendo: ${calculate(6, 3, divide)}`);

// Potencia usando función anónima
console.log(`Potencia: ${calculate(6, 3, (a, b) => a ** b )}`);

// Residuos para saber si 7 es divisible entre 3
console.log(`Residuo de 7 entre 3: ${calculate(7, 3, (a, b) => a % b)}`);
