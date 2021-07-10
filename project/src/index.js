
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { Provider } from 'react-redux';
import { ActionCreator } from './store/action';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import { AuthorizationStatus } from './const';

import { movieData } from './mocks/film';
import { moviesData } from './mocks/film';


const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movieData={movieData}
        moviesData={moviesData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
