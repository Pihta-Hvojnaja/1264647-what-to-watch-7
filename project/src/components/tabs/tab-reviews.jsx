
import React from 'react';
import PropTypes from 'prop-types';
import CommentDataProp from '../pages/comment-data.prop';

import { shareComments } from '../../utils/share-comments';
import NoReview from './no-review';
import Review from './review';


function TabReviews({comments}) {
  if (comments.length === 0) {
    return <NoReview />;
  }

  const { evenComments,  oddComments } = shareComments(comments);

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          evenComments.map((comment) => <Review key={comment.id} review={comment}/>)
        }
      </div>

      <div className="film-card__reviews-col">
        {
          oddComments.map((comment) => <Review key={comment.id} review={comment}/>)
        }
      </div>
    </div>
  );
}


TabReviews.propTypes = {
  comments: PropTypes.arrayOf(CommentDataProp).isRequired,
};


export default TabReviews;
