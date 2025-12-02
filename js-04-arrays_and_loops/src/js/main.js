console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
const frutas = [];
const fruits = new Array();

const numeros = [ 5 ];
const numbers = new Array(5);

// --- 2. Acceso a Elementos ---
const techStack = ["HTML", "CSS", "JavaScript"];

console.log( techStack.length ); 
console.log(`Accediendo al primer elemento:  ${ techStack[0] }`);
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass";
console.log("Después de la modificación:", techStack);

techStack[ techStack.length ] =  "TypeScript";

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================ */
const shoppingList = ["Leche", "Huevos"];

shoppingList.push("Pan"); 
console.log("Push:", shoppingList);

shoppingList.unshift("Café");
console.log("Unshift:", shoppingList);

const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`);
console.log("Lista actual:", shoppingList);

const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`);

// --- Método splice() ---
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales:", colors.toString());
console.log("Colores iniciales:", colors.join(" - "));

colors.splice(2, 0, "Rosa", "Cian");
console.log("Después de agregar con splice:", colors.toString());

// TODO EXERCISE
const guestList = ['Walter', 'Jesse'];
guestList.push('Hank');
guestList.unshift('Mike');
guestList.splice(1, 1, 'Gustavo');
console.log('Lista final de invitados:', guestList.join(', '));

/* ================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================ */
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");

console.log("Historial actual:" + historyStack);

console.log(`Regresando a: ${ historyStack.pop() }`);

const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");

console.log("Cola de impresión:", printQueue);

const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`);

/* ================================================================
 Ejercicio de tareas
================================================================ */

const taskList = [];

taskList.push("Barrer", "Trapear", "Sacudir");

console.log("Lista de tareas inicial: " + taskList.join(", "));

console.log("Tarea completada: " + taskList.shift());

taskList.unshift("Limpiar arenero");

console.log("Tarea URGENTE añadida, lista de tareas actualizada: " + taskList.join(", "));

console.log("Tarea URGENTE completada: " + taskList.shift());
console.log("Lista de tareas final: " + taskList.join(", "));

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================ */

for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

for(let i = 1; i <=10 ; i++ ) {
    if(i === 6) {
        console.log("¡Se alcanzó el número 6");
        break; 
    }
    console.log(`(con break) Número ${i}`);
}

// ===============Ejercicios mentales ====================

let iteracion = 0;

for ( ; ; ){
    console.log( `Núm de iteración: ${iteracion}` );
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}
console.log("Final", iteracion);

// =====================================================

let myIteration; 

for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration );
     if( myIteration === 2) break;  
}
console.log("Final", myIteration);

// =====================================================
 let jiteration;

for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration );
}
console.log("Final", jiteration);

// =====================================================
let k;
for ( k = 0; k < 5; k++ )   ; 
{
   console.log("Valor de", k );
}
console.log("Final", k);

// ------------------- Uso de continue ----------------------
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for");
    console.log("Valor de i ", i );
}

/* ================================================================
   WHILE
================================================================ */

for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

let i = 1;
while(i<=5){
   console.log("Valor de i es:", i);
   i++;
}

// ================================================================

const countries = ["México", "USA", "Canadá", "Japón"];

for (let index = 0; index < countries.length; index++) {
   const element = countries[index];
   console.log(`(for) País en índice ${index}: ${element}`);   
}

for (const country of countries) {
   console.log(`(for of) País: ${country}`);
}

// RETO FINAL
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

transactions.forEach( t => totalBalance += t );
