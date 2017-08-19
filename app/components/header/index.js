import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  header: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
  },
});

class Header extends Component {
  onBackPress() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.header}>
        <Button onPress={this.onBackPress} title="Back" />
        <Text style={styles.text}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;
