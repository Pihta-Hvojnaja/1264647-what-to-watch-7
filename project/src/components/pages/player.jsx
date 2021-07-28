
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getMoviesData, getIsMoviesLoaded } from '../../store/movie-data/selectors';
import { fetchMovies } from '../../store/api-actions';

import LoadingScreen from '../loading-screen/loading-screen';
import VideoPlayer from '../video-player/video-player';


function Player() {
  const moviesData = useSelector(getMoviesData);
  const isMoviesLoaded = useSelector(getIsMoviesLoaded);
  const dispatch = useDispatch();

  const idFilm = useParams().id;


  useEffect(() => {
    if (!isMoviesLoaded) {
      dispatch(fetchMovies());
    }
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
