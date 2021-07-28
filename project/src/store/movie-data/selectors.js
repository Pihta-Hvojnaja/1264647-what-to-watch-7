
import { NameSpace } from '../root-reducer';


export const getPosterMovieData = (state) => state[NameSpace.MOVIE_DATA].data.posterMovieData;
export const getMovieData = (state) => state[NameSpace.MOVIE_DATA].data.movieData;
export const getMoviesData = (state) => state[NameSpace.MOVIE_DATA].data.moviesData;
export const getRelatedMoviesData = (state) => state[NameSpace.MOVIE_DATA].data.relatedMoviesData;
export const getFavoriteMoviesData = (state) => state[NameSpace.MOVIE_DATA].data.favoriteMoviesData;
export const getCommentsData = (state) => state[NameSpace.MOVIE_DATA].data.commentsData;
export const getFilteredMoviesData = (state) => state[NameSpace.MOVIE_DATA].data.filteredMoviesData;


export const getIsPosterMovieLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isPosterMovieLoaded;
export const getIsMovieLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isMovieLoaded;
export const getIsMoviesLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isMoviesLoaded;
export const getIsRelatedMoviesLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isRelatedMoviesLoaded;
export const getIsFavoriteMoviesLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isFavoriteMoviesLoaded;
export const getIsCommentsLoaded = (state) => state[NameSpace.MOVIE_DATA].loading.isCommentsLoaded;


export const getGenres = (state) => state[NameSpace.MOVIE_DATA].genres;

export const getIdCurrentMovie = (state) => state[NameSpace.MOVIE_DATA].idCurrentMovie;

export const getNumberFilmsShown = (state) => state[NameSpace.MOVIE_DATA].numberFilmsShown;
