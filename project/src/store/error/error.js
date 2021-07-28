
import { createReducer } from '@reduxjs/toolkit';

import { changeError } from '../action';


const initialState = {
  error: '',
};


const error = createReducer(initialState, (builder) => {
  builder
    .addCase(changeError, (state, action) => {
      state.error = action.payload;
    });
});


export { error };
