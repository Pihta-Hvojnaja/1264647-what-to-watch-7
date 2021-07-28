
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredMoviesData } from '../../store/movie-data/selectors';

import GenreList from './genre-list';
import FilmList from '../film-list/film-list';


function FilmListByGenre() {
  const filteredMoviesData = useSelector(getFilteredMoviesData);

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


export default React.memo(FilmListByGenre);
