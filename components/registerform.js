import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
export default class logo extends Component {
    redirect() {
        Actions.login();
    }
    render() {
    return (
      
       <View style={styles.container}>
        
             <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Full Name"
            placeholderTextColor ="#ffffff"
            />
             <View style={styles.innercontainer}>
            <TextInput style={styles.Box} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email-ID"
            placeholderTextColor ="#ffffff"
            />
            <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.innercontainer}>
            <TextInput style={styles.Box} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email OTP"
            placeholderTextColor ="#ffffff"
            />   
            <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.innercontainer}>
            <TextInput style={styles.Box} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Phone Number"
            placeholderTextColor ="#ffffff"
            />   
            <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.innercontainer}>
            <TextInput style={styles.Box} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Phone OTP "
            placeholderTextColor ="#ffffff"
            />   
            <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.innercontainer}>
            <TextInput style={styles.Box} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Location"
            placeholderTextColor ="#ffffff"
            />   
            <TouchableOpacity style={styles.verify}>
              <Text style={styles.buttonText}>Locate</Text>
            </TouchableOpacity>
            </View>
            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Enter Password"
            placeholderTextColor ="#ffffff"
            secureTextEntry={true}
            /> 
            <TextInput style={styles.inputBox} 
           underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Confirm Password"
            placeholderTextColor ="#ffffff"
            secureTextEntry={true}
            />   
            <TouchableOpacity onPress={this.redirect} style={styles.register}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
       
    
    )
}}

const styles = StyleSheet.create({
    
    container : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: "space-between",  
        alignItems: "center" ,
        width: 150
        
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
    Box: {
        width:200,
        height: 45,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginLeft: -75,
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
      backgroundColor: '#040404',
      borderRadius: 25,
      width: 80,
      paddingVertical: 12 ,
      marginVertical: 12,
      marginLeft: 20
    },
    register : {
        backgroundColor: '#040404',
      borderRadius: 25,
      width: 120,
      paddingVertical: 12 ,
      marginVertical: 12,
      marginLeft: 20
    }
    
  });
