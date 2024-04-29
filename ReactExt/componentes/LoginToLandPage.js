import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdmLandingPage from './AdmLandingPage';
import ClientLandingPage from './ClientLandingPage';
import MenuClientPerfil from './MenuClientPerfil';
import MenuAdmPerfil from './MenuAdmPerfil';

const Drawer = createDrawerNavigator();


export default function LoginToLandPage({navigation, route}){

    const [clientOrAdm, setCOA] = useState(false);

    return(
      clientOrAdm?(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPage}/>
                <Drawer.Screen name="MenuAdmPerfil" component={MenuAdmPerfil} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
        ):
        (
            <Drawer.Navigator>
                <Drawer.Screen name="ClientLandingPage" component={ClientLandingPage}/>
                <Drawer.Screen name="MenuClientPerfil" component={MenuClientPerfil} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
        )
    );
}