import subject from '../client/reducers/cardReducer';
import * as types from '../client/constants/actionTypes';
// import expect from 'expect';
// import { internalIP } from 'webpack-dev-server';

describe('reducer test', () => {
  let state;
  beforeEach(() => {
    state = {
      cardList: [],
      isLoaded: false,
      company: '',
      title: '',
      salary: null,
      location: '',
      vibe_check: '',
      interview: '',
      status: '',
    };
  })
  //return inital state if no switch case gets hit
  it('should return initial state', () => {
    expect(subject(state, { type: undefined })).toEqual(state);
  });

  //   Testing get cards functionality
  it('Should get all cards', () => {
    // Insert test
    const { cardList } = subject(state, { type: types.GET_CARDS, payload: [{ card_id: 10 }] });
    expect(cardList[0].card_id).toEqual(10);
  });
  // testing posting company functionality 
  it('Should change the company state', () => {
    // insert tests
    const { company } = subject(state, { type: types.ENTER_COMPANY, payload: "Apple" });
    expect(company).toEqual("Apple");
  });
  //testing the ENTER_TITLE switch case
  it('Should change the title in state', () => {
    const { title } = subject(state, { type: types.ENTER_TITLE, payload: "Software Engineer" });
    expect(title).toEqual("Software Engineer");
  })
  // Testing the ENTER_SALARY action
  it('Should change the salary in state', () => {
    const { salary } = subject(state, { type: types.ENTER_SALARY, payload: "150000" });
    expect(salary).toEqual("150000");
  })
  // testing the ENTER_LOCATION action 
  it('Should change the location in state', () => {
    const { location } = subject(state, { type: types.ENTER_LOCATION, payload: "NYC" });
    expect(location).toEqual("NYC");
  })
  //testing ENTER_ENVIRONMENT action
  it('Should change the vibe_check in state', () => {
    const { vibe_check } = subject(state, { type: types.ENTER_ENVIRONMENT, payload: "awesome"});
    expect(vibe_check).toEqual("awesome");
  })
  //Testing ENTER_INTERVIEW action
  it('Should change the interview in state', () => {
    const { interview } = subject(state, { type: types.ENTER_INTERVIEW, payload: "Electric"});
    expect(interview).toEqual("Electric");
  })
  // testing ENTER_STATUS acton 
  it('should change the status in state', () => {
    const { status } = subject(state, { type: types.ENTER_STATUS, payload: "pending"});
    expect(status).toEqual("pending");
  })
});
