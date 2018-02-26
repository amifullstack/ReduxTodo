// import action
import { ADD_COUNTER } from '../actions/index';

// const initialState = {
//   counter: 0,
// };
const initialState = 0;

const counter = (state = initialState, action) => { // called by action
  switch (action.type) {
    case ADD_COUNTER:
    //  return {...state, counter:[...state.counter, action.payload] };
      // return `${state + 1} ${action.payload}`;
      return state + 1;

    default:
      return state;
  }
};

export default counter;