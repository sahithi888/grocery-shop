import  React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function DetailsIcon()
{
    const pressHandler = ()=>{
        navigation.push('Cart');
    }
    return(

        <View style={globalStyles.header}>
       <AntDesign name="shoppingcart" size={24} color="black"  style={styles.icon}/>
       <Button title ='go to cart'  
       onPress ={ pressHandler}/>

         <View>
             <Text style={globalStyles.headerText}> Details</Text>
         </View> 
         </View>
    );
}

const styles = StyleSheet.create({

    icon:{
        position:'absolute',
        right:40,
    }
 });