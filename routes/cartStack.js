import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import Cart from '../scren/cart';

export default function CartStack() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    );
};