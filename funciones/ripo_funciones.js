/* FUNCIONES */
/* "use strict" */  //En modo stricto , this es undefined.
/**
 * Declaración de función tradicional
 * Tiene su propio contexto this
 * Se puede llamar antes de su declaración (hoisting)
 * Es nombrada (tiene un identificador)
 */


function primerForma() {
    console.log(this); //this el objeto global
}

primerForma();// En modo estricto: undefined. En modo no estricto: window (objeto global).



/**
 * Expresión de función anónima
 * Asignada a una variable
 * No tiene hoisting (no se puede llamar antes de su declaración)
 * Tiene su propio contexto this
 * Es anónima (a menos que le des nombre después de function
 * 
 */

const segundaForma = function () {


}







/**
 * Arrow function (función flecha)
 * No tiene su propio this (hereda el contexto léxico)
 * Siempre es anónima (aunque está asignada a una variable)
 * Sintaxis más corta
 * No se puede usar como constructor (no tiene prototype)
 */

const terceraForma = () => {

};





/**
 * 
 * Arrow function con retorno implícito
 * Cuando no hay llaves {}, devuelve automáticamente la expresión después de =>
 * Equivalente a: const arrow = () => { return 2; }
 * @returns 
 */
const arrow = () => 2;


/**
 * 
 * IIFE (Immediately Invoked Function Expression)
 * Función que se ejecuta inmediatamente después de su definición
 * Útil para crear scope privado
 * Puede ser arrow function o función tradicion
 */

(() => {



})();

//Concepto del this
/*




*/
