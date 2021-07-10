
import React from 'react';
import PropTypes from 'prop-types';

import ButtonPlay from './button-play';
import ButtonMyList from './button-my-list';
import ButtonAddReview from './button-add-review';


function ButtonsFilmCard({isBtnPlay, isBtnMyList, isBtnAddReview, idFilm}) {

  return(
    <div className="film-card__buttons">
      {isBtnPlay && <ButtonPlay idFilm={idFilm} />}
      {isBtnMyList && <ButtonMyList />}
      {isBtnAddReview && <ButtonAddReview />}
    </div>
  );
}


ButtonsFilmCard.propTypes = {
  isBtnPlay: PropTypes.bool,
  isBtnMyList: PropTypes.bool,
  isBtnAddReview: PropTypes.bool,
  idFilm: PropTypes.number,
};


export default ButtonsFilmCard;
