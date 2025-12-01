/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
//convertir la funcion printfullname a funcion flecha
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName} estudiante de la Ch62`;
};

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/
const makeCoffee = (type = "americano") => 'Preparando un café ' 
const makeCoffe = ( type ) => `Preparando un café ${type}`;
console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() ); // Preparando un café undefined

// rectangulo con parámetros por defecto
const AreaRectangulo= (largo = 3, ancho = 2) => largo * ancho;

/*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

      // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};
console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};
// Crear una función que sume dos números
// Aplicar a la función calculate la función suma

// 1. Función que suma dos números
const suma = (a, b) => a + b;

// 2. Función calculate que usa la función suma
const calculate = (num1, num2, operation) => {
  return operation(num1, num2);
};

// 3. Ejemplo de uso
const resultado = calculate(5, 7, suma);

console.log(resultado); // 12
