
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { fetchFavoriteMovies } from '../../store/api-actions';
import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import { NumberFilmsShown } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import HeaderPage from '../header/header-page';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';


const CLASS_NAME_MY_LIST = 'user-page__head';


function MyList(props) {
  const {
    moviesData,
    loadFavoriteMovies,
    isFavoriteMoviesLoaded,
    numberFilmsShown,
    changeFilmList,
  } = props;

  useEffect(() => {
    if(numberFilmsShown !== NumberFilmsShown.NO_NUMBER) {
      changeFilmList(NumberFilmsShown.NO_NUMBER);
      return;
    }

    if (!isFavoriteMoviesLoaded) {
      loadFavoriteMovies();
    }
  });


  if (!isFavoriteMoviesLoaded) {
    return <LoadingScreen />;
  }


  return(
    <div className="user-page">
      <HeaderPage extraClassName={CLASS_NAME_MY_LIST} isMyList>
        <h1 className="page-title user-page__title">My list</h1>
      </HeaderPage>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList moviesData={moviesData}/>
      </section>

      <Footer />
    </div>
  );
}


MyList.propTypes = {
  moviesData: PropTypes.oneOfType([PropTypes.arrayOf(MovieDataProp), PropTypes.array]).isRequired,
  loadFavoriteMovies: PropTypes.func.isRequired,
  isFavoriteMoviesLoaded: PropTypes.bool.isRequired,
  numberFilmsShown: PropTypes.number,
  changeFilmList: PropTypes.func.isRequired,
};

MyList.defaultProps = {
  numberFilmsShown: null,
};


const mapDispatchToProps = (dispatch) => ({
  changeFilmList(maxCardsFilms) {
    dispatch(ActionCreator.changeFilmList(maxCardsFilms));
  },

  loadFavoriteMovies() {
    dispatch(fetchFavoriteMovies());
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
  isFavoriteMoviesLoaded: state.loading.isFavoriteMoviesLoaded,
  moviesData: state.data.favoriteMoviesData,
});


export { MyList };
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
