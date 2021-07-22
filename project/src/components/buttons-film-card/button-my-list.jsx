import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import { SourceData } from '../../const';

import { changeStatusMovie } from '../../store/api-actions';


function ButtonMyList(props) {
  const {
    sourceData,
    posterMovieData,
    movieData,
    changeStatusFilm,
  } = props;

  let status;
  let idFilm;

  switch (true) {
    case sourceData === SourceData.POSTER_MOVIE:
      status = posterMovieData.isFavorite ? 0 : 1;
      idFilm = posterMovieData.id;
      break;
    case sourceData === SourceData.MOVIE:
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
        changeStatusFilm(idFilm, status, sourceData);
      }}
    >
      {status === 0 ? innerAdded : innerNoAdded}
      <span>My list</span>
    </button>
  );
}


ButtonMyList.propTypes = {
  sourceData: PropTypes.string.isRequired,
  posterMovieData: PropTypes.shape(MovieDataProp).isRequired,
  movieData: PropTypes.shape(MovieDataProp).isRequired,
  changeStatusFilm: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changeStatusFilm(idFilm, status, sourceData) {
    dispatch(changeStatusMovie(idFilm, status, sourceData));
  },
});

const mapStateToProps = (state) => ({
  posterMovieData: state.data.posterMovieData,
  movieData: state.data.movieData,
});


export { ButtonMyList };
export default connect(mapStateToProps, mapDispatchToProps)(ButtonMyList);
