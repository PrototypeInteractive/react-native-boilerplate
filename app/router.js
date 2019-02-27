import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './containers/main';
import Details from './containers/details';


const RootStack = createStackNavigator(
  {
    Main,
    Details
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  },
);

export default createAppContainer(RootStack);
