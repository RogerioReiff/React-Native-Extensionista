import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function AdmLandingPage({route}){

    return(

        <View>
            <Text>Carros na Oficina</Text>
            <Text>Coloque uma flatlist com a placa do carro - modelo - nome cliente - e estado, se está pronto ou não</Text>
        </View>
    );

}