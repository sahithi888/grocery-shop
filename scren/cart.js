import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import products from '../shared/data';
import { connect, useSelector } from 'react-redux';
import CartCard from '../shared/cartCard';
import Card from '../shared/card';

export function Cart({cartItems,navigation}) {

    const pressHandler = ()=>{
        navigation.push('Place');
    }

    const crt = useSelector(state => state.cartItems);
    const cartPr = crt;
    const prods = [];
    for(var i=0; i<cartItems.length; i++){
        const prod = products.filter(item => cartItems[i].p_id === item.p_id);
        //Pushes cartQuantity to cartProductList.
        prods.push({...prod[0], quantity: cartItems[i].quantity});
    }
    return (
        <View style={globalStyles.container}>
            <Card> 
            <FlatList
                data={prods}
                keyExtractor={(item) => item.p_id.toString()}
                renderItem={ ({item}) => (
                <CartCard productItem={item} />
                )} />
            <Text>Total Cost: {cartPr.reduce((a, c) => a + c.price * c.quantity, 0)}</Text>
            <Button title ='Buy now' onPress ={ pressHandler}/> 
            </Card>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}
export default connect(mapStateToProps)(Cart);