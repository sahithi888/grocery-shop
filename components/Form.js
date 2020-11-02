
import React  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';
export default function Form(){
    return (
      
       <View style={styles.container}>
         
           <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email-ID or Phone Number"
            placeholderTextColor ="#ffffff"
            />
            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            placeholderTextColor ="#ffffff"
            secureTextEntry={true}
            />
            <Text>Forgot Password?</Text>
              
            <TextInput style={styles.forgot} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email-ID/Phone Number"
            placeholderTextColor ="#ffffff"
           />
           <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signin}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
            
        </View>
       
    
    )
}

const styles = StyleSheet.create({
    
    container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    inputBox: {
        width:300,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10, 
        marginTop: 5,
        
    },
    forgot: {
      width:300,
      height: 45,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#ffffff',
      marginVertical: 15  
      
  },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
    },
    
    verify : {
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      width: 100,
      paddingVertical: 12 ,
      marginVertical: 12
    },
    signin : {
      backgroundColor: '#040404',
      borderRadius: 25,
      width: 200,
      paddingVertical: 12 ,
      marginVertical: 12
    }
    
  });
