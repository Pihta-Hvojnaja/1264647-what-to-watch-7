
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function NotFoundScreen() {

  return (
    <div className="user-page">
      <section className="user-page__title">
        <h1
          style={{
            marginBottom: '70px',
            lineHeight: '50px',
          }}
        >
          Сожалеем, но мы не смогли найти запрашиваемую страницу или загрузить необходимые данные
        </h1>
        <div className="film-card__buttons">
          <Link
            to={AppRoute.ROOT}
            className="btn film-card__button"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              margin: 'auto',
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
