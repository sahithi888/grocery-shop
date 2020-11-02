const { requireNativeComponent } = require("react-native");

import React, { Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { render } from 'react-dom';
import Logo from '../components/logo';
import Splash from '../components/splash';
export default class Onboarding extends Component {

render() {
    return (
        <View style={styles.container}>
            <Text> Onboarding </Text>
            
            <Splash/>
        </View>
    )
}
}

const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#115493',
        flex: 1
    }
})