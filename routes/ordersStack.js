import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import Orders from '../scren/orders';
import headerButton from '../shared/header';

export default function OrdersStack({navigation}) {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Orders'
                component={Orders}
                options={headerButton(navigation, 'Orders')}/>
        </Stack.Navigator>
    );
};