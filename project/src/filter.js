
import { INITIAL_GENRE } from './const';


export const getFilteredMoviesData = (moviesData, genre) => {
  if (genre === INITIAL_GENRE) {
    return moviesData;
  }

  return moviesData.filter((movieData) => movieData.genre === genre);
};

