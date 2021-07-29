

export const rewindVideo = (videoRef, progressRef, togglerRef, evt) => {
  const videoElement = videoRef.current;
  const progressElement = progressRef.current;
  const widthProgressElement = progressElement.getBoundingClientRect().width;
  const position = evt.clientX - progressElement.getBoundingClientRect().left;
  const timePos = Math.ceil((position * 100) / widthProgressElement);
  videoElement.currentTime = (timePos * Math.round(videoElement.duration)) / 100;
  progressRef.current.value = timePos;
  togglerRef.current.style.left = `${timePos}%`;
};


export const changeProgressPlayer = (videoRef, progressRef, togglerRef) => {
  const videoElement = videoRef.current;
  const valueProgress = Math.floor((100/videoElement.duration) * videoElement.currentTime);
  progressRef.current.value = valueProgress;
  togglerRef.current.style.left = `${valueProgress}%`;
};


export const changeVisibilityControls = (exitRef, playerControlsRef, valueOpacity = '1') => {
  exitRef.current.style.opacity = valueOpacity;
  playerControlsRef.current.style.opacity = valueOpacity;
};


export const enableFullScreen = (element) => {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
};
