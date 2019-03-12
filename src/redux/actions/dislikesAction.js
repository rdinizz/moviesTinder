import Dislike from '../../database/dataAccess/dislike';
import { FETCH_MOVIES } from '../types';

export const addDislike = (movie) => async (dispatch, getState) => {
  await Dislike.create(movie);
    //remove dislike from reducer to prevent being displayer again on swipe cards
    const filteredDislikes = getState().moviesReducer.movies
    .filter(mov => mov.original_title !== movie.original_title);
    dispatch({ type: FETCH_MOVIES, payload: filteredDislikes });
};
