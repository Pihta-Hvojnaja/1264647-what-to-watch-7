
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';

import { movieData } from './mocks/film';
import { moviesData } from './mocks/film';
import { comments } from './mocks/comment';


const store = createStore(
  reducer,
  composeWithDevTools(),
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movieData={movieData}
        moviesData={moviesData}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
