
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesData, getGenres } from '../../store/movie-data/selectors';
import { getGenre } from '../../store/genre-filter/selectors';
import { changeGenre, createMovies } from '../../store/action';


function GenreList() {
  const moviesData = useSelector(getMoviesData);
  const currentGenre = useSelector(getGenre);
  const genres = useSelector(getGenres);
  const dispatch = useDispatch();


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
                    dispatch(createMovies(moviesData, element.id));
                    dispatch(changeGenre(element.id));
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


export default GenreList;
