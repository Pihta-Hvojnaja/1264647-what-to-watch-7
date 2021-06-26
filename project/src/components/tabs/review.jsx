
import React from 'react';
import CommentDataProp from '../pages/comment-data.prop';

import dayjs from 'dayjs';


function Review({review}) {
  const { comment, user, date, rating } = review;
  const dayJsDate = dayjs(date);

  return(
    <div className="review" id={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayJsDate.format('YYYY-MM-DD')}>
            {dayJsDate.format('MMMM D, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}


Review.propTypes = CommentDataProp;


export default Review;
