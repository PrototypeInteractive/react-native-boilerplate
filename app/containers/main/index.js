import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  }
});

const Main = () => (
  <View style={styles.main}>
    <Text>
         Main Screen
    </Text>
  </View>
);


export default Main;
