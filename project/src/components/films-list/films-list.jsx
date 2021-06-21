
import React, { useState, useEffect } from 'react';
import MoviesDataProp from '../pages/movies-data.prop';

import SmallFilmCard from '../small-film-card/small-film-card';


const DELAY = 1000;


const getIdCurrentCard = (targetElement) =>
  Number(targetElement.closest('article, small-film-card').id);


function FilmsList(props) {
  const [idCurrentCard, setIdCurrentCard] = useState(null);
  const { moviesData } = props;
  let timerId = null;

  useEffect(() => () => clearTimeout(timerId));

  return (
    <div
      className="catalog__films-list"
      onMouseOver={({target}) => {
        if (target.className !== 'catalog__films-list') {
          timerId = setTimeout(() => setIdCurrentCard(getIdCurrentCard(target)), DELAY);
        }
      }}
      onMouseOut={() => {
        clearTimeout(timerId);
        setIdCurrentCard(null);
      }}
    >

      {moviesData.map(
        (movieData) =>
          (
            <SmallFilmCard
              key={movieData.id}
              movieData={movieData}
              isPlaying={(movieData.id === idCurrentCard) && true}
            />
          ),
      )}
    </div>
  );
}


FilmsList.propTypes = MoviesDataProp.moviesData;


export default FilmsList;
