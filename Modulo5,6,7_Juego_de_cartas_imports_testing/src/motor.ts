export const numeroAleatorio = () => Math.floor(Math.random() * 10) +1;

export const numerosCartas = (valor:number) => (valor > 7 ) ? valor + 2 : valor;

export const puntuacionCarta = (valor:number) => (valor <= 7) ? valor : 0.5;

export const mostrarCarta = (numerosCartas:number) : string => {

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

export const devolverMensaje = (puntuacion: number): string => {
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



