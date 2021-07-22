
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AuthorizationStatus } from '../../const';

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
    authorizationStatus,
  } = props;

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
  authorizationStatus: PropTypes.string.isRequired,
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


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export { ButtonsFilmCard };
export default connect(mapStateToProps, null)(ButtonsFilmCard);
