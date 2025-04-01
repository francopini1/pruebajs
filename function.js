import { producto,tablaDelUno,esPrimo,elMayor,par} from "./funciones";
/*
1)primero pongo import, para poder recibir la funcion y poder usarla, luego abro llaves y coloco la funcion que quiero recibir.,
entonces tambien por from que es de que archivo voy recibir esas funciones y luego coloco el nombre como en el ej de arriba.
y para poder sumar funciones dentro de las llaves ej pongo, ctrl + space y elijo el nombre.
*/

// Definición de una función
/* Una función es un bloque  de código reutilizable  */

saludar();

multiplicar(2, 3);

let numberOne = 2;
let numberTwo = 2;

multiplicar(numberOne, numberTwo);

let valorDeSuma = sumar(numberOne, numberTwo);

if (sumar(numberOne, numberTwo) === 4) {


}

// saber si un numero es primo
// saber si el primo es positivo
// saber si el primo es negativo
// saber si el primo es par


// objetivo : desarrolladar una funcion que me permita saber si un numero es primo.
// recibir un valor - si es o no es primo


let numero = 12;

if (esPrimo(numero)) {
  console.log('es primo')
}


// Ejecución
tablaDelUno(10); // Tabla del 1
tablaDelUno(5);  // Tabla del 1


/* Hacer una función llamada “producto” que reciba dos números enteros y que
devuelva el producto de ambos. Luego hacer un programa que pida el precio
de un artículo y la cantidad vendida y muestre por pantalla el monto total a
pagar. Usar la función. */



let nunUno = 10;
let numDos = 20;

let precioArticulo = parseInt(prompt('Ingrese el precio del articulo') ?? '');
let cantidadVendida = parseInt(prompt('Ingrese la cantidad ') ?? '');

window.alert(`El monto toal es ${producto(precioArticulo, cantidadVendida)}`)

elMayor(5 , 3);
elMayor(7 , 7);
console.log(elMayor(5 , 3));
console.log(elMayor(7 , 7));

console.log(`El mayor entre 5 y 3 es: ${enteroUno}`);
console.log(`El mayor entre 7 y 7 es: ${enteroDos}`);


par();

