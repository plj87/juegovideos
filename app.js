//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número del 1 al 10"
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = []
let numeroMaximo = 10;


console.log(numeroSecreto)

function asignarTextoElemento(elemnto, texto){
    let elementoHTML = document.querySelector(elemnto);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//    console.log(typeof(numeroDeUsuario));
//    console.log(numeroDeUsuario);
//    console.log(typeof(numeroSecreto));
//    console.log(intentos)
//    console.log(numeroSecreto);
//    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else { 
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
//    let valorCaja = document.querySelector('#valorUsuario');
//    valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números (podríamos poner "asignarTextoElemento("p", "Indica un número del 1 al 100");" pero decidieron hacer una funcion nueva)
    condicionesIniciales();
    //generar de nuevo el numero aleatorio
    //deshabilitar el boton de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //reinicializar el número de intentos
}

condicionesIniciales()