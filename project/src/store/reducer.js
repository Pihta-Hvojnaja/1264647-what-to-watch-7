
import { INITIAL_GENRE, NumberFilmsShown, AuthorizationStatus } from '../const';
import { getGenresList } from '../utils/getGenresList';
import { ActionType } from './action';


const initialState = {
  posterMovieData: {},
  movieData: {},
  moviesData: [{}],
  relatedMoviesData: [{}],
  commentsData: [{}],
  isPosterMovieLoaded: false,
  isMovieLoaded: false,
  isMoviesLoaded: false,
  isRelatedMoviesLoaded: false,
  isCommentsLoaded: false,
  genre: INITIAL_GENRE,
  genres: [''],
  filteredMoviesData: [{}],
  idCurrentMovie: null,
  numberFilmsShown: NumberFilmsShown.FOR_GENRE,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTER_MOVIE:
      return {
        ...state,
        posterMovieData: action.payload,
        isPosterMovieLoaded: true,
      };
    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        movieData: action.payload,
        isMovieLoaded: true,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        moviesData: action.payload,
        filteredMoviesData: action.payload,
        genres: getGenresList(action.payload),
        isMoviesLoaded: true,
      };

    case ActionType.LOAD_RELATED_MOVIES:
      return {
        ...state,
        relatedMoviesData: action.payload,
        isRelatedMoviesLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        commentsData: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.RESET_MOVIE_DATA:
      return {
        ...state,
        isMovieLoaded: false,
        isCommentsLoaded: false,
        isRelatedMoviesLoaded: false,
        idCurrentMovie: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.CHANGING_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.CREATING_MOVIES:
      return {
        ...state,
        filteredMoviesData: action.payload,
        numberFilmsShown: NumberFilmsShown.FOR_GENRE,
      };
    case ActionType.CHANGING_FILM_LIST:
      return {
        ...state,
        numberFilmsShown: action.payload,
      };
    default:
      return state;
  }
};


export { reducer };

