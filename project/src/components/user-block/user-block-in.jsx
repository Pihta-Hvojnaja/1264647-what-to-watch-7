
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getEmail, getAvatarUrl } from '../../store/user/selectors';
import { AppRoute, NumberFilmsShown } from '../../const';
import { changeFilmList } from '../../store/action';
import { logout } from '../../store/api-actions';

import PropTypes from 'prop-types';


function UserBlockIn({isMyList = false}) {
  const email = useSelector(getEmail);
  const avatarUrl = useSelector(getAvatarUrl);
  const dispatch = useDispatch();

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
                dispatch(changeFilmList(NumberFilmsShown.NO_NUMBER));
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
            dispatch(logout());
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
  isMyList: PropTypes.bool,
};

UserBlockIn.defaultProps = {
  isMyList: false,
};


export default UserBlockIn;
