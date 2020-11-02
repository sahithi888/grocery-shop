import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function logo() {
    return (
       <View style={styles.container}>
       <Image style={{width: 100, height:80, marginTop: 5}}
       
       source={require('../images/j.png')}
              /> 
              <Text style={styles.logoText}>Welcome to my App!</Text>
              </View>
    
    )
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color:'#e8ca18'
    }
  });
