import React, {useState} from 'react';

import  { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer'
import DrawerContent from './drawerContent';
import HomeStackNavigator from './homeStack';
import ProfileStack from './profileStack';
import OrdersStack from './ordersStack';
import AddressBookStack from './addressBookStack';
import AboutStack from './aboutStack';
import ContactUsStack from './contactusStack';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import OfferStack from './offerStack';

const CART_DATA = "CartData";
function Drawers(){
    const Drawer = createDrawerNavigator();
    return(
            <Drawer.Navigator 
                drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="HomeStack" component={HomeStackNavigator}/>
                <Drawer.Screen name="ProfileStack" component={ProfileStack}/>
                <Drawer.Screen name="OrdersStack" component={OrdersStack} />
                <Drawer.Screen name="Offers" component={OfferStack}/>
                <Drawer.Screen name="AddressBookStack" component={AddressBookStack} />
                <Drawer.Screen name="AboutStack" component={AboutStack}/>
                <Drawer.Screen name="ContactUsStack" component={ContactUsStack}/>
            </Drawer.Navigator>
    );
}
export default connect(null, null)(Drawers);