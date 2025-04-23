import { esPar, elMayor, Payments,validateNum,validateTypeNumber,validateNotString ,additionSubtraction,positiveNegativeZero, positiveNegativeZero} from './funciones.js';

//*test*
/* elMayor(5 , 3);
elMayor(7 , 7);
 */

console.log(esPar(7));
/*
Hacer un programa para ingresar 20 números y
  mostrar por pantalla cuántos son pares.
*/
 let cont =0;

for(let i=0 ; i < 5 ; i++){
    let nums= parseInt(prompt('ingrese cinco números'));
  if(esPar(nums) === 1){
    cont++
  }
}
console.log(`Se ingresaron ${cont} números pares.`); 

/*
Hacer un programa para
ingresar 10 ventas. Para cada venta se conoce el monto y la cantidad de pagos.
El programa deberá mostrar la cantidad de pagos y el monto del pago para
cada una de las ventas.
*/


/* for(let i= 1; i <= 10 ; i++){
  //solicito y valido el monto
 let amount=0;
 let payments=0;
  do {
    amount= parseFloat(prompt(`sale ${i}: Enter the amount (ej:150.50)`));
  } while (isNaN(amount)|| amount<=0 );
//solicitar y validar cantidad de pagos
do {
   payments=parseInt(prompt(`sale ${i}: Enter the number of payments (ej:3) `));
  } while (isNaN(payments) || payments <= 0);
console.log(`
  sales${i}
  - amount of payments: ${payments}
        - amount per payment:${amount.toFixed(2)}`);

        let result =validatePayments(amount , payments);
console.log(result);  
}
 */
/*
1)ingresar 10 ventas
2)por cada venta se el monto y la cantidad de pagos que se ingresaron
3)como se el monto y la cantidad de pagos?
4)
 */

//1) primera forma de usar el metodo .tofixed- antes del punto y como se coloca
//2) realizar una variable, y luego poner en el valor 3.1532.tofixed(2) let amountToFixed=amount.toFixed(2);

//Ejercicio 6

const result=additionSubtraction(4 , 24)
console.log(result[0],result[1]);



const ref=[20 , 17 ,2 , 1 , 22 , 9 ,7 ,10, -1]; // lista de arrays



const variableRef = {

  number: null

}


const validationRef = {
  positivo: 0,
  negativo: 0,
  cero: 0
}


for (let i = 1; i < 11; i++) {

  let numbers = parseInt(prompt('Ingrese un numero') ?? '');

  positivoNegativoCero(numbers, variableRef, validationRef);


}


console.log(
  `
  
    Números positivos ${validationRef.positivo}
    Números negativos ${validationRef.negativo}
    Números iguales a  ceros ${validationRef.cero}
  
  `
)
//El punto indica que el número sera la referencia.

