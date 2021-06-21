
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';


function VideoPlayer(props) {
  const {
    videoLink,
    posterImage = 'img/player-poster.jpg',
    isPlaying,
    noSound,
    setIsPlaying,
  } = props;

  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef();

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
      videoRef.current.play().catch(() => setIsPlaying && setIsPlaying(false));
      return;
    }

    videoRef.current.pause();
  });

  return(
    <video
      src={videoLink}
      className="player__video"
      poster={posterImage}
      ref={videoRef}
      muted={noSound && 'muted'}
    >
    </video>
  );
}


VideoPlayer.propTypes = {
  videoLink: PropTypes.string.isRequired,
  posterImage: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
  noSound: PropTypes.bool,
  setIsPlaying: PropTypes.func,
};


export default VideoPlayer;
