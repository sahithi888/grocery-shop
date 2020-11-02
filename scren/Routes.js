import React  from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './login';
import Signup from './signup';
import Onboarding from './Onboarding';

export default function Routing() {
         return (
             <Router>
                 <Stack key="root" hideNavBar={true} >
                    
                     <Scene key='onboarding' component={Onboarding} title="welcome"/>
                     <Scene key="login" component={Login} title="Login" />
                     <Scene key="signup" component={Signup} title="Register" />
                 </Stack>
             </Router>
         )
     }
 