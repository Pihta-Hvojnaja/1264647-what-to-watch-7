
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { createAPI } from './services/api';

import { requireAuthorization } from './store/action';
import { checkAuth } from './store/api-actions';
import rootReducer from './store/root-reducer';
import { redirect } from './store/middlewares/redirect';

import { AuthorizationStatus } from './const';

import App from './components/app/app';


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});


store.dispatch(checkAuth());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
