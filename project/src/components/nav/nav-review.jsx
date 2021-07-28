
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getNumberFilmsShown } from '../../store/movie-data/selectors';
import { changeFilmList } from '../../store/action';

import PropTypes from 'prop-types';

import { AppRoute, NumberFilmsShown } from '../../const';
import { getRoute } from '../../utils/get-route';


function NavReview({name, idFilm}) {
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();


  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={getRoute(AppRoute.FILM, idFilm)}
            className="breadcrumbs__link"
            onClick={() => {
              (numberFilmsShown !== NumberFilmsShown.FOR_SIMILAR) &&
              dispatch(changeFilmList(NumberFilmsShown.FOR_SIMILAR));
            }}
          >
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            to={getRoute(AppRoute.REVIEW, idFilm)}
            className="breadcrumbs__link"
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
};


export default NavReview;
