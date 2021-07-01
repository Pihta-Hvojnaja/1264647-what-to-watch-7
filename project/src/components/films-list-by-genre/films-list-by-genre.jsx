
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import { NumberFilmsShown } from '../../const';
import FilmsList from '../films-list/films-list';


function FilmsListByGenre(props) {
  const {
    moviesData,
    filteredMoviesData,
    changingGenre,
    creatingMovies,
    changingFilmsList,
    currentGenre,
    genres,
  } = props;

  useEffect(() => changingFilmsList(NumberFilmsShown.FOR_GENRE));


  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul
        className="catalog__genres-list"
        onClick={(evt) => {
          const element = evt.target;
          evt.preventDefault();
          if ((element.id !== currentGenre) && element.tagName === 'A') {
            changingGenre(element.id);
            creatingMovies(moviesData, element.id);
            changingFilmsList(NumberFilmsShown.INITIAL);
          }
        }}
      >
        {
          genres.map((genre) =>
            (
              <li
                key={genre}
                className={
                  `catalog__genres-item
                    ${(genre === currentGenre) && 'catalog__genres-item--active'}`
                }

              >
                <a id={genre} href="/" className="catalog__genres-link">{genre}</a>
              </li>
            ),
          )
        }
      </ul>

      <FilmsList
        moviesData={filteredMoviesData}
        isButton
      />
    </section>
  );
}


FilmsListByGenre.propTypes = {
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  filteredMoviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  changingGenre: PropTypes.func.isRequired,
  creatingMovies: PropTypes.func.isRequired,
  changingFilmsList: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changingGenre(currentGenre) {
    dispatch(ActionCreator.changingGenre(currentGenre));
  },

  creatingMovies(moviesData, currentGenre) {
    dispatch(ActionCreator.creatingMovies(moviesData, currentGenre));
  },

  changingFilmsList(maxCardsFilms) {
    dispatch(ActionCreator.changingFilmsList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  currentGenre: state.genre,
  genres: state.genres,
  moviesData: state.moviesData,
  filteredMoviesData: state.filteredMoviesData,
});


export { FilmsListByGenre };
export default connect(mapStateToProps, mapDispatchToProps)(FilmsListByGenre);
