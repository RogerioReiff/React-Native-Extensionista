import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as FileSystem from 'expo-file-system';

//POSSIVELMENTE MUDAR O ESTADO PARA UMA ESCOLHA EM VEZ DE TEXT INPUT
//O CÓDIGO SÓ RETORNA O ÚLTIMO CARRO ADICIONADO, NÃO SEI SE ELE SOBESCREVE O OUTRO OU SE SÓ RETORNA MESMO

export default function AddCar(){

    let path = FileSystem.documentDirectory + 'carros.json';
    let car1 = null;

    const [CPF, setCPF] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [estado, setEstado] = useState('');

    const add = async()=>{
        try
        {
            car1 = {codigo: Math.random(), cpf: CPF, modelo: modelo, placa: placa, estado: estado};

            let carStr = JSON.stringify(car1);

            await FileSystem.writeAsStringAsync(path, carStr, { encoding: FileSystem.EncodingType.UTF8 });
        }
        catch(err)
        {
            console.log(err)
        }
    } 

    const ler = async()=>{
        try
        {

            console.log(path)

            let carStr = await FileSystem.readAsStringAsync(path);

            car1 = JSON.parse(carStr);

            console.log(car1)
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
            <TextInput placeholder="000.000.000-00" onChangeText={(value) => {setCPF(value)}} autoCorrect={false} autoCapitalize='none'/>
            
            <Text>Modelo</Text>
            <TextInput placeholder="Fiat" onChangeText={(value) => {setModelo(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Placa do Carro</Text>
            <TextInput placeholder="12-ABC-34" onChangeText={(value) => {setPlaca(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Text>Estado</Text>
            <TextInput placeholder="Em manutenção" onChangeText={(value) => {setEstado(value)}} autoCorrect={false} autoCapitalize='none'/>

            <Button title='adicionar' onPress={add}/>
            <Button title='ler' onPress={ler}/>
        </View>
    );

}