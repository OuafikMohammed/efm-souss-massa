import { legacy_createStore } from 'redux';
import produitReducer from './reducer';

const store = legacy_createStore(produitReducer);

export default store