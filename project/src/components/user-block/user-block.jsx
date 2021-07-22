
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { isCheckedAuth } from '../../utils/isCheckedAuth';
import UserBlockOut from './user-block-out';
import UserBlockIn from './user-block-in';


function UserBlock({authorizationStatus, isMyList}) {

  return (
    isCheckedAuth(authorizationStatus) ?
      <UserBlockOut /> : <UserBlockIn isMyList={isMyList}/>
  );
}


UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isMyList: PropTypes.bool,
};

UserBlock.defaultProps = {
  isMyList: false,
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export { UserBlock };
export default connect(mapStateToProps, null)(UserBlock);
