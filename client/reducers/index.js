//combine reducers and export
import { combineReducers } from 'redux';
// import authReducer from './authReducer';
import cardReducer from './cardReducer';

const reducers = combineReducers({
  // auth: authReducer,
  cards: cardReducer,
});

export default reducers;