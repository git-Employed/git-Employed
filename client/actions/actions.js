import * as types from '../constants/actionTypes';

// export const getCardsActionCreator = () => {
//   return(dispatch) => {
//     fetch('/cards')
//     .then((response) => {
//       response.json()
//     })
//     .then((data) => {
//       dispatch({ type: types.GET_CARDS, payload: data })
//     })
//     .catch((error) => console.log('error in the getCardsActionCreator', error));
//   }
// }

export const getCardsActionCreator = (input) => ({
  type: types.GET_CARDS,
  payload: input
})