import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/user/selectors';
import PropTypes from 'prop-types';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatusStore } from '../../utils/get-authorization-status-store';


function PrivateRoute({render, path, exact }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        (authorizationStatus === AuthorizationStatus.AUTH) ||
        (getAuthorizationStatusStore() === AuthorizationStatus.AUTH)
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}


PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};


export default PrivateRoute;
