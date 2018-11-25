import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'; // Note: test renderer must be required after react-native.
import RNBoilerplate from '../app/index';


global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn()
  }
}

test('renders correctly', () => {
  const tree = renderer.create(
    <RNBoilerplate />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
