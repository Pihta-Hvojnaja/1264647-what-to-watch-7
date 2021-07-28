
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFavoriteMoviesData, getIsFavoriteMoviesLoaded, getNumberFilmsShown } from '../../store/movie-data/selectors';
import { changeFilmList } from '../../store/action';
import { fetchFavoriteMovies } from '../../store/api-actions';
import { NumberFilmsShown } from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import HeaderPage from '../header/header-page';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';


const CLASS_NAME_MY_LIST = 'user-page__head';


function MyList() {
  const favoriteMoviesData = useSelector(getFavoriteMoviesData);
  const isFavoriteMoviesLoaded = useSelector(getIsFavoriteMoviesLoaded);
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch = useDispatch();


  useEffect(() => {
    if(numberFilmsShown !== NumberFilmsShown.NO_NUMBER) {
      dispatch(changeFilmList(NumberFilmsShown.NO_NUMBER));
      return;
    }

    if (!isFavoriteMoviesLoaded) {
      dispatch(fetchFavoriteMovies());
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
        <FilmList moviesData={favoriteMoviesData}/>
      </section>

      <Footer />
    </div>
  );
}


export default MyList;
