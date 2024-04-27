import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './componentes/Login.js';
import LoginToLandPage from './componentes/LoginToLandPage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
   logged?(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginToLandPage" component={LoginToLandPage}/>
        </Stack.Navigator>
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


