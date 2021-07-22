
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchMovies } from '../../store/api-actions';

import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import LoadingScreen from '../loading-screen/loading-screen';
import VideoPlayer from '../video-player/video-player';
import ButtonPlayContent from '../buttons-control/button-play-content';


function Player({moviesData, isMoviesLoaded, loadMovies}) {
  const idFilm = useParams().id;
  const [isPlaying, setIsPlaying] = useState(true);


  useEffect(() => {
    if (!isMoviesLoaded) {
      loadMovies();
    }
  });


  if (!isMoviesLoaded) {
    return <LoadingScreen />;
  }

  const movieData = moviesData.find((movie) => Number(movie.id) === Number(idFilm));
  const { videoLink, backgroundImage } = movieData;

  return(
    <div className="player">
      <VideoPlayer
        videoLink={videoLink}
        isPlaying={isPlaying}
        posterImage={backgroundImage}
        onStopPlayer={() => setIsPlaying(false)}
      />

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left:'30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => {
              setIsPlaying(!isPlaying);
            }}
          >
            {<ButtonPlayContent isPlaying={isPlaying} />}
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}


Player.propTypes = {
  moviesData: PropTypes.oneOfType([PropTypes.arrayOf(MovieDataProp), PropTypes.arrayOf(PropTypes.object)]).isRequired,
  isMoviesLoaded: PropTypes.bool.isRequired,
  loadMovies: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadMovies() {
    dispatch(fetchMovies());
  },
});

const mapStateToProps = (state) => ({
  moviesData: state.data.moviesData,
  isMoviesLoaded: state.loading.isMoviesLoaded,
});


export { Player };
export default connect(mapStateToProps, mapDispatchToProps)(Player);
