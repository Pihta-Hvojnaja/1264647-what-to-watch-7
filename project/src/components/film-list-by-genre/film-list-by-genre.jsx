
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import GenreList from './genre-list';
import FilmList from '../film-list/film-list';


function FilmListByGenre({filteredMoviesData}) {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <FilmList
        moviesData={filteredMoviesData}
        isButton
      />
    </section>
  );
}


FilmListByGenre.propTypes = {
  filteredMoviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
};


const mapStateToProps = (state) => ({
  filteredMoviesData: state.data.filteredMoviesData,
});


export { FilmListByGenre };
export default connect(mapStateToProps, null)(FilmListByGenre);
