
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import movieDataProp from '../pages/movie-data.prop';
import CommentDataProp from '../pages/comment-data.prop';

import { TabOption } from '../../const';

import TabsButtons from './tabs-buttons';
import TabOverview from './tab-overview';
import TabDetails from './tab-details';
import TabReviews from './tab-reviews';


function Tabs(props) {
  const {
    movieData,
    comments,
  } = props;

  const [currentOptionTab, setCurrentOptionTab] = useState(TabOption.OVERVIEW);

  const tabsButtonsComponent =
    (
      <TabsButtons
        currentOptionTab={currentOptionTab}
        onSetCurrentOptionTab={setCurrentOptionTab}
      />
    );


  switch (currentOptionTab) {
    case TabOption.OVERVIEW:
      return(
        <React.Fragment>
          {tabsButtonsComponent}
          <TabOverview movieData={movieData}/>
        </React.Fragment>
      );
    case TabOption.DETAILS:
      return(
        <React.Fragment>
          {tabsButtonsComponent}
          <TabDetails movieData={movieData} />
        </React.Fragment>
      );
    default:
      return(
        <React.Fragment>
          {tabsButtonsComponent}
          <TabReviews comments={comments}/>
        </React.Fragment>
      );
  }
}


Tabs.propTypes = {
  movieData: movieDataProp,
  comments: PropTypes.arrayOf(CommentDataProp).isRequired,
};


export default Tabs;
