import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import TabNavigator from './src/navigation/tabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './store';

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
