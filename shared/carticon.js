
import  React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function CartIcon()
{

    return(

        <View style={globalStyles.header}>
       <AntDesign name="shoppingcart" size={24} color="black"  style={styles.icon}/>
        

         <View>
             <Text style={globalStyles.headerText}> Your Cart</Text>
         </View> 
         </View>
    );
}

const styles = StyleSheet.create({

    icon:{
        position:'absolute',
        left:40,
    }
 });