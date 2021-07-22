
import React from 'react';
import PropTypes from 'prop-types';


function ReviewText({disabled, onSetText}) {
  const pointer = disabled && 'default';

  return (
    <textarea
      id="review-text"
      className="add-review__textarea"
      name="review-text"
      placeholder="Review text"
      minLength="50"
      maxLength="400"
      disabled={disabled}
      style={{cursor: pointer}}
      onChange={({target}) => {
        onSetText(target.value);
      }}
    >
    </textarea>
  );
}


ReviewText.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSetText: PropTypes.func.isRequired,
};


export default ReviewText;
