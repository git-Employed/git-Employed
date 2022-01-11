import * as types from '../constants/actionTypes';

const initialState = {
  open: false,
  contents: []
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      console.log("in open modal reducer", action.payload)
      const openModal = {
        ...state,
        open: true,
        contents: action.payload
      }
      return openModal;

      default:
        return state;
  }
}

export default modalReducer;