
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosterMovie, fetchMovies } from '../../store/api-actions';

import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import ButtonsFilmCard from '../buttons-film-card/buttons-film-card';
import FilmListByGenre from '../film-list-by-genre/film-list-by-genre';
import Footer from '../footer/footer';


function Main(props) {
  const {
    posterMovieData,
    loadPosterMovie,
    loadMovies,
    isPosterMovieLoaded,
    isMoviesLoaded,
  } = props;

  const { id, posterImage, backgroundImage, name, genre, released } = posterMovieData;

  useEffect(() => {
    switch (true) {
      case !isPosterMovieLoaded:
        return loadPosterMovie();
      case !isMoviesLoaded:
        return loadMovies();
      default: break;
    }
  });

  if (!isPosterMovieLoaded || !isMoviesLoaded) {
    return <LoadingScreen />;
  }

  return(
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isIndex />
          <UserBlock />
        </header>

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

              <ButtonsFilmCard isBtnPlay isBtnMyList idFilm={id}/>
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


Main.propTypes = {
  posterMovieData: PropTypes.oneOfType([MovieDataProp, PropTypes.shape({})]).isRequired,
  loadPosterMovie: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  isPosterMovieLoaded: PropTypes.bool.isRequired,
  isMoviesLoaded: PropTypes.bool.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadPosterMovie() {
    dispatch(fetchPosterMovie());
  },

  loadMovies() {
    dispatch(fetchMovies());
  },
});

const mapStateToProps = (state) => ({
  posterMovieData: state.posterMovieData,
  isPosterMovieLoaded: state.isPosterMovieLoaded,
  isMoviesLoaded: state.isMoviesLoaded,
});


export { Main };
export default connect(mapStateToProps, mapDispatchToProps)(Main);
