import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, StyleSheet, Button
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { reactNavigationPropTypes } from '../../containers/shared/propTypes';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    textAlign: 'center',
    color: 'black',
    paddingRight: 10,
    flexGrow: 1,
    fontSize: 16
  },
  button: {
    position: 'absolute',
    zIndex: 2
  }
});

class Header extends Component {
  onBackPress = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  render() {
    const { showBack, title } = this.props;

    return (
      <View style={styles.header}>
        <View style={styles.button}>
          {showBack && <Button onPress={this.onBackPress} title="Back" /> }
        </View>
        <Text style={styles.text}>
          {title}
        </Text>
      </View>
    );
  }
}


Header.propTypes = {
  ...reactNavigationPropTypes,
  title: PropTypes.string.isRequired,
  showBack: PropTypes.bool
};

Header.defaultProps = {
  showBack: false
};


export default withNavigation(Header);
