//ejercicios prácticos.

/* Ejercicio 1: Calcular Promedio de Notas Escribe un programa que:
1.	Pida al usuario el número de alumnos de una clase.
2.	Por cada alumno, pida su nombre y 3 calificaciones (entre 0 y 100).
3.	Calcule el promedio de cada alumno y muestre si aprobó (promedio >= 60) o no (promedio < 60).
4.	Finalmente, muestre cuántos alumnos aprobaron y cuántos no.
Hint: Usa un ciclo for para iterar sobre los alumnos y if para verificar el promedio. */


/* let numeroAlumnos=parseInt(prompt('Ingrese la cantidad de alumnos totales de la clase'));//5

let resultPromedio=0;//use
let aprobados=0;//use
let desaprobados=0;//use


for(let i=0; i < numeroAlumnos ; i++){   

    let pedirNombre = prompt('Ingrese el nombre del alumno');//felipe
    let calficacionUno = parseInt(prompt('Ingrese la primer calificación'));//7
    let calificacionDos = parseInt(prompt('ingrese la segunda calificación'));//4
    let calificacionTres = parseInt(prompt('ingrese la tercera calificación'));//10

    resultPromedio = ( calficacionUno + calificacionDos + calificacionTres ) /3;

if(resultPromedio>=8 || resultPromedio>=6){
    aprobados++;
    window.alert(`${pedirNombre} aprobo con un promedio de ${resultPromedio}`);

    } else if(resultPromedio<6) {
   desaprobados++;
   window.alert(`${pedirNombre} desaprobo con un promedio de ${resultPromedio}`);
    }
}

window.alert(`la cantidad de alumnos aprobados son ${aprobados}`);
window.alert(`la cantidad de alumnos desaprobados son ${desaprobados}`);  */


/*
1)pide al usuario que ingrese la cantidad de numeros de alumnos /
2)pido el alumno, luego pido el nombre, que ingrese 3 calificaciones separadas entre 0 y 100
3)sacar promedio de cada alumno, y como? sumo las 3 notas y las divido por la cantidad de notas.
creo un condicional que preguntara que si el promedio es mayor o igual a 60 aprobo o utilizo el operador or, 
y pregunto si la nota es menor a 60.
4)mostrar cuantos alumnos aprobaron y como haria? en este recorreria con el ciclo la cantidad de numeros en este caso alumnos ingresados
por el usuario. y dentro de ahi un condicional para saber cuanto tienen la nota mmayor o igual a 60 y cuantos no.
cada valor de aprobados y desaprobados debera almacenarse de forma indivual en una variable.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------//
/*
Ejercicio 2: Convertidor de Temperatura
Crea un programa que:
1.	Le pida al usuario una temperatura y la unidad de medida (Celsius o Fahrenheit).
2.	Convierta la temperatura a la unidad opuesta:
o	Si es Celsius, conviértela a Fahrenheit.
o	Si es Fahrenheit, conviértela a Celsius.
3.	Muestre el resultado con un mensaje claro.
Hint: Usa if o switch para manejar las dos opciones.
*/
/*
El método .toUpperCase() en JavaScript se utiliza para convertir una cadena de texto a mayúsculas. Esto es útil cuando deseas normalizar la entrada del usuario para que no importe si el usuario ingresa letras en minúsculas o mayúsculas.

El método .toUpperCase() convierte la cadena ingresada por el usuario a mayúsculas.
Esto asegura que no importa si el usuario ingresa "c", "C", "f" o "F", siempre se tratará como "C" o "F".
*/

/* let temperatura=parseInt(prompt('Ingrese la temperatura'));
let unidad=(prompt('ingrese la unidad de medida (C para celsius o F para fahrenheit')).toUpperCase();//

let celsius=0;
let fahrenheit=0;

if(unidad==="C"){
let fahrenheit= (temperatura * 9/5) + 32;
window.alert(`${temperatura}C° es igual a ${fahrenheit.toFixed(2)}F°`);

}else if(unidad==="F"){
let celsius=(temperatura -32) * 5/9;
window.alert(`${temperatura}F° es igual a ${celsius.toFixed(2)}C°`);

}else{
    window.alert(`la ${unidad}es invalidad`);
} */

/*Si la unidad es C, se convierte la temperatura de Celsius a Fahrenheit usando la fórmula (temperatura * 9/5) + 32 y se muestra el resultado.
Si la unidad es F, se convierte la temperatura de Fahrenheit a Celsius usando la fórmula (temperatura - 32) * 5/9 y se muestra el resultado.
Si la unidad no es válida, se muestra un mensaje de error.*/
//-------------------------------------------------------------------------------------------------------------------------------------------------//
/*
Ejercicio 3: Verificador de Propiedades de un Número
Crea un programa que le pida al usuario un número entero y verifique las siguientes propiedades:
1.	Si el número es positivo o negativo.
2.	Si el número es divisible entre 2, 3, 5, o ninguna de estas.
3.	Si el número es primo (solo divisible entre 1 y él mismo).
Muestra un mensaje para cada una de las propiedades.
Hint: Usa if anidados, operadores lógicos, y un ciclo for para verificar la divisibilidad.
*/
/* let numero=parseInt(prompt('ingrese un número entero'));

if(numero>0){
    window.alert(`${numero} es positivo`);

}else if(numero<0){
    window.alert(`${numero} es negativo`);

}

if(numero % 2 === 0){
window.alert(`${numero} es divisible por 2`);


}else if(numero % 3 === 0){
window.alert(`${numero} es divisible por 3`);


}else if(numero % 5 === 0 ){
window.alert(`${numero} es divisible por 5`);

}else{
    window.alert(`${numero} no es divisible ni por 2 , 3 , 5 .`);
    
}
let primos=0;
for(let i=1; i <=numero; i++){

if(numero % i ===0){
    primos++
}
}

if(primos===2){
window.alert(`${numero} es primo`);

}else if (primos>2){
window.alert(`no es primo`);
} */

/*
Ejercicio 4: Generador de Tabla de Multiplicar
Escribe un programa que:
1.	Le pida al usuario un número entre 1 y 10.
2.	Genere y muestre una tabla de multiplicar del 1 al 10 para ese número.
o	Ejemplo: Si el número es 3, mostrar:
o	3 x 1 = 3  
o	3 x 2 = 6  
o	...  
o	3 x 10 = 30  
3.	Usa colores o símbolos para destacar las operaciones pares e impares (opcional).
Hint: Usa un ciclo for para iterar del 1 al 10.
*/

/*
1)pedir un numero entero al usuario
2)corroborar si el numero es + o -

3)Si el número es divisible entre 2, 3, 5, o ninguna de estas.
reglas para saber la divisibilidad del número:
Comprobación de Divisibilidad por 2, 3 y 5
Para determinar si un número es divisible por 2, 3 y 5 al mismo tiempo, el número debe cumplir con todas las condiciones mencionadas:

Verificar si es par (divisible por 2).
Verificar si la suma de sus dígitos es divisible por 3.
Verificar si termina en 0 o en 5 (divisible por 5).
Ejemplo
Supongamos que queremos saber si el número 30 es divisible por 2, 3 y 5.

Divisibilidad por 2:

La última cifra de 30 es 0 (par). Sí, es divisible por 2.
Divisibilidad por 3:

La suma de los dígitos 
3
+
0
=
3
3+0=3. Como 3 es divisible por 3, sí, es divisible por 3.
Divisibilidad por 5:

La última cifra de 30 es 0. Sí, es divisible por 5.
Dado que el número 30 cumple con todas las condiciones, podemos concluir que 30 es divisible por 2, 3 y 5.

4)verificar si el número es primo o no, es primo cuando es divisible por si mismo y 1.
ejemplo: 5 / 5 = 1 , 5 / 1 = 5
*/