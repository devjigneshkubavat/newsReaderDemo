import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Router from './src/router/Router';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, store} from './src/store/store';

const App: any = ({}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={Persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
