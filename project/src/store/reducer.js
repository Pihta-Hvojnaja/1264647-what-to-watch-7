
import { INITIAL_GENRE, NumberFilmsShown, AuthorizationStatus } from '../const';
import { getGenresList } from '../utils/getGenresList';
import { ActionType } from './action';


const initialState = {
  data: {
    posterMovieData: {},
    movieData: {},
    moviesData: [{}],
    relatedMoviesData: [{}],
    favoriteMoviesData: [{}],
    commentsData: [{}],
    filteredMoviesData: [{}],
  },
  loading: {
    isPosterMovieLoaded: false,
    isMovieLoaded: false,
    isMoviesLoaded: false,
    isRelatedMoviesLoaded: false,
    isFavoriteMoviesLoaded: false,
    isCommentsLoaded: false,
  },
  genre: INITIAL_GENRE,
  genres: [''],
  idCurrentMovie: null,
  numberFilmsShown: NumberFilmsShown.FOR_GENRE,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {
    id: null,
    email: '',
    name: '',
    avatarUrl: '',
  },
  isDeactiveForm: false,
  error: '',
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POSTER_MOVIE:
      return {
        ...state,
        data: {
          ...state.data,
          posterMovieData: action.payload,
        },
        loading: {
          ...state.loading,
          isPosterMovieLoaded: true,
        },
      };
    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        data: {
          ...state.data,
          movieData: action.payload,
        },
        loading: {
          ...state.loading,
          isMovieLoaded: true,
        },
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        genres: getGenresList(action.payload),
        data: {
          ...state.data,
          moviesData: action.payload,
          filteredMoviesData: action.payload,
        },
        loading: {
          ...state.loading,
          isMoviesLoaded: true,
        },
      };

    case ActionType.LOAD_RELATED_MOVIES:
      return {
        ...state,
        data: {
          ...state.data,
          relatedMoviesData: action.payload,
        },
        loading: {
          ...state.loading,
          isRelatedMoviesLoaded: true,
        },
      };
    case ActionType.LOAD_FAVORITE_MOVIES:
      return {
        ...state,
        data: {
          ...state.data,
          favoriteMoviesData: action.payload,
        },
        loading: {
          ...state.loading,
          isFavoriteMoviesLoaded: true,
        },
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        data: {
          ...state.data,
          commentsData: action.payload,
        },
        loading: {
          ...state.loading,
          isCommentsLoaded: true,
        },
      };
    case ActionType.CHANGING_FORM_STATUS:
      return {
        ...state,
        isDeactiveForm: action.payload,
      };
    case ActionType.RESET_DATA:
      return {
        ...state,
        loading: {
          ...state.loading,
          isMovieLoaded: false,
          isCommentsLoaded: false,
          isRelatedMoviesLoaded: false,
        },
        idCurrentMovie: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SAVING_DATA_USER:
      return {
        ...state,
        authInfo: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    case ActionType.CHANGING_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.CREATING_MOVIES:
      return {
        ...state,
        data: {
          ...state.data,
          filteredMoviesData: action.payload,
        },
        numberFilmsShown: NumberFilmsShown.FOR_GENRE,
      };
    case ActionType.CHANGING_FILM_LIST:
      return {
        ...state,
        numberFilmsShown: action.payload,
      };
    case ActionType.CHANGING_STATUS_MOVIE:
      return {
        ...state,
        loading: {
          ...state.loading,
          isFavoriteMoviesLoaded: false,
        },
      };
    case ActionType.WORKING_ON_THE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};


export { reducer };

