
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const movieData = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  yearRelease: '2014',
};


ReactDOM.render(
  <React.StrictMode>
    <App movieData = {movieData} />
  </React.StrictMode>,
  document.getElementById('root'),
);
