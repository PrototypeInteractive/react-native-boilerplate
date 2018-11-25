import React from 'react';
import { AppRegistry } from 'react-native';

import RootStack from './router';

if (__DEV__) {
  try {
    require('react-devtools');
  }
  catch (e) {
    console.log('react-devtools is not available'); // eslint-disable-line no-console
  }
}


const RNBoilerplate = () => (
  <RootStack />
);

AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
export default RNBoilerplate;
