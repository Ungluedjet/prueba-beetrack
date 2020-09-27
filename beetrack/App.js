import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { BackHandler } from 'react-native';
import { Provider } from 'react-redux';
import TabNavigator from './src/navigation/tabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './store';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();



const App: () => React$Node = () => {

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function(){return true});
    SplashScreen.hide();
  },[])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
