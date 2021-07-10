import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';


function ButtonAddReview() {
  const idCurrentFilm = useParams().id;

  return(
    <Link
      to={APIRoute.REVIEW(idCurrentFilm)}
      className="btn film-card__button"
    >
      Add review
    </Link>
  );
}


export default ButtonAddReview;
