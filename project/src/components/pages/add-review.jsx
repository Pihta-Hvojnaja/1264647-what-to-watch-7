
import React from 'react';
import { Link } from 'react-router-dom';
import MovieDataProp from './movie-data.prop';

import { AppRoute } from '../../const';

import Logo from '../logo/logo';
import FormAddReview from '../form-add-review/form-add-review';


function AddReview(props) {
  const { posterImage, backgroundImage, name } = props.movieData;


  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.DEV_FILM} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="#">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/#">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>

    </section>
  );
}


AddReview.propTypes = MovieDataProp;


export default AddReview;
