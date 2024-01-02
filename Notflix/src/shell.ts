import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener('DOMContentLoaded', () => {
    pintarListaPeliculas(peliculas, {titulo:'Todas las peliculas'});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas de Aventuras', filtro:{genero:"Aventuras", caracteristica:"genero"}});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas Familiares', filtro:{genero:"Familiar", caracteristica:"genero"}});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas Animadas', filtro:{genero:"Animacion", caracteristica:"genero"}});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas Premiadas', filtro:{ caracteristica:"premios"}});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas Mas Vistas', filtro:{ caracteristica:"masVisto"}});
    pintarListaPeliculas(peliculas, {titulo: 'Peliculas con mejor calificacion', filtro:{ caracteristica:"calificacion"}});
});