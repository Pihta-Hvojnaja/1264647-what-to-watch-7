
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getError } from '../../store/error/selectors';
import { changeError } from '../../store/action';
import { MessageError } from '../../const';


const DELAY_ERROR = 5000;


function Toast() {
  const errorMessage = useSelector(getError);
  const dispatch = useDispatch();


  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => dispatch(changeError(MessageError.NO)), DELAY_ERROR);
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


export default Toast;
