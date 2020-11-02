import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

function ShoppingCartIcon({cartItems, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.cartSizeHolder}>
                <Text style={styles.cartSizeText}>{cartItems.length}</Text>
            </View>
            <Icon 
                name='ios-cart' 
                size={30}
                onPress={() => navigation.navigate("Cart")}/>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon);
//export default ShoppingCartIcon;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:20
    },
    cartSizeHolder:{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        right: 35,
        bottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    cartSizeText:{
        fontWeight: 'bold',
        color: 'white',
    }
});