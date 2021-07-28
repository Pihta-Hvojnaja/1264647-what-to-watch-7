import { createAction } from '@reduxjs/toolkit';
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


export const loadPosterMovie = createAction(
  ActionType.LOAD_POSTER_MOVIE,
  (posterMovie) => ({payload: posterMovie}),
);

export const loadMovie = createAction(
  ActionType.LOAD_MOVIE,
  (movie) => ({payload: movie}),
);

export const loadMovies = createAction(
  ActionType.LOAD_MOVIES,
  (movies) => ({payload: movies}),
);

export const loadRelatedMovies = createAction(
  ActionType.LOAD_RELATED_MOVIES,
  (movies) => ({payload: movies}),
);

export const loadFavoriteMovies = createAction(
  ActionType.LOAD_FAVORITE_MOVIES,
  (movies) => ({payload: movies}),
);

export const loadComments = createAction(
  ActionType.LOAD_COMMENTS,
  (comments) => ({payload: comments}),
);

export const sendComment = createAction(ActionType.SENDING_COMMENT);

export const changeFormStatus = createAction(
  ActionType.CHANGING_FORM_STATUS,
  (boolValue) => ({payload: boolValue}),
);

export const resetData = createAction(
  ActionType.RESET_DATA,
  (idCurrentMovie) => ({payload: idCurrentMovie}),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({payload: status}),
);

export const saveDataUser = createAction(
  ActionType.SAVING_DATA_USER,
  (dataUser) => ({payload: dataUser}),
);

export const logout = createAction(ActionType.LOGOUT);

export const changeGenre = createAction(
  ActionType.CHANGING_GENRE,
  (genre) => ({payload: genre}),
);

export const createMovies = createAction(
  ActionType.CREATING_MOVIES,
  (moviesData, genre) => ({
    payload: getFilteredMoviesData(moviesData, genre),
  }),
);

export const changeFilmList = createAction(
  ActionType.CHANGING_FILM_LIST,
  (numberFilmsShown) => ({payload: numberFilmsShown}),
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url}),
);

export const changeStatusMovie = createAction(ActionType.CHANGING_STATUS_MOVIE);

export const changeError = createAction(
  ActionType.WORKING_ON_THE_ERROR,
  (boolValue) => ({payload: boolValue}),
);

