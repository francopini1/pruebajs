/* 
1. Hacer un programa para ingresar un número y luego se emita por pantalla un
cartel aclaratorio si “Es mayor a 10” o “No es mayor a 10”.
*/

/* let num= 7;
console.log("He realizado mi examen. mi nota es:")

let calificacion=nota <= 10 ? "es mayor a 10" : "no es mayor 10" ;
console.log("estoy", calificacion); */

/*
Hacer un programa para ingresar dos números distintos y luego se muestre por
pantalla el menor de ellos.
*/

/*  let num1=7;
let num2=4;
let menor;
if (num1<num2){
    menor=num1
}else{
    menor=num2
}
console.log("el menor es:", menor);
  */

/*
Hacer un programa para ingresar dos números y que luego emita por pantalla
el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.
Nota: los números pueden ser iguales.
*/
/*  let num1=9;
let num2=3;
let mensaje;

if(num1==num2){
mensaje="son iguales";
}else if (num1>num2){
mensaje=`El mayor es: ${num1}`;
}else{
    mensaje=`El mayor es: ${num2}`;
}
console.log(mensaje);  */
/*
paso 1 creo 2 variables para los numeros
paso 2 creo otra variable para almacenar, el resultado que de en base a la condición.
3 paso pregunto primero si son iguales, descartando esa posibilidad, entonces puede sero o < o >.
4 paso uso el template literal para unir un string a una variable para cuando imrpima en consola el resultado.
*/

//uso los backticks con alt Gr y el signo `` y lo mismo para las barras invertidas \\
/*
Hacer un programa para ingresar un número y luego se emita un cartel por
pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es
menor a cero o “Cero” si el número es igual a cero.
Nota: requiere más de in IF! Repasá cómo se escribirían:
*/
/*  let nume1=2;
let mensaje;

if(nume1>0){
mensaje="positivo";
}else if(nume1<0){
    mensaje="negativo";
} else{
    mensaje="negativo";
}
console.log(mensaje); 
 */
/*
5. Hacer un programa para ingresar un número y mostrar por pantalla un cartel
aclaratorio si el mismo es PAR o IMPAR.
*/
/* let numero= 20;
let mensaje;

if(numero % 2==0){
mensaje="es par";
}else{
    mensaje="es impar";
}
console.log(mensaje); */
/*
numero % 2 === 0: Esto verifica si el número es divisible por 2 sin dejar residuo (es decir, si es par).
Si el número no es divisible por 2, se considera impar.
*/
/*
Una casa de video juegos otorga un descuento dependiendo del importe de la
compra realizada según los siguientes valores:
• Si el importe es menor a ARS 1000, no hay descuento.
• Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un
descuento del 10%.
• Si el importe es ARS 5000 o más, aplica un descuento del 18%.
Hacer un programa para ingresar un importe de venta y luego muestre por
pantalla el importe final con el descuento que corresponda.
*/
/* let importe=6000;
let valordes=0;
let impfin=0;

if(importe < 1000){
    valordes="no hay descuento"
    impfin=importe;
}else if (importe >= 1000 && importe<5000){
    valordes=importe*0.90;
    impfin=valordes;
}else if(importe >= 5000){
valordes=importe * 0.82
impfin=valordes;
}
console.log("El importe final es " + impfin); */

/*
Hacer un programa para ingresar cuatro números distintos y luego mostrar por
pantalla el mayor de ellos.
*/
/* let num1=13;
let num2=19;
let num3=12;
let num4=3;
let elMayor=0;

if(num1 > num2 ){
    elMayor=num1;
}else{
    elMayor=num2;
}if(num3>elMayor){
elMayor=num3;
}else if(num4>elMayor){
elMayor=num4;
}
console.log("el numero mayor es " + elMayor)
 */

/*
Hacer un programa para ingresar cuatro números distintos y luego mostrar por
pantalla el menor de ellos.
*/

/* let num1=11;
let num2=7;
let num3=14;
let num4=9;
let elMenor;

if(num1<num2){
elMenor=num1;
}else{
    elMenor=num2;
}if(num3<elMenor){
elMenor=num3
}else if(num4<elMenor){
elMenor=num4;
}
console.log(`el menor es: ${elMenor}`); */

/*
9. Hacer un programa para ingresar cinco números distintos y luego mostrar por
pantalla el mayor y el menor de ellos.
*/
/*  let num1= 7;
let num2=13;
let num3=10;
let num4=2;
let num5=9;
let elMayor=0;
let elMenor=0;

if(num1>num2){
   elMayor=num1;
   elMenor=num2;
}else{
    elMayor=num2;
    elMenor=num1;
}if(num3>elMayor){
elMayor=num3;
}else if(num3 < elMenor){
    elMenor=num3;
}if(num4>elMayor){
elMayor=num4;
}else if(num4 < elMenor){
elMenor=num4;
}if(num5>elMayor){
elMayor=num5;
}else if(num5<elMenor){
elMenor=num5;
}


console.log(`el mayor es ${elMayor}, el menor es ${elMenor}`);  */

/*
Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
cuáles son mayores a 100.
*/
/* let opc1=20;
let opc2=42;
let opc3=93;
let opc4=101;
let mayores=0;

if(opc1>100){
mayores=opc1
}
if(opc2>100){
mayores=opc2;
}
if(opc3>100){
mayores=opc3;
}
if(opc4>100){
mayores=opc4;
}
console.log(`los mayores a 100 son ${mayores}`); */

/*
Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
cuántos son menores a 100.
*/
/* let num1=99;
let num2=84;
let num3=101;
let num4=133;
let M=0;


if(num1<100){
M=M+1;
}
if(num2<100){
M=M+1;
}
if(num3<100){
M=M+1;
}
if(num4<100){
M=M+1;
}
console.log("la cantidad de menores es " + M); */

/*
12. Hacer un programa para ingresar un valor que estará expresado en minutos. Si
los minutos superan los 60, pasar el valor a horas, de lo contrario dejarlo en
minutos. Mostrar el resultado en pantalla aclarando si se muestran minutos u
horas. 
*/
/* let mins=80;
let mostrar=0;
let mostrar2=0;

if(mins>60){
mostrar=80/60 
console.log("se muestra en horas " + mostrar);
}else{
    mostrar2=mins 
    console.log("se muestra en minutos " + mostrar2 );
} */
//notas:se puede poner cualquier elemento dentro el if, ya se un ciclo, una concatenacion, valores enteros arrays etc, pero si quiero mostrar una opcion o la otra puedo poner el console.log, para mostar cualquiera de las opciones a las cuales quiera apuntar.
/*
Hacer un programa que solicite el ingreso de un número y que luego emita un
cartel por pantalla aclarando si el mismo es múltiplo de 5.
*/
/* let num=41;
let mostrarnum=0;

if(num%2==0){
mostrarnum=num;
console.log("es multiplo " + num)
}else{
    mostrarnum=num;
    console.log("no es multiplo " + num);
} */
/*
Hacer un programa que solicite el ingreso de dos números y luego calcular:
a. La resta si el primero es mayor que el segundo.
b. La suma si son iguales.
c. El producto si el primero es menor.
Se deberá emitir un cartel por pantalla con el resultado correspondiente.
*/
/* let num1=30;
let num2=20;
let showresultado=0;

if(num1>num2){
showresultado=num1 - num2;
console.log("la resta es " + showresultado);
}else if(num1==num2){
showresultado=num1 + num2;
console.log("la suma es " + showresultado);
}else if(num1<num2){
showresultado=num1 * num2;
console.log("el producto es " + showresultado);
} */

/*
Hacer un programa para ingresar dos números. Si el segundo es distinto de
cero, calcular la división del primero por el segundo y mostrar el resultado por
pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
cero.
*/

/* let num1=12;
let num2=4;
let showresult=0;

if(num2!=0){
showresult=num1/num2
console.log("el resultado es " + showresult);
}else{
console.log("no se puede dividir por cero");
} */

/*
4. Un importante negocio de desinfectante líquido realiza descuentos
dependiendo de la cantidad de litros vendidos según la siguiente escala:
a. Si vende menos de 100 litros, no hay descuento.
b. Si vende entre 101 y 300 litros, el descuento es del 10%.
c. Si vende entre 301 y 500 litros, el descuento es del 15%.
d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
Hacer un programa que solicite el ingreso del importe total de la venta y la
cantidad de litros vendidos y calcule y emita el importe con el descuento
aplicado.
*/
/*- 100 litros, no hay descuento
entre 101 y 300lts, 10% des
entre 301 y 500lts, 15%
+ de 500lts, 25%
nota:solicitar el ingreso del importe total, y la venta de cantidad de litros, y el importe con el descuento
*/
/* let litrosVendidos=103;
let importeTotal=12000;
let Descuento1=0.90;
let Descuento2=0.85;
let Descuento3=0.75;

switch(true){
case litrosVendidos < 100:
    importeTotal=importeTotal;
    console.log(`el importe total es ${importeTotal} la cantidad de litros vendidos es ${litrosVendidos} `);
    break;
case litrosVendidos >= 101 && litrosVendidos <=300:
importeTotal= importeTotal* Descuento1;
console.log(`el importe total es ${importeTotal} la cantidad de litros vendidos es ${litrosVendidos}`);
break    
case litrosVendidos>=301 && litrosVendidos <=500:
importeTotal= importeTotal * Descuento2;
console.log(`el importe total es ${importeTotal} la cantidad de litros vendidos es ${litrosVendidos}`);
break
case litrosVendidos > 500:22
    importeTotal= importeTotal * Descuento3;
    console.log(`el importe total es ${importeTotal} la cantidad de litros vendidos es ${litrosVendidos}`);
break
default:
console.log("no se puede realizar la operación")
break;
} */
/*
notas del ejercicio 4 guia 3:

*/
/* Enunciado:

Escribe un programa que reciba un número del 1 al 7 y muestre el nombre del día de la semana correspondiente.

Datos:

Entrada: Un número entero entre 1 y 7.
Salida: El nombre del día de la semana correspondiente al número ingresado. */
/* 
let lunes=1;
let martes=2;
let miercoles=3;
let jueves=4;
let viernes=5;
let sabado=6;
let domingo=7;

switch(sabado){
case lunes == 1:
    mostrarMensaje="dia laboral"
    break
case martes == 2:
    mostrarMensaje="dia laboral";
    break
case miercoles == 3:
    mostrarMensaje="dia laboral";
    break
case jueves == 4:
    mostrarMensaje="dia laboral";
    break
case viernes == 5:
    mostrarMensaje="dia laboral";
    break
case sabado == 6:
    mostrarMensaje="dia no laboral";
    break
case domingo == 7:
    mostrarMensaje="dia no laboral";
    break
default:dia="dia inexistente"
    break
}
console.log("el dia sellecionado es " + mostrarMensaje ); */

/*
5. Hacer un programa que solicite el ingreso de las notas del primer parcial y del
segundo parcial de una alumna de programación. El programa deberá analizar
las notas y emitir la situación de la alumna según la siguiente escala:
a. Si tiene 8 o más en ambos parciales, emitir “aprobación directa”.
b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se
aprueba con 6 o más), emitir “rinde examen final”.
c. Si tiene menos de 6 en alguno de los dos parciales, emitir “debe
recuperar”.
El programa debe emitir solo un cartel, el que corresponda.
*/

/* let primerParcial=5;
let segundoParcial=5;
let mostrarMensaje='';

 if(primerParcial>=8 && segundoParcial>=8){
mostrarMensaje='aprobración directa';
 }else if(primerParcial>=6 && segundoParcial>=6){
mostrarMensaje='rinde examen final';
 }else if(primerParcial< 6 || segundoParcial< 6){
    mostrarMensaje='debe recuperar';
 }
 console.log(`su situación es ${mostrarMensaje}`); */

 /*
 Hacer un programa para ingresar por teclado la longitud de los tres lados de un
triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
de triángulo corresponde:
a. Equilátero: cuando los tres lados sean iguales.
b. Isósceles: cuando dos de los tres lados sean iguales.
c. Escaleno: cuando todos los lados sean distintos.
 */

/* let lado1=5;
let lado2=4;
let lado3=3;
let mostrarMensaje='';
if(lado1==lado2 && lado2==lado3){
mostrarMensaje='Equilátero';
}else if(lado1==lado2 || lado2==lado3 || lado3==lado1){
mostrarMensaje='Isoceles';
}else{
mostrarMensaje='Escaleno';
}
console.log(`El trianguelo es un ${mostrarMensaje}`); */

/*Hacer un programa para ingresar 4 números. Luego analizar e informar por
pantalla si los mismos se encuentran ordenados de forma decreciente.
*/
let num1=7;
let num2=2;
let num3=5;
let num4=4;
let mostrarMensaje='';

if(num1>num2 && num1>num3 && num1>num4){
    mostrarMensaje='decreciente'
}else if(num2>num1 && num2>num3 && num2>num4){
mostrarMensaje='decreciente';
}else if(num3>num1 && num3>num2 && num3>num4){
mostrarMensaje='decreciente';
}else if (num4>num1 && num4>num2 && num4>num3){
mostrarMensaje='decreciente';
}else{
    'no estan ordenados de forma decreciente';
}
console.log(`estan ordenados de forma ${mostrarMensaje}`);
