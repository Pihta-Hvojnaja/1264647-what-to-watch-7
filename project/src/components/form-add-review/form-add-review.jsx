
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getError } from '../../store/error/selectors';
import { getIsDeactiveForm } from '../../store/changing-state/selectors';

import PropTypes from 'prop-types';
import { changeFormStatus } from '../../store/action';
import { sendComment } from '../../store/api-actions';

import Toast from '../toast/toast';
import ReviewRating from './review-rating';
import ReviewText from './review-text';

import { checkLengthText } from './utils';


const DEFAULT_CHECKED_RADIO = null;


function FormAddReview({idFilm}) {
  const isDeactiveForm = useSelector(getIsDeactiveForm);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const [text, setTex] = useState('');
  const [rating, setRating] = useState(DEFAULT_CHECKED_RADIO);

  const disabledButton = checkLengthText(text) || !rating;
  const extraClass = error ? 'shake': error;

  return (
    <React.Fragment>
      <Toast />

      <form
        action="#"
        className={`add-review__form ${extraClass}`}
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(changeFormStatus(true));
          dispatch(sendComment({comment: text, rating: rating}, idFilm));
        }}
      >
        <ReviewRating
          checked={DEFAULT_CHECKED_RADIO}
          disabled={isDeactiveForm}
          onSetRating={setRating}
        />

        <div className="add-review__text">
          <ReviewText
            disabled={isDeactiveForm}
            onSetText={setTex}
          />

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={disabledButton || isDeactiveForm}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}


FormAddReview.propTypes = {
  idFilm: PropTypes.string.isRequired,
};


export default React.memo(FormAddReview);
