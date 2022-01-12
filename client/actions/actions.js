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

export const updateCompanyActionCreator = (card, id) => {
  return(dispatch) => {
    fetch(`/api/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        card
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_COMPANY })
    })
    .catch((error) => console.log('error from the post request in the UPDATE COMPANY action creator----->', error))
  }
}

export const updateTitleActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: card.title,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_TITLE })
    })
    .catch((error) => console.log('error from the post request in the UPDATE TITLE creator----->', error))
  }
}

export const updateSalaryActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        salary: card.salary,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_SALARY })
    })
    .catch((error) => console.log('error from the post request in the UPDATE SALARY creator----->', error))
  }
}

export const updateLocationActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: card.location,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_LOCATION })
    })
    .catch((error) => console.log('error from the post request in the UPDATE LOCATIONcreator----->', error))
  }
}

export const updateEnvironmentActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vibe_check: card.vibe_check,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_ENVIRONMENT })
    })
    .catch((error) => console.log('error from the post request in the UPDATE ENVIRONMENT creator----->', error))
  }
}

export const updateStatusActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: card.status,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_STATUS })
    })
    .catch((error) => console.log('error from the post request in the UPDATE STATUS creator----->', error))
  }
}

export const updateInterviewActionCreator = (card) => {
  return(dispatch) => {
    fetch('/api/cards', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        interview: card.interview,
      }),
    })
    .then((response) => {
      console.log(response)
      dispatch({ type: types.UPDATE_INTERVIEW })
    })
    .catch((error) => console.log('error from the post request in the UPDATE INTERVIEW creator----->', error))
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
