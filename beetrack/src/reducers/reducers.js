import { GUARDAR_NOTICIAS, AGREGAR_FAVORITOS } from '../actions/types';
import { combineReducers } from 'redux';

const guardarNoticias = (state = [], action) => {
    switch (action.type) {
        case GUARDAR_NOTICIAS:
            return action.lista;
        default:
            return state;
    }
}

const agregarFavoritos = (state = [], action) => {
    switch (action.type) {
        case AGREGAR_FAVORITOS:
            return action.lista;
        default:
            return state;
    }
}

export default combineReducers({
    agregarFavoritos,
    guardarNoticias,
  })