import {
  ALL_POLITICIANS,
  SEARCH_BY_NAME
} from './../constants/actionTypes';

import politicians from './../constants/data';

const initialState = politicians;

const politiciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POLITICIANS:
      return initialState;
    case SEARCH_BY_NAME:
      return getPoliticiansByName(state, action.term);
    default:
      return initialState;
  }
};

const getPoliticiansByName = (state, term) => {
  return politicians.filter( item => item.nome.toLowerCase().includes(term.toLowerCase()));
}

export default politiciansReducer;
