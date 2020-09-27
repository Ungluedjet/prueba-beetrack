import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from '../navigation/stackNavigator';
import Favourite from '../features/favourite';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator
        initialRoutName="Home">
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Favourite" component={Favourite} options={{title: 'favoritos'}}/>
      </Tab.Navigator>
  );
}