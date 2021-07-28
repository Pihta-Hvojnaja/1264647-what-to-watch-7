
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesData } from '../../store/movie-data/selectors';
import { changeGenre, createMovies, changeFilmList } from '../../store/action';

import PropTypes from 'prop-types';

import { INITIAL_GENRE, NumberFilmsShown, AppRoute } from '../../const';


function Logo({className = 'logo__link', isIndex}) {
  const moviesData = useSelector(getMoviesData);
  const dispatch = useDispatch();


  return (
    <div className="logo">
      <Link
        onClick={(evt) => {
          if (isIndex) {
            evt.preventDefault();
          }

          dispatch(changeGenre(INITIAL_GENRE));
          dispatch(createMovies(moviesData, INITIAL_GENRE));
          dispatch(changeFilmList(NumberFilmsShown.FOR_GENRE));
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
  isIndex: PropTypes.bool,
};

Logo.defaultProps = {
  className: 'logo__link',
  isIndex: false,
};


export default React.memo(Logo);
