
import PropTypes from 'prop-types';
import MovieDataProp from './movie-data.prop';


export default PropTypes.shape({
  movieData: MovieDataProp,
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
}).isRequired;
