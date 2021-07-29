
import {
  changeError,
  changeFormStatus,
  changeStatusMovie as updateMovie,
  loadComments,
  loadFavoriteMovies,
  loadMovie,
  loadMovies,
  loadPosterMovie,
  loadRelatedMovies,
  logout as closeSession,
  redirectToRoute,
  requireAuthorization,
  saveDataUser,
  sendComment as postComment,
  resetDataLogout

} from './action';

import { adaptMovieToClient, adaptAuthInfoToClient } from './adapter';
import { AuthorizationStatus, APIRoute, AppRoute, SourceData, MessageError } from '../const';
import { getRoute } from '../utils/get-route';


export const fetchPosterMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.POSTER_MOVIE)
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(loadPosterMovie(adaptedData));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.ERROR)))
);

export const fetchMovie = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.MOVIE, idFilm))
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(loadMovie(adaptedData));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.ERROR)))
);

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadMovies(adaptedMoviesData));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.ERROR)))
);

export const fetchComments = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.COMMENTS, idFilm))
    .then(({data}) => {
      dispatch(loadComments(data));
    })
    .catch(() => {
      dispatch(changeError(MessageError.LOAD_COMMENTS));
      dispatch(loadComments([]));
    })
);

export const fetchRelatedMovies = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.SIMILAR_MOVIES, idFilm))
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadRelatedMovies(adaptedMoviesData));
    })
    .catch(() => {
      dispatch(changeError(MessageError.LOAD_RELARED_MOVIES));
      dispatch(loadRelatedMovies([]));
    })
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_MOVIES)
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadFavoriteMovies(adaptedMoviesData));
    })
    .catch(() => dispatch(redirectToRoute(AppRoute.ERROR)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(saveDataUser(adaptAuthInfoToClient(data)));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('authorizationStatus', AuthorizationStatus.AUTH);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(saveDataUser(adaptAuthInfoToClient(data)));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => dispatch(changeError(MessageError.LOGIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('authorizationStatus');
      dispatch(closeSession());
    })
    .then(() =>{
      dispatch(resetDataLogout());
    })
);

export const sendComment = (dataComment, idFilm) => (dispatch, _getState, api) => (
  api.post(getRoute(APIRoute.POST_COMMENT, idFilm), dataComment)
    .then(({data}) => {
      dispatch(postComment());
      dispatch(loadComments(data));
    })
    .then(() => {
      dispatch(redirectToRoute(getRoute(AppRoute.FILM, idFilm)));
      dispatch(changeFormStatus(false));
    })
    .catch(() => {
      dispatch(changeFormStatus(false));
      dispatch(changeError(MessageError.POST_COMMENT));
    })
);

export const changeStatusMovie = (idFilm, status, sourceData) => (dispatch, _getState, api) => (
  api.post(getRoute(APIRoute.STATUS_MOVIE, idFilm, status))
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);

      dispatch(updateMovie());

      if (sourceData === SourceData.POSTER_MOVIE) {
        dispatch(loadPosterMovie(adaptedData));
        return;
      }

      dispatch(loadMovie(adaptedData));
    })
    .catch(() => {
      dispatch(changeError(MessageError.UPDATE));
    })
);
