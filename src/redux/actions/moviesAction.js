import { 
  FETCH_MOVIES,
  INCREMENT_PAGE
} from '../../redux/types';
import Like from '../../database/dataAccess/like';
import Dislike from '../../database/dataAccess/dislike';
import { getPopularMovies } from '../../services/api';

export const fetchMovies = () => async dispatch => {
  const movies = await getPopularMovies();
  /*since i'm not saving likes and dislikes with the same format that the API returns,
  i need something to remove the movies i have already liked or disliked and i am
  using the title names, which i believe to be unique get the liked titles saved
  on Realm and then filter the fetch to remove the movies the user already liked*/
  const likedTitles = await Like.getLikedTitles();
  const moviesWithoutLikes = movies.results
  .filter(movie => likedTitles.indexOf(movie.original_title) === -1);
  //get the disliked titles saved on Realm and then filter the fetch to remove the movies the user already disliked
  const dislikedTitles = await Dislike.getDislikedTitles();
  const moviesWithoutLikesAndDislikes = moviesWithoutLikes
  .filter(movie => dislikedTitles.indexOf(movie.original_title) === -1);
  dispatch({ type: FETCH_MOVIES, payload: moviesWithoutLikesAndDislikes });
  dispatch({ type: INCREMENT_PAGE });
};
