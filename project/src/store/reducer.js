
import { INITIAL_GENRE } from '../const';
import { NumberFilmsShown } from '../const';
import { getGenresList } from '../utils/getGenresList';
import { moviesData } from '../mocks/film';
import { ActionType } from './action';


const initialState = {
  genre: INITIAL_GENRE,
  genres: getGenresList(moviesData),
  moviesData: moviesData,
  filteredMoviesData: moviesData,
  numberFilmsShown: NumberFilmsShown.INITIAL,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGING_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.CREATING_MOVIES:
      return {
        ...state,
        filteredMoviesData: action.payload,
      };
    case ActionType.CHANGING_FILMS_LIST:
      return {
        ...state,
        numberFilmsShown: action.payload,
      };
    default:
      return state;
  }
};


export { reducer };

