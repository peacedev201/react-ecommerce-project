import { createStore, combineReducers } from 'redux';
import ModalReducer from './modal/modalConductorReducer';
const reducer = combineReducers({
   modal:ModalReducer
  });

export const store = createStore(reducer, []);