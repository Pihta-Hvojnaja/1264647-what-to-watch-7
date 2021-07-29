
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getIdCurrentMovie, getNumberFilmsShown } from '../../store/movie-data/selectors';
import { changeFilmList, resetDataFilm } from '../../store/action';

import MovieDataProp from '../pages/prop/movie-data.prop';

import { NumberFilmsShown, AppRoute } from '../../const';
import { getRoute } from '../../utils/get-route';

import VideoPlayer from '../video-player/video-player';


const DELAY = 1000;


function SmallFilmCard({movieData}) {
  const idCurrentMovie = useSelector(getIdCurrentMovie);
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();

  const { id, name, previewImage, previewVideoLink } = movieData;
  const [idCurrentCard, setIdCurrentCard] = useState(null);
  const history = useHistory();
  const address = getRoute(AppRoute.FILM, id);
  const currentAddress = useRouteMatch().url;

  const cursorValue = currentAddress === address ?  'default' : 'pointer';

  let timerId = null;

  useEffect(() => () => clearTimeout(timerId));

  const imgOrVideoComponent = movieData.id === idCurrentCard ?
    (
      <VideoPlayer
        videoLink={previewVideoLink}
        posterImage={previewImage}
        isPlaying
        noSound
      />
    ) :
    <img src={previewImage} alt={name} width="280" height="175" />;

  const onClickCardElement = () => {
    if (currentAddress === address) {
      return;
    }

    (idCurrentMovie !== id) && dispatch(resetDataFilm(id));
    (numberFilmsShown !== NumberFilmsShown.FOR_SIMILAR) &&
      dispatch(changeFilmList(NumberFilmsShown.FOR_SIMILAR));

    history.push(address);
  };


  return(
    <article
      id={id}
      className="small-film-card catalog__films-card"
      style={{cursor: cursorValue}}
      onMouseOver={() => {
        timerId = setTimeout(() => setIdCurrentCard(id), DELAY);
      }}
      onMouseOut={() => {
        clearTimeout(timerId);
        setIdCurrentCard(null);
      }}
      onClick={onClickCardElement}
    >

      <div className="small-film-card__image">
        {imgOrVideoComponent}
      </div>

      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to="#"
          style={{cursor: cursorValue}}
          onClick={(evt) => evt.preventDefault()}
        >
          {name}
        </Link>
      </h3>

    </article>
  );
}


SmallFilmCard.propTypes = MovieDataProp;


export default SmallFilmCard;
