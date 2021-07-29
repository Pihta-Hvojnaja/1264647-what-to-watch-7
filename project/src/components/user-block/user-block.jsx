
import React from 'react';

import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../const';
import PropTypes from 'prop-types';

import UserBlockOut from './user-block-out';
import UserBlockIn from './user-block-in';


function UserBlock({isMyList = false}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.NO_AUTH ?
      <UserBlockOut /> : <UserBlockIn isMyList={isMyList}/>
  );
}


UserBlock.propTypes = {
  isMyList: PropTypes.bool,
};

UserBlock.defaultProps = {
  isMyList: false,
};


export default React.memo(UserBlock);
