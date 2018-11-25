import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from '../header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title={this.props.title} showBack={this.props.showBack} />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  showBack: PropTypes.bool,
};

Screen.defaultProps = {
  showBack: false,
};

export default Screen;
