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

export const getCardsActionCreator = () => ({
  type: types.GET_CARDS,
  payload: [
    {
      id: 1,
      title: 'Interested',
      status: 'Interested',
    },
    {
      id: 1,
      title: 'Interested2',
      status: 'Interested',
    },
    {
      id: 2,
      title: 'Pending',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Pending2',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Offered',
      status: 'Offered',
    },
    {
      id: 3,
      title: 'Offered2',
      status: 'Offered',
    },
    {
      id: 4,
      title: 'Archive',
      status: 'Archive',
    },
    {
      id: 4,
      title: 'Archive2',
      status: 'Archive',
    },
  ]
})