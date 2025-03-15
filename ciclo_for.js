//For (<inicializador>;<condicional>;<acumulador>;)
/* let palabra = "hola";
for (let i = 0; i<palabra.length; i++){
    let letra =palabra[i];
    console.log(letra);
} */
/*
Este es un ejemplo de como recorreria un bucle un string con el metodo .length, lo que haces es iterar en la posición de caracteres.
*/
/*
1. Hacer un programa que solicite el ingreso de 10 números y que muestre el
mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla.
*/
/* let elMayor=0;

for(let i=0; i<10; i++){
    let numeros=parseInt(prompt('ingrese 10 numeros'));
   if(i===0){
   elMayor=numeros;
   }
   else if(numeros>elMayor){
    elMayor=numeros
   }
}
window.alert(`El numero mayor es ${elMayor}`); */

/*
2. Hacer un programa que solicite 20 números y calcule y emita por pantalla
cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el
conteo final.
*/
/* let positivos=0;

for(let i=0;i<8; i++){
    let numeros=parseInt(prompt('ingrese 8 numeros'));
    if(numeros>0){
    positivos++
    }
}
window.alert(`los numeros positivos ${positivos}`); */

/*
Hacer un programa para mostrar los números del 1 al 10. No se debe realizar
ningún pedido de datos.
*/
/* let numeros=0;
for(let i=1;i<11;i++){
    console.log(`los nmeros a mostrar son ${i}`);
} */

/*
Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
ningún pedido de datos.
*/

/* for(let i=10;i>0;i--){
console.log(`los numeros a mostrar son ${i}`);
}
 */

/*
Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
0, 5, 10, 15, 20.... 100.
*/

/* for(let i=0;i<105;i=i+5){
console.log(`los numeros a mostrar son ${i}`);
} */

/*
Hacer un programa que solicite UN número y luego calcule y emita un cartel
aclaratorio si el mismo es primo o no es primo.
Nota: un numero es primo cuando es divisible únicamente por 1 y por sí
mismo.
*/
/* let numero=parseInt(prompt('Por favor ingresar un numero'));
let result=0;
let cont=0;
for(let i=1;i<=numero;i++){
if(numero % i===0){
    cont++ //cuenta todo lo que es verdadero.
}
}
if(cont===2){
window.alert('es primo');
}else{
    window.alert('no es primo');
} */
/*
si numero en este caso ponemos ej 5 y digo si numero dividido i que en el caso es el inicializador que v tomando el valor por cada iteración
hasta llegar a su valor el resultado seria el valor del num div por la iteración que da como resultado si es primo(divisible por si mismo o uno)
*/
/*
Hacer un programa que solicite 10 números y luego mostrar por pantalla el
máximo de ellos y la posición en la que fue ingresado.
*/
/* let elMayor=0;
let posicionMayor=0;
for(let i=0; i<10; i++){
    let numero=parseInt(prompt('Por favor ingrese 10 numeros'));
    if(numero > elMayor){
        elMayor=numero;
        posicionMayor=i + 1
    }
}
window.alert(`el numero mayor es ${elMayor} y la posición en la que fue ingresado es ${posicionMayor}`); */

/*
Hacer un programa que solicite 20 números y luego mostrar por pantalla el
menor de ellos y la posición en la que fue encontrado.
*/
/* let elMenor=Infinity; //elMenor se inicializa con Infinity para asegurarnos de que cualquier número ingresado será menor.
let posicionMenor=-1; //se coloca el valor -1 para decir que el valor todavia no fue ingresado

for(let i= 0; i<10; i++){
    let numeros=parseInt(prompt('Por favor ingresar 10 numeros'));
    if(numeros<elMenor){
        elMenor=numeros;
        posicionMenor=i + 1;
    }
}
window.alert(`el numero menor es ${elMenor} y la posición en la que fue ingresado es ${posicionMenor}`);
 */

/*
Hacer un programa que solicite 20 edades y luego calcule el promedio de edad
de aquellas personas mayores a 18 años.
*/
/* let contadorEdades=0;
let sumarEdades=0;
for(let i=0; i<10; i++){
let edad=parseInt(prompt('Por favor ingrese 10 edades'));
if(edad > 18){
sumarEdades +=edad
contadorEdades++
}
}
let promedioEdad=0;
if(contadorEdades>0){
promedioEdad=sumarEdades/contadorEdades;
}
window.alert(`El promedio de mayores es ${promedioEdad}`); */

/*
cuantas personas son mayores a 18? se utiliza un contador ++
luego como saco el promedio de edades? primero para poder sacarlo
debo sumar todas entonces y poner un acumulador para y acumulandolas y sumarlas.
Contador: registra la cantidad de veces que ocurre algo (tiene que ver con contar).
Acumulador: registra la suma de valores (tiene que ver con sumar).
*/
/*
Hacer un programa que solicite 20 números y luego emitir por pantalla el
máximo de los números pares y el mínimo de los números impares.
*/
/* let maxPar=0;
let minImpar=0;

for(let i=0; i<8; i++){
let numeros=parseInt(prompt('Ingrese 8 números'));
if(numeros % 2===0){
if(numeros > maxPar){
maxPar = numeros
}
}
if(numeros % 2 !==0 ){
if(minImpar===0){ // se realiza este condicional, para saber si es el primer impar que se ingreso.
minImpar = numeros;
}else if(numeros<minImpar){
minImpar=numeros;
}
}
}
window.alert(`El máximo de los PARES es ${maxPar} y el minimo de los IMPARES es ${minImpar}`); */

/*
Hacer un programa para ingresar 10 números y luego calcule y emita el mayor
de los primos de la lista. En caso de no haber ningún número primo, deberá
aclararlo con un cartel.
*/

/*   let mayorPrimmos=0;

for(let i= 1; i<10; i++ ){//aca ingreso 10 numeros
let nums=parseInt(prompt('Ingrese 10 numeros'));//aca solicito los 10 numeros
let cont=0;//aca realizo un cont para saber cuantos numeros son primos
for(let x=1;x<=nums;x++ ){//aca lo que hago es recorrer los numeros ingresados, x=1(para decir que estoye ne la vuelta 1),/x<=nums para ver si la variable es menor o igual al numero ingresado., x es la cantidad de numeros reccoridos por el el numero que ingreso.
if(nums % x===0){
cont++
}
}
if(cont===2){
if(nums>mayorPrimmos){
mayorPrimmos=nums;
}else{
    'no hay primos'
}
}
} 
window.alert('el mayor de los primos es ${mayorPrimos}');  */

/*
Nivel intermedio
Crea un programa que muestre por consola los números pares que hay entre el 1 y el 10 (2, 4, 6, 8, 10) usando un bucle for.
*/
/* for(let i=1; i<=10; i++){
if(i % 2===0){
console.log(`Los numeros pares que hay entre el 1 y el 10 son ${i}`);
}
} */
/*
Nivel avanzado
Escribe un programa que, dados dos números (por ejemplo, 5 y 3), muestre por consola una secuencia que empiece en el primer número y termine en el segundo, incrementando o decrementando de 1 en 1, usando un bucle for. Por ejemplo:

Si se ingresan 5 y 3, la secuencia debe ser: 5, 4, 3.
Si se ingresan 3 y 5, la secuencia debe ser: 3, 4, 5.
*/
/* let nums1=4;
let nums2=8;

if(nums1 < nums2){
for(let i=nums1; i<=nums2; i++){
console.log(i);
}//si nums1 es menor que nums2 entonces realizamos un incremento
}else{
    for(let i= nums1; i>=nums2; i--){
        console.log(i);   
    }
}//si la iteración arranca en nums2 y por ej, como i vale nums 2 es mayor o = que nums1 entonces decrementa */
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//realizando ejercicio ---(1)---
/*
Ejercicio 1: Secuencia con paso variable
Objetivo: Modificar el ejemplo anterior para que el usuario pueda ingresar también el paso (incremento o decremento) entre números.

Descripción:
Dado un número inicial, un número final y un paso, muestra una secuencia que empiece en el primer número y termine en el segundo, incrementando o decrementando según el paso. Por ejemplo:

Si se ingresan 5, 1 y 2, la secuencia debe ser: 5, 3, 1.
Si se ingresan 3, 9 y 3, la secuencia debe ser: 3, 6, 9.
Pista:Asegúrate de que el paso sea compatible con la dirección de la secuencia (incremento o decremento).
*/
/* let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese el segundo numero'));
let paso = parseInt(prompt('ingrese el paso (incremento o decremento)'));
if(num1 < num2){
for(let i=num1; i<=num2; i += paso){
window.alert(i);
}//si nums1 es menor que nums2 entonces realizamos un incremento
}else{
    for(let i= num1; i>=num2; i-= paso){
        window.alert(i);   
    }
//notas:el paso significa que el usuario ingreso un numero x, entonces lo que hace el paso en este caso es tomar el valor del incremento(si el usuario coloca 2, y el primer valor es > que el segundor valor decrementara de 2 en 2)(si el usuario coloca 4 y el segundo valor es mayor que el primero entonces incrementara de 4 en cuatro ej, primer valor 10, segundo valor 20, valor de paso ingresado 4,se considera como un acumulador que puede sumar o restar, entonces seria:10,12,14,16,18,20. fin).    
}//si la iteración arranca en nums2 y por ej, como i vale nums 2 es mayor o = que nums1 entonces decrementa 
*///-----------------------------------------------------------------------------------------------------------------------------------------------------
//realizando el ejercicio ***(2)***
/*Ejercicio 2: Secuencia con números pares o impares
Objetivo: Modificar el ejemplo para que la secuencia muestre solo números pares o impares.
Descripción:
Dado un número inicial y un número final, muestra una secuencia que empiece en el primer número y termine en el segundo, pero solo muestre los números pares o impares según lo indique el usuario.

Ejemplo:

Si se ingresan 5 y 3, y se elige mostrar números pares, la secuencia debe ser: 4.
Si se ingresan 8 y 2, y se elige mostrar números impares, la secuencia debe ser: 7, 5, 3.
Pista:Usa una condición dentro del bucle for para filtrar los números.*/
/* let num1=parseInt(prompt('Ingrese el primre numero'));
let num2=parseInt(prompt('Ingrese el segundo numero')); 
let opciones=parseInt(prompt('Ingrese(1 para numeros pares) Ingrese(2 para numeros impares)')); 

if (num1 < num2) {

    if (opciones === par) {
  
      for (let i = num1; i <= num2; i++) {
        window.alert(i % 2 === 0 ? i : null);
      }
    }
    if (opciones === impar) {
      for (let i = num1; i <= num2; i++) {
        window.alert(i % 2 !== 0 ? i : null);
      }
    }
  
  } else if (num2 > num1) {
    if (opciones === par) {
      for (let i = num2; i <= num1; i--) {
        window.alert(i % 2 === 0 ? i : null);
      }
    }
    if (opciones === impar) {
      for (let i = num2; i <= num1; i++) {
        window.alert(i % 2 !== 0 ? i : null);
      }
    }
  } 
  if (num1 < num2) {
    if (opciones === par) {
      for (let i = num1; i <= num2; i++) {
        window.alert(i % 2 === 0 ? i : null);
      }
    }
  
  } else if (num2 > num1) {
  
    if (opciones === par) {
      for (let i = num2; i <= num1; i--) {
        window.alert(i % 2 === 0 ? i : null);
      }
    }
  }
  if (num1 < num2) {
    if (opciones === impar) {
      for (let i = num1; i <= num2; i++) {
        window.alert(i % 2 !== 0 ? i : null);
      }
    }
  } else if (num2 > num1) {
  
    if (opciones === impar) {
      for (let i = num2; i <= num1; i--) {
        window.alert(i % 2 !== 0 ? i : null);
      }
    }
  } */
  /*notas:mostrar numeros impares o pares,ingresar el primer numero(inicial), y un segundo numero(final),ej coloco 8 y luego coloco 4,
el usuario indica si sera par o impar¿como mostrar la secuencia de numeros pares e impares?¿tambien como sabemos si son pares o impares?*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------
//realizando el ejercicio ***(3)***
/*
Ejercicio 3: Tabla de multiplicar
Objetivo: Crear una tabla de multiplicar para un número dado.

Descripción:
Dado un número, muestra una tabla de multiplicar del 1 al 10. Por ejemplo:

Si se ingresa 5, la secuencia debe ser:
ini
5 x 1 = 5  
5 x 2 = 10  
5 x 3 = 15  
...  
5 x 10 = 50  
Pista:Usa un bucle for para iterar del 1 al 10.
*/
/* let num=parseInt(prompt('Ingrese un numero'));

for(let i=1; i<=10; i++){
let resultado= num * i;
window.alert(`${num} x  ${i} = ${resultado}`);  
} */

/*
En programación, *= es un operador de asignación compuesto que combina la multiplicación y la asignación en una sola operación. Es equivalente a multiplicar una variable por un valor y luego asignar el resultado de nuevo a esa variable.
*/
/*
Operador *=: Combina la multiplicación y la asignación en una sola operación.
Uso en bucles: Puedes usar *= en un bucle para multiplicar una variable por un valor en cada iteración y asignar el resultado de nuevo a la variable.
Ejemplo práctico: Multiplicar un número por sí mismo en cada iteración y mostrar el resultado.
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------
//realizando el ejercicio ***(4)***
/*
Ejercicio 4: Sumar números de una secuencia
Objetivo: Modificar el ejemplo original para que, además de mostrar la secuencia, muestre la suma de los números.

Descripción:
Dado un número inicial y un número final, muestra la secuencia y calcula la suma de todos los números en la secuencia.

Ejemplo:

Si se ingresan 5 y 3, la secuencia debe ser: 5, 4, 3, y la suma debe ser 12.
Pista:Usa una variable para acumular la suma dentro del bucle for.
*/
/* let num1 = 2;
let num2 = 8;
let suma = 0;

if( num1 < num2){
for(let i= num1; i <= num2; i++){
  console.log(i);
  suma += i;
}
 } else {
  for(let i = num1; i >= num2; i--) {
     console.log(i);
     suma += i;
}
  }

console.log(`la suma de la secuencia es: ${suma}`);
 */
//-----------------------------------------------------------------------------------------------------------------------------------------------------

/*Ejercicio 5: Secuencia de números primos
Objetivo: Generar una secuencia de números primos entre un rango dado.

Descripción:
Dado un número inicial y un número final, muestra solo los números primos dentro de ese rango.

Ejemplo:

Si se ingresan 10 y 20, la secuencia debe ser: 11, 13, 17, 19.
Pista:Usa un bucle for para iterar en el rango.
Crea una función para verificar si un número es primo.*/

//realizando el ejercicio ***(5)*** 

/* let num1=10;//inicial
let num2=20;//final

if(num1 < num2){
  for(let i=num1; i <= num2 ; i++){
    let acumulador=0; //este for recorre solo, los numeros del inicial al final
    for(let x = 1; x <= i ; x++){//este for recorre los numeros primos y los muestra.
      if(i % x===0){
       acumulador++
      }
    }
    if(acumulador===2){
      console.log(i);
   }else{
    'no hay primos'
   } 
  }
}  */

  /*
  Ejercicio Avanzado: Crea un programa que calcule el factorial de un número ingresado por el usuario usando un ciclo for. (El factorial de un número n, denotado como n!, es el producto de todos los números enteros positivos menores o iguales a n).
  */
// Un factorial se saca multiplicando su mismo numero -1 hasta que llegue 1.
// 5!=5x4x3x2x1
/*  let numero=5;
 let acumulador=1;

 for(let i=numero; i>=1; i--){
 acumulador*=i;
 }
 console.log(acumulador);
  */
 /*
 1)10
 2)la variable=numero (10)
 3)i=10 > 1 
 4)10 -- 
 5)10 no puede ser a 1, por lo tanto decrementa hasta cumplir la condición.
 6)creo un acumulador, que contenga una *
 7)como contiene una * por cada iteracion que vaya decreciendo hasta cumplir la condicion se acumula con los otros valores y se multiplica.
 8)agarro y muestro en consola la multiplicacion de dichos valores.
 */