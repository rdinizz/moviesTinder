import { INCREMENT_PAGE } from '../types';

const initialState = {
  canIncrementPage: false
};

export default (state = initialState, action) => {
  switch (action.type) {
  case INCREMENT_PAGE:
    return { ...state, canIncrementPage: true };

  default:
    return state;
  }
};
