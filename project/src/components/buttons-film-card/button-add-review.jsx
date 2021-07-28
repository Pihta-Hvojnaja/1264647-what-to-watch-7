import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';

import { getRoute } from '../../utils/get-route';


function ButtonAddReview() {
  const idCurrentFilm = useParams().id;

  return(
    <Link
      to={getRoute(AppRoute.REVIEW, idCurrentFilm)}
      className="btn film-card__button"
    >
      Add review
    </Link>
  );
}


export default React.memo(ButtonAddReview);
