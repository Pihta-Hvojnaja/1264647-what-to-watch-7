
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import PropTypes from 'prop-types';

import { AppRoute, NumberFilmsShown } from '../../const';
import { getRoute } from '../../utils/get-route';


function NavReview(props) {
  const {
    name,
    idFilm,
    numberFilmsShown,
    changeFilmList,
  } = props;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={getRoute(AppRoute.FILM, idFilm)}
            className="breadcrumbs__link"
            onClick={() => {
              (numberFilmsShown !== NumberFilmsShown.FOR_SIMILAR) &&
                changeFilmList(NumberFilmsShown.FOR_SIMILAR);
            }}
          >
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            style={{cursor: 'default'}}
            to="#"
            className="breadcrumbs__link"
            onClick={(evt) => evt.preventDefault()}
          >
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}


NavReview.propTypes = {
  name: PropTypes.string.isRequired,
  idFilm: PropTypes.string.isRequired,
  numberFilmsShown: PropTypes.number,
  changeFilmList: PropTypes.func.isRequired,
};

NavReview.defaultProps = {
  numberFilmsShown: null,
};


const mapDispatchToProps = (dispatch) => ({
  changeFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changeFilmList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { NavReview };
export default connect(mapStateToProps, mapDispatchToProps)(NavReview);
