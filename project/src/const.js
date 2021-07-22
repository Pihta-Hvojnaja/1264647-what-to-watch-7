
export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/404',
  ERROR: '/error',
};


export const APIRoute = {
  POSTER_MOVIE: '/promo',
  MOVIE: '/films/:id',
  MOVIES: '/films',
  SIMILAR_MOVIES: '/films/:id/similar',
  FAVORITE_MOVIES: '/favorite',
  COMMENTS: '/comments/:id',
  POST_COMMENT: '/comments/:film_id',
  STATUS_MOVIE: '/favorite/:film_id/:status',
  LOGIN: '/login',
  LOGOUT: '/logout',
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
  FOR_SIMILAR: 4,
};


export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};


export const SourceData = {
  POSTER_MOVIE: 'poster-movie',
  MOVIE: 'movie',
};


export const MessageError = {
  UPDATE: 'При обновлении данных фильма произошла ошибка, данные не обновлены',
  POST_COMMENT: 'Сожалеем, но комментарий не отправлен: неверный запрос или проблемы с сетью',
  LOAD_COMMENTS: 'Сожалеем, но комментарии не загружены: неверный запрос или проблемы с сетью',
  LOAD_RELARED_MOVIES: 'Сожалеем, но список похожих фильмов не был загружен: неверный запрос или проблемы с сетью',
  LOGIN: 'При логировании произошла ошибка: неверный запрос или проблемы с сетью',
  NO: '',
};
