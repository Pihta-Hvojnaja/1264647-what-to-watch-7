
import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';

import { AppRoute } from '../../const';

import Main from '../pages/main';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import Film from '../pages/film';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function App(props) {
  const {
    moviesData,
  } = props;


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyList moviesData={moviesData} />
        </Route>

        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>

        <Route exact path={AppRoute.REVIEW}>
          <AddReview />
        </Route>

        <Route exact path={AppRoute.PLAYER}>
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
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
};


export default App;
