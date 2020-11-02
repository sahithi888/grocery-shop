import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, ActionSheetIOS } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    go() {
        Actions.login();
    }
    blow() {
        Actions.signup();
    }
    render() {
    return (
       <View style={styles.container}>
        <Swiper  showsPagination={false}>
            <View style={styles.slide}>
                <Image source={require('../images/j.png')}
                 />
                <Text style={styles.heading}>
                    Welcome to my app!!
                </Text>
                <View style={styles.innercontainer}>
                <TouchableOpacity onPress={this.go} style={styles.verify}>
                   <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.blow} style={styles.verify}>
                  <Text style={styles.buttonText}>Signup</Text>
                 </TouchableOpacity>
                </View>
            </View>
            <View style={styles.slide}>
                <Image source={require('../images/scene1.jpg')}
                style={styles.image} />
                <View style={styles.innercontainer}>
                <TouchableOpacity onPress={this.go} style={styles.verify}>
                   <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.blow} style={styles.verify}>
                  <Text style={styles.buttonText}>Signup</Text>
                 </TouchableOpacity>
                </View>
            </View>
            <View style={styles.slide}>
                <Image source={require('../images/scene2.jpg')}
                style={styles.image} />
                <View style={styles.innercontainer}>
                <TouchableOpacity onPress={this.go} style={styles.verify}>
                   <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={this.blow} style={styles.verify}>
                  <Text style={styles.buttonText}>Signup</Text>
                 </TouchableOpacity>
                </View>
            </View>
        </Swiper>
             
        </View>
    )
}}

const styles = StyleSheet.create({
    
    container : {
        backgroundColor: '#115493',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    slide: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
            width: width,
            height: height,
            marginBottom: 0
    },
    heading: {
        fontSize: 25
    },
    verify : {
        backgroundColor: '#040404',
        borderRadius: 25,
        width: 80,
        paddingVertical: 12 ,
        marginVertical: 12,
        marginLeft: -5,
        marginHorizontal: 20,
        marginTop: 100
      },
      innercontainer: {
        flexDirection: 'row',
        justifyContent: "space-between",  
        alignItems: "center" ,
        width: 150
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
      }
  });
