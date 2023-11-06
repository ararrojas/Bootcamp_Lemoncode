import { partida } from './model';
import { dameCarta, mostrarCarta, mostrarMensaje } from './motor';

const elementoPuntuacion = document.getElementById('puntuacion');
const cartaContainer = document.getElementById('cartaInicial');
const elementoResultado = document.getElementById('mostrarResultado');
const botonPedirCarta = document.getElementById('pedirCarta');
const botonPlantarse = document.getElementById('plantarse');
const botonNuevaPartida = document.getElementById('nuevaPartida');
const botonResultadoContinuar = document.getElementById('resultadoContinuar');

export const muestraPuntuacion = () => {
    
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLHeadingElement) {
    elementoPuntuacion.textContent = `Puntuación: ${partida.puntuacion}`;
    } else {
        console.error('No se ha encontrado el contenedor de mostrar puntuacion.');
    };
};

export const vistaCarta = (cartaURL:string) => {
    
    if (cartaContainer && cartaContainer instanceof HTMLImageElement){
        cartaContainer.src = cartaURL;
    } else {
        console.error('No se ha encontrado la imagen de la carta.')
    }
};

export const mostrarMensajeResultado = (mensaje:string) => {
    
    if (elementoResultado && elementoResultado instanceof HTMLHeadingElement){
        elementoResultado.textContent = mensaje;
    } else {
        console.error('No se puede mostrar mensaje de resultado');
    };
};

export const eventos = () => {
    
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

export const desactivarBotones = () => {
    handleBotonPedirCarta(false);
    handleBotonPlantarse(false);
    handleBotonResultadoContinuar(false);
};

export const comprobarPartida = () => {
    if(partida.puntuacion === 7.5){
        mostrarMensaje(partida.puntuacion);
        desactivarBotones();
    } else if (partida.puntuacion > 7.5){
        mostrarMensaje(partida.puntuacion);
        desactivarBotones();
    }
};

const mostrarBotonResultadoContinuar = () => {

    if (partida.usuarioSePlanto){
        if (botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){
            botonResultadoContinuar.style.display = 'block';
        }
    } else {
        if (botonResultadoContinuar && botonResultadoContinuar instanceof HTMLButtonElement){
            botonResultadoContinuar.style.display = 'none';
        }
    }
};

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

const activarBotones = () => {
    handleBotonPedirCarta(true);
    handleBotonPlantarse(true);
    handleBotonResultadoContinuar(true);
};

const usuarioSePlanta = () => {

    mostrarMensaje(partida.puntuacion);
    handleBotonPedirCarta(false);   
    partida.usuarioSePlanto = true;
    mostrarBotonResultadoContinuar();
    
};

const usuarioNuevaPartida = () => {
    partida.puntuacion = 0;
    muestraPuntuacion();
    
    const url = mostrarCarta(0);
    vistaCarta(url);
    mostrarMensajeResultado('');
    activarBotones();
    partida.usuarioSePlanto = false;
    mostrarBotonResultadoContinuar();
};

const usuarioCurioso = () => {
    dameCarta();
    muestraPuntuacion();
};

