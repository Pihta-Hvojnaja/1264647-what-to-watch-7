
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TabOption } from '../../const';


const buttonOptions = Object.values(TabOption);


function TabsButtons({currentOptionTab, onSetCurrentOptionTab}) {
  const getActiveClassName = (tabOption) =>
    (currentOptionTab === tabOption) && 'film-nav__item--active';

  return(
    <nav className="film-nav film-card__nav">
      <ul
        className="film-nav__list"
        onClick={(evt) => {
          evt.preventDefault();
          if (evt.target.id !== currentOptionTab) {
            onSetCurrentOptionTab(evt.target.id);
          }
        }}
      >
        {
          buttonOptions.map((buttonOption) => (
            <li key={buttonOption} className={`film-nav__item ${getActiveClassName(buttonOption)}`}>
              <Link id={buttonOption} to="#" className="film-nav__link">
                {buttonOption}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}


TabsButtons.propTypes = {
  currentOptionTab: PropTypes.string.isRequired,
  onSetCurrentOptionTab: PropTypes.func.isRequired,
};


export default TabsButtons;
