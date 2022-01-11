//combine reducers and export
import { combineReducers } from 'redux';
// import authReducer from './authReducer';
import cardReducer from './cardReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  // auth: authReducer,
  cards: cardReducer,
  modal: modalReducer
});

export default reducers;