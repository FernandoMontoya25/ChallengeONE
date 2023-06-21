// Variables
var contenedorNumeros = [];
var resultadoFinal = "";

// Pantalla
const pantalla = document.querySelector('.pantallaTexto');
// Variables numeros
var btn0 = document.querySelector('.btn0');
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');
var btn5 = document.querySelector('.btn5');
var btn6 = document.querySelector('.btn6');
var btn7 = document.querySelector('.btn7');
var btn8 = document.querySelector('.btn8');
var btn9 = document.querySelector('.btn9');
//  Variables operaciones
var btnSuma = document.querySelector('.btnSuma');
var btnResta = document.querySelector('.btnResta');
var btnMult = document.querySelector('.btnMult');
var btnDiv = document.querySelector('.btnDiv');
var btnPunto = document.querySelector('.btnPunto');
var btnResultado = document.querySelector('.btnIgual');
var btnParentecisAbrir = document.querySelector('.btnParentecisAbrir');
var btnParentecisCerrar = document.querySelector('.btnParentecisCerrar');
// Boton AC
var btnAC = document.querySelector('.btnAC');


btn0.addEventListener('click', puntero);
btn1.addEventListener('click', puntero);
btn2.addEventListener('click', puntero);
btn3.addEventListener('click', puntero);
btn4.addEventListener('click', puntero);
btn5.addEventListener('click', puntero);
btn6.addEventListener('click', puntero);
btn7.addEventListener('click', puntero);
btn8.addEventListener('click', puntero);
btn9.addEventListener('click', puntero);
btnSuma.addEventListener('click', puntero);
btnResta.addEventListener('click', puntero);
btnMult.addEventListener('click', puntero);
btnDiv.addEventListener('click', puntero);
btnPunto.addEventListener('click', puntero);
btnParentecisAbrir.addEventListener('click', puntero);
btnParentecisCerrar.addEventListener('click', puntero);
btnResultado.addEventListener('click', resultado);
btnAC.addEventListener('click', limpiarPantalla);


function puntero(e){
    if (btnResultado.classList.contains("active")) {
        btnResultado.classList.remove("active")
        pantalla.value = "";
        limpiarPantalla();
    }
    contenedorNumeros.push(e.target.value);
    pantalla.value += e.target.value;
}

function resultado(e) {
    contenedorNumeros.forEach( valor => {
        resultadoFinal += valor;
    });
    var convertidor = eval(resultadoFinal);
    pantalla.value = convertidor.toFixed(3);
    e.target.classList.add("active")
}

function limpiarPantalla() {
    pantalla.value = "";
    contenedorNumeros = [];
    resultadoFinal = "";
}