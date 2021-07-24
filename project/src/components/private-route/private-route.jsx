import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../utils/get-authorization-status';


function PrivateRoute({render, path, exact }) {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        getAuthorizationStatus() === AuthorizationStatus.AUTH
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
