import { createStore } from 'redux';
import { guardarNoticias, agregarFavoritos } from './src/reducers/reducers';

const configureStore = () => createStore(
    guardarNoticias,
    agregarFavoritos,
);

export default configureStore;