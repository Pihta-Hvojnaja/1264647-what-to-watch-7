
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { fetchMovie } from '../../store/api-actions';

import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import { APIRoute, NumberFilmsShown } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FormAddReview from '../form-add-review/form-add-review';


function AddReview(props) {
  const {
    movieData,
    loadMovie,
    isMovieLoaded,
    numberFilmsShown,
    changingFilmList,
  } = props;

  const { posterImage, backgroundImage, name } = movieData;
  const idFilm = useParams().id;

  useEffect(() => {
    if (!isMovieLoaded) {
      loadMovie(idFilm);
    }
  });

  if (!isMovieLoaded) {
    return <LoadingScreen />;
  }

  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={APIRoute.FILM(idFilm)}
                  className="breadcrumbs__link"
                  onClick={() => {
                    if (numberFilmsShown !== NumberFilmsShown.FOR_MORE_LIKE_THIS) {
                      changingFilmList(NumberFilmsShown.FOR_MORE_LIKE_THIS);
                    }
                  }}
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="#">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>

    </section>
  );
}


AddReview.propTypes = {
  movieData: PropTypes.oneOfType([MovieDataProp, PropTypes.shape({})]).isRequired,
  loadMovie: PropTypes.func.isRequired,
  isMovieLoaded: PropTypes.bool.isRequired,
  numberFilmsShown: PropTypes.number,
  changingFilmList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadMovie(id) {
    dispatch(fetchMovie(id));
  },

  changingFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changingFilmList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  movieData: state.movieData,
  isMovieLoaded: state.isMovieLoaded,
  numberFilmsShown: state.numberFilmsShown,
});


export { AddReview };
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
