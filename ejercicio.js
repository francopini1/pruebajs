/*Hacer un programa para ingresar por teclado las tres notas de exámenes de un
alumno y luego calcule y emita por pantalla el promedio final.
*/
/* let not1=parseInt(prompt("ingrese su primera nota"));
let not2=parseInt(prompt("ingrese su segunda nota"));
let not3=parseInt(prompt("ingrese el tercer numero"));

let promedio=(not1 + not2 + not3)/3;
window.alert("su promedio final es" + promedio); */

/* 10. Hacer un programa que permita ingresar por teclado dos números y que luego
muestre por pantalla la suma, la resta, la multiplicación y la división de dichos
números. Se deben mostrar cuatro resultados en pantalla. Los números deben
ser solicitados una única vez. */

/*   let num1=parseInt(prompt("ingrese el primer numero"));
let num2=parseInt(prompt("ingrese el segundo numero"));
let suma=num1 + num2;
let resta=num1 - num2;
let multiplicación=num1 * num2;
let división=num1 / num2;

window.alert("la suma: ".concat(suma));
window.alert("la resta ".concat(resta)); 
window.alert("la multiplicacion ".concat(multiplicación));
window.alert("la division ".concat(divison));
  */

/*
Hacer un programa para ingresar por teclado los metros cuadrados totales de
un predio y los metros cuadrados cubiertos; luego calcular y mostrar por
pantalla el porcentaje de metros cuadrados cubiertos y el porcentaje de
metros cuadrados descubiertos.
*/
/* let metrosTotales=parseInt(prompt("ingrese los metros cuadrados totales"));
let metrosCubiertos=parseInt(prompt("ingrese los metros cubiertos"));
let metDes=(metrosTotales - metrosCubiertos);
let pmc= (metrosCubiertos * 100)/metrosTotales
let pmd=(metDes*100)/metrosTotales
window.alert("el porcentaje de metros descubiertos es"+ pmd);
window.alert("el porcentaje de metros cubiertos"+ pmc) */

/*
Una universidad desea conocer los porcentajes de mujeres y hombres en las
carreras de ciencias exactas. Se solicita un programa para cargar la cantidad de
mujeres y la cantidad de hombres y que el mismo calcule y emita por pantalla
los porcentajes correspondientes.
*/
//cantidad de hombres 56
//cantidad de mujeres 27
//total de personas 83
/* let cantidadH=parseInt(prompt("ingrese la cantidad de hombres"));
let cantidadM=parseInt(prompt("ingrese la cantidad de mujeres"));
let totalPersonas=cantidadH + cantidadM
let porcenHom=(cantidadH * 100)/totalPersonas;
let porcenMuj=(cantidadM *100)/totalPersonas;

window.alert(`el porcentaje de hombres es ${porcenHom} 
      el porcentaje de mujeres es ${porcenMuj} `); */ 
/*
.concat()
Qué es: Un método para unir arrays o strings en uno nuevo.
Para qué sirve:

Arrays: Combina dos o más arrays en uno.

javascript
Copy
const arr1 = [1, 2];
const arr2 = [3, 4];
const nuevoArray = arr1.concat(arr2); // [1, 2, 3, 4]
Strings: Une strings.

javascript
Copy
const saludo = "Hola".concat(" ", "Mundo"); // "Hola Mundo"
-----------------------------------------------------------------------------------------------------------------------------------------------------

Template Literals (`)
Qué es: Sintaxis con backticks ( `) para crear strings dinámicos.
Para qué sirve:

Insertar variables/expresiones directamente con ${}.

javascript
Copy
const nombre = "Ana";
const mensaje = `Hola, ${nombre}!`; // "Hola, Ana!"
Strings multilínea sin usar \n.

javascript
Copy
const texto = `Línea 1
Línea 2`;

Diferencia clave:
.concat() → Une datos de forma estructurada (arrays/strings).

Template Literals → Formatean texto con variables y saltos de línea fácil.

*/



