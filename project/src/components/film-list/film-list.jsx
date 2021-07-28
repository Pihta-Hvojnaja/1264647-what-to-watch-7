
import React from 'react';
import { useSelector } from 'react-redux';
import { getNumberFilmsShown } from '../../store/movie-data/selectors';

import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import SmallFilmCard from '../small-film-card/small-film-card';
import ButtonShowMore from '../button-show-more/button-show-more';


function FilmList({moviesData, isButton = false}) {
  const numberFilmsShown = useSelector(getNumberFilmsShown);


  if (moviesData.length === 0) {

    return (
      <h3 style={{height: '100px', textAlign: 'center'}} >
        Alas, the list is empty! &#128557;
      </h3>
    );
  }

  const clippedMoviesData = numberFilmsShown ?
    moviesData.slice(0, numberFilmsShown) : moviesData;


  return (
    <React.Fragment>
      <div className="catalog__films-list">

        {clippedMoviesData.map(
          (movieData) =>
            (
              <SmallFilmCard
                key={movieData.id}
                movieData={movieData}
              />
            ),
        )}
      </div>

      {
        (isButton && (moviesData.length > numberFilmsShown)) &&
        <ButtonShowMore />
      }
    </React.Fragment>
  );
}


FilmList.propTypes = {
  moviesData: PropTypes.oneOfType([PropTypes.arrayOf(MovieDataProp), PropTypes.array]).isRequired,
  isButton: PropTypes.bool,
};

FilmList.defaultProps = {
  isButton: false,
};


export default FilmList;
