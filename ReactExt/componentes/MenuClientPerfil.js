import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function MenuClientPerfil({route}){

    return(
      <View>
        <Text>Meus carros</Text>
        <Text>Perfil</Text>
        <TouchableOpacity onPress={()=>route.params.funcLogarB(false)}>
            <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    );
}