export function elMayor(enteroUno, enteroDos){
    let mayor=0;  
   
    if (enteroUno > enteroDos){
      mayor=enteroUno;
    } else if (enteroUno===enteroDos){ 
      mayor=0;
    } else {
      mayor = enteroDos;
    }
  
    return mayor;
    
  }

  
  /*
  Hacer una función llamada “par” que reciba un número entero y devuelva 1 si
  es par o cero si no lo es. Hacer un programa para ingresar 20 números y
  mostrar por pantalla cuántos son pares.
  */
  
  export function esPar(numPar){
    if(numPar % 2 ===0){
      return 1 ;
    }else{
      return 0;
    }
  }
//Ejercicio 5
 /*
 Hacer una función llamada “pagos” que reciba un monto (float) y /una cantidad
de pagos (entero)/ y devuelva el monto de cada pago.
 */
//debo tratar de ver si los parametros son números validos.
export function Payments(amount , payments){  // float(flotante), monto(amount) //  pagos(payments, whole(entero).
//                       pagos  / cantidadpagos
validateTypeNumber (amount , payments);

validateNum(amount , payments);

validateNotString(amount , payments);

//Calcularr el monto de cada pago.
return parseFloat((amount / payments).toFixed(2));
}

//Función para validar que los argumentos sean números.
export function validateTypeNumber(amount , payments){
  if(typeof amount !== "number" || typeof payments !== "number"){
    throw new Error ("Both arguments must be numbers");
   }
}

//Funcion para validad que los valores no sean cero o negativos
export function validateNum(amount , payments){
  if(payments <= 0){
    throw new Error("The amount of payments cannot be zero.");
    }
    if(amount <= 0){
    throw new Error("The amount cannot be zero");
    }
}

export function validateNotString(amount , Payments){
    if(typeof amount === "string " || typeof Payments === "string"){
    throw new Error("the string type data is incorrect");
    }
}


/*
observaciones: /Single-responsibility principle/
*/

/*
linea 45
. ¿Por qué usar parseFloat después de .toFixed(2)?
Si necesitas que el resultado sea un número (de tipo float) y no una cadena, debes convertirlo con parseFloat.

Ejemplo:

let resultado = parseFloat((10 / 3).toFixed(2));
console.log(resultado); // 3.33 (es un número)
console.log(typeof resultado); // "number"
*/




/*
1|crear una funcion llamada payments
2)creo ambos argumentos, amount recibira el monto flotante(amount) , y recibira la cantidad de payments(entero).
3)ingresa un monto x, y lo divido por la cantidad de pagos.
*/

/*
typeof es un operador en JavaScript que se utiliza para determinar el tipo de dato de una variable o expresión. Devuelve una cadena (string) que indica el tipo del valor evaluado.
*sintaxis*
typeof Valor 
°valor: puede ser una variablee, un literal, o cualquier expresion.
*ejemplos*
tipo devuelto por:
Tipo devuelto por typeof	Descripción
"number"	Para números (tanto enteros como decimales).
"string"	Para cadenas de texto.
"boolean"	Para valores booleanos (true o false).
"undefined"	Para variables que no han sido inicializadas o no tienen un valor asignado.
"object"	Para objetos, arreglos (array), y null.
"function"	Para funciones.
"bigint"	Para números enteros grandes (BigInt).
"symbol"	Para valores de tipo Symbol

/                  /                        /                       /

let numero = 42;
console.log(typeof numero); // "number"

let texto = "Hola";
console.log(typeof texto); // "string"

let esVerdadero = true;
console.log(typeof esVerdadero); // "boolean"

let sinValor;
console.log(typeof sinValor); // "undefined"

let objeto = { clave: "valor" };
console.log(typeof objeto); // "object"

let arreglo = [1, 2, 3];
console.log(typeof arreglo); // "object"

let funcion = function() {};
console.log(typeof funcion); // "function"

let nulo = null;
console.log(typeof nulo); // "object" (esto es un comportamiento histórico de JavaScript)
*/

/*
throw new Error("Mensaje de error");

°"Mensaje de error": Es un string que describe el error. Este mensaje se puede usar para depuración o para informar al usuario.

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // Salida: 5
  console.log(dividir(10, 0)); // Lanza un error
} catch (error) {
  console.error(error.message); // Salida: "No se puede dividir por cero."
}

°Explicación del ejemplo°
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

try {
  console.log(dividir(10, 2)); // Salida: 5
  console.log(dividir(10, 0)); // Lanza un error
} catch (error) {
  console.error(error.message); // Salida: "No se puede dividir por cero."
}

  ¿Por qué usar throw new Error?
Detener la ejecución en caso de errores críticos:

Si ocurre una condición que hace que el programa no pueda continuar, puedes usar throw new Error para detener la ejecución.
Proveer mensajes descriptivos:

El mensaje del error ayuda a los desarrolladores a entender qué salió mal.
Manejo de errores personalizado:

Puedes usar bloques try...catch para manejar errores de manera específica.

Ejemplo en tu función Payments
En tu función Payments, ya estás usando return para devolver un mensaje de error. Sin embargo, es más adecuado usar throw new Error para manejar errores críticos como una cantidad de pagos igual a 0.

Versión mejorada de Payments
*/

//Ejercicio 6
/*
Hacer una función que se llame “sumaResta” que reciba dos números y que
devuelva la suma Y la resta del primer número con el segundo.
Nota: recordemos que una función solo puede devolver UN valor por return.
Cómo podríamos hacer para tener ambos resultados en el main?
*/

export function additionSubtraction(numberOne , numberTwo){

let addition = numberOne + numberTwo;       
let subtraction= numberOne - numberTwo; 

return[addition , subtraction];

}

/*
°Un array es una colleción de datos
°se crea el array siempre con la variable const
°Los tipos de datos que pueden considerar arrays son muchos(numeros, booleanos,string,float,arrays objetos,funciones.)
°En este ejercicio lo que hice es como yo queria devolver 2 valores al mismo tiempo(tipo number), lo que hice fue:
fui al main cree una variable const y dentro de ahi puse los argumentos, los cuales iran a los parametros.
en esa variable almacena la funcion con sus argumentos.
como puedo acceder a ambos datos? ES POR EL (INDIICE).
coloco la variable que almacena la funcion y le pongo el nombre y [aca ira el indice "valor por el cual sera asignado"]
°nombre de arrays luego [] , y el numero del indice [ej 1] , si hay 3 datos y pongo uno accedera al segundo.

*/

/*
Hacer una función de tipo void (porque no va a devolver nada) llamada
“positivoNegativoCero” que reciba un número por valor y una variable por
referencia. Que analice el número y escriba variable recibida por referencia
con:
a. 1 si el número es positivo.
b. -1 si el número es negativo.
c. 0 si el número es cero.
Hacer un programa main que permita ingresar 100 números y emitir por
pantalla cuántos son positivos, cuántos negativos y cuántos cero.
*/

 export function positivoNegativoCero(number, variableRef, validationRef) {

  if (number === 1) {
    variableRef.number = 1;
    validationRef.positivo++;
  }


  if (number === -1) {
    variableRef.number = -1;
    validationRef.negativo++;
  }


  if (number === 0) {
    variableRef.number = 0;
    validationRef.cero++;
  }

}

/*En JavaScript, los números (y otros tipos primitivos)
 se pasan por valor, y los objetos (incluidos arrays) se pasan por referencia.
*/
/*
📦 Parámetros por valor vs. por referencia en JS
✅ Por valor:
Tipos primitivos: number, string, boolean, null, undefined, symbol, bigint

Cuando pasás estos a una función, se hace una copia, y cualquier cambio dentro de la función no afecta a la variable original.

✅ Por referencia:
Objetos y arrays.

Cuando los pasás a una función, se pasa una referencia al mismo objeto en memoria, así que pueden ser modificados dentro de la función.
*/

/*
|En JavaScritp no existe un tipo explicito void,por eso no devuelve un return.

°paso por valor y por referencia.
por valor:los datos tipos primitivos (strings, numbers, booleanos), se pasan por valor, eso significa, que se pasa una copia del valor a la función, y los cambios
que se realicen dentro de la funcion no afectan a la variable original.

°por referencia: Los objetos y arrays se pasan por referencia, eso significa que pasa una ref al mismo espacio en memoria, y los cambios 
dentro de la función, afectan al objecto original.

En este caso, usaremos un objeto para simular el paso por referencia, ya que los números en JavaScript se pasan por valor.

Usamos un objeto (variableRef) para simular el paso por referencia, ya que los objetos en JavaScript se pasan por referencia.

                                          Array vs Objeto: diferencias.

En JavaScript, los valores y los arrays son tipos de datos diferentes que se comportan de manera distinta, especialmente cuando se pasan como argumentos a funciones

*/

/*
Hacer un programa que permita ingresar una lista de números que corta
cuando se ingresa un cero. A partir de dichos datos informar:
a. El mayor de los números pares. // (para esto debo hacer una funcion que verifique si el numero es par, y luego debo hacer otra función para saber cual seria el mayor de los pares comparandolos)
b. La cantidad de números impares. // (creo una funcion que verifique si el numero es impar, luego uso esa funcion y lo que deberia hacer es comparar los numeros ingresados y ver cual es el menor)
c. El menor de los números primos.// (debo crear una función que calcule los numeros primos, luego hago otra funcion que compares los numeros hasta ver cual de ellos es el menor)
Hacer uso de las funciones anteriormente desarrolladas.
*/

//Alternativa moderna: Number.isNaN() (ES6)
//isNaN intenta convertir el valor a número antes de evaluar. Esto puede causar confusiones:
/*
console.log(isNaN(""));      // false (cadena vacía se convierte a 0)
console.log(isNaN("   "));   // false (espacios se convierten a 0)
*/
//las funciones como IsNan, son funciones nativas, no hace falta que volverlas a crear.
//si es verdadero es un NaN
//si es faslo es un numero

function esPrimo(numero){
if(numero <= 1){
    return false;
}
  for (let i=2; i< numero; i++){
    if(numero % i === 0){
      return false;
    }
  }
  return true;
}

//utilizo el metodo srp(single responsability)

export function ingresarNumeros (){
let nums=[];
let numeros=0;
//Creo este ciclo para verificar los números ingresados al menos una vez, antes de que se procese la validación.
do{
  numeros=parseInt(prompt("Ingrese la lista de números"));
  if(!isNaN(numeros)){
    nums.push(numeros);
  }

  }
    while(numeros !==0);

  let mayorPares=null;
  let cantidadImpares=0;
  let menorPrimos=null;

  // este es una arrow function, y utilizo el metodo forEach que sirve para iterar todos los elementos del array.
  nums.forEach((num)=>{ 
    if(num % 2 ===0){
      if(mayorPares === null || num > mayorPares){
        mayorPares= num;
      }
    }
   if(num % 2 !==0){
    cantidadImpares++
   }
   if(esPrimo(num)){
    if(menorPrimos === null || num < menorPrimos)
    menorPrimos=num;
   }
   })

  console.log(`El mayor número par es: ${mayorPares !== null ? mayorPares : "No hay números pares"}`);
  console.log(`La cantidad de números impares es: ${cantidadImpares}`);
  console.log(`El menor número primo es: ${menorPrimos !== null ? menorPrimos : "No hay números primos"}`);
}





/*
1)
No se necesita un parámetro porque la función no requiere datos externos para funcionar. En lugar de recibir datos como argumento, la función se encarga de solicitar los números al usuario mediante prompt y los almacena en el array numeros.

Razón: La función está diseñada para interactuar directamente con el usuario, por lo que no necesita que se le pase un argumento. Todo el trabajo de recopilación de datos se realiza dentro de la función.

Razón: El array comienza vacío porque no hay datos al inicio. Se llena dinámicamente con los números que el usuario ingresa.
*/

/*
linea 306
 El operador ! niega el resultado.

Si numero es válido → !isNaN(numero) es true.
Si numero es inválido → !isNaN(numero) es false.
numero !== 0: Verifica que el número no sea 0.
*/


/*
[.filter(): Método de arrays que crea un nuevo array con elementos que cumplen una condición.
Arrow function num => num % 2 === 0:

num: Cada elemento del array.

num % 2 === 0: Condición que verifica si el número es par:

% (módulo): Devuelve el resto de la división. Si es 0, el número es par.

const pares: Declara una constante para almacenar el array filtrado.]

[¿Qué es una arrow function?
Es una forma abreviada de escribir funciones en JavaScript. Su sintaxis es:
(parametro) => { expresión } ]

El parámetro num no "sale" de ningún lado en tu código. Es una variable temporal que tú defines como parte de la función que pasas a .filter(). Es decir, tú le das ese nombre para referirte a cada elemento del array durante la iteración

Imagina que tienes un array de números:
const numeros = [3, 4, 5, 10];
Cuando usas .filter(), JavaScript recorre automáticamente cada elemento del array. En cada paso de la iteración, el elemento actual se asigna al parámetro que definas (en este caso, num).

El parámetro num existe para que tengas acceso al valor de cada elemento del array dentro de la función que defines. Sin él, no podrías verificar si el número es par.

 */