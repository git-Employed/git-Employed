// import { bindActionCreators } from 'redux';
import * as types from '../constants/actionTypes';

const initalState = {
  cardList: [],
  isLoaded: false,
  company: '',
  title: '',
  salary: null,
  location: '',
  vibe_check: '',
  interview: '',
  status: '',
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

    case types.ENTER_COMPANY:
      console.log(action.payload);
      const company = {
        ...state,
        company: action.payload,
      }
      return company;

    case types.ENTER_TITLE:
      console.log(action.payload);
      const title = {
        ...state,
        title: action.payload
      }
      return title;

    case types.ENTER_SALARY:
      console.log(action.payload);
      const salary = {
        ...state,
        salary: action.payload
      }
      return salary;

    case types.ENTER_LOCATION:
      console.log(action.payload);
      const location = {
        ...state,
        location: action.payload
      }
      return location;

    case types.ENTER_ENVIRONMENT:
      console.log(action.payload)
      const environment = {
        ...state,
        environment: action.payload
      }
      return environment;

    case types.ENTER_INTERVIEW:
      console.log(action.payload)
      const interview = {
        ...state,
        interview: action.payload
      }
      return interview;

    case types.ENTER_STATUS:
      console.log(action.payload)
      const status = {
        ...state,
        status: action.payload
      }
      return status;

    default:
      return state;
  }
}

export default cardReducer;