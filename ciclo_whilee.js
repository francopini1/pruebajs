//ejercicio 2 guia de maxi
/* Hacer un programa para mostrar los números del 10 al 1. No se debe realizar
ningún pedido de datos. USANDO WHILE. */

/* let numero= 11;

while(numero >= 2){
numero--;
console.log(numero);
} */
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 3
/*
Hacer un programa que solicite la edad de un grupo de personas. El programa
deberá pedir edades hasta que se ingrese una edad menor a 18 años. Deberá
mostrar por pantalla cuántas personas mayores se registraron.
*/

/*  let mayores=0;
let edad=0;
 */
/* do{
     edad = parseInt(prompt('Ingrese las edades'));
    if (edad >= 18){
        mayores++;
    }
    
}while (edad >=18);

window.alert(`la cantidad de mayores que se registraron es ${mayores}`);  */

//-------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 4
/*
Hacer un programa que solicite dos números y luego muestre los números
entre el menor y el mayor de ellos. Acordate, usando While.
*/
/* let numero1=parseInt(prompt('ingres el primer numero'));
let numero2=parseInt(prompt('ingrese el segundo numero'));

let elMayor=0;
let elMenor=0;


if(numero1 > numero2){
    elMayor=numero1;
    elMenor=numero2;
}else{
    elMayor=numero2;
    elMenor=numero1;
}

let i = elMenor + 1;

while(i < elMayor){
    window.alert(i);
        i++
}
 */

//-------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 5
/*
Hacer un programa que muestre los números del 1 al 100 de 5 en 5. Ejemplo:
0, 5, 10, 15, 20.... 100. Usando While.
*/
/* let i= -5;

while(i < 100){
    i=i+5 //agregando el 5 a la i lo que haces es hacer 0+5 5 y luego por cada iteración va sumando de 5 en 5
console.log(`los números a mostrar son ${i}`);
} */
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 6
/*
Hacer un programa que solicite UN número y luego calcule y emita un cartel
aclaratorio si el mismo es primo o no es primo.
Nota: usando While. Ya lo hicimos con FOR, ahora con While.
*/
/* let numero=parseInt(prompt('ingrese un número'));
let i=1;
cont=0;

while(i <= numero){
    if(numero % i===0){// si 5 % 1 = 0, que es el resto va para el verdadero.
        cont++ //cuenta todo lo que es verdadero, en este caso los números primos.
    }
    i++//aca debe incrementar por cada iteración
}

if(cont === 2){
    window.alert(`${numero} es primo`); 
    }else{
        window.alert(`${numero} no es primo`);
    } */

//--------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 7
/*
Hacer un programa que solicite una lista de números que corta cuando se
ingresa un cero y luego mostrar por pantalla el máximo de ellos y la posición
en la que fue ingresado.
*/
/* let numeros=parseInt(prompt('ingrese un numero'));// es para ingresar el primer dato una vez ingreasdo itera.
let elMayor=0;
let posicion=0;
let i=0;

while( numeros !==0 ){// es la condición como para que corte
        i++
 numeros=parseInt(prompt('ingrese un numero'));// y aca vuelve a ingresar despues de la primera iteración.
  if(numeros > elMayor){
    elMayor=numeros;
         posicion=i;// creo la variable posicion para almacenar la posición del valor del mayor,porque como ingreso el mayor toma el valor tambien de la iteración en donde fue almacenada como el mayor. 
    }
}
window.alert(`${elMayor} es el máximo ingresado, y su posición es la ${posicion}`); */

/*
Incrementar antes de solicitar el número: Al colocar i++ al principio del bucle, aseguras que la posición se incremente antes de solicitar el siguiente número. Esto es importante porque la posición debe reflejar el orden en el que se ingresaron los números.
Actualizar la posición correctamente: Si i++ estuviera después de solicitar el número, la posición almacenada sería incorrecta, ya que se incrementaría después de verificar el número.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 8
/*
Hacer un programa que solicite una lista de números que corta cuando se
ingresa un cero y luego mostrar por pantalla el menor y el segundo menor.
*/
/* let count = 0;

let minNum = null;
let secondMin = null;

let posicionUno= 0;
let posicionDos=0;

//minNum y secondMin se inicializan en null para indicar que no hay valores aún.

while (true) {
    count++;
    let num = parseInt(prompt("Ingrese un número (0 para finalizar):"));
    
    if (num === 0) break; // Salir del ciclo
    
    if (count === 1) {
        // Primer número: inicializar minNum y secondMin
        minNum = num;    // 7 priposi
        secondMin = null; // Aún no hay segundo mínimo
        posicionUno=count;     //1 
    } else {
        if (num < minNum) { // ingreso 4
            // Nuevo mínimo: el anterior min se convierte en secondMin
            secondMin = minNum; // segunposi 7
            minNum = num; // 4 
            posicionDos=posicionUno; // posidos 1
            posicionUno=count;
            // 7  4  23  11  2  5  0 
        } else {
            // Actualizar secondMin si es necesario
            if (secondMin === null || num < secondMin) {
                secondMin = num;
            }
        }
    }
}

// Manejar casos especiales
if (count === 0) {
    window.alert("No se ingresaron números.");
} else {
    if (count === 1) {
        secondMin = minNum; // Forzar mismo valor si solo hay uno
    }
    window.alert(`El primer menor es : ${minNum} y su posición es ${posicionUno}, El segundo menor es: ${secondMin} y su posición es ${posicionDos}`);
} */

/*
Realizar el nuevamente el ejercicio 8 , pero ahora debe devolver además la
posición en la que fue encontrado cada uno de los mínimos.
*/
//--------------------------------------------------------------------------------------------------------------------------------------------------//
//ejercicio 10
/*
Hacer un programa que solicite una lista de números que corta cuando se
ingresa un cero y luego emitir por pantalla el máximo de los números
negativos y el mínimo de los números positivos.
*/
/* let maxNega=null;
let minPosi=null;

let nums=parseInt(prompt('ingrese una lista de numeros'));

while(nums !== 0){

    if( nums < 0 ){

        if ( maxNega === null || nums > maxNega ) {
            maxNega=nums;
        }
    }
    
    if( nums > 0 ){

        if ( minPosi === null || nums < minPosi ) {
            minPosi=nums;
        }
    }
    
    nums=parseInt(prompt('ingrese una lista de numeros'));
}

    if ( maxNega === null && minPosi === null ) {
        window.alert('No se ingresaron números válidos.');
    }else{
        window.alert(`El máximo de los números negativos es ${maxNega}, y el mínimo de los números positivos es ${minPosi}.`);
    } */


// -5 -2 -4 -7 
//entonces pregunto si el numero ingresado es menor a cero ej -5 < a cero, si entonces nums vale -5,entonces digo que negativos vale -5
/*
instrucciones:
solicitar datos al usuario 
hacer una instruccion para que el usuario ingrese un cero y corte el programa
primero tengo que solicitar los numeros
luego con esos numeros debo poner una condicion que diga que si el numero es menor a cero, entonces que agarre el numero y lo sume
una vez que sume en un contador la lista de numeros negativos debo saber cual de ellos es el mayor
entonces comparo todos los numeros hasta saber el mayor

luego debo preguntar si los nums solicitados son mayor a cero, de ese modo sabre si son positivos
luego de los numeros que son positivos debere comparar cada numero ingresado.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------//
