
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppRoute, NumberFilmsShown } from '../../const';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';


function UserBlock({changingFilmList, isMyList}) {

  const history = useHistory();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
            onClick={() => {
              if (!isMyList) {
                changingFilmList(NumberFilmsShown.NO_NUMBER);
                history.push(AppRoute.MY_LIST);
              }
            }}
          />
        </div>
      </li>
      <li className="user-block__item">
        <Link to="/" className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}


UserBlock.propTypes = {
  changingFilmList: PropTypes.func.isRequired,
  isMyList: PropTypes.bool,
};


const mapDispatchToProps = (dispatch) => ({
  changingFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changingFilmList(maxCardsFilms));
  },
});


export { UserBlock };
export default connect(null, mapDispatchToProps)(UserBlock);
