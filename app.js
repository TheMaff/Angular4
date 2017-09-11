// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
function nombreReal(Hero) {
    console.log("El nombre de batman es: " + Hero.nombre);
}
function habilidadReal(Hero) {
    console.log("Su habilidad mas especial es: " + Hero.artesMarciales[2]);
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
nombreReal(batman);
habilidadReal(batman);
// Convertir esta funcion a una funcion de flecha
//let resultadoDoble = function ( a:number, b:number ) {
//  return (a + b) * 2
//}
var resultadoDobleF = function (a, b) { return a + b * 2; };
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "un cuchillo piñufla"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    console.log(mensaje);
}
;
getAvenger("Gordon", "controlar el fuego");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 45;
        this.altura = 10;
    }
    //constructor ( base:number, altura:number){
    //  this.base = base;
    //  this.altura = altura;
    //}
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
