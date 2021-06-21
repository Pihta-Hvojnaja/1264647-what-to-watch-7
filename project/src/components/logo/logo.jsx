
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Logo(props) {
  const { className = 'logo__link' } = props;

  return (
    <div className="logo">
      <Link to="/" className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}


Logo.propTypes = {
  className: PropTypes.string,
};


export default Logo;