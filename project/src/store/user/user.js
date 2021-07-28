
import { createReducer } from '@reduxjs/toolkit';

import {
  saveDataUser,
  requireAuthorization,
  logout

} from '../action';

import { AuthorizationStatus } from '../../const';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {
    id: null,
    email: '',
    name: '',
    avatarUrl: '',
  },
};


const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveDataUser, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authInfo = {};
    });
});


export { user };
