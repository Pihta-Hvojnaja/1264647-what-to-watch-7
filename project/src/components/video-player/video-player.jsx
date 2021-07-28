
import React, { useState, useEffect, useRef } from 'react';
import browserHistory from '../../browser-history';
import PropTypes from 'prop-types';

import ButtonPlayContent from './button-play-content';
import { rewindVideo, changeProgressPlayer, changeVisibilityControls } from './utils';
import { reformatTimeVideo } from '../../utils/reformat-time';


function VideoPlayer(props) {
  const {
    videoLink,
    posterImage = 'img/player-poster.jpg',
    noSound = false,
    isControlButtons = false,
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef();
  const playerRef = useRef();
  const playerControlsRef = useRef();
  const exitRef = useRef();
  const progressRef = useRef();
  const togglerRef = useRef();
  const timerRef = useRef();

  const valueHiddenControls = 0;
  const visibilityElement = isControlButtons ? {display: 'block'} : {display: 'none'};

  useEffect(() => {
    let videoElement = videoRef.current;
    videoElement.onloadeddata = () => setIsLoading(true);

    return () => {
      if (videoElement) {
        videoElement.onloadeddata = null;
        videoElement = null;
      }
    };
  }, [videoLink]);

  useEffect(() => {
    if (isPlaying && isLoading) {
      videoRef.current.play().catch(() => setIsPlaying(false));
      return;
    }

    videoRef.current.pause();
  });


  return(
    <div ref={playerRef} className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={posterImage}
        muted={noSound && 'muted'}
        onTimeUpdate={() => {
          const videoElement = videoRef.current;
          changeProgressPlayer(videoRef, progressRef, togglerRef);
          const remainingTime = Math.floor(videoElement.duration - videoElement.currentTime);
          timerRef.current.textContent = reformatTimeVideo(remainingTime);
        }}
      >
      </video>

      <button
        ref={exitRef}
        type="button"
        className="player__exit"
        style={visibilityElement}
        onMouseOver={() => {
          changeVisibilityControls(exitRef, playerControlsRef);
        }}
        onMouseOut={() => {
          changeVisibilityControls(exitRef, playerControlsRef, valueHiddenControls);
        }}
        onClick={browserHistory.goBack}
      >
        Exit
      </button>

      <div
        ref={playerControlsRef}
        className="player__controls"
        style={visibilityElement}
        onMouseOver={() => {
          changeVisibilityControls(exitRef, playerControlsRef);
        }}
        onMouseOut={() => {
          changeVisibilityControls(exitRef, playerControlsRef, valueHiddenControls);
        }}
      >
        <div
          className="player__controls-row"
          onClick={(evt) => {
            rewindVideo(videoRef, progressRef, togglerRef, evt);
          }}
        >
          <div className="player__time">
            <progress
              ref={progressRef}
              className="player__progress"
              value="0"
              max="100"
            >
            </progress>
            <div
              ref={togglerRef}
              className="player__toggler"
              style={{left:'0%'}}
            >
              Toggler
            </div>
          </div>
          <div ref={timerRef} className="player__time-value">00:00:00</div>
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

          <button
            type="button"
            className="player__full-screen"
            onClick={() => playerRef.current.requestFullscreen()}
          >
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


VideoPlayer.propTypes = {
  videoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string,
  isControlButtons: PropTypes.bool,
  noSound: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  posterImage: 'img/player-poster.jpg',
  isControlButtons: false,
  noSound: false,
};


export default VideoPlayer;
