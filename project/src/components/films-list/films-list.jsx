
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import { getIdCurrentCard } from '../../utils/get-id-current-card';
import SmallFilmCard from '../small-film-card/small-film-card';
import ButtonShowMore from '../button-show-more/button-show-more';


const DELAY = 1000;
const CLASS_NAME_PARENT_ELEMENT = 'article, small-film-card';


function FilmsList(props) {
  const { moviesData, numberFilmsShown, isButton = false } = props;
  const [idCurrentCard, setIdCurrentCard] = useState(null);
  let timerId = null;

  const clippedMoviesData = numberFilmsShown ?
    moviesData.slice(0, numberFilmsShown) : moviesData;

  useEffect(() => () => clearTimeout(timerId));

  return (
    <React.Fragment>
      <div
        className="catalog__films-list"
        onMouseOver={({target}) => {
          if (target.className !== 'catalog__films-list') {
            timerId = setTimeout(() =>
              setIdCurrentCard(getIdCurrentCard(target, CLASS_NAME_PARENT_ELEMENT)), DELAY);
          }
        }}
        onMouseOut={() => {
          clearTimeout(timerId);
          setIdCurrentCard(null);
        }}
      >

        {clippedMoviesData.map(
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

      {
        (isButton && (moviesData.length > numberFilmsShown)) &&
        <ButtonShowMore />
      }
    </React.Fragment>

  );
}


FilmsList.propTypes = {
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  numberFilmsShown: PropTypes.number,
  isButton: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { FilmsList };
export default connect(mapStateToProps)(FilmsList);
