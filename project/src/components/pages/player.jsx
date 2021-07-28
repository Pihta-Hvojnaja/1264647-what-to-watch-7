
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesData, getIsMoviesLoaded, getNumberFilmsShown } from '../../store/movie-data/selectors';
import { getGenre } from '../../store/genre-filter/selectors';
import { fetchMovies } from '../../store/api-actions';
import { changeFilmList, changeGenre, createMovies } from '../../store/action';
import { NumberFilmsShown, INITIAL_GENRE } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import VideoPlayer from '../video-player/video-player';


function Player() {
  const moviesData = useSelector(getMoviesData);
  const isMoviesLoaded = useSelector(getIsMoviesLoaded);
  const genre = useSelector(getGenre);
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();

  const idFilm = useParams().id;


  useEffect(() => {
    if (!isMoviesLoaded) {
      dispatch(fetchMovies());
    }

    if (genre !== INITIAL_GENRE) {
      dispatch(changeGenre(INITIAL_GENRE));
      dispatch(createMovies(moviesData, INITIAL_GENRE));
    }

    numberFilmsShown > NumberFilmsShown.FOR_GENRE &&
      dispatch(changeFilmList(NumberFilmsShown.FOR_GENRE));
  });


  if (!isMoviesLoaded) {
    return <LoadingScreen />;
  }


  const movieData = moviesData.find((movie) => Number(movie.id) === Number(idFilm));
  const { videoLink, backgroundImage } = movieData;

  return(
    <VideoPlayer
      videoLink={videoLink}
      posterImage={backgroundImage}
      isControlButtons
    />
  );
}


export default Player;
