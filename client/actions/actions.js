import * as types from '../constants/actionTypes';

export const getCardsActionCreator = () => {
  return(dispatch) => {
    fetch('/cards')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: types.GET_CARDS, payload: data })
    })
    .catch((error) => console.log('error in the getCardsActionCreator', error));
  }
}


export const openModalActionCreator = (data) => ({
  type: types.OPEN_MODAL,
  payload: data
})