import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function MenuAdmPerfil({route}){

    return(
      <View>
        <Text>Carros na Oficina</Text>
        <Text>Clientes</Text>
        <Text>Carros</Text>
        <Text>Funcionarios</Text>
        <Text>Cadastrar Funcionarios</Text>
        <Text>Perfil</Text>
        <TouchableOpacity onPress={()=>route.params.funcLogarB(false)}>
            <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    );
}