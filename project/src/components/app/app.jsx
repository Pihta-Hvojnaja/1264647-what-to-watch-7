
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDataProp from '../pages/movie-data.prop';
import CommentDataProp from '../pages/comment-data.prop';

import { AppRoute } from '../../const';

import Main from '../pages/main';
import SignIn from '../pages/sign-in';
import MyList from '../pages/my-list';
import Film from '../pages/film';
import AddReview from '../pages/add-review';
import Player from '../pages/player';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function App(props) {
  const { movieData, moviesData, comments } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            movieData={movieData}
          />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.LIST}>
          <MyList moviesData={moviesData} />
        </Route>

        <Route exact path={AppRoute.DEV_FILM}>
          <Film
            movieData={movieData}
            moviesData={moviesData}
            comments={comments}
          />
        </Route>

        <Route exact path={AppRoute.DEV_REVIEW}>
          <AddReview movieData={movieData} />
        </Route>

        <Route exact path={AppRoute.DEV_PLAYER}>
          <Player movieData={movieData} />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  movieData: MovieDataProp,
  moviesData: PropTypes.arrayOf(MovieDataProp).isRequired,
  comments: PropTypes.arrayOf(CommentDataProp).isRequired,
};


export default App;
