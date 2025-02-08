let edad = 8
let tieneINE = false

//Condicional simple
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar")
}


//Condicional con else
if(edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar")
}else{
    console.log("Uno o más requisitos no se cumplen, verifica tu información")
}

//Condicional con else if
if(edad < 13){
    console.log("Eres un niño");
}else if(edad < 18){
    console.log("Eres un adolescente");
}else{
    console.log("Eres un adulto");
}

let tieneEntrada = false
if(!tieneEntrada){
    console.log("Debes comprar una entrada");
}

console.log("Fin de la ejecución");