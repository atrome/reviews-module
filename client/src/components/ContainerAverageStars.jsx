import React from 'react';
import PropTypes from 'prop-types';

import TotalReviews from './TotalReviews';
import SearchReviews from './SearchReviews';
import ReviewStarsByDescriptor from './ReviewStarsByDescriptor';

const ContainerAverageStars = props => (
  <div>
    <h3> Average Stars Container </h3>
    <TotalReviews
      overallAvg={props.averageStarsObj.overallAvg}
      numReviews={props.averageStarsObj.numReviews}
    />
    <SearchReviews />
    <ReviewStarsByDescriptor
      accuracyAvg={props.averageStarsObj.accuracyAvg}
      communicationAvg={props.averageStarsObj.communicationAvg}
      cleanlinessAvg={props.averageStarsObj.cleanlinessAvg}
      locationAvg={props.averageStarsObj.locationAvg}
      checkinAvg={props.averageStarsObj.checkinAvg}
      valueAvg={props.averageStarsObj.valueAvg}
    />
  </div>
);

ContainerAverageStars.propTypes = {
  averageStarsObj: PropTypes.shape({
    overallAvg: PropTypes.number,
    accuracyAvg: PropTypes.number,
    communicationAvg: PropTypes.number,
    cleanlinessAvg: PropTypes.number,
    locationAvg: PropTypes.number,
    checkinAvg: PropTypes.number,
    valueAvg: PropTypes.number,
    numReviews: PropTypes.number,
  }),
};

ContainerAverageStars.defaultProps = {
  averageStarsObj: {
    overallAvg: 1,
    accuracyAvg: 1,
    communicationAvg: 1,
    cleanlinessAvg: 1,
    locationAvg: 1,
    checkinAvg: 1,
    valueAvg: 1,
    numReviews: 1,
  },
};

export default ContainerAverageStars;
