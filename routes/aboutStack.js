import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import About from '../scren/about';
import headerButton from '../shared/header';
export default function AboutStack({navigation}) {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='About' 
                component={About}
                options={headerButton(navigation, 'About Us')}/>
        </Stack.Navigator>
    );
};