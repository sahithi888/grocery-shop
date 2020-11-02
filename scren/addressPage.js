import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';


export default function Address ({navigation}){


const[address,setAddress]= useState('');
const[pincode,setPincode] = useState(' ');

const pressHandler = ()=>{
     navigation.push('Payment')
}


    return(
    <View style ={globalStyles.container}>
        <ScrollView>

<Card>
<Text style={globalStyles.text}> Address: </Text>
     <TextInput 
     multiline
     keyboardType='default'
     style={globalStyles.input}
     placeholder='Address'
     onChangeText = {(val) => setAddress(val)}/>

<Text style={globalStyles.text}> Pin Code: </Text>
     <TextInput 
     multiline
     keyboardType='numbers-and-punctuation'
     style={globalStyles.input}
     placeholder='Pin Code'
     onChangeText = {(val) => setPincode(val)}/>
     <Text style={globalStyles.text}> Your address </Text>
    <Text style={globalStyles.description}> {address}</Text>
    
</Card>
<TouchableOpacity onPress ={pressHandler}>
          <Text style={globalStyles.pay}> Proceed to payment </Text>
     </TouchableOpacity>
     
     </ScrollView>

    </View>
    
    );
}
 const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor:'white',
        paddingVertical:20,
    
    }
 });

    
