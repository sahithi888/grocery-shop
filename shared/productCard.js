import React, { useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {globalStyles} from '../styles/global';
import FlatButton from './button';
import {connect} from 'react-redux';

const ProductCard = ({ productItem, cartItems, addItemToCart }) => {

    //State variable for controlling quantity
    const [quantity, setQuantity] = useState(1);

    //Function to add product to cart
    //using current state of quantity
    const addToCart = () => {
        const cartObject = {
            ...productItem,
            quantity: quantity
        };
        addItemToCart(cartObject);
        const msg = "Added " + productItem.prod_name + " to cart successfully.";
        Alert.alert('Success', msg);
    }

    const incrementQuantity = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
    }

    const decrementQuantity = () => {
        const newQty = quantity - 1;
        if(newQty>=1)
            setQuantity(newQty);
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
                        <Text>Rs.{productItem.price}/-</Text>
                        <Text>{productItem.decs}</Text>
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
                    <FlatButton
                        text='Add To Cart'
                        onPress={addToCart} />
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
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);