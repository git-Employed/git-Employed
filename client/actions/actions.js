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

export const enterCompanyActionCreator = (input) => ({
  type: types.ENTER_COMPANY,
  payload: input
})
export const enterTitleActionCreator = (input) => ({
  type: types.ENTER_TITLE,
  payload: input
})
export const enterSalaryActionCreator = (input) => ({
  type: types.ENTER_SALARY,
  payload: input
})
export const enterEnvironmentActionCreator = (input) => ({
  type: types.ENTER_ENVIRONMENT,
  payload: input
})
export const enterLocationActionCreator = (input) => ({
  type: types.ENTER_LOCATION,
  payload: input
})

export const openModalActionCreator = (data) => ({
  type: types.OPEN_MODAL,
  payload: data
})