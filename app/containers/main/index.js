import React from 'react';
import {
  Text, Button, View, StyleSheet,
} from 'react-native';

import Screen from '../../components/screen';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Main extends React.Component {
  render() {
    return (
      <Screen title="Main">
        <View style={styles.main}>
          <Text>Main Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
      </Screen>
    );
  }
}

export default Main;
