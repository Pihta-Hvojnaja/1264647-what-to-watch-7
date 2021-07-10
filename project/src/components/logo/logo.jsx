
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
    changingGenre,
    creatingMovies,
    changingFilmList,
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
            changingGenre(INITIAL_GENRE);
            creatingMovies(moviesData, INITIAL_GENRE);
          }
          changingFilmList(NumberFilmsShown.FOR_GENRE);
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
  changingGenre: PropTypes.func.isRequired,
  creatingMovies: PropTypes.func.isRequired,
  changingFilmList: PropTypes.func.isRequired,
  isIndex: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  changingGenre(currentGenre) {
    dispatch(ActionCreator.changingGenre(currentGenre));
  },

  creatingMovies(moviesData, currentGenre) {
    dispatch(ActionCreator.creatingMovies(moviesData, currentGenre));
  },

  changingFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changingFilmList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  moviesData: state.moviesData,
  genre: state.genre,
});


export { Logo };
export default connect(mapStateToProps, mapDispatchToProps)(Logo);
