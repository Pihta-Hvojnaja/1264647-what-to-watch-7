
import React, { useState } from 'react';
import MoviesDataProp from '../pages/movies-data.prop';

import SmallFilmCard from '../small-film-card/small-film-card';


const getMovieDataCurrentCard = (moviesData, targetElement) => {
  const idCurrentCardElement = Number(targetElement.closest('article, small-film-card').id);
  return moviesData.find((movieData) => movieData.id === idCurrentCardElement);
};


function FilmsList(props) {
  const [, setCurrentMovieData] = useState({});
  const { moviesData } = props;

  return (
    <div
      className="catalog__films-list"
      onMouseOver={({target}) => {
        if (target.className !== 'catalog__films-list') {
          setCurrentMovieData(getMovieDataCurrentCard(moviesData, target));
        }
      }}
    >

      {moviesData.map(
        (movieData) =>
          <SmallFilmCard key = {movieData.name}  movieData = {movieData} />,
      )}
    </div>
  );
}


FilmsList.propTypes = MoviesDataProp.moviesData;


export default FilmsList;
