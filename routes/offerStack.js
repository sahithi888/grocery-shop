import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import Offer from '../scren/offer';
import headerButton from '../shared/header';
export default function OfferStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Offer' 
                component={Offer}
                options={headerButton(navigation, 'Offers Available ')}/>
        </Stack.Navigator>
    );
};
