
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import {
  getMovieData,
  getRelatedMoviesData,
  getCommentsData,
  getIsMovieLoaded,
  getIsCommentsLoaded,
  getIsRelatedMoviesLoaded,
  getNumberFilmsShown

} from '../../store/movie-data/selectors';

import { changeFilmList } from '../../store/action';

import { fetchComments, fetchMovie, fetchRelatedMovies } from '../../store/api-actions';

import { NumberFilmsShown, SourceData } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import Toast from '../toast/toast';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import ButtonsFilmCard from '../buttons-film-card/buttons-film-card';
import Tabs from '../tabs/tabs';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';


let isDataLoaded = false;


function Film() {
  const movieData = useSelector(getMovieData);
  const relatedMoviesData = useSelector(getRelatedMoviesData);
  const commentsData = useSelector(getCommentsData);
  const isMovieLoaded = useSelector(getIsMovieLoaded);
  const isCommentsLoaded = useSelector(getIsCommentsLoaded);
  const isRelatedMoviesLoaded = useSelector(getIsRelatedMoviesLoaded);
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();

  const { id, posterImage, backgroundImage, name, genre, released } = movieData;
  const idFilm = useParams().id;

  useEffect(() => {
    if(numberFilmsShown !== NumberFilmsShown.FOR_SIMILAR) {
      dispatch(changeFilmList(NumberFilmsShown.FOR_SIMILAR));
      return;
    }

    switch (true) {
      case !isMovieLoaded && !isCommentsLoaded && !isRelatedMoviesLoaded:
        dispatch(fetchMovie(idFilm));
        dispatch(fetchComments(idFilm));
        dispatch(fetchRelatedMovies(idFilm));
        isDataLoaded = true;
        break;
      case !isDataLoaded:
        !isMovieLoaded && dispatch(fetchMovie(idFilm));
        !isCommentsLoaded && dispatch(fetchComments(idFilm));
        !isRelatedMoviesLoaded && dispatch(fetchRelatedMovies(idFilm));
        break;
      default: break;
    }
  });

  switch (true) {
    case !isMovieLoaded:
    case !isCommentsLoaded:
    case !isRelatedMoviesLoaded:
      return <LoadingScreen />;
    default: break;
  }

  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <Toast />
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <ButtonsFilmCard
                isBtnPlay
                isBtnMyList
                isBtnAddReview
                idFilm={id}
                sourceData={SourceData.MOVIE}
              />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs
                movieData={movieData}
                comments={commentsData}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            moviesData={relatedMoviesData}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}


export default Film;
