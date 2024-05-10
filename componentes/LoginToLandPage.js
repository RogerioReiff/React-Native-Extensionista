import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdmLandingPage from './AdmLandingPage';
import MenuAdmPerfil from './MenuAdmPerfil';

const Drawer = createDrawerNavigator();


export default function LoginToLandPage({navigation, route}){

    return(
            <Drawer.Navigator>
                <Drawer.Screen name="AdmLandingPage" component={AdmLandingPage}/>
                <Drawer.Screen name="MenuAdmPerfil" component={MenuAdmPerfil} initialParams={{funcLogarB : route.params.funcLogar}}/>
            </Drawer.Navigator>
        
    );
}