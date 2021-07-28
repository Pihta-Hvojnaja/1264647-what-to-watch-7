import { createReducer } from '@reduxjs/toolkit';

import { changeGenre } from '../action';
import { INITIAL_GENRE } from '../../const';


const initialState = {
  genre: INITIAL_GENRE,
};


const genreFilter = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});


export { genreFilter };
