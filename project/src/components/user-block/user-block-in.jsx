
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute, NumberFilmsShown } from '../../const';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';

import { logout } from '../../store/api-actions';


function UserBlockIn(props) {
  const {
    changeFilmList,
    isMyList,
    email,
    avatarUrl,
    logoutAuth,
  } = props;

  const history = useHistory();

  return (
    <ul style={{zIndex: '10'}} className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt="User avatar"
            width="63"
            height="63"
            onClick={() => {
              if (!isMyList) {
                changeFilmList(NumberFilmsShown.NO_NUMBER);
                history.push(AppRoute.MY_LIST);
              }
            }}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          onClick={(evt) => {
            evt.preventDefault();
            logoutAuth();
          }}
          to="#"
          className="user-block__link"
        >
          {email}
        </Link>
      </li>
    </ul>
  );
}


UserBlockIn.propTypes = {
  changeFilmList: PropTypes.func.isRequired,
  isMyList: PropTypes.bool,
  logoutAuth: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

UserBlockIn.defaultProps = {
  isMyList: false,
};


const mapDispatchToProps = (dispatch) => ({
  changeFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changeFilmList(maxCardsFilms));
  },

  logoutAuth() {
    dispatch(logout());
  },
});

const mapStateToProps = (state) => ({
  email: state.authInfo.email,
  avatarUrl: state.authInfo.avatarUrl,
});


export { UserBlockIn };
export default connect(mapStateToProps, mapDispatchToProps)(UserBlockIn);
