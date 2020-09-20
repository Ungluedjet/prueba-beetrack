import { GUARDAR_NOTICIAS, AGREGAR_FAVORITOS } from '../actions/types';

const guardarNoticias = (state = [], action) => {
    switch (action.type) {
        case GUARDAR_NOTICIAS:
            return action.lista;
        default:
            return state;
    }
}

// const agregarFavoritos = (state = '', action) => {
//     switch (action.type) {
//         case AGREGAR_FAVORITOS:
//         return {
//             ...state,
//             items: state.items.map(el => ({
//                 ...el,
//                 selected: false
//             }))
//         };
//         default:
//             return state;
//     }
// }

export {
    guardarNoticias,
    // agregarFavoritos,
}