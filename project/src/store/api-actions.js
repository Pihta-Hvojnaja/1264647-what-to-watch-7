
import { ActionCreator } from './action';
import { adaptMovieToClient } from './adapter';
import { APIRoute } from '../const';
//import { AuthorizationStatus, APIRoute } from '../const';


export const fetchPosterMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.POSTER_MOVIE)
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(ActionCreator.loadPosterMovie(adaptedData));
    })
);

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(ActionCreator.loadMovies(adaptedMoviesData));
    })
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM(id))
    .then(({data}) => {
      const adaptedData = adaptMovieToClient(data);
      dispatch(ActionCreator.loadMovie(adaptedData));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS(id))
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data));
    })
);

export const fetchRelatedMovies = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.SIMILAR_MOVIES(id))
    .then(({data}) => {
      const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
      dispatch(ActionCreator.loadRelatedMovies(adaptedMoviesData));
    })
);

// export const fetchMyListMovies = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.MY_LIST)
//     .then(({data}) => {
//       const adaptedMoviesData = data.map((movie) => adaptMovieToClient(movie));
//       dispatch(ActionCreator.loadRelatedMovies(adaptedMoviesData));
//     })
// );


// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(({data}) => localStorage.setItem('token', data.token))
//     .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
// );

// export const logout = () => (dispatch, _getState, api) => (
//   api.delete(APIRoute.LOGOUT)
//     .then(() => localStorage.removeItem('token'))
//     .then(() => dispatch(ActionCreator.logout()))
// );
