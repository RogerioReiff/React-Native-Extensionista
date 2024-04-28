import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatListComponent, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componentes/Login.js';
import LoginToLandPage from './componentes/LoginToLandPage.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
   logged?(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="LoginToLandPage" component={LoginToLandPage} options={{headerShown:false}}/>
        </Tab.Navigator>
    </NavigationContainer>
    ):(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{funcLogar : setLogged}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}


