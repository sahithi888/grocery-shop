import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import Cart from '../scren/cart';
import Home from '../scren/home';
import {Text, View, Button} from 'react-native';
import headerButton from '../shared/header';
import {connect} from 'react-redux';
import cartHeader from '../shared/cartHeader';

function HomeStackNavigator({navigation}) {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home" 
                component={Home}
                options={{
                    ...headerButton(navigation, 'Grocery Shop'),
                    ...cartHeader(navigation)
                }}/>
            <HomeStack.Screen name="Cart" component={Cart} />
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;