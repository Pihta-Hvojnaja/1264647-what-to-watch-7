
import React, { useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNumberFilmsShown } from '../../store/movie-data/selectors';
import { changeFilmList } from '../../store/action';
import { login } from '../../store/api-actions';

import { NumberFilmsShown, MessageError } from '../../const';
import { checkLoginFormError } from '../../utils/check-login-form-error';

import Toast from '../toast/toast';
import Logo from '../logo/logo';
import Footer from '../footer/footer';


const CLASS_NAME_ERROR = 'sign-in__field--error';

const defaultError = {
  login: false,
  password: false,
  message: '',
};


function SignIn() {
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();

  const [error, setError] = useState(defaultError);

  const loginRef = useRef();
  const passwordRef = useRef();


  const messageElement = error.message ?
    (<div className="sign-in__message"><p>{error.message}</p></div>) : error.message;


  const getClassNameError = (errorElement) => `sign-in__field ${errorElement && CLASS_NAME_ERROR}`;


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginElement = loginRef.current;
    const passwordElement = passwordRef.current;
    const newError = checkLoginFormError(loginElement, passwordElement );

    if (!newError.message) {
      dispatch(login({
        login: loginElement.value,
        password: passwordElement.value,
      }));

      (numberFilmsShown !== NumberFilmsShown.FOR_GENRE) &&
        dispatch(changeFilmList(NumberFilmsShown.FOR_GENRE));
      return;
    }

    setError(newError);
  };


  return(
    <div className="user-page">
      <Toast message={MessageError.LOGIN}/>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          onSubmit={handleSubmit}
          action="#"
          className={'sign-in__form'}
          noValidate
        >
          {messageElement}
          <div className="sign-in__fields">

            <div className={getClassNameError(error.login)}>
              <input
                ref={loginRef}
                className={`sign-in__input ${error.login && 'shake'}`}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>

            <div className={getClassNameError(error.password)}>
              <input
                ref={passwordRef}
                id="user-password"
                className={`sign-in__input ${error.password && 'shake'}`}
                type="password"
                placeholder="Password"
                name="user-password"
                minLength="3"
                maxLength="20"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>

          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}


export default SignIn;
