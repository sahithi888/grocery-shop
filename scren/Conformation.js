import React  from 'react';
import {View,Text} from 'react-native';
import { globalStyles } from '../styles/global';
  

export default function Conformation(){

    return(

<View style ={globalStyles.container}>  
<Text style = {globalStyles.name}> Congratulations , your order has been placed !!     </Text>


</View>
    );
}