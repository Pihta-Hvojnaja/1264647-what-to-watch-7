
import { getFilteredMoviesData } from '../filter';


export const ActionType = {
  LOAD_POSTER_MOVIE: 'data/loadPosterMovieData',
  LOAD_MOVIE: 'data/loadMovieData',
  LOAD_MOVIES: 'data/loadMoviesData',
  LOAD_RELATED_MOVIES: 'data/loadRelatedMoviesData',
  LOAD_COMMENTS: 'data/loadComments',
  RESET_MOVIE_DATA: 'data/resetMovieData',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  CHANGING_GENRE: 'filter/changingGenre',
  CREATING_MOVIES: 'filter/creatingFilteredMoviesData',
  CHANGING_FILM_LIST: 'film-list/changingFilmList',
};


export const ActionCreator = {
  loadPosterMovie: (posterMovie) => ({
    type: ActionType.LOAD_POSTER_MOVIE,
    payload: posterMovie,
  }),

  loadMovie: (movie) => ({
    type: ActionType.LOAD_MOVIE,
    payload: movie,
  }),

  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),

  loadRelatedMovies: (movies) => ({
    type: ActionType.LOAD_RELATED_MOVIES,
    payload: movies,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  resetMovieData: (idCurrentMovie) => ({
    type: ActionType.RESET_MOVIE_DATA,
    payload: idCurrentMovie,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  changingGenre: (genre) => ({
    type: ActionType.CHANGING_GENRE,
    payload: genre,
  }),

  creatingMovies: (moviesData, genre) => ({
    type: ActionType.CREATING_MOVIES,
    payload: getFilteredMoviesData(moviesData, genre),
  }),

  changingFilmList: (numberFilmsShown) => ({
    type: ActionType.CHANGING_FILM_LIST,
    payload: numberFilmsShown,
  }),
};
