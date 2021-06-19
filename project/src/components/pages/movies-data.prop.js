
import PropTypes from 'prop-types';


const movieData = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,

}).isRequired;


export default PropTypes.shape({
  movieData: movieData,
  moviesData: PropTypes.arrayOf(movieData).isRequired,
}).isRequired;
