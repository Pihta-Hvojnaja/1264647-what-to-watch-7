
import React from 'react';
import { Link } from 'react-router-dom';
import MoviesDataProp from '../pages/movies-data.prop';
import PropTypes from 'prop-types';

import { AppRoute } from '../../const';

import VideoPlayer from '../video-player/video-player';


function SmallFilmCard(props) {
  const { movieData, isPlaying = false } = props;
  const { id, name, previewImage, previewVideoLink } = movieData;

  const imgOrVideoComponent = isPlaying ?
    (
      <VideoPlayer
        videoLink={previewVideoLink}
        posterImage={previewImage}
        isPlaying={isPlaying}
        noSound
      />
    ) :
    <img src={previewImage} alt={name} width="280" height="175" />;

  return(
    <article id={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {imgOrVideoComponent}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.DEV_FILM}>{name}</Link>
      </h3>
    </article>
  );
}


SmallFilmCard.propTypes = {
  movieData: PropTypes.shape(MoviesDataProp.movieData),
  isPlaying: PropTypes.bool,
};


export default SmallFilmCard;
