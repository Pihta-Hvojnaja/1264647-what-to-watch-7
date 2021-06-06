
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {AppRoute} from '../../const';

import Main from '../pages/main';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import Film from '../pages/film';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import PropTypes from 'prop-types';


function App(props) {
  const { movieData } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main movieData = {movieData} />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.LIST}>
          <MyList />
        </Route>

        <Route exact path={AppRoute.DEV_FILM}>
          <Film />
        </Route>

        <Route exact path={AppRoute.DEV_REVIEW}>
          <AddReview />
        </Route>

        <Route exact path={AppRoute.DEV_PLAYER}>
          <Player />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  movieData: PropTypes.object.isRequired,
};


export default App;
