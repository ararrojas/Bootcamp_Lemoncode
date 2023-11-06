// Variables basicas

let puntuacion : number = 0;

let usuarioSePlanto: boolean = false;

const numeroAleatorio = () => Math.floor(Math.random() * 10) +1;

const numerosCartas = (valor:number) => (valor > 7 ) ? valor + 2 : valor;

const puntuacionCarta = (valor:number) => (valor <= 7) ? valor : 0.5;

const puntosAcumulados = (valor:number) => puntuacion += valor;

// Cazar de HTML

const elementoPuntuacion = document.getElementById('puntuacion');
const cartaContainer = document.getElementById('cartaInicial');
const elementoResultado = document.getElementById('mostrarResultado');
const botonPedirCarta = document.getElementById('pedirCarta');
const botonPlantarse = document.getElementById('plantarse');
const botonNuevaPartida = document.getElementById('nuevaPartida');
const botonResultadoContinuar = document.getElementById('resultadoContinuar');

// Funciones

const dameCarta = () : void => {

   const numero = numeroAleatorio();

   const puntuacionCartaValor  = puntuacionCarta(numero);
    puntosAcumulados(puntuacionCartaValor);

    const valorCarta = numerosCartas(numero);

    const imagenURL = mostrarCarta(valorCarta);
    vistaCarta(imagenURL);
    muestraPuntuacion();

    comprobarPartida();
};

const muestraPuntuacion = () => {
    
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLHeadingElement) {
    elementoPuntuacion.textContent = `Puntuación: ${puntuacion}`;
    } else {
        console.error('No se ha encontrado el contenedor de mostrar puntuacion.');
    };
};

const mostrarCarta = (numerosCartas:number) : string => {

    let cartaURL='';

    switch (numerosCartas){
        case 0: 
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
            break;
        case 1:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12:
            cartaURL = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
        default:
            console.log(`Error!`)
            break;
    };

    return cartaURL;
};

const vistaCarta = (cartaURL:string) => {
    
    if (cartaContainer && cartaContainer instanceof HTMLImageElement){
        cartaContainer.src = cartaURL;
    } else {
        console.error('No se ha encontrado la imagen de la carta.')
    }
};

const devolverMensaje = (puntuacion: number): string => {
    let mensaje = '';

    if (puntuacion <= 4) {
        mensaje = `Has sido muy conservador.`;
    } else if (puntuacion <= 5) {
        mensaje = `Te ha entrado el canguelo eh?`;
    } else if (puntuacion <= 7) {
        mensaje = `Casi casi...`;
    } else if (puntuacion === 7.5){
        mensaje = `¡Has ganado la partida!`;
    } else if (puntuacion > 7.5){
        mensaje = `Partida perdida. ¡Inténtalo de nuevo!`;
    } else {
        mensaje = 'No se puede mostrar mensaje de plantarse';
    }

    return mensaje;
};

const mostrarMensajeResultado = (mensaje:string) => {
    
    if (elementoResultado && elementoResultado instanceof HTMLHeadingElement){
        elementoResultado.textContent = mensaje;
    } else {
        console.error('No se puede mostrar mensaje de resultado');
    };
};

const mostrarMensaje = (puntuacion: number) => {
    const mensaje = devolverMensaje(puntuacion);
    mostrarMensajeResultado(mensaje);
};

const comprobarPartida = () => {
    if(puntuacion === 7.5){
        mostrarMensaje(puntuacion);
        desactivarBotones();
    } else if (puntuacion > 7.5){
        mostrarMensaje(puntuacion);
        desactivarBotones();
    }
};

const desactivarBotones = () => {
    handleBotonPedirCarta(false);
    handleBotonPlantarse(false);
    handleBotonResultadoContinuar(false);
};

const activarBotones = () => {
    handleBotonPedirCarta(true);
    handleBotonPlantarse(true);
    handleBotonResultadoContinuar(true);
};

const mostrarBotonResultadoContinuar = () => {

    if (usuarioSePlanto){
        if (botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){
            botonResultadoContinuar.style.display = 'block';
        }
    } else {
        if (botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){
            botonResultadoContinuar.style.display = 'none';
        }
    }
};

const usuarioSePlanta = () => {

    mostrarMensaje(puntuacion);
    handleBotonPedirCarta(false);   
    usuarioSePlanto = true;
    mostrarBotonResultadoContinuar();
    
};

const usuarioNuevaPartida = () => {
    puntuacion = 0;
    muestraPuntuacion();
    
    const url = mostrarCarta(0);
    vistaCarta(url);
    mostrarMensajeResultado('');
    activarBotones();
    usuarioSePlanto = false;
    mostrarBotonResultadoContinuar();
};

const usuarioCurioso = () => {
    dameCarta();
    muestraPuntuacion();
};

/* BOTONES */ 

const eventos = () => {
    
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.addEventListener('click', dameCarta);
    } else {
        console.error('Error: event listener pedir carta');
    };
        
    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.addEventListener('click', usuarioSePlanta);
    } else {
        console.error('Error: event listener plantarse');
    };
        
    if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement){
        botonNuevaPartida.addEventListener('click', usuarioNuevaPartida);
    } else {
        console.error('Error: event listener nueva partida');
    };

    if(botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){
        botonResultadoContinuar.addEventListener('click', usuarioCurioso)
    } else {
        console.error('Error: event listener que hubiera pasado');
        
    }
};


/* Activar o desactivar botones*/

const handleBotonPedirCarta = (activar:boolean) => {
    
    if (botonPedirCarta && botonPedirCarta instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = !activar;
    } else {
        console.error('Error: No se ha encontrado el botón Pedir Carta');
    }
};

const handleBotonPlantarse = (activar:boolean) => {
    
    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = !activar;
    } else {
        console.error('Error: No se ha encontrado el botón Plantarse');
    }
};

const handleBotonResultadoContinuar = (activar:boolean) => {
    
    if (botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){  
        botonResultadoContinuar.disabled = !activar;
    } else {
        console.error('Error: No se ha encontrado el botón resultado continuar');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion(), eventos()});