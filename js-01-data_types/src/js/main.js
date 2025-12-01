console.log("Session JS01 - Data Types");

/* ================================================================
   1. VARIABLES Y NOMENCLATURA
   ================================================================ */

// Contenido de tu versión (HEAD)
const name = "Arturo";
let age = 24;
let isch62 = true;
console.log("Mi nombre es:", name + ", tengo:", age + ", soy de la ch62:", isch62);

// Contenido versión serch
// Reglas modernas:
// - const (por defecto)
// - let (si cambia)
// - var (evitar)

const userName = "John Doe"; // String
let userAge = 30; // Number
let isMember = true; // Boolean

// Template literals
const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";

console.log(
  `Hola CH62 soy ${userName} 
 actualmente tengo ${userAge} y mi nacionalidad es ${currentNationality}`
);

/* ================================================================
   3. DATOS PRIMITIVOS: NUMBER Y BIGINT 
   ================================================================ */

const gravityEarth = 9.81;
console.log(typeof gravityEarth);

// Tipos de datos number
console.log(typeof 3.141592);
console.log(typeof 3 * 3);
console.log(typeof "");
console.log(typeof " ");
console.log(3 * "pitufo trabajador"); // NaN
console.log(typeof 3 * "pitufo trabajador"); // number
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof (3 + "Viernes temático"));
console.log(typeof "3Viernes temático");
console.log(4 / 0);
console.log(typeof (4 / 0));
console.log("4" * "2");
console.log(typeof ("4" * "2"));
console.log(typeof 8);
console.log(typeof "4" * "2"); // NaN
console.log("string" * "2"); // NaN

// Precisión
console.log("--- Precisión ---");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);

// Límites
console.log("--- Límites ---");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`);
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`);
console.log(`MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2}`);
console.log(`MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3}`);
console.log(`MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4}`);
console.log(`MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5}`);

/* ================================================================
   BIGINT
   ================================================================ */

const myBigInt = 9007199254740991n;
console.log(typeof myBigInt);
console.log(`Resultado de myBigInt + 1n: ${myBigInt + 1n}`);
console.log(`Resultado de myBigInt + 2n: ${myBigInt + 2n}`);
console.log(`Resultado de myBigInt + 3n: ${myBigInt + 3n}`);
console.log(`Resultado de myBigInt + 4n: ${myBigInt + 4n}`);
console.log(`Resultado de myBigInt + 5n: ${myBigInt + 5n}`);
console.log(`Resultado de myBigInt + 6n: ${myBigInt + 6n}`);
console.log(typeof (myBigInt + 6n));

/* ================================================================
   BOOLEAN, NULL, UNDEFINED
   ================================================================ */

let currentTask;
console.log(`Valor de currentTask: ${currentTask}`); // undefined

currentTask = "Iniciar sesión";
console.log(`Valor de currentTask: ${currentTask}`);

currentTask = null;
console.log(`Valor de currentTask: ${currentTask}`);

/* ================================================================
   CONVERSIÓN DE DATOS
   ================================================================ */

// Conversión implícita
console.log("--- Implícita ---");
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");

const myNumber = "10";
console.log(`Multiplicación: ${myNumber * 2}`);
console.log(typeof myNumber);

// Conversión explícita
console.log(Number("68.58"));
console.log(parseInt("68.58"));
console.log(parseFloat("68.58"));

console.log(Number("68.58 dolares"));
console.log(parseInt("68.58 dolares"));
console.log(parseFloat("68.58 dolares"));

console.log(Number("$68.58 dolares"));
console.log(parseInt("$68.58 dolares"));
console.log(parseFloat("$68.58 dolares"));

console.log(Number("68-58"));
console.log(parseInt("68-58"));
console.log(parseFloat("68-58"));

console.log(Number(true));
console.log(Number(false));

console.log(Number([]));
console.log(Number([30]));
console.log(Number([30, 40]));

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(10000));
console.log(Boolean(-1000));
console.log(Boolean(0));
console.log(Boolean(NaN));

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("1"));
console.log(Boolean("0"));

// String conversion
console.log(String(123));
console.log(String(12.34));
console.log("Mi número es " + 12.34);
console.log("Mi número es " + String(12.34));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String([]));
console.log(String([2, 3, 4, 5, null, 3]));
console.log(String({}));
console.log(String({ name: "Serch", active: true }));

console.log(JSON.stringify({ name: "Serch", active: true }));

const calificaciones = [8, 6, 5, 9];
console.log("Mi calificación es " + calificaciones);
