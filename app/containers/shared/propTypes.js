/* eslint-disable import/prefer-default-export */

import PropTypes from 'prop-types';

// export const navigationPropType = PropTypes.shape({
//   goBack: PropTypes.func.isRequired
// });

export const reactNavigationPropTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func
  })
};
