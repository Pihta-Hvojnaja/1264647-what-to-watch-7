
import { INITIAL_GENRE } from './const';

const MAX_QUANTITY_GENRES = 10;


export const getFilteredMoviesData = (moviesData, genre) => {
  if (genre === INITIAL_GENRE) {
    return moviesData;
  }

  return moviesData.filter((movieData) => movieData.genre === genre);
};


export const getGenresList = (moviesData) => {
  const genres = moviesData.map((movieData) => movieData.genre).sort();
  const newGenres = new Set([INITIAL_GENRE, ...genres]);
  return Array.from(newGenres).slice(0, MAX_QUANTITY_GENRES);
};
