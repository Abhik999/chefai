import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddItem from '../screens/AddItem';
import List from '../screens/List';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
       
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='AddItem' component={AddItem} />
        <Stack.Screen name='List' component={List} />
        </Stack.Navigator>
  );
}
