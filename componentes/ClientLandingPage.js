import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ClientLandingPage(){

    const [clientOrAdm, setCOA] = useState(false);

    return(
      <View><Text>CLIENT</Text></View>
    );
}