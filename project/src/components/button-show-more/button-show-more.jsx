
import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import PropTypes from 'prop-types';

import { NumberFilmsShown } from '../../const';


function ButtonShowMore({numberFilmsShown, changingFilmList}) {

  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          changingFilmList(numberFilmsShown + NumberFilmsShown.FOR_GENRE);
        }}
      >
        Show more
      </button>
    </div>
  );
}


ButtonShowMore.propTypes = {
  numberFilmsShown: PropTypes.number,
  changingFilmList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changingFilmList(numberFilmsShown) {
    dispatch(ActionCreator.changingFilmList(numberFilmsShown));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { ButtonShowMore };
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

