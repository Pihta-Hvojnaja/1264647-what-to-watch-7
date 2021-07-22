
import { ActionCreator } from './action';
import { adaptMovieToClient, adaptAuthInfoToClient } from './adapter';
import { AuthorizationStatus, APIRoute, AppRoute, SourceData, MessageError } from '../const';
import { getRoute } from '../utils/get-route';


export const fetchPosterMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.POSTER_MOVIE)
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(ActionCreator.loadPosterMovie(adaptedData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ERROR)))
);

export const fetchMovie = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.MOVIE, idFilm))
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(ActionCreator.loadMovie(adaptedData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ERROR)))
);

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(ActionCreator.loadMovies(adaptedMoviesData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ERROR)))
);

export const fetchComments = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.COMMENTS, idFilm))
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data));
    })
    .catch(() => {
      dispatch(ActionCreator.changeError(MessageError.LOAD_COMMENTS));
      dispatch(ActionCreator.loadComments([]));
    })
);

export const fetchRelatedMovies = (idFilm) => (dispatch, _getState, api) => (
  api.get(getRoute(APIRoute.SIMILAR_MOVIES, idFilm))
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(ActionCreator.loadRelatedMovies(adaptedMoviesData));
    })
    .catch(() => {
      dispatch(ActionCreator.changeError(MessageError.LOAD_RELARED_MOVIES));
      dispatch(ActionCreator.loadRelatedMovies([]));
    })
);

export const fetchFavoriteMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_MOVIES)
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(ActionCreator.loadFavoriteMovies(adaptedMoviesData));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ERROR)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('authorizationStatus', AuthorizationStatus.AUTH);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveDataUser(adaptAuthInfoToClient(data)));
    })
    .catch(() => {
      localStorage.removeItem('authorizationStatus');
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('authorizationStatus', AuthorizationStatus.AUTH);
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveDataUser(adaptAuthInfoToClient(data)));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(ActionCreator.changeError(MessageError.LOGIN));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('authorizationStatus');
    })
    .then(() => dispatch(ActionCreator.logout()))
);

export const sendComment = (dataComment, idFilm) => (dispatch, _getState, api) => (
  api.post(getRoute(APIRoute.POST_COMMENT, idFilm), dataComment)
    .then(({data}) => {
      dispatch(ActionCreator.sendComment());
      dispatch(ActionCreator.loadComments(data));
    })
    .then(() => {
      dispatch(ActionCreator.redirectToRoute(getRoute(AppRoute.FILM, idFilm)));
      dispatch(ActionCreator.changeFormStatus(false));
    })
    .catch(() => {
      dispatch(ActionCreator.changeFormStatus(false));
      dispatch(ActionCreator.changeError(MessageError.POST_COMMENT));
    })
);

export const changeStatusMovie = (idFilm, status, sourceData) => (dispatch, _getState, api) => (
  api.post(getRoute(APIRoute.STATUS_MOVIE, idFilm, status))
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);

      dispatch(ActionCreator.changeStatusMovie());

      if (sourceData === SourceData.POSTER_MOVIE) {
        dispatch(ActionCreator.loadPosterMovie(adaptedData));
        return;
      }

      dispatch(ActionCreator.loadMovie(adaptedData));
    })
    .catch(() => {
      dispatch(ActionCreator.changeError(MessageError.UPDATE));
    })
);
