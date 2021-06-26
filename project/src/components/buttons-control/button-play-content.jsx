
import React from 'react';
import PropTypes from 'prop-types';


function ButtonPlayContent({isPlaying}) {
  if (isPlaying) {
    return(
      <React.Fragment>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </React.Fragment>
    );
  }

  return(
    <React.Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </React.Fragment>
  );
}


ButtonPlayContent.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};


export default ButtonPlayContent;
