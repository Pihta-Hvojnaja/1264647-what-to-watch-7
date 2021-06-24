
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { movieData } from './mocks/film';
import { moviesData } from './mocks/film';
import { comments } from './mocks/comment';


ReactDOM.render(
  <React.StrictMode>
    <App
      movieData={movieData}
      moviesData={moviesData}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
