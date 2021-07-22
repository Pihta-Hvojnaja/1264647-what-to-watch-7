
import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';

import PropTypes from 'prop-types';

import { NumberFilmsShown } from '../../const';


function ButtonShowMore({numberFilmsShown, changeFilmList}) {

  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          changeFilmList(numberFilmsShown + NumberFilmsShown.FOR_GENRE);
        }}
      >
        Show more
      </button>
    </div>
  );
}


ButtonShowMore.propTypes = {
  numberFilmsShown: PropTypes.number,
  changeFilmList: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  changeFilmList(numberFilmsShown) {
    dispatch(ActionCreator.changeFilmList(numberFilmsShown));
  },
});

const mapStateToProps = (state) => ({
  numberFilmsShown: state.numberFilmsShown,
});


export { ButtonShowMore };
export default connect(mapStateToProps, mapDispatchToProps)(ButtonShowMore);

