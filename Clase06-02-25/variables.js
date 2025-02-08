/*
    -var: Se puede reasignar y redeclarar en cualquier parte del código.
    -let: Se puede reasignar, pero NO se puede redeclarar en el mismo ámbito.
    -const: No se puede reasignar ni redeclarar; es un valor constante.
*/

//VAR
var nombre = "Juan"  //Declar
nombre = "Pepe" //Resigna
var nombre = "Luis" //Redeclarar
console.log(nombre);

//LET
let apellido = "Villanueva" //Declar
apellido = "Corona" //Resigna

//CONST
const gravedad = "9.81 M/s2" // Declarar