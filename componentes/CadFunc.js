import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

export default function CadFunc(){

  const [iCPF, setInputCPF] = useState('');
  const [iPswd, setInputPswd] = useState('');
  const [iName, setInputName] = useState('');

  const setData = async () =>{
    try{
        const digest = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, iPswd);
        var user = {NAME: iName, PASSWORD: digest}
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
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
        }}>
        <View style={styles.Container}>
          <Text styles={styles.textTitle}>Cadastro de Funcionarios</Text>

          <Text styles={styles.text}>CPF</Text>
          <TextInput style={styles.inputBox} placeholder="000.000.000-00" onChangeText={(value) => {setInputCPF(value)}} autoCorrect={false} autoCapitalize='none'/>

          <Text styles={styles.text}>Nome Completo</Text>
          <TextInput style={styles.inputBox} placeholder="Nome Sobrenome" onChangeText={(value)=>{setInputName(value)}} autoCorrect={false} autoCapitalize='none'/>

          <Text styles={styles.text}>Senha</Text>
          <TextInput style={styles.inputBox} placeholder="Senha" secureTextEntry onChangeText={(value)=>{setInputPswd(value)}} autoCorrect={false} autoCapitalize='none'/>

          <Button title='Cadastrar' onPress={checkEmpty}/>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  Container:{
      flex: 1,
      padding: 12,
  },
  textTitle:{
      fontSize: 30,
      fontWeight: 'bold',
  },
  text:{
      paddingBottom: 5,
      paddingLeft: 5,
      fontSize: 20,
      fontWeight: 'bold',
  }, 
  inputBox:{
      paddingLeft: 5,
      borderWidth: 2,
      borderColor: 'grey',
      borderRadius: 6,
      height:30,
      marginBottom: 20,

  },
})