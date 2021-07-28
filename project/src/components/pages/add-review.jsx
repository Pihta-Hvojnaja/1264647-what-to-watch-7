
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getMovieData, getIsMovieLoaded } from '../../store/movie-data/selectors';
import { fetchMovie } from '../../store/api-actions';

import LoadingScreen from '../loading-screen/loading-screen';
import HeaderPage from '../header/header-page';
import NavReview from '../nav/nav-review';
import FormAddReview from '../form-add-review/form-add-review';


function AddReview() {
  const movieData = useSelector(getMovieData);
  const isMovieLoaded = useSelector(getIsMovieLoaded);
  const dispatch = useDispatch();

  const { posterImage, backgroundImage, name } = movieData;
  const idFilm = useParams().id;


  useEffect(() => {
    if (!isMovieLoaded) {
      dispatch(fetchMovie(idFilm));
    }
  }, [idFilm, isMovieLoaded, dispatch]);

  if (!isMovieLoaded) {
    return <LoadingScreen />;
  }


  return(
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderPage>
          <NavReview name={name} idFilm={idFilm} />
        </HeaderPage>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview idFilm={idFilm}/>
      </div>
    </section>
  );
}


export default AddReview;
