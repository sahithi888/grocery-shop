import CheckBox from '@react-native-community/checkbox';
import React ,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Payment({navigation}){

    

    const [isSelected, setSelection] = useState(false);
    const [credit, setcredit] = useState(false);
    const [debit ,setDEbit] = useState(false);
    const pressHandler = () => {
        navigation.push('Conformation')
    }
    return (
        <View style={styles.container}>
           <ScrollView>

<Card>
<View style={styles.checkboxContainer}>
<CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}> Cash on delivery </Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>



<Text style={globalStyles.text}> Debit Card  </Text>
     <TextInput 
     multiline
     keyboardType='default'
     style={globalStyles.input}
     placeholder='card no'
     onChangeText = {(val) => setDEbit(val)}/>

<Text style={globalStyles.text}> Credit Card </Text>
     <TextInput 
     multiline
     keyboardType='default'
     style={globalStyles.input}
     placeholder='card no'
     onChangeText = {(val) => setcredit(val)}/>
     
</Card>
<TouchableOpacity onPress ={pressHandler}>
          <Text style={globalStyles.pay}> Proceed </Text>
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

    
