
import React from 'react';
import { Link } from 'react-router-dom';
import MoviesDataProp from '../pages/movies-data.prop';

import { AppRoute } from '../../const';


function SmallFilmCard(props) {
  const { id, name, previewImage } = props.movieData;

  return(
    <article id={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.DEV_FILM}>{name}</Link>
      </h3>
    </article>
  );
}


SmallFilmCard.propTypes = MoviesDataProp.movieData;


export default SmallFilmCard;
