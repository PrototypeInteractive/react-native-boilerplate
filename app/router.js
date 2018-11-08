import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Main from './containers/main';
import Details from './containers/details';


const RootStack = createStackNavigator(
  {
    Main,
    Details,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    },
  },
);

export default RootStack;
