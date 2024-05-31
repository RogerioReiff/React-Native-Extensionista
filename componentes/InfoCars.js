import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function InfoCars({ route, navigation }){

    const { selectedEstado } = route.params;


    return(

        <View>
            <Text>Procurar Carros</Text>

            <Text>Placa do Carro</Text>
            
            <Text>Modelo</Text>

            <Text>CPF Cliente</Text>

            <Text>Estado</Text>
        </View>
    );

}