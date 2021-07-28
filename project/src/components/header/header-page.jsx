
import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';


function HeaderPage(props) {
  const {
    extraClassName = 'film-card__head',
    isMyList,
    isIndex,
    children,
  } = props;

  return (
    <header className={`page-header ${extraClassName}`}>
      <Logo isIndex={isIndex} />
      {children}
      <UserBlock isMyList={isMyList}/>
    </header>
  );
}


HeaderPage.propTypes ={
  extraClassName: PropTypes.string,
  isMyList: PropTypes.bool,
  isIndex: PropTypes.bool,
  children: PropTypes.node,
};

HeaderPage.defaultProps = {
  extraClassName: 'film-card__head',
  isMyList: false,
  isIndex: false,
  children: '',
};


export default React.memo(HeaderPage);
