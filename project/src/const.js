
export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/Mylist',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
};


export const TabOption = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};


export const INITIAL_GENRE = 'All genres';


export const NumberFilmsShown = {
  NO_NUMBER: null,
  FOR_GENRE: 8,
  FOR_MORE_LIKE_THIS: 4,
};


export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};


export const APIRoute = {
  POSTER_MOVIE: '/promo',
  MOVIES: '/films',
  MY_LIST: '/favorite',
  FILM: (idFilm) => `/films/${idFilm}`,
  COMMENTS: (idFilm) => `/comments/${idFilm}`,
  SIMILAR_MOVIES: (idFilm) => `/films/${idFilm}/similar`,
  REVIEW: (idFilm) => `/films/${idFilm}/review`,
  PLAYER: (idFilm) => `/player/${idFilm}`,
  // LOGIN: '/login',
  // LOGOUT: '/logout',
};
