import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdmLandingPage from './AdmLandingPage';
import ClientLandingPage from './ClientLandingPage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function LoginToLandPage({navigation}){

    const [clientOrAdm, setCOA] = useState(false);

    return(
      clientOrAdm?(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPage}/>
            </Drawer.Navigator>
        ):
        (
            <Drawer.Navigator>
                <Drawer.Screen name="ClientLandingPage" component={ClientLandingPage}/>
            </Drawer.Navigator>
        )
    );
}