
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';


function GenreList(props) {
  const {
    moviesData,
    changeGenre,
    createMovies,
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
                    createMovies(moviesData, element.id);
                    changeGenre(element.id);
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
  changeGenre: PropTypes.func.isRequired,
  createMovies: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changeGenre(currentGenre) {
    dispatch(ActionCreator.changeGenre(currentGenre));
  },

  createMovies(moviesData, currentGenre) {
    dispatch(ActionCreator.createMovies(moviesData, currentGenre));
  },
});

const mapStateToProps = (state) => ({
  currentGenre: state.genre,
  genres: state.genres,
  moviesData: state.data.moviesData,
});


export { GenreList };
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
