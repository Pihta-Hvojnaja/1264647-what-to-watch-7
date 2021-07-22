

export const adaptMovieToClient = (dataMovie) => {
  const adaptedDataFilm = Object.assign(
    {},
    {
      id: dataMovie.id,
      name: dataMovie.name,
      description: dataMovie.description,
      rating: dataMovie.rating,
      director: dataMovie.director,
      starring: dataMovie.starring,
      genre: dataMovie.genre,
      released: dataMovie.released,
      posterImage: dataMovie.poster_image,
      previewImage: dataMovie.preview_image,
      backgroundImage: dataMovie.background_image,
      backgroundColor: dataMovie.background_color,
      videoLink: dataMovie.video_link,
      previewVideoLink: dataMovie.preview_video_link,
      scoresCount: dataMovie.scores_count,
      runTime: dataMovie.run_time,
      isFavorite: dataMovie.is_favorite,
    },
  );

  return adaptedDataFilm;
};


export const adaptMovieToServer = (dataMovie) => {
  const adaptedDataFilm = Object.assign(
    {},
    {
      'id': dataMovie.id,
      'name': dataMovie.name,
      'poster_image': dataMovie.posterImage,
      'preview_image': dataMovie.previewImage,
      'background_image': dataMovie.backgroundImage,
      'background_color': dataMovie.backgroundColor,
      'video_link': dataMovie.videoLink,
      'preview_video_link': dataMovie.previewVideoLink,
      'description': dataMovie.description,
      'rating': dataMovie.rating,
      'scores_count': dataMovie.scoresCount,
      'director': dataMovie.director,
      'starring': dataMovie.starring,
      'run_time': dataMovie.runTime,
      'genre': dataMovie.genre,
      'released': dataMovie.released,
      'is_favorite': dataMovie.isFavorite,
    },
  );

  return adaptedDataFilm;
};


export const adaptAuthInfoToClient = (dataAuthInfo) => {
  const adaptedDataAuthInfo = Object.assign(
    {},
    {
      id: dataAuthInfo.id,
      email: dataAuthInfo.email,
      name: dataAuthInfo.name,
      avatarUrl: dataAuthInfo.avatar_url,
    },
  );

  return adaptedDataAuthInfo;
};
