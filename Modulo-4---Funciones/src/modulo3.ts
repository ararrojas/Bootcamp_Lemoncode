/* GRUPOS MUSICALES

Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, 
con fuente más grande y color de fondo verde. */

// Estilo
const estiloNombre = 'font-weight:bold; font-size:16px; background:green';

// interface
interface grupoMusical {
    nombre : string;
    añoFundacion : number;
    activo : boolean;
    generoMusical : string;
};

// definir generos musicales 
const generoRock = 'Rock';
const generoHardRock = 'Hard Rock';
const generoClasico = 'Clasico';
const generoPopRock = 'Pop Rock';

// Grupos
const grupo1 : grupoMusical = {
    nombre : 'The Beatles',
    añoFundacion: 1960,
    activo: true,
    generoMusical: generoPopRock,
};
console.log(`%c${grupo1.nombre}`, estiloNombre);
console.log(grupo1.añoFundacion + '\n' + grupo1.activo + '\n' + grupo1.generoMusical);

const grupo2 : grupoMusical = {
    nombre : 'Queen',
    añoFundacion: 1970,
    activo: false,
    generoMusical:generoRock,
};
console.log(`%c${grupo2.nombre}`, estiloNombre);
console.log(grupo2.añoFundacion + '\n' + grupo2.activo + '\n' + grupo2.generoMusical);

const grupo3 : grupoMusical = {
    nombre : 'AC DC',
    añoFundacion: 1973,
    activo: true,
    generoMusical:generoHardRock,
};
console.log(`%c${grupo3.nombre}`, estiloNombre);
console.log(grupo3.añoFundacion + '\n' + grupo3.activo + '\n' + grupo3.generoMusical);

const grupo4 : grupoMusical = {
    nombre : 'Ludwig van Beethoven',
    añoFundacion: 1962,
    activo: false,
    generoMusical:generoClasico,
};
console.log(`%c${grupo4.nombre}`, estiloNombre);
console.log(grupo4.añoFundacion + '\n' + grupo4.activo + '\n' + grupo4.generoMusical);

const grupo5 : grupoMusical = {
    nombre : 'The Rolling Stones',
    añoFundacion: 1962,
    activo: true,
    generoMusical:generoRock,
};
console.log(`%c${grupo5.nombre}`, estiloNombre);
console.log(grupo5.añoFundacion + '\n' + grupo5.activo + '\n' + grupo5.generoMusical);
