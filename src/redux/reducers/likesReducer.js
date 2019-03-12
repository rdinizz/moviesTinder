import { 
  GET_LIKES
} from '../../redux/types';

const initialState = {
  likes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_LIKES:
    return { ...state, likes: action.payload };

  default:
    return state;
  }
};
