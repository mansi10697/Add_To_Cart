import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigations from './src/Components/Navigations';
import { store, persistor } from './src/Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigations />
        </PersistGate>
      </Provider>
    );
  }
}