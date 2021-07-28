
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../const';

import PropTypes from 'prop-types';

import ButtonPlay from './button-play';
import ButtonMyList from './button-my-list';
import ButtonAddReview from './button-add-review';


function ButtonsFilmCard(props) {
  const {
    isBtnPlay,
    isBtnMyList,
    isBtnAddReview,
    idFilm,
    sourceData,
  } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const isAuth = () => authorizationStatus === AuthorizationStatus.AUTH;

  return(
    <div className="film-card__buttons">
      {isBtnPlay && <ButtonPlay idFilm={idFilm} />}
      {isAuth() && isBtnMyList && <ButtonMyList sourceData={sourceData} />}
      {isAuth() && isBtnAddReview && <ButtonAddReview />}
    </div>
  );
}


ButtonsFilmCard.propTypes = {
  isBtnPlay: PropTypes.bool,
  isBtnMyList: PropTypes.bool,
  isBtnAddReview: PropTypes.bool,
  idFilm: PropTypes.number,
  sourceData: PropTypes.string.isRequired,
};

ButtonsFilmCard.defaultProps = {
  isBtnPlay: false,
  isBtnMyList: false,
  isBtnAddReview: false,
  idFilm: null,
};


export default React.memo(ButtonsFilmCard);
