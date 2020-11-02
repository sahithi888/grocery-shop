import React, { useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {globalStyles} from '../styles/global';
import FlatButton from './button';
import {connect} from 'react-redux';

const CartCard = ({ productItem, cartItems, addItemToCart, updateItemInCart, removeFromCart }) => {

    //State variable for controlling quantity
    const [quantity, setQuantity] = useState(productItem.quantity);
    const [totalPrice, setTotalPrice] = useState(productItem.price * quantity);

    //Function to add product to cart
    //using current state of quantity
    const addToCart = () => {
        const cartObject = {
            ...productItem,
            quantity: quantity
        };
        addItemToCart(cartObject);
        //setQuantity(quantity);
        //const msg = "New quantity of " + productItem.prod_name + " is " + quantity;
        //Alert.alert('Success', msg);
    }

    const incrementQuantity = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        setTotalPrice(productItem.price * newQty);
        const cartObject = {
            ...productItem,
            quantity: newQty
        };
        updateItemInCart(cartObject);
        const msg = "Increment of " + productItem.prod_name + " was successful. ";
        Alert.alert('Success', msg);
    }

    const decrementQuantity = () => {
        const newQty = quantity - 1;
        if(newQty>=1){
            setQuantity(newQty);
            setTotalPrice(productItem.price * newQty);
            const cartObject = {
                ...productItem,
                quantity: newQty
            };
            updateItemInCart(cartObject);
            const msg = "Decrement of " + productItem.prod_name + " was successful. ";
            Alert.alert('Success', msg);
        }else{
            const cartObject = {
                ...productItem,
                quantity: newQty
            };
            removeFromCart(cartObject);
            const msg = "Removed " + productItem.prod_name + " from cart. ";
            Alert.alert('Success', msg);
        }
    }

    return (
        <View style={globalStyles.card}>
            <View style={globalStyles.cardContent}>
                {/* Presently hardcoded, obtain image from productItem object*/}
                <View style={globalStyles.horizontalComponent}>
                    <Image 
                        source={require('../assets/pul1.jpg')}
                        style={globalStyles.image}/>
                    <View style={globalStyles.horizontalItem}>
                        <Text style={globalStyles.product_prod_name}>{productItem.prod_name}</Text>
                        <Text>{productItem.cat_name}</Text>
                        <Text>Unit Price: Rs. {productItem.price}/-</Text>
                        <Text>Total Price: Rs. {totalPrice}/-</Text>
                    </View>
                </View>
                <View style={globalStyles.horizontalComponent}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='remove'
                            size={28}
                            onPress={decrementQuantity} />
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='add'
                            size={28}
                            onPress={incrementQuantity} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({
            type:'ADD',
            payload: product
        }),
        updateItemInCart: (product) => dispatch({
            type:'UPDATE',
            payload: product
        }),
        removeFromCart: (product) => dispatch({
            type:'REMOVE',
            payload:product
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartCard);