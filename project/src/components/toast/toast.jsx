
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../store/action';
import { MessageError } from '../../const';


const DELAY_ERROR = 5000;


function Toast({errorMessage, changeError}) {

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => changeError(MessageError.NO), DELAY_ERROR);
    }
  });

  if (errorMessage) {
    return (
      <div className="toast-container">
        <div className="toast-item">
          {errorMessage}
        </div>
      </div>
    );
  }

  return null;
}


Toast.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  changeError: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changeError(boolValue) {
    dispatch(ActionCreator.changeError(boolValue));
  },
});

const mapStateToProps = (state) => ({
  errorMessage: state.error,
});


export { Toast };
export default connect(mapStateToProps, mapDispatchToProps)(Toast);
