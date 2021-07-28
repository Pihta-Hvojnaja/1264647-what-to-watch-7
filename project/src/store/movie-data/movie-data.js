
import { createReducer } from '@reduxjs/toolkit';
import {
  loadPosterMovie,
  loadMovie,
  loadMovies,
  loadRelatedMovies,
  loadFavoriteMovies,
  loadComments,
  createMovies,
  changeFilmList,
  changeStatusMovie,
  resetData

} from '../action';

import { getGenresList } from '../../utils/getGenresList';
import { NumberFilmsShown } from '../../const';


const initialState = {
  data: {
    posterMovieData: {},
    movieData: {},
    moviesData: [{}],
    relatedMoviesData: [{}],
    favoriteMoviesData: [{}],
    commentsData: [{}],
    filteredMoviesData: [{}],
  },
  loading: {
    isPosterMovieLoaded: false,
    isMovieLoaded: false,
    isMoviesLoaded: false,
    isRelatedMoviesLoaded: false,
    isFavoriteMoviesLoaded: false,
    isCommentsLoaded: false,
  },
  genres: [''],
  idCurrentMovie: null,
  numberFilmsShown: NumberFilmsShown.FOR_GENRE,
};


const movieData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPosterMovie, (state, action) => {
      state.data.posterMovieData = action.payload;
      state.loading.isPosterMovieLoaded = true;
    })
    .addCase(loadMovie, (state, action) => {
      state.data.movieData = action.payload;
      state.loading.isMovieLoaded = true;
    })
    .addCase(loadMovies, (state, action) => {
      state.genres = getGenresList(action.payload);
      state.data.moviesData = action.payload;
      state.data.filteredMoviesData = action.payload;
      state.loading.isMoviesLoaded = true;
    })
    .addCase(loadRelatedMovies, (state, action) => {
      state.data.relatedMoviesData = action.payload;
      state.loading.isRelatedMoviesLoaded = true;
    })
    .addCase(loadFavoriteMovies, (state, action) => {
      state.data.favoriteMoviesData = action.payload;
      state.loading.isFavoriteMoviesLoaded = true;
    })
    .addCase(loadComments, (state, action) => {
      state.data.commentsData = action.payload;
      state.loading.isCommentsLoaded = true;
    })
    .addCase(createMovies, (state, action) => {
      state.data.filteredMoviesData = action.payload;
      state.numberFilmsShown = NumberFilmsShown.FOR_GENRE;
    })
    .addCase(changeFilmList, (state, action) => {
      state.numberFilmsShown = action.payload;
    })
    .addCase(changeStatusMovie, (state) => {
      state.loading.isFavoriteMoviesLoaded = false;
    })
    .addCase(resetData, (state, action) => {
      state.loading.isMovieLoaded = false;
      state.loading.isCommentsLoaded = false;
      state.loading.isRelatedMoviesLoaded = false;
      state.idCurrentMovie = action.payload;
    });
});


export { movieData };
