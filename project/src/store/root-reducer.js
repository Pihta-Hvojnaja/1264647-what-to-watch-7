import { combineReducers } from 'redux';
import { movieData } from './movie-data/movie-data';
import { user } from './user/user';
import { error } from './error/error';
import { genreFilter } from './genre-filter/genre-filter';
import { changingState } from './changing-state/changing-state';


export const NameSpace = {
  MOVIE_DATA: 'MOVIE-DATA',
  ERROR: 'ERROR',
  USER: 'USER',
  GENRE_FILTER: 'GENRE-FILTER',
  CHANGING_STATE: 'CHANGING-STATE',
};

export default combineReducers({
  [NameSpace.MOVIE_DATA]: movieData,
  [NameSpace.USER]: user,
  [NameSpace.ERROR]: error,
  [NameSpace.GENRE_FILTER]: genreFilter,
  [NameSpace.CHANGING_STATE]: changingState,
});
