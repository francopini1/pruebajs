export function elMayor(enteroUno, enteroDos){
    let Mayor=0;
  
    if (enteroUno > enteroDos){
      Mayor=enteroUno;
    } else if (enteroUno===enteroDos){ 
      Mayor=0;
    } else {
      Mayor = enteroDos;
    }
  
    return Mayor;
    
  }

  
  /*
  Hacer una función llamada “par” que reciba un número entero y devuelva 1 si
  es par o cero si no lo es. Hacer un programa para ingresar 20 números y
  mostrar por pantalla cuántos son pares.
  */
  
  export function par(numPar){
  
    if(numPar % 2 ===0){
      return 1 ;
    }else{
      return 0;
    }
  }
  
 
  /*
  1- crear una funcion llamda par
  2-debe recibir un numero entero, se lo brindara el argumento
  3-preguntar si el numero es par
  4-si es para debe retornar 1
  5-si no es para debe retornar 0
  6-luego hacer un programa que reciba ej 5 numeros
  7-mostrar por pantalla cuantos son pares.
  8-para saber cuantos son pares deberemos poner que si la condicion se cumple ej cont++
  9
  */
