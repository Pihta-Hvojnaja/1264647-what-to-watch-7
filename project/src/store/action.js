
import { getFilteredMoviesData } from '../filter';


export const ActionType = {
  LOAD_POSTER_MOVIE: 'data/loadPosterMovieData',
  LOAD_MOVIE: 'data/loadMovieData',
  LOAD_MOVIES: 'data/loadMoviesData',
  LOAD_RELATED_MOVIES: 'data/loadRelatedMoviesData',
  LOAD_FAVORITE_MOVIES: 'data/loadFavoriteMovies',
  LOAD_COMMENTS: 'data/loadComments',
  SENDING_COMMENT: 'data/sendingComment',
  SAVING_DATA_USER: 'data/savingDataUser',
  RESET_DATA: 'data/resetData',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  CHANGING_STATUS_MOVIE: 'user/changingStatusMovie',
  CHANGING_GENRE: 'filter/changingGenre',
  CREATING_MOVIES: 'filter/creatingFilteredMoviesData',
  CHANGING_FILM_LIST: 'filmList/changingFilmList',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
  CHANGING_FORM_STATUS: 'form/changingFormStatus',
  WORKING_ON_THE_ERROR: 'api-action/workingOnTheError',
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

  loadFavoriteMovies: (movies) => ({
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: movies,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  sendComment: () => ({
    type: ActionType.SENDING_COMMENT,
  }),

  changeFormStatus: (boolValue) => ({
    type: ActionType.CHANGING_FORM_STATUS,
    payload: boolValue,
  }),

  resetData: (idCurrentMovie) => ({
    type: ActionType.RESET_DATA,
    payload: idCurrentMovie,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  saveDataUser: (dataUser) => ({
    type: ActionType.SAVING_DATA_USER,
    payload: dataUser,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  changeGenre: (genre) => ({
    type: ActionType.CHANGING_GENRE,
    payload: genre,
  }),

  createMovies: (moviesData, genre) => ({
    type: ActionType.CREATING_MOVIES,
    payload: getFilteredMoviesData(moviesData, genre),
  }),

  changeFilmList: (numberFilmsShown) => ({
    type: ActionType.CHANGING_FILM_LIST,
    payload: numberFilmsShown,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  changeStatusMovie: () => ({
    type: ActionType.CHANGING_STATUS_MOVIE,
  }),

  changeError: (boolValue) => ({
    type: ActionType.WORKING_ON_THE_ERROR,
    payload: boolValue,
  }),
};
