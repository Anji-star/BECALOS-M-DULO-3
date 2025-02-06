/*TIPOS DE DATOS EN JAVASCRIPT*/

// Tipo: Number (Número)
var edad = 23 
var precio = 143.50
var puntos = 0
var temperatura = -666
var numero = 42

// Tipo: String (Texto)
var nombre = "Angélica" //Con comillas dobles
var color = "rojo"
var saludo = 'Hola, ¿Cómo estás?' //Con comillas simples
var Veinticinco = 'Veinticinco'
var character = "''"
var edadCadena = "23"

//Tipo: Boolean (Booleano)
var esMayor = true //Verdadero
var estudia = true
var tienePermiso = false //Falso
var tieneEmpleo =false

//Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")
var identificador3 = Symbol("id")

//Tipo: BigInt (Números muy grandes)
var numeroGrande = 25356373737364473838292928n

//Tipo: Null (Valor vacío INTENCIONALMENTE)
var vacio = null

//Tipo: Undefined (Valor NO asignado)
var sinDefinir

//Tipo NaN (Not a Number - Un no Número , esto pasa cuando una operación no es un número válido)
var resultadoInvalido = "Hola" * 5

/*
    console.log se usa para mostrar valores en la consola del navegador.
*/
console.log(numero)
console.log(Veinticinco)
console.log(temperatura)
console.log(esMayor)
console.log(puntos)
console.log(character)
console.log(vacio)
console.log(sinDefinir)
console.log(tieneEmpleo)
console.log(edad)
console.log(nombre)

/*
    typeof nos permite conocer el tipo de dato de una variable
*/
console.log(typeof numero)
console.log(typeof Veinticinco)   // Imprime 'string'
console.log(typeof temperatura)   // Imprime 'number'
console.log(typeof esMayor)       // Imprime 'boolean'
console.log(typeof puntos)        // Imprime 'number'
console.log(typeof character);   // Imprime 'string'
console.log(typeof vacio);            // Imprime 'object' (comportamiento especial de JavaScript)
console.log(typeof sinDefinir);       // Imprime 'undefined'
console.log(typeof tieneEmpleo);           // Imprime 'boolean'
console.log(typeof edad)
console.log(typeof edadCadena)
