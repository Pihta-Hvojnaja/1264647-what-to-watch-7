
import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import PropTypes from 'prop-types';

import { NumberFilmsShown } from '../../const';


function ButtonShowMore({numberFilmsShown, changingFilmsList}) {


  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          changingFilmsList(numberFilmsShown + NumberFilmsShown.FOR_GENRE);
        }}
      >
        Show more
      </button>
    </div>
  );
}


ButtonShowMore.propTypes = {
  numberFilmsShown: PropTypes.number,
  changingFilmsList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changingFilmsList(numberFilmsShown) {
    dispatch(ActionCreator.changingFilmsList(numberFilmsShown));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { ButtonShowMore };
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

