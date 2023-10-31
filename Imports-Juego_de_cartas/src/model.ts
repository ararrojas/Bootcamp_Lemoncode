interface Partida{
    puntuacion : number;
    usuarioSePlanto : boolean;
}

export const partida : Partida = {
    puntuacion : 0,
    usuarioSePlanto : false,
}

export const puntosAcumulados = (valor:number) => partida.puntuacion += valor;
