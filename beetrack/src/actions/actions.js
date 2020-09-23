import { GUARDAR_NOTICIAS, AGREGAR_FAVORITOS } from './types';

const guardarNoticias = lista => ({
    type: GUARDAR_NOTICIAS,
    lista
});

const agregarFavoritos = value => ({
    type: AGREGAR_FAVORITOS,
    value
});

export {
    guardarNoticias,
    agregarFavoritos,
};