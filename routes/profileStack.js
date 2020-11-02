import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import Profile from '../scren/profile';
import headerButton from '../shared/header';

export default function ProfileStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Profile' 
                component={Profile}
                options={headerButton(navigation, 'Profile')}/>
        </Stack.Navigator>
    );
};