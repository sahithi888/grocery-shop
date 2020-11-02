import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props){
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image source={require('../assets/pul1.jpg')}/>
                    <View style={styles.userInfoText}>
                        <Text style={styles.userFullName}>Akash Mahapatra</Text>
                        <Text style={styles.userEmail}>Email</Text>
                        <Text style={styles.userPhone}>Phone Number</Text>
                    </View>
                </View>
                <Drawer.Section>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}/>
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate("HomeStack")}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="account-outline"
                                color={color}
                                size={size}/>
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate("ProfileStack")}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="food-apple-outline"
                                color={color}
                                size={size}/>
                        )}
                        label="Orders"
                        onPress={() => {props.navigation.navigate("OrdersStack")}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="map-marker-outline"
                                color={color}
                                size={size}/>
                        )}
                        label="Address Book"
                        onPress={() => {props.navigation.navigate("AddressBookStack")}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="information-variant"
                                color={color}
                                size={size}/>
                        )}
                        label="About Us"
                        onPress={() => {props.navigation.navigate("AboutStack")}}/>
                    <DrawerItem
                        icon={({color, size}) => (
                            <Icon
                                name="contact-mail-outline"
                                color={color}
                                size={size}/>
                        )}
                        label="Contact Us"
                        onPress={() => {props.navigation.navigate("ContactUsStack")}}/>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}/>
                    )}
                    label="Sign Out"
                    onPress={() => {}}/>
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    userInfoSection: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userInfoText:{
        marginStart: 20,
        alignContent: 'space-around',
    },
    userFullName:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    userEmail:{

    },
    userPhone:{

    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    }
});