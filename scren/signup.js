import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo from '../components/logo';
import Form from '../components/registerform';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
export default class Signup extends Component {

        goBack() {
                Actions.pop();
        }
        render() {
        return ( 
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <Text style={styles.title}>SIGNUP</Text>
        <Logo/>
        
        <Form type="Signup"/>
        <View style={styles.signupTextCont}>
          <TouchableOpacity onPress={this.goBack}>
            <Text>Already have an account.Sign In</Text>
            </TouchableOpacity>
        </View>
        </View>
        </KeyboardAwareScrollView>
        )
    }}

    const styles = StyleSheet.create({
        container : {
          backgroundColor: '#115493',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },
        signupTextCont: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent:'center',
            marginTop: 10,
            
        },
        title : {
          color: 'black',
          fontSize:30,
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop: 50,  
        }
      });
