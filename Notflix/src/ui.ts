import { flechas } from "./constantes";
import { Pelicula, TipoFlecha, nombreClases } from "./modelo";

const crearTitulo = (tituloSeccion:string) : HTMLHeadingElement => {
    const titulo = document.createElement('h2');
    titulo.textContent = tituloSeccion;
    return titulo;
};

const crearContenedor = (nombreClase:string) : HTMLDivElement => {
    const listaPeliculas = document.createElement('div');
    listaPeliculas.classList.add(nombreClase);
    listaPeliculas.id = nombreClase;
    return listaPeliculas;
};

export const pintarListaPeliculas = (
    tituloSeccion: string,
    listaPeliculas:Pelicula[]
): void => {
    // obtener div principal
    const appDiv = document.getElementById('principal');
    // comprobar que existe 
    if(appDiv && appDiv instanceof HTMLDivElement){
        // crear div para las peliculas
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas);
        // unir al div principal
        appDiv.appendChild(crearDivPeliculas);
        // crear titulo
        const titulo = crearTitulo(tituloSeccion);
        // unir titulo 
        crearDivPeliculas.appendChild(titulo);
        // div para lista de peliculas
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas);
        crearDivPeliculas.appendChild(divListaPeliculas);
        //crear div para contenedor de peliculas
        const divPeliculasContenedor = crearContenedor(nombreClases.peliculasContenedor);
        // unir a la lista de peliculas 
        divListaPeliculas.appendChild(divPeliculasContenedor);
        // agregar flecha 
        agregarFlecha(divPeliculasContenedor,'izquierda');
        agregarFlecha(divPeliculasContenedor,'derecha');

        // pintar peliculas
        listaPeliculas.forEach((peli) => {
            // para cada peli
            const divPelicula = crearContenedor(nombreClases.pelicula);
            // unir datos a la peli
            divPelicula.innerHTML = `
            <img src="${peli.imagen}" alt="${peli.titulo}"/>
            <h3>${peli.titulo}</h3>
            `;
            // unir div pelicula al contenedor de peli
            divPeliculasContenedor.appendChild(divPelicula);
        })
    } else {
        console.error('No se ha encontrado el elemento.');
        
    };
};

const agregarFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
    const divFlecha = document.createElement('div');
    divFlecha.className = `flecha-${tipo}`;

    const imgFlecha = document.createElement('img');
    imgFlecha.src = tipo === 'izquierda'? flechas.left : flechas.right;
    divFlecha.appendChild(imgFlecha);
    
    divFlecha.addEventListener('click', () => {
        if(tipo === 'izquierda'){
            contenedor.scrollBy({
                left: -contenedor.clientWidth,
                behavior:'smooth',
            })
        } else {
            contenedor.scrollBy({
                left: contenedor.clientWidth,
                behavior:'smooth',
            })
        };
    });
    contenedor.appendChild(divFlecha);
};