
import { getFilteredMoviesData } from '../filter';


export const ActionType = {
  CHANGING_GENRE: 'filter/changingGenre',
  CREATING_MOVIES: 'filter/creatingFilteredMoviesData',
  CHANGING_FILMS_LIST: 'films-list/changingFilmsList',
};


export const ActionCreator = {
  changingGenre: (genre) => ({
    type: ActionType.CHANGING_GENRE,
    payload: genre,
  }),

  creatingMovies: (moviesData, genre) => ({
    type: ActionType.CREATING_MOVIES,
    payload: getFilteredMoviesData(moviesData, genre),
  }),

  changingFilmsList: (numberFilmsShown) => ({
    type: ActionType.CHANGING_FILMS_LIST,
    payload: numberFilmsShown,
  }),
};
