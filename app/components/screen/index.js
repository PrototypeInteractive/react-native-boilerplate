import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from '../header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
});

const Screen = ({ title, showBack, children }) => (
  <SafeAreaView style={styles.container}>
    <Header title={title} showBack={showBack} />
    {children}
  </SafeAreaView>
);

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  showBack: PropTypes.bool,
  children: PropTypes.node
};

Screen.defaultProps = {
  showBack: false,
  children: null
};

export default Screen;
