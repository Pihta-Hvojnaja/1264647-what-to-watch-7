
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import SmallFilmCard from '../small-film-card/small-film-card';
import ButtonShowMore from '../button-show-more/button-show-more';


function FilmList(props) {
  const { moviesData, numberFilmsShown, isButton = false } = props;

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
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  numberFilmsShown: PropTypes.number,
  isButton: PropTypes.bool,
};


const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { FilmList };
export default connect(mapStateToProps, null)(FilmList);