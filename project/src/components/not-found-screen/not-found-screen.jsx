
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFilmList, changeError } from '../../store/action';
import { AppRoute, NumberFilmsShown } from '../../const';


function NotFoundScreen() {
  const dispatch = useDispatch();

  return (
    <div className="user-page">
      <section className="user-page__title">
        <h1
          style={{
            marginBottom: '70px',
            lineHeight: '50px',
          }}
        >
          Сожалеем, но мы не смогли найти запрашиваемую страницу (404 Not Found) или загрузить необходимые данные
        </h1>
        <div className="film-card__buttons">
          <Link
            to={AppRoute.ROOT}
            className="btn film-card__button"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              margin: 'auto',
            }}
            onClick={() => {
              dispatch(changeFilmList(NumberFilmsShown.FOR_GENRE));
              dispatch(changeError(false));
            }}
          >
            Вернуться на главную
          </Link>
        </div>
      </section>
    </div>
  );
}


export default NotFoundScreen;
