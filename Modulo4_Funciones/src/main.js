// Inicializar el contador 
let contador = 0;

// Obtener el valor de los botones
const turno = document.getElementById('turno');
const btnAnterior = document.getElementById('anterior');
const btnReset = document.getElementById('reset');
const btnSiguiente = document.getElementById('siguiente');

btnSiguiente.onclick = () => {
    contador++;
    turno.innerHTML = contador.toString().padStart(2,'0');
};

btnAnterior.onclick = () => {
    contador--;
    turno.innerHTML = contador.toString().padStart(2,'0');
};

btnReset.onclick = () => {
    contador = 0;
    turno.innerHTML = contador.toString().padStart(2,'0');
};

// Cambio de turno con caja de texto


function cambiarTurno() {
    const nuevoTurno = parseInt(document.getElementById('nuevoTurno').value);
    if (nuevoTurno !== null && nuevoTurno !== undefined) {
        turno.innerHTML = nuevoTurno.toString().padStart(2,'0');
    }
};
document.getElementById('set').addEventListener('click', cambiarTurno);