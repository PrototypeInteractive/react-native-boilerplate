/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {
  Text, Button, View, StyleSheet
} from 'react-native';

import Screen from '../../components/screen';
import { reactNavigationPropTypes } from '../shared/propTypes';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Main extends React.Component {
  static propTypes = {
    ...reactNavigationPropTypes
  }

  render() {
    const { navigation } = this.props;

    return (
      <Screen title="Main">
        <View style={styles.main}>
          <Text>Main Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.push('Details')}
          />
        </View>
      </Screen>
    );
  }
}

export default Main;
