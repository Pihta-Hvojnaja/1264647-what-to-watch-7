
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';


function GenreList(props) {
  const {
    moviesData,
    changingGenre,
    creatingMovies,
    currentGenre,
    genres,
  } = props;


  return (
    <ul className="catalog__genres-list">
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
              <Link
                id={genre}
                to="#"
                className="catalog__genres-link"
                onClick={(evt) => {
                  const element = evt.target;
                  evt.preventDefault();
                  if (element.id !== currentGenre) {
                    creatingMovies(moviesData, element.id);
                    changingGenre(element.id);
                  }
                }}
              >
                {genre}
              </Link>
            </li>
          ),
        )
      }
    </ul>
  );
}


GenreList.propTypes = {
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  changingGenre: PropTypes.func.isRequired,
  creatingMovies: PropTypes.func.isRequired,
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
});

const mapStateToProps = (state) => ({
  currentGenre: state.genre,
  genres: state.genres,
  moviesData: state.moviesData,
});


export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
