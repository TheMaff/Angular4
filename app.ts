
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto

interface Hero {
  nombre:string,
  artesMarciales:string[];
}

function nombreReal( Hero : Hero){
  console.log("El nombre de batman es: " + Hero.nombre);
}
function habilidadReal( Hero : Hero){
  console.log("Su habilidad mas especial es: " + Hero.artesMarciales[2]);
}

let batman:any = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

nombreReal(batman);
habilidadReal(batman);



// Convertir esta funcion a una funcion de flecha
//let resultadoDoble = function ( a:number, b:number ) {
//  return (a + b) * 2
//}

let resultadoDobleF = ( a:number, b:number ) => a + b * 2;



// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "un cuchillo piñufla" ){
  let mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  console.log(mensaje);
};

getAvenger("Gordon", "controlar el fuego");


// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
  base:number = 45;
  altura:number = 10;

  //constructor ( base:number, altura:number){
  //  this.base = base;
  //  this.altura = altura;
  //}

  calcularArea():number{
    return this.base * this.altura;
  }

}
