import {
  GET_GREETING
} from '../actions/actionTypes';

function greetings(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      console.log(state);
      return action.result;
    default:
      return state;
  }
}

module.exports = {
  greetings,
};
