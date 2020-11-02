import React, { Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Format from '../components/Format';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default class Offer extends Component {

render() {
    return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
           
           <Format/> 
        </View>
        </KeyboardAwareScrollView>
    )
}
}
const styles = StyleSheet.create ({
    container : {
        backgroundColor: '#115493',
        flex: 1
    }
})