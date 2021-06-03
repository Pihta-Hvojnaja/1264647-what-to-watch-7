import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';


function App(props) {
  const { movieData } = props;

  return (
    <MainPage movieData = {movieData} />
  );
}


App.propTypes = {
  movieData: PropTypes.object.isRequired,
};


export default App;
