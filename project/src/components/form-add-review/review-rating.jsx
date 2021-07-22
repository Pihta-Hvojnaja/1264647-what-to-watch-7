
import React from 'react';
import PropTypes from 'prop-types';


const NUMBER_STARS = 10;


function ReviewRating({disabled, checked, onSetRating}) {
  const stars = new Array(NUMBER_STARS).fill('');
  const pointer = disabled && 'default';

  return (
    <div className="rating">
      <div
        className="rating__stars"
        onChange={({target}) => onSetRating(Number(target.value))}
      >
        {
          stars.map((_element, index) => {
            const numberStar = NUMBER_STARS - index;

            return (
              <React.Fragment key={numberStar}>
                <input
                  id={`star-${numberStar}`}
                  className="rating__input"
                  type="radio"
                  name="rating"
                  value={numberStar}
                  defaultChecked={numberStar === checked}
                  disabled={disabled}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${numberStar}`}
                  style={{cursor: pointer}}
                >
                  {`Rating ${numberStar}`}
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
}


ReviewRating.propTypes = {
  disabled: PropTypes.bool.isRequired,
  checked: PropTypes.number,
  onSetRating: PropTypes.func.isRequired,
};

ReviewRating.defaultProps = {
  checked: null,
};


export default ReviewRating;
