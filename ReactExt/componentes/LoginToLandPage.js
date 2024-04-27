import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdmLandingPage from './AdmLandingPage';
import ClientLandingPage from './ClientLandingPage';

const Tab = createBottomTabNavigator();

export default function LoginToLandPage({navigation}){

    const [clientOrAdm, setCOA] = useState(false);

    return(
      clientOrAdm?(
            <Tab.Navigator>
                <Tab.Screen name="AdmLandingPage" component={AdmLandingPage}/>
            </Tab.Navigator>
        ):
        (
            <Tab.Navigator>
                <Tab.Screen name="ClientLandingPage" component={ClientLandingPage}/>
            </Tab.Navigator>
        )
    );
}