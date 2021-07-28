
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPosterMovieData, getIsPosterMovieLoaded, getIsMoviesLoaded } from '../../store/movie-data/selectors';
import { fetchPosterMovie, fetchMovies } from '../../store/api-actions';

import { SourceData } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import Toast from '../toast/toast';
import HeaderPage from '../header/header-page';
import ButtonsFilmCard from '../buttons-film-card/buttons-film-card';
import FilmListByGenre from '../film-list-by-genre/film-list-by-genre';
import Footer from '../footer/footer';


let isDataLoaded = false;


function Main() {
  const posterMovieData = useSelector(getPosterMovieData);
  const isPosterMovieLoaded = useSelector(getIsPosterMovieLoaded);
  const isMoviesLoaded = useSelector(getIsMoviesLoaded);
  const dispatch = useDispatch();

  const { id, posterImage, backgroundImage, name, genre, released } = posterMovieData;

  useEffect(() => {
    switch (true) {
      case !isPosterMovieLoaded && !isMoviesLoaded:
        dispatch(fetchPosterMovie());
        dispatch(fetchMovies());
        isDataLoaded = true;
        break;
      case !isDataLoaded:
        !isPosterMovieLoaded && dispatch(fetchPosterMovie());
        !isMoviesLoaded && dispatch(fetchMovies());
        break;
      default: break;
    }
  });

  if (!isPosterMovieLoaded || !isMoviesLoaded) {
    return <LoadingScreen />;
  }

  return(
    <React.Fragment>
      <section className="film-card">
        <Toast />
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderPage isIndex />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <ButtonsFilmCard
                isBtnPlay
                isBtnMyList
                idFilm={id}
                sourceData={SourceData.POSTER_MOVIE}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <FilmListByGenre />
        <Footer isIndex />
      </div>
    </React.Fragment>
  );
}


export default React.memo(Main);
