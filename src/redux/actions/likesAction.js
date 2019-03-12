import { 
  FETCH_MOVIES,
  GET_LIKES
} from '../../redux/types';
import Like from '../../database/dataAccess/like';

export const addLike = (movie) => async (dispatch, getState) => {
  await Like.create(movie);
  //remove like from reducer to prevent being displayer again on swipe cards
  const filteredLikes = getState().moviesReducer.movies
  .filter(mov => mov.original_title !== movie.original_title);
  dispatch({ type: FETCH_MOVIES, payload: filteredLikes });
};

export const getLikes = () => async dispatch => {
  const likes = Array.from(await Like.getLikes());
  dispatch({ type: GET_LIKES, payload: likes });
};
