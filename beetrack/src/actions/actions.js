import { GUARDAR_NOTICIAS, AGREGAR_FAVORITOS } from './types';

const guardarNoticias = lista => ({
    type: GUARDAR_NOTICIAS,
    lista
});

const agregarFavoritos = lista => ({
    type: AGREGAR_FAVORITOS,
    lista
});

export {
    guardarNoticias,
    agregarFavoritos,
};