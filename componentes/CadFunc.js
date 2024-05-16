import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CadFunc(){

  const [iCPF, setInputCPF] = useState('');
  const [iPswd, setInputPswd] = useState('');
  const [iName, setInputName] = useState('');

  const setData = async () =>{
    try{
        var user = {NAME: iName, PASSWORD: iPswd}
        await AsyncStorage.setItem(iCPF, JSON.stringify(user));
    }
    catch(error){
        console.log(error)
    }
}

  const checkEmpty = async()=>{
    if(iCPF === null && iPswd === null && iName === null){
      alert("Preencha o formulario")
    }else{
      setData();
    }
  }

    return(
      <View>
        <Text>Cadastro de Funcionarios</Text>

        <Text>CPF</Text>
        <TextInput placeholder="000.000.000-00" onChangeText={(value) => {setInputCPF(value)}} autoCorrect={false} autoCapitalize='none'/>

        <Text>Nome Completo</Text>
        <TextInput placeholder="Nome Sobrenome" onChangeText={(value)=>{setInputName(value)}} autoCorrect={false} autoCapitalize='none'/>

        <Text>Senha</Text>
        <TextInput placeholder="Senha" /* secureTextEntry */ onChangeText={(value)=>{setInputPswd(value)}} autoCorrect={false} autoCapitalize='none'/>

        <Button title='Cadastrar' onPress={checkEmpty}/>
      </View>
    );
}