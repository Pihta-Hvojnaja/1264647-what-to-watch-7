
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import MovieDataProp from '../pages/movie-data.prop';
import PropTypes from 'prop-types';

import { NumberFilmsShown, APIRoute } from '../../const';

import VideoPlayer from '../video-player/video-player';


const DELAY = 1000;


function SmallFilmCard(props) {
  const {
    movieData, resetMovieData,
    numberFilmsShown, changingFilmList, idCurrentMovie,
  } = props;

  const { id, name, previewImage, previewVideoLink } = movieData;
  const [idCurrentCard, setIdCurrentCard] = useState(null);
  const history = useHistory();
  const address = APIRoute.FILM(id);
  const currentAddress = useRouteMatch().url;

  const cursorValue = currentAddress === address ?  'wait' : 'pointer';
  const numberForFilm = NumberFilmsShown.FOR_MORE_LIKE_THIS;

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
    idCurrentMovie !== id && resetMovieData(id);
    numberFilmsShown !== numberForFilm && changingFilmList(numberForFilm);
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
          onClick={(evt) => {
            evt.preventDefault();
          }}
        >
          {name}
        </Link>
      </h3>

    </article>
  );
}


SmallFilmCard.propTypes = {
  movieData: MovieDataProp,
  resetMovieData: PropTypes.func.isRequired,
  numberFilmsShown: PropTypes.number,
  changingFilmList: PropTypes.func.isRequired,
  idCurrentMovie: PropTypes.number,
};


const mapDispatchToProps = (dispatch) => ({
  resetMovieData(idCurrentMovie) {
    dispatch(ActionCreator.resetMovieData(idCurrentMovie));
  },

  changingFilmList(numberFilmsShown) {
    dispatch(ActionCreator.changingFilmList(numberFilmsShown));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
  idCurrentMovie: state.idCurrentMovie,
});


export { SmallFilmCard };
export default connect(mapStateToProps, mapDispatchToProps)(SmallFilmCard);
