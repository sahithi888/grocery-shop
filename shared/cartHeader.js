import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import ShoppingCartIcon from './shoppingCartIcon';

export default function cartHeader(cartNavigation){
    /*return {
        headerRight: () => 
        <MaterialIcons 
            name="menu"
            size={28}
            style={{
                paddingStart: 20,
                alignContent: 'center'
            }} 
            onPress={() => navigation.openDrawer()}/>,
    }*/
    return{
        headerRight: () =>
            <ShoppingCartIcon navigation={cartNavigation}/>
    }
}

const styles = StyleSheet.create({
    headerTitle:{
        alignItems:'center',
    },
    headerTitleText:{
        fontWeight: 'bold',
        fontSize: 20
    },
    header:{
        backgroundColor: 'coral'
    }
});

//export default function headerCart() {

//}