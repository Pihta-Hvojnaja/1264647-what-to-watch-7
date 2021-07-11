
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import { NumberFilmsShown } from '../../const';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';


function MyList(props) {
  const { moviesData, numberFilmsShown, changingFilmList } = props;

  useEffect(() => {
    if(numberFilmsShown !== NumberFilmsShown.NO_NUMBER) {
      changingFilmList(NumberFilmsShown.NO_NUMBER);
    }
  });

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock isMyList />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList moviesData={moviesData}/>
      </section>

      <Footer />
    </div>
  );
}


MyList.propTypes = {
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  numberFilmsShown: PropTypes.number,
  changingFilmList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changingFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changingFilmList(maxCardsFilms));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { MyList };
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
