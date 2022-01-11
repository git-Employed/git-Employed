import * as types from '../constants/actionTypes';

const initalState = {
  cardList: [],
  isLoaded: false
}

const cardReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GET_CARDS:
      console.log('logginf from the reducer', action.payload)
      const changes = {
        ...state,
        cardList: action.payload,
        isLoaded: true
      }
      return changes;

    default:
      return state;

  }
}

export default cardReducer;