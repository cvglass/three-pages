import { combineReducers } from 'redux';
import { LOAD_ENTRIES, LOAD_SENTIMENT } from '../actionCreators'

const initialState = {
  currentEntry: {},
  entries: [],
  // sentiment: '',
}

const rootReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type){

    case 'LOAD_ENTRY':
      newState.currentEntry = action.entry;
      return newState;

    case LOAD_ENTRIES:
      newState.entries = action.entries;
      return newState;

    // case LOAD_SENTIMENT:
    //   newState.sentiment = action.sentiment
    //   return newState;

    default: return state
  }
};

export default rootReducer;
