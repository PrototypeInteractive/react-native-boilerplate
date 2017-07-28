'use strict'

import { AsyncStorage} from 'react-native';
import { Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from './index.js';

const RouterWithRedux = connect()(Router);
const middleware = [thunk];

export default function configureStore(initialState) {
  const store = compose(
  	applyMiddleware(...middleware),
  	autoRehydrate()
  	)
  	(createStore)(reducers)
    persistStore(store, {storage: AsyncStorage});

  return store;
}
