
import React  from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import browserHistory from '../../browser-history';

import { AppRoute } from '../../const';

import PrivateRoute from '../private-route/private-route';
import Main from '../pages/main';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import Film from '../pages/film';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function App() {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList />}
        />

        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={() => <AddReview />}
        />

        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>

        <Route exact path={AppRoute.ERROR}>
          <NotFoundScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
