// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            getComponent={()=>require('../Public/Main')} 
        />
        <Stack.Screen
            name="Information"
            getComponent={()=>require('../Public/Information')} 
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Main;