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
let numero=parseInt(prompt('Por favor ingresar un numero'));
let result=0;
let cont=0;
for(let i=1;i<=numero;i++){
if(numero % i=== 0){
    cont++ //cuenta todo lo que es verdadero.
}
}
if(cont===2){
window.alert('es primo');
}else{
    window.alert('no es primo');
}
/*
si numero en este caso ponemos ej 5 y digo si numero dividido i que en el caso es el inicializador que v tomando el valor por cada iteración
hasta llegar a su valor el resultado seria el valor del num div por la iteración que da como resultado si es primo(divisible por si mismo o uno)
*/
/*
Hacer un programa que solicite 10 números y luego mostrar por pantalla el
máximo de ellos y la posición en la que fue ingresado.
*/
