import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Router from './router';
import configureStore from './reducers/configureStore';

if (__DEV__) {
  require('react-devtools');
}

const store = configureStore();

const RNBoilerplate = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
export default RNBoilerplate;
