import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosterMovieData, getMovieData } from '../../store/movie-data/selectors';
import { changeStatusMovie } from '../../store/api-actions';

import PropTypes from 'prop-types';
import { SourceData } from '../../const';


function ButtonMyList({sourceData}) {
  const posterMovieData = useSelector(getPosterMovieData);
  const movieData = useSelector(getMovieData);
  const dispatch = useDispatch();

  let status;
  let idFilm;

  switch (sourceData) {
    case SourceData.POSTER_MOVIE:
      status = posterMovieData.isFavorite ? 0 : 1;
      idFilm = posterMovieData.id;
      break;
    case SourceData.MOVIE:
      status = movieData.isFavorite ? 0 : 1;
      idFilm = movieData.id;
      break;
    default: break;
  }

  const innerAdded =
  (
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>
  );

  const innerNoAdded =
  (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
  );


  return(
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        dispatch(changeStatusMovie(idFilm, status, sourceData));
      }}
    >
      {status === 0 ? innerAdded : innerNoAdded}
      <span>My list</span>
    </button>
  );
}


ButtonMyList.propTypes = {
  sourceData: PropTypes.string.isRequired,
};


export default ButtonMyList;
