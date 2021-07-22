import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';

import PropTypes from 'prop-types';

import { getRoute } from '../../utils/get-route';


function ButtonPlay({idFilm}) {
  const history = useHistory();

  return(
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => history.push(getRoute(AppRoute.PLAYER, idFilm))}
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
