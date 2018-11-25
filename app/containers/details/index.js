import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Screen from '../../components/screen';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class Details extends React.Component {
  render() {
    return (
      <Screen title="Details" showBack>
        <View style={styles.main}>
          <Text>Details Screen</Text>
        </View>
      </Screen>
    );
  }
}


export default Details;
