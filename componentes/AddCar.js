import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as FileSystem from 'expo-file-system';
import {Picker} from '@react-native-picker/picker';

export default function AddCar(){

    let path = FileSystem.documentDirectory + 'carros.json';
    let car1 = null;

    const [nome, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [estado, setEstado] = useState('');
    const [descricao, setDescricao] = useState('');

    const checkIfExists = async ()=>{
        try{
            await FileSystem.readAsStringAsync(path);
        }
        catch(error){
            let blank = [];
            await FileSystem.writeAsStringAsync(path, JSON.stringify(blank), {encoding: FileSystem.EncodingType.UTF8});
        }
    }

    useEffect(()=>{
        checkIfExists()
    },[]);

    const add = async () => {
        try {
            let carros = [];
            const carStr = await FileSystem.readAsStringAsync(path);
            if (carStr) {
                carros = JSON.parse(carStr);
            }

            const novoCarro = {
                codigo: Math.random(),
                nome: nome,
                cpf: CPF,
                modelo: modelo,
                placa: placa,
                estado: estado,
                descricao: descricao
            };
    
            const cpfExistente = carros.some(carro => carro.cpf === novoCarro.cpf && carro.placa === novoCarro.placa );
            if (cpfExistente) {
                Alert.alert('ALERTA!', "Já existe um carro com esse CPF.", 
                  [
                    {text: 'OK', onPress: () => console.log('alert closed')}
                  ]);
                return; 
            }  
            
            carros.push(novoCarro);    
           
            await FileSystem.writeAsStringAsync(path, JSON.stringify(carros), { encoding: FileSystem.EncodingType.UTF8 });

            Alert.alert('ADICIONADO!', "O Carro foi adicionado com sucesso!", 
                  [
                    {text: 'OK', onPress: () => console.log('alert closed')}
                  ]);

        } catch (err) {
            console.log(err);
        }
    };

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

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
            }}>
            <ScrollView style={style.form}> 
                <Text style={style.titulo}>Adicionar Carros</Text>

                <Text>Nome Cliente</Text>
                <TextInput placeholder="Nome do Cliente" style={style.input} onChangeText={(value) => {setNome(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Text>CPF Cliente</Text>
                <TextInput placeholder="000.000.000-00" style={style.input} onChangeText={(value) => {setCPF(value)}} autoCorrect={false} autoCapitalize='none'/>
                
                <Text>Modelo</Text>
                <TextInput placeholder="Fiat" style={style.input} onChangeText={(value) => {setModelo(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Text>Placa do Carro</Text>
                <TextInput placeholder="12-ABC-34" style={style.input} onChangeText={(value) => {setPlaca(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Text>Estado</Text>
            
                <Picker
                    selectedValue={estado}
                    style={style.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        setEstado(itemValue)
                    }>
                    <Picker.Item label="Prontos" value="Prontos" />
                    <Picker.Item label="Em Conserto" value="Em Conserto" />
                    <Picker.Item label="Em Orçamento" value="Em Orçamento" />
                    <Picker.Item label="Esperando Orçamento" value="Esperando Orçamento" />
                </Picker>

                <Text>Descrição</Text>
                <TextInput placeholder="Descrição das alterações" style={style.descricao} onChangeText={(value) => {setDescricao(value)}} autoCorrect={false} autoCapitalize='none'/>

                <Button title='adicionar' onPress={add}/>
                <Button title='ler' onPress={ler}/>
            </ScrollView>
        </TouchableWithoutFeedback>
    );

}

const style = StyleSheet.create({

    form:{
      padding: 20,
      flex: 1,
    },

    titulo:{
      fontSize: 25,
      fontWeight: "bold",
      textAlign: 'center'
    },    

    descricao:{
      height:190,
      borderColor: "gray",
      borderWidth: 2,
      marginBottom: 10,
      textAlignVertical: 'top',
      paddingLeft: 5,
    },    

    input:{
      paddingLeft: 5,
      height:30,
      borderColor: "gray",
      borderWidth: 2,
      borderRadius: 6,
      marginBottom: 10,
    },
    picker: {
        height: 10,
        borderColor: "gray",
        borderWidth: 2,
        marginBottom: 5,
    }



})