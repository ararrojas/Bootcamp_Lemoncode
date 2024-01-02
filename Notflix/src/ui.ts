import { flechas } from "./constantes";
import { ListaPeliculasConfig, Pelicula, TipoFlecha, nombreClases } from "./modelo";
import { filtrarPeliculas } from "./motor";

const crearTitulo = (tituloSeccion:string) : HTMLHeadingElement => {
    const titulo = document.createElement('h2');
    titulo.textContent = tituloSeccion;
    return titulo;
};

const crearContenedor = (nombreClase:string, contenedor:HTMLDivElement) : HTMLDivElement => {
    const div = document.createElement('div');
    div.classList.add(nombreClase);
    div.id = nombreClase;
    contenedor.appendChild(div);
    return div;
};

const agregarTitulo = (
    tituloSeccion : string,
    contenedor : HTMLDivElement
) : void => {
    const titulo = crearTitulo(tituloSeccion);
    contenedor.appendChild(titulo)
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement) :void => {
    agregarFlecha(peliculaContenedor, 'izquierda');
    agregarFlecha(peliculaContenedor, 'derecha');
};

const pintarPelicula = (
    peli : Pelicula, 
    peliculaContenedor: HTMLDivElement):void => {
        const divPelicula = crearContenedor(nombreClases.pelicula, peliculaContenedor);
        divPelicula.innerHTML = `
        <img src="${peli.imagen}" alt="${peli.titulo}"/>
        <h3>${peli.titulo}</h3>
        `;
};

const pintarPeliculas = (
    peliculas: Pelicula[],
    peliculaContenedor:HTMLDivElement
):void =>{
    peliculas.forEach((peli) => {
        pintarPelicula(peli, peliculaContenedor)
    })
};

export const pintarListaPeliculas = (
    listaPeliculas:Pelicula[],
    configuracion: ListaPeliculasConfig
): void => {
    // obtener div principal
    const appDiv = document.getElementById('principal');
    // comprobar que existe 
    if(appDiv && appDiv instanceof HTMLDivElement){
        // crear div para las peliculas
        const crearDivPeliculas = crearContenedor(nombreClases.peliculas,appDiv);
        
        agregarTitulo(configuracion.titulo, crearDivPeliculas)
        // div para lista de peliculas
        const divListaPeliculas = crearContenedor(nombreClases.listaPeliculas, crearDivPeliculas);
    
        //crear div para contenedor de peliculas
        const divPeliculasContenedor = crearContenedor(nombreClases.peliculasContenedor, divListaPeliculas);
        
        pintarFlechas(divPeliculasContenedor);

        const peliculasFiltradas = filtrarPeliculas(listaPeliculas, configuracion.filtro)

        // pintar peliculas
        pintarPeliculas(peliculasFiltradas, divPeliculasContenedor);

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