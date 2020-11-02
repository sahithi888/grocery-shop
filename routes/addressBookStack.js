import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import AddressBook from '../scren/addressBook';
import headerButton from '../shared/header';
export default function AddressBookStack({navigation}){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Address Book' 
                component={AddressBook}
                options={headerButton(navigation, 'Address Book')}/>
        </Stack.Navigator>
    );
};