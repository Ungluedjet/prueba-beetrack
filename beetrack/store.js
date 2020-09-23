import { createStore, combineReducers } from 'redux';
import reducer from './src/reducers/reducers';

const configureStore = () => createStore(
    reducer,
);

export default configureStore;