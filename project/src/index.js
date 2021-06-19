
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { movieData } from './mocks/film';
import { moviesData } from './mocks/film';


ReactDOM.render(
  <React.StrictMode>
    <App
      movieData = { movieData }
      moviesData = { moviesData }
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
