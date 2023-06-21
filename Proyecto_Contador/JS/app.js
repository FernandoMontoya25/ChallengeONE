// ----------------------------------- Variables ----------------------------------- 
const inicializar = document.querySelector('#inicializar');
const contenedorBtns = document.querySelector('#btns');
const span = document.querySelector('#spanTitulo');
const titulo = document.querySelector('#titulo');
const addContador1 = document.querySelector('#addBtn1');
const addContador2 = document.querySelector('#addBtn2');
const addContador3 = document.querySelector('#addBtn3');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const cerrar1 = document.querySelector('#close1');
const cerrar2 = document.querySelector('#close2');
const cerrar3 = document.querySelector('#close3');
const pantalla1 = document.querySelector('#pantalla1');
const pantalla2 = document.querySelector('#pantalla2');
const pantalla3 = document.querySelector('#pantalla3');
const contenido = document.querySelector('#contenido');
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;

// ----------------------------------- Eventos ----------------------------------- 
contenido.addEventListener('click', clases);
addContador1.addEventListener('click', contador);
addContador2.addEventListener('click', contador);
addContador3.addEventListener('click', contador);
cerrar1.addEventListener('click', cerrarContenedor);
cerrar2.addEventListener('click', cerrarContenedor);
cerrar3.addEventListener('click', cerrarContenedor);
inicializar.addEventListener('click', botones);

// ----------------------------------- Funciones ----------------------------------- 
function clases(e){
    if(e.target.classList.contains("restar1")){
        valor1 -= 1;
        pantalla1.value = valor1;
    } else if(e.target.classList.contains("reset1")){
        valor1 = 0;
        pantalla1.value = valor1;
    } else if(e.target.classList.contains("sumar1")){
        valor1 += 1;
        pantalla1.value = valor1;
    }

    if(e.target.classList.contains("restar2")){
        valor2 -= 1;
        pantalla2.value = valor2;
    } else if(e.target.classList.contains("reset2")){
        valor2 = 0;
        pantalla2.value = valor2;
    } else if(e.target.classList.contains("sumar2")){
        valor2 += 1;
        pantalla2.value = valor2;
    }

    if(e.target.classList.contains("restar3")){
        valor3 -= 1;
        pantalla3.value = valor3;
    } else if(e.target.classList.contains("reset3")){
        valor3 = 0;
        pantalla3.value = valor3;
    } else if(e.target.classList.contains("sumar3")){
        valor3 += 1;
        pantalla3.value = valor3;
    }
}

function contador(e){
    if(e.target.value == 1){ 
        btn1.classList.remove("display");
        addContador1.classList.add("display");
    } else if(e.target.value == 2) {
        btn2.classList.remove("display");
        addContador2.classList.add("display");
    } else if(e.target.value == 3) {
        btn3.classList.remove("display");
        addContador3.classList.add("display");
    }
}

function cerrarContenedor(e){
    if(e.target.classList.contains("cerrar1")){ 
        btn1.classList.add("display");
        addContador1.classList.remove("display");
        valor1 = 0;
        pantalla1.value = 0;
    } else if(e.target.classList.contains("cerrar2")) {
        btn2.classList.add("display");
        addContador2.classList.remove("display");
        valor2 = 0;
        pantalla2.value = 0;
    } else if(e.target.classList.contains("cerrar3")) {
        btn3.classList.add("display");
        addContador3.classList.remove("display");
        valor3 = 0;
        pantalla3.value = 0;
    }
}

function botones() {
    contenedorBtns.classList.remove("display");
    inicializar.classList.add("display");
    span.classList.add("display");
    titulo.classList.add("titulo");
    titulo.classList.remove("inicializacion");
}