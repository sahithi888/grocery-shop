import React from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator }from '@react-navigation/stack';
import ContactUs from '../scren/contactus';
import headerButton from '../shared/header';

export default function ContactUsStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='ContactUs' 
                component={ContactUs}
                options={headerButton(navigation, 'Contact Us')}/>
        </Stack.Navigator>
    );
};