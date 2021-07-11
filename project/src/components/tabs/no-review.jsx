
import React from 'react';


function NoReview() {

  return(
    <div className="film-card__reviews film-card__row">
      <div style={{width: '500px', maxWidth: 'none'}} className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">
              There are no comments on the film
            </p>
            <footer className="review__details">
              <cite className="review__author">Server</cite>
              <time className="review__date">
                {'just now'}
              </time>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}


export default NoReview;
