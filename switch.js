 
/* let procesador=parseInt(prompt('ingrese la opción del procesador'));
let memoriaRam=parseInt(prompt('ingrese la opción memoria RAM'));
let extensionDisco=parseInt(prompt('Si extiende el disco (1 para extender , 0 para no extender)'));
//opciones de procesador
let i5=1;
let i7=2;
let i9=3;
//opciones de ram
let ram8=1;
let ram16=2;
let ram32=3;

let montoFinal=0;
if(procesador===1){
    switch(memoriaRam){
        case 1:
            montoFinal=800;
            break;
        case 2:
            montoFinal=900;
            break;
        case 3:
            montoFinal=1000;
        break;
        default:    
            window.alert('Opción de ram no valida');
            break;
    }
}
if(procesador===2){
    switch(memoriaRam){
    case 1:
        montoFinal=900;
        break;
    case 2:
        montoFinal=1000;
        break;
    case 3:
        montoFinal=1400;
    break;
    default:    
        window.alert('Opción de ram no valida');
        break;
    }
}
if(procesador===3){
    switch (procesador){
        case 1:
            montoFinal=1200;
            break;
    case 2:
        montoFinal=1400;
            break;
    case 3:
        montoFinal=2000;
            break;
    default:
        window.alert('Opción de ram no valida');
        break;
    }
}
if(extensionDisco==1){
    montoFinal += 300;
}


window.alert(`El monto de la máquina sellecionada es ${montoFinal} USD`); 
 */
//Esta seria una opción no tan recomendable ya que es poco legible
/* switch(procesador){
case 1:
    switch(memoriaRam){
case 1:
    montoFinal=800;
    break;
case 2:
    montoFinal=900;
    break;
case 3:
    montoFinal=1000;
break;
default:    
    window.alert('Opción de ram no valida');
    break;

}   
    break;
case 2:
switch (memoriaRam) {
case 1:
montoFinal=900;
    break;
case 2:
    montoFinal=1000;
    break;
case 3:
    montoFinal=1400;
default:
    window.alert('Opción de ram no valida');
    break;
}
    break;

case 3:
 switch (procesador){
    case 1:
        montoFinal=1200;
        break;
case 2:
    montoFinal=1400;
        break;
case 3:
    montoFinal=2000;
        break;
default:
    window.alert('Opción de ram no valida');
    break;
}
break;
default:
    window.alert('Opcion de procesador no valida');
    break;
}
if(extensionDisco==1){
    montoFinal += 300;
}


window.alert(`El monto de la máquina sellecionada es ${montoFinal} USD`); 
 */
/*
Ejercicio 4 - Cursos en línea
Una plataforma ofrece cursos con tres niveles: Principiante (1) USD 50, Intermedio (2) USD 80, Avanzado (3) USD 120. Según el tipo de acceso:

Acceso: 1 mes (1), 3 meses (2) con 10% de descuento, 6 meses (3) con 20% de descuento.
Si el usuario compra certificado (1 para sí, 0 para no), suma USD 30. Calcular el monto final.
Tip: Aplica descuentos al subtotal antes de sumar el certificado.

Ejercicio 5 - Planes de internet
Una compañía de internet tiene tres velocidades: 50 Mbps (1) USD 30, 100 Mbps (2) USD 50, 200 Mbps (3) USD 80. Según el plazo de contrato:

Plazo: 6 meses (1), 12 meses (2) con USD 5 de descuento/mes, 24 meses (3) con USD 10 de descuento/mes.
Si el cliente alquila el módem (1 para sí, 0 para no), suma USD 10/mes. Calcular el costo total.
Tip: Usa switch para velocidad y plazo, luego calcula el descuento.

🛠️ Tips generales:

Define precios base en cada case.

Agrupa casos si necesitan la misma acción.

Usa default para opciones inválidas.
*/

//ejercicio 1
/*
Ejercicio 1 - Tienda de cámaras fotográficas
Una tienda vende cámaras con las siguientes opciones:

Tipo de cámara: Básica (1) USD 300. Profesional (2) USD 600. Ultra (3) USD 1000.

Lente adicional: Sin lente (1), Telefoto (2) USD 150, Gran angular (3) USD 200.

Estuche premium: Sí (1) USD 50, No (0).
El programa debe pedir el tipo de cámara, el lente y si desea el estuche, luego calcular el total.
Tip: Usa switch para manejar el tipo de cámara y el lente por separado.
*/
/* 
let tipoCamara=parseInt(prompt('ingrese la opción de camara'));
let lenteAdicional=parseInt(prompt('ingrese la opcion de lente adicional'));
let estuchePremium=parseInt(prompt('si desea comprar el estuche(1 para agregar,0 para no agregar)'))

let camaraBasica=1;
let camaraProfesional=2;
let camaraUltra=3;

let sinLente=1;
let teleFoto=2;
let granAngular=3;

let montoFinal=0;

if(tipoCamara===1){
switch(lenteAdicional){
case 1:
    montoFinal=300;
    break;
case 2:
    montoFinal=300 + 150;
    break;
case 3:
    montoFinal=300 + 200;
    break;
    default:
        window.alert('opción de lente no valida');
        break;
}
}
if(tipoCamara===2){
switch(lenteAdicional){
case 1:
    montoFinal=600;
    break;
case 2:
    montoFinal=600 + 150;
    break;
case 3:
    montoFinal=600 + 200;
    break;
    default:
        window.alert('opción de lente no valida');
        break;
}
}
if(tipoCamara===3){
switch(lenteAdicional){
case 1:
    montoFinal=1000;
    break;
case 2: 
    montoFinal=1000 + 150;
    break;
case 3:
    montoFinal=1000 + 200;
    break;
    default:
        window.alert('opción de lente no valida');
        break;
}
}
if(estuchePremium===1){
montoFinal=montoFinal + 50;
}
window.alert(`El monto de de la camara es ${montoFinal} USD`);  */

/*
ejercicio 2
Ejercicio 2 - Servicio de streaming
Un servicio ofrece tres planes: Básico (1) USD 10/mes, Estándar (2) USD 15/mes, Premium (3) USD 20/mes. Dependiendo de la cantidad de pantallas:

Pantallas: 1 (1), 2 (2), 4 (3).

Básico solo permite 1 pantalla.

Estándar permite hasta 2 (si elige 3, cobrar USD 5 extra).

Premium permite hasta 4.
Además, si agrega contenido 4K (1 para sí, 0 para no), suma USD 8. Calcular el monto final.
Tip: Valida combinaciones inválidas (ej: Básico + 2 pantallas).
*/

/* let planes=parseInt(prompt('ingrese la opción de plan requrida'));
let pantallas=parseInt(prompt('ingrese las opciones de cantidad de pantallas'));
let contenido4k=parseInt(prompt('si desea agregar contenido 4k(1 para si,0 para no)'));

let planBasico=1;
let planEst0andar=2;
let planPremium=3;

let pantalla1=1;
let pantallas2=2;
let pantallas3=3
let pantallas4=4

let montoFinal=0;

if(planes===1){
    switch(pantallas){
case 1:
    montoFinal=10;
    break;
case 2:
    window.alert('opción no valida de pantallas');
break;
case 3:
    window.alert('opción no valida de pantallas');
    break;
case 4:
    window.alert('opción no valida de pantallas');
    break;
    default:
        window.alert('la opción es inexistente');
        break;
    }
}
if(planes===2){
switch(pantallas){
case 1:
    montoFinal=15;
    break;
case 2:
    montoFinal=15;
    break;
case 3:
    montoFinal=15 + 5;
    break;
    default:
    case 4:
        window.alert('la opción es inexistente');
        break;
}
}
if(planes===3){
switch(pantallas){
case 1:
    montoFinal=20;
    break;
case 2:
    montoFinal=20;
    break;
case 3:
    montoFinal=20;
    break;
case 4:
    montoFinal=20;
    break;
default:
    window.alert('la opción es inexistente');
    break;
}
}
if(contenido4k===1){
montoFinal=montoFinal + 8;
}
window.alert(`El monto total del servicio de streaming es ${montoFinal} USD`); */

/*
Ejercicio 3 - Vuelos en avión
Una aerolínea tiene tres clases: Económica (1) USD 200, Ejecutiva (2) USD 500, Primera (3) USD 1000. Según el equipaje:

Equipaje: 1 maleta (1), 2 maletas (2) USD 30 extra, 3 maletas (3) USD 60 extra.
Si el pasajero elige asiento premium (1 para sí, 0 para no), suma USD 25. Calcular el total.
Tip: Usa switch para clase y equipaje, y un if para el asiento premium.
*/

/* //ejercicio 3
let clases=parseInt(prompt('Ingrese la opción de clase'));
let equipaje=parseInt(prompt('Ingrese la opción de equipaje'));
 */