import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function headerButton(navigation, title){
    return {
        headerLeft: () => 
        <MaterialIcons 
            name="menu"
            size={28}
            style={{
                paddingStart: 20,
                alignContent: 'center'
            }} 
            onPress={() => navigation.openDrawer()}/>,
        headerTitle:() => 
        <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>{title}</Text>
        </View>,
        headerStyle:styles.header,
    }
}

const styles = StyleSheet.create({
    headerTitle:{
        alignItems:'center',
    },
    headerTitleText:{
        fontWeight: 'bold',
        fontSize: 20
    },
    header:{
        backgroundColor: 'coral'
    }
});

//export default function headerCart() {

//}