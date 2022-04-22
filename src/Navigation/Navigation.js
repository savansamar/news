import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Main from '../Public/Main'
import Information from '../Public/Information'


function Navigation() {
    
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
                
            >
        <Stack.Screen
            options={{
                headerShown:false
            }}
            name="Home"
            component={Main}
/>
<Stack.Screen
options={{
    headerShown:false
}}
            name="Information"
            component={Information}
/>
        
      </Stack.Navigator>   
        </NavigationContainer>
    )
}

export default Navigation
