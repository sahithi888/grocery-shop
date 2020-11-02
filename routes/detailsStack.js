import React from 'react';
import { createStackNavigator }from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../scren/Onboarding';
import Login from '../scren/login';
import Signup from '../scren/signup';
import Routing from '../scren/Routes';
import Home from '../scren/home'
import Details from '../scren/detailsPages';
import Address from '../scren/addressPage';
import Place from '../scren/place';
import Cart from '../scren/cart';
import CartIcon from '../shared/carticon';
import Payment from '../scren/paymentConformation';
import Conformation from '../scren/Conformation';
 
 function ScreenNavigations({navigation}){
    const Stack = createStackNavigator();

    return(

        <NavigationContainer independent={true}>    
            <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

<Stack.Screen
        name="Routes"
        component={Routing}
        options={{ title: 'Welcome to the grocery Shop ' }}
      />
<Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Grocery Shop ' }}
      />
<Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'Cart' }}
      />
<Stack.Screen
        name="Details Page "
        component={Details}
        options={{ title: 'Product Details ' }}
      />
<Stack.Screen
        name="Place"
        component={Place}
        options={{ title: 'Places Available' }}
      />
<Stack.Screen
        name="Address"
        component={Address}
        options={{ title: 'Adderss Details ' }}
      />
<Stack.Screen
        name="Payment"
        component={Payment}
        options={{ title: 'Payment' }}
      />
<Stack.Screen
        name="Conformation"
        component={Conformation}
        options={{ title: 'Payment Conformation' }}
      />            

    </Stack.Navigator>
          </NavigationContainer>

    );
}

export default ScreenNavigations;