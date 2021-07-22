
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActionCreator } from '../../store/action';
import { sendComment } from '../../store/api-actions';

import Toast from '../toast/toast';
import ReviewRating from './review-rating';
import ReviewText from './review-text';

import { checkLengthText } from './utils';


const DEFAULT_CHECKED_RADIO = 8;


function FormAddReview(props) {
  const {
    idFilm,
    postComment,
    isDeactiveForm,
    changeFormStatus,
    error,
  } = props;

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
          changeFormStatus(true);
          postComment({comment: text, rating: rating}, idFilm);
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
  postComment: PropTypes.func.isRequired,
  isDeactiveForm: PropTypes.bool.isRequired,
  changeFormStatus: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  postComment(comment, idFilm) {
    dispatch(sendComment(comment, idFilm));
  },

  changeFormStatus(boolValue) {
    dispatch(ActionCreator.changeFormStatus(boolValue));
  },
});


const mapStateToProps = (state) => ({
  isDeactiveForm: state.isDeactiveForm,
  error: state.error,
});


export { FormAddReview };
export default connect(mapStateToProps, mapDispatchToProps)(FormAddReview);
