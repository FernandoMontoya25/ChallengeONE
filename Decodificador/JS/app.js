// Declarando variables
var encriptador = document.querySelector("#encriptador");
var respuesta = document.querySelector('#respuesta');
var boton1 = document.querySelector(".botonEncriptar");
var boton2 = document.querySelector(".botonDesencriptar");
var clear = document.querySelector('.botonClear');

// Escuchador de eventos
boton1.addEventListener('click',encriptar);
boton2.addEventListener('click',desencriptar);
clear.addEventListener('click', clearAll);

// Funciones
// Funcion para encriptar nuestro contenido
function encriptar(){
    let nuevoTexto =  encriptador.value.replace(/e/g, "enter");
    nuevoTexto =  nuevoTexto.replace(/i/g, "imes");
    nuevoTexto =  nuevoTexto.replace(/a/g, "ai");
    nuevoTexto =  nuevoTexto.replace(/o/g, "ober");
    nuevoTexto =  nuevoTexto.replace(/u/g, "ufat");
    respuesta.value = nuevoTexto;
    
}
// Funcion para desencriptar nuestro contenido
function desencriptar(){
    let nuevoTexto =  encriptador.value.replace(/enter/g, "e");
    nuevoTexto =  nuevoTexto.replace(/imes/g, "i");
    nuevoTexto =  nuevoTexto.replace(/ai/g, "a");
    nuevoTexto =  nuevoTexto.replace(/ober/g, "o");
    nuevoTexto =  nuevoTexto.replace(/ufat/g, "u");
    respuesta.value = nuevoTexto;
}
// Funcion para limpiar nuestros imputs
function clearAll(){
    encriptador.value = "";
    respuesta.value = "";
}
// Funcion para validar nuestros caracteres
function validacion(input) {
    var caracteres = /^[a-z\s]+$/;
    if (!caracteres.test(input.value)) {
      input.value = input.value.replace(/[^a-z\s]/g, "");
      alert("Estas escribiendo letras en mayuscula o caracteres especiales");
    }
  }