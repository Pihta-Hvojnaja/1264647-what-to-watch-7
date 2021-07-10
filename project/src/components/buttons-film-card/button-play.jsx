import React from 'react';
import { useHistory } from 'react-router-dom';
import { APIRoute } from '../../const';

import PropTypes from 'prop-types';


function ButtonPlay({idFilm}) {
  const history = useHistory();

  return(
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => history.push(APIRoute.PLAYER(idFilm))}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}


ButtonPlay.propTypes = {
  idFilm: PropTypes.number.isRequired,
};


export default ButtonPlay;
