import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../features/home'; 
import Noticia from '../features/noticia';


const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRoutName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor: '#28C1FF'}}}/>
            <Stack.Screen name="Noticia" component={Noticia} options={({route}) => ({title: route.params.item.title, headerStyle:{backgroundColor: '#28C1FF'}})}/>
        </Stack.Navigator>
    )
}
