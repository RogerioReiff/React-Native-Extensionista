import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function AddCar(){

    let path = FileSystem.documentDirectory + 'prod1.json';

    const add = async()=>{
        let prod1 = null;
        try
        {
            prod1 = {codigo: 1, nome: 'Teclado', quantidade: 50};

            let prodStr = JSON.stringify(prod1);

            await FileSystem.writeAsStringAsync(path, prodStr, { encoding: FileSystem.EncodingType.UTF8 });
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    const ler = async()=>{
        let prod1 = null;
        try
        {

            console.log(path)

            let prodStr = await FileSystem.readAsStringAsync(path);

            prod1 = JSON.parse(prodStr);

            console.log(prod1)
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    return(

        <View>
            <Text>Adicionar Carros</Text>

            <Text>CPF Cliente</Text>
            
            <Text>Modelo</Text>

            <Text>Placa do Carro</Text>

            <Text>Estado</Text>

            <Button title='adicionar' onPress={add}/>
            <Button title='ler' onPress={ler}/>
        </View>
    );

}