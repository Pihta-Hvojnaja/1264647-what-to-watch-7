
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';
import CommentDataProp from './comment-data.prop';

import { AppRoute } from '../../const';

import { NumberFilmsShown } from '../../const';

import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';


/** Временная ф-ция. Список похожих фильмов мы получаем от сервера */
const getRelatedMovies = (movieData, moviesData) =>
  moviesData.filter((movie) => movie.genre === movieData.genre);


function Film(props) {
  const {
    movieData,
    moviesData,
    comments,
    changingFilmsList,
  } = props;

  const { backgroundImage, name, genre, released } = movieData;

  const history = useHistory();
  useEffect(() => changingFilmsList(NumberFilmsShown.FOR_MORE_LIKE_THIS));


  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="/#">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(AppRoute.DEV_PLAYER)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => history.push(AppRoute.LIST)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={AppRoute.DEV_REVIEW} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs
                movieData={movieData}
                comments={comments}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            moviesData={getRelatedMovies(movieData, moviesData)}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}


Film.propTypes = {
  movieData: MovieDataProp,
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  comments: PropTypes.arrayOf(CommentDataProp).isRequired,
  changingFilmsList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changingFilmsList(numberFilmsShown) {
    dispatch(ActionCreator.changingFilmsList(numberFilmsShown));
  },
});


export { Film };
export default connect(null, mapDispatchToProps)(Film);
