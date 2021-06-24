
import React from 'react';
import movieDataProp from '../pages/movie-data.prop';

import { getEstimation } from '../../utils/get-estination';


function TabOverview({movieData}) {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = movieData;

  return(
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getEstimation(rating)}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>
        <p className="film-card__starring">
          <strong>
            {`Starring: ${starring.join(', ')}`}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
}


TabOverview.propTypes = movieDataProp;


export default TabOverview;
