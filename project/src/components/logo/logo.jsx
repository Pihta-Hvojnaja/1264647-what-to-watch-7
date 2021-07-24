
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import { INITIAL_GENRE, NumberFilmsShown, AppRoute } from '../../const';


function Logo(props) {
  const {
    className = 'logo__link',
    moviesData,
    genre,
    changeGenre,
    createMovies,
    changeFilmList,
    isIndex,
  } = props;


  return (
    <div className="logo">
      <Link
        onClick={(evt) => {
          if (isIndex) {
            evt.preventDefault();
          }
          if (genre !== INITIAL_GENRE) {
            changeGenre(INITIAL_GENRE);
            createMovies(moviesData, INITIAL_GENRE);
          }
          changeFilmList(NumberFilmsShown.FOR_GENRE);
        }}
        to={AppRoute.ROOT}
        className={className}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}


Logo.propTypes = {
  className: PropTypes.string,
  moviesData: PropTypes.oneOfType([PropTypes.arrayOf(MovieDataProp), PropTypes.arrayOf(PropTypes.object)]).isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  createMovies: PropTypes.func.isRequired,
  changeFilmList: PropTypes.func.isRequired,
  isIndex: PropTypes.bool,
};

Logo.defaultProps = {
  className: 'logo__link',
  isIndex: false,
};


const mapDispatchToProps = (dispatch) => ({
  changeGenre(currentGenre) {
    dispatch(ActionCreator.changeGenre(currentGenre));
  },

  createMovies(moviesData, currentGenre) {
    dispatch(ActionCreator.createMovies(moviesData, currentGenre));
  },

  changeFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changeFilmList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  moviesData: state.data.moviesData,
  genre: state.genre,
});


export { Logo };
export default connect(mapStateToProps, mapDispatchToProps)(Logo);
