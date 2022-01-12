import * as types from '../constants/actionTypes';

export const getCardsActionCreator = () => {
  return(dispatch) => {
    fetch('/api/cards')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: types.GET_CARDS, payload: data })
    })
    .catch((error) => console.log('error in the getCardsActionCreator', error));
  }
}

export const submitFormActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company: card.company,
        title: card.title,
        salary: card.salary,
        location: card.location,
        vibe_check: card.vibe_check,
        interview: card.interview,
        status: card.status
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.SUBMIT_FORM })
    })
    .catch((error) => console.log('error from the post request in the submit form action creator----->', error))
  }
}

export const enterCompanyActionCreator = (input) => ({
  type: types.ENTER_COMPANY,
  payload: input,
});
export const enterTitleActionCreator = (input) => ({
  type: types.ENTER_TITLE,
  payload: input,
});
export const enterSalaryActionCreator = (input) => ({
  type: types.ENTER_SALARY,
  payload: input,
});
export const enterEnvironmentActionCreator = (input) => ({
  type: types.ENTER_ENVIRONMENT,
  payload: input,
});
export const enterLocationActionCreator = (input) => ({
  type: types.ENTER_LOCATION,
  payload: input
})
export const enterStatusActionCreator = (input) => ({
  type: types.ENTER_STATUS,
  payload: input
})

export const enterInterviewActionCreator = (input) =>({
  type: types.ENTER_INTERVIEW,
  payload: input
})
// export const openModalActionCreator = (data) => ({
//   type: types.OPEN_MODAL,
//   payload: data
// })
