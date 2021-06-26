
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';
import CommentDataProp from '../pages/comment-data.prop';


export default PropTypes.shape({
  movieData: MovieDataProp,
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  comments: CommentDataProp,
}).isRequired;
