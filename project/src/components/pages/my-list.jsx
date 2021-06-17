
import React from 'react';
import MoviesDataProp from './movies-data.prop';

import Logo from '../logo/logo';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';


function MyList(props) {
  const { moviesData } = props;

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList moviesData={moviesData} />
      </section>

      <Footer />
    </div>
  );
}


MyList.propTypes = MoviesDataProp.moviesData;


export default MyList;
