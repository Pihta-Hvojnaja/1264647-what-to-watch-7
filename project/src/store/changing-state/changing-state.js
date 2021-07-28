import { createReducer } from '@reduxjs/toolkit';
import { changeFormStatus } from '../action';


const initialState = {
  isDeactiveForm: false,
};


const changingState = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFormStatus, (state, action) => {
      state.isDeactiveForm = action.payload;
    });
});


export { changingState };
