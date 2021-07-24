
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../../store/api-actions';

import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';

import LoadingScreen from '../loading-screen/loading-screen';
import HeaderPage from '../header/header-page';
import NavReview from '../nav/nav-review';
import FormAddReview from '../form-add-review/form-add-review';


function AddReview(props) {
  const {
    movieData,
    loadMovie,
    isMovieLoaded,
  } = props;

  const { posterImage, backgroundImage, name } = movieData;
  const idFilm = useParams().id;


  useEffect(() => {
    if (!isMovieLoaded) {
      loadMovie(idFilm);
    }
  }, [idFilm, isMovieLoaded, loadMovie]);

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


AddReview.propTypes = {
  movieData: PropTypes.oneOfType([MovieDataProp, PropTypes.shape({})]).isRequired,
  loadMovie: PropTypes.func.isRequired,
  isMovieLoaded: PropTypes.bool.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadMovie(id) {
    dispatch(fetchMovie(id));
  },
});

const mapStateToProps = (state) => ({
  movieData: state.data.movieData,
  isMovieLoaded: state.loading.isMovieLoaded,
});


export { AddReview };
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
