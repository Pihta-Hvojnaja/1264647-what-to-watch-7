
import React from 'react';

import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';

import PropTypes from 'prop-types';

import { isCheckedAuth } from '../../utils/isCheckedAuth';
import UserBlockOut from './user-block-out';
import UserBlockIn from './user-block-in';


function UserBlock({isMyList = false}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    isCheckedAuth(authorizationStatus) ?
      <UserBlockOut /> : <UserBlockIn isMyList={isMyList}/>
  );
}


UserBlock.propTypes = {
  isMyList: PropTypes.bool,
};

UserBlock.defaultProps = {
  isMyList: false,
};


export default UserBlock;
