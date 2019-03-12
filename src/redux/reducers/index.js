import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import likesReducer from './likesReducer';
import pageReducer from './pageReducer';

// Combine all the reducers
export default combineReducers({
    moviesReducer,
    likesReducer,
    pageReducer
});
