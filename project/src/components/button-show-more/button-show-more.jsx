
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNumberFilmsShown } from '../../store/movie-data/selectors';
import { changeFilmList } from '../../store/action';

import { NumberFilmsShown } from '../../const';


function ButtonShowMore() {
  const numberFilmsShown = useSelector(getNumberFilmsShown);
  const dispatch =  useDispatch();

  return(
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(changeFilmList(numberFilmsShown + NumberFilmsShown.FOR_GENRE));
        }}
      >
        Show more
      </button>
    </div>
  );
}


export default ButtonShowMore;
